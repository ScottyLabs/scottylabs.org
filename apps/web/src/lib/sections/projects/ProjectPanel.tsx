import { tsr } from "../../utils/tsr";
import css from "./ProjectPanel.module.css";
import linkIcon from "../../assets/icons/link.svg";
import type { Icon } from "./icons";
import { Link } from "react-router";
import { getTimeDeltaFromNow } from "../../utils/time";
import { DateTime } from "luxon";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSpring, motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import downChevronIcon from "../../assets/down-chevron.svg";

function LastUpdatedString({ repoIds }: { repoIds: number[] }) {
  const lastUpdated = tsr.lastUpdated.useQuery({
    queryKey: [`last-updated-${repoIds.join(",")}`],
    queryData: { query: { repoIds: repoIds.join(",") } },
  });
  const [now, setNow] = useState(DateTime.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(DateTime.now());
    }, 1000);
    return () => clearInterval(intervalId);
  });
  if (lastUpdated.isLoading) {
    return <>Last updated: Loading...</>;
  }
  if (lastUpdated.data?.status !== 200) {
    return <>Last updated: Error - repo not found</>;
  }
  const { author, authorURL, updatedDate } = lastUpdated.data.body;
  return (
    <>
      Last updated{" "}
      {getTimeDeltaFromNow(
        DateTime.fromISO(updatedDate, {
          zone: "local",
        }),
        now,
      )}{" "}
      by{" "}
      <a href={authorURL} target="_blank">
        {author}
      </a>
    </>
  );
}
/**
 *
 * @param imageOffsetsFromLeftX left X positions of images, relative to current container (0 is at leftmost point of fixed carousel container, not leftmost point of window)
 * @param carouselDirection direction that the carousel is moving in (ex. if you're swiping right, carouselDirection will be left)
 */
function getBestImageOffset(
  imageOffsetsFromLeftX: number[],
  carouselDirection: "left" | "right" | "none",
) {
  switch (carouselDirection) {
    case "left":
      return (
        imageOffsetsFromLeftX.findLast((x) => x <= 0) ??
        imageOffsetsFromLeftX[0]
      );

    case "right":
      return (
        imageOffsetsFromLeftX.find((x) => x >= 0) ??
        imageOffsetsFromLeftX[imageOffsetsFromLeftX.length - 1]
      );
    case "none": {
      let closestToZeroPos = Infinity;
      for (let i = 0; i < imageOffsetsFromLeftX.length; i++) {
        if (Math.abs(imageOffsetsFromLeftX[i]) < Math.abs(closestToZeroPos)) {
          closestToZeroPos = imageOffsetsFromLeftX[i];
        }
      }
      return closestToZeroPos;
    }
  }
}
function ProjectImages({ imageURLs }: { imageURLs: string[] }) {
  const leftOffset = useSpring(0, { mass: 0.01 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className={clsx("centered-section", css["project-images-container"])}
      >
        <motion.div
          className={css["project-images"]}
          drag="x"
          style={{ x: leftOffset }}
          ref={containerRef}
          onDragEnd={(ev, info) => {
            if (!containerRef.current) return;

            const parentContainerLeftOffset =
              containerRef.current.parentElement!.getBoundingClientRect().x;

            const childrenXOffsets = [...containerRef.current.childNodes].map(
              (imgNode) =>
                (imgNode as HTMLImageElement).getBoundingClientRect().x -
                parentContainerLeftOffset,
            );
            if (childrenXOffsets.length === 0) return;

            leftOffset.set(
              leftOffset.get() -
                getBestImageOffset(
                  childrenXOffsets,
                  info.velocity.x === 0
                    ? "none"
                    : info.velocity.x > 0
                      ? "left"
                      : "right",
                ),
            );
          }}
          dragMomentum={false}
        >
          {imageURLs.map((url, i) => (
            <img className={css[""]} src={url} alt="" key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
function ContributorSection({ repoIds }: { repoIds: number[] }) {
  const { data, isPending } = tsr.getContributors.useQuery({
    queryKey: ["contributors", repoIds.join(",")],
    queryData: { query: { repoIds: repoIds.join(",") } },
  });
  const [showAllContributors, setShowAllContributors] = useState(false);
  const DATE_CUTOFF_FOR_CONTRIBUTORS = DateTime.local(2025, 5, 1);
  const shouldShowContributorInMinimizedView = (
    contributor: NonNullable<typeof data>["body"][0],
  ) => {
    return (
      DateTime.fromSQL(contributor.latestCommitDate) >=
      DATE_CUTOFF_FOR_CONTRIBUTORS
    );
  };
  const contributorContainerRef = useRef<HTMLDivElement | null>(null); // for dynamic height rescaling
  const [outerWrapperHeight, setOuterWrapperHeight] = useState(0);
  useLayoutEffect(() => {
    // credit to https://github.com/motiondivision/motion/discussions/1884#discussioncomment-5861808
    if (contributorContainerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].borderBoxSize[0].blockSize;
        setOuterWrapperHeight(observedHeight);
      });

      resizeObserver.observe(contributorContainerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  // this should be called as a function rather than an actual JSX component
  // "On every render of the parent component, a new function is created, and React will recognise that as a different component. It will unmount the old component instance and mount a new instance. This is not necessarily a performance problem (it might, or it might not), but is an absolute nightmare if the inner component attempts to use hooks. Those just won't work."
  // from https://stackoverflow.com/questions/78048322/how-bad-is-nested-components-in-terms-of-performance-and-rendering
  const InnerBox = () => {
    if (isPending) return <></>;
    if (data?.status !== 200) {
      return (
        <div className={css["contributor-error"]}>
          Failed to load contributors
        </div>
      );
    }
    const contributorCountInMinimizedView = data.body.filter((contributor) =>
      shouldShowContributorInMinimizedView(contributor),
    ).length;
    const HEIGHT_TRANSITION_SECONDS = 0.4;
    const contributorsToDisplay = data.body
      .sort((c1, c2) => {
        if (c1.isTechLead !== c2.isTechLead) return c1.isTechLead ? -1 : 1; // order tech leads first
        return c2.latestCommitDate.localeCompare(c1.latestCommitDate);
      })
      .filter(
        (contributor) =>
          showAllContributors ||
          shouldShowContributorInMinimizedView(contributor),
      );
    if (contributorsToDisplay.length === 0) {
      return (
        <div className={css["contributor-none"]}>No recent contributors!</div>
      );
    }
    return (
      <div className={css["contributor-container"]}>
        <AnimatePresence mode="popLayout">
          {contributorsToDisplay.map((contributor, i) => (
            <motion.a
              className={css["contributor-pill"]}
              href={contributor.accLink}
              target="_blank"
              key={contributor.accLink}
              initial={{ opacity: 0 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeOut",
                  duration: 0.1,
                  delay:
                    (data.body.length - 1 - i) *
                    (HEIGHT_TRANSITION_SECONDS /
                      (data.body.length - contributorCountInMinimizedView) /
                      2),
                },
              }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.3,
                delay:
                  (HEIGHT_TRANSITION_SECONDS /
                    (data.body.length - contributorCountInMinimizedView)) *
                  Math.max(0, i - contributorCountInMinimizedView), // so the first new pill when you expand always has delay 0
              }}
            >
              <img
                className={css["contributor-pill__img"]}
                src={contributor.pfpUrl}
              />
              <div className={css["contributor-pill__text-section"]}>
                {contributor.isTechLead && (
                  <div
                    className={css["contributor-pill__text-section__tech-lead"]}
                  >
                    TECH LEAD
                  </div>
                )}
                <div className={css["contributor-pill__text-section__name"]}>
                  {contributor.username}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    );
  };
  return (
    <div className="centered-section">
      {/* this one has the actual styling for the box */}
      <div className={css["section-wrapper"]}>
        {/* this div is just to animate the height of whatever's inside */}
        <div
          className={css["dynamic-height-wrapper"]}
          style={{ height: outerWrapperHeight }}
        >
          {/* this div lets us know when the height on the inside has changed and so then 
        can smoothly transition the wrapper div height to that height */}
          <div ref={contributorContainerRef}>{InnerBox()}</div>
        </div>
        <div className={css["contributors-label"]}>Contributors</div>
        {(isPending || data?.status === 200) && (
          <motion.button
            className={clsx(
              css["show-all-contributors-button"],
              showAllContributors &&
                css["show-all-contributors-button--active"],
            )}
            disabled={data?.status !== 200}
            onClick={() => setShowAllContributors(!showAllContributors)}
          >
            {isPending
              ? "Loading contributors..."
              : !showAllContributors
                ? "All contributors"
                : "Show only this school year's contributors"}
            {!isPending && (
              <img className={css[""]} src={downChevronIcon} alt="" />
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}
export default function ProjectPanel({
  repoIds,
  name,
  description,
  imageURLs,
  technologiesUsed,
  url,
}: {
  /** One or more repo ids corresponding to this project. The component uses this param to derive the last updated time and the contributors list.
   * To get the ID, run `$("meta[name=octolytics-dimension-repository_id]").getAttribute('content')` in the js console after opening the repo page.
   * Alternatively, you can check the repoTable in the backend database
   */
  repoIds: number[];
  name: string;
  url: string;
  description: string;
  imageURLs: string[];
  technologiesUsed: Icon[];
}) {
  return (
    <section className={css["project-section"]}>
      {/* the sole purpose of this is so that you can jump directly to a project section using a hash link */}
      <Link id={name} to={"#"} className={css["project-hash-anchor"]} />
      <div className="centered-section">
        <div className={css["header"]}>
          <Link
            to={url}
            target="_blank"
            className={css["title-container"]}
            id={name}
          >
            <h2 className={css["project-title"]}>{name}</h2>
            <img src={linkIcon} className={css["project-link-icon"]} />
          </Link>
          <div className={css["project-icon-container"]}>
            {technologiesUsed.map((icon) => (
              <div className={css["project-icon"]} key={icon.name}>
                <div className={css["project-icon__tooltip"]}>{icon.name}</div>
                <img src={icon.url} alt={icon.name} />
              </div>
            ))}
          </div>
        </div>
        <div className={css["last-updated"]}>
          <LastUpdatedString repoIds={repoIds} />
        </div>
        <div className={css["project-description"]}>{description}</div>
      </div>
      <ProjectImages imageURLs={imageURLs} />
      <ContributorSection repoIds={repoIds} />
    </section>
  );
}
