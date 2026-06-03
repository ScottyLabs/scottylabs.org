import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import css from "./Projects.module.css";
import buttonCSS from "../../components/Button/index.module.css";
import { AnimatePresence, motion } from "motion/react";
import { getAllImageLinksInAssetDirectory } from "../../utils/files";
import clsx from "clsx";
import { tsr } from "../../utils/tsr";
import { DateTime } from "luxon";
import type { contract } from "@apps/backend/contract";
import type z from "zod";
import { FastAverageColor } from "fast-average-color";
import prIcon from "../../assets/icons/pr.svg";
import commitIcon from "../../assets/icons/commit.svg";
import spinnerIcon from "../../assets/icons/spinner.svg";
import externalLinkIcon from "../../assets/icons/go-to-icon.svg";
import goToIcon from "../../assets/icons/go-to-icon.svg";
import { getTimeDeltaFromNow } from "../../utils/time";
import { Link } from "react-router";
const fac = new FastAverageColor();

// note that if you want the project preview to link directly to the correct section in Projects, make sure the `name` field is the same
const featuredProjects = [
  {
    name: "CMU Courses",
    assetFolder: "cmu-courses",
    description: `CMU Courses is a course browser built by and for CMU students.
          Bringing together course information, schedules and FCE data, it makes
          it possible for CMU students to plan their semesters and browse for
          courses.`,
    link: "https://www.cmucourses.com/",
  },
  {
    name: "CMU Eats",
    assetFolder: "cmu-eats",
    description:
      "CMUEats is your one-stop-shop for finding out what campus dining locations are open right now.",
    link: "https://cmueats.com/",
  },
  {
    name: "CMU Maps",
    assetFolder: "cmu-maps",
    description: "Providing indoor maps and navigation for the CMU campus.",
    link: "https://cmumaps.com/",
  },
];

function IconDecoration() {
  const designIcons = getAllImageLinksInAssetDirectory("design-app-icons");
  const codeIcons = getAllImageLinksInAssetDirectory("code-app-icons");
  return (
    <div>
      {designIcons.slice(0, 4).map((icon) => (
        <motion.img
          drag
          dragSnapToOrigin
          className={clsx(
            css["tool-logo-slot"],
            icon.includes("/ai") && css["tool-logo-slot--ai-san"],
          )}
          src={icon}
          alt=""
          key={icon}
        />
      ))}
      {codeIcons.slice(0, 4).map((icon) => (
        <motion.img
          drag
          dragSnapToOrigin
          className={css["tool-logo-slot"]}
          src={icon}
          alt=""
          key={icon}
        />
      ))}
    </div>
  );
}
function DesignBoxDecoration() {
  return (
    <div className={css["decoration"]}>
      <div className={css["decoration__line"]} />
      <div className={css["decoration__line"]} />
      <div className={css["decoration__line"]} />
      <div className={css["decoration__line"]} />
      <div className={css["decoration__square"]} />
      <div className={css["decoration__square"]} />
      <div className={css["decoration__square"]} />
      <div className={css["decoration__square"]} />
    </div>
  );
}

function Contributor({
  contribution,
}: {
  contribution: z.infer<
    (typeof contract.getLatestActivity)["responses"]["200"]
  >[number];
}) {
  const [now, setNow] = useState(DateTime.now());
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [popupOffsetPx, setPopupOffsetPx] = useState(0);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const nudgePopupsToBeInViewport = () => {
    if (!popupRef.current) return;
    popupRef.current.style.transform = `translateX(50%)`; // temporarily reset it to get new offsets
    const boundingBox = popupRef.current.getBoundingClientRect();
    if (boundingBox.left < 0) {
      setPopupOffsetPx(-boundingBox.left);
    } else if (boundingBox.right > window.innerWidth - 20) {
      // innerWidth accounts for zoom, while outerWidth doesn't
      setPopupOffsetPx(-(boundingBox.right - window.innerWidth + 20));
    } else {
      setPopupOffsetPx(0);
    }
    popupRef.current.style.transform = ""; //reset override
  };
  useLayoutEffect(() => {
    nudgePopupsToBeInViewport();
    window.addEventListener("resize", () => nudgePopupsToBeInViewport());
    return () =>
      window.removeEventListener("resize", () => nudgePopupsToBeInViewport());
  }, []);
  useEffect(() => {
    fac
      .getColorAsync(contribution.authorPfpUrl)
      .then((result) => setBgColor(result.hex));
  }, [contribution.authorPfpUrl]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(DateTime.now());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={css["contributor-pill-wrapper"]}
      onMouseOver={nudgePopupsToBeInViewport}
    >
      <a
        className={css["contributor-pill"]}
        href={contribution.authorUrl}
        target="_blank"
      >
        <img src={contribution.authorPfpUrl} />
        {contribution.authorUsername}
      </a>
      <div
        className={css["contribution-popup"]}
        style={
          {
            "--bg-color": bgColor,
            "--popup-offset-px": `${popupOffsetPx}px`,
          } as React.CSSProperties
        }
        ref={popupRef}
      >
        <a href={contribution.authorUrl} target="_blank">
          <img
            className={css["contribution-popup__pfp"]}
            src={contribution.authorPfpUrl}
            alt=""
          />
        </a>
        <div className={css["contribution-popup__description"]}>
          <a
            href={
              contribution.type === "commit"
                ? contribution.commitUrl
                : contribution.prUrl
            }
            target="_blank"
          >
            <span className={css["contribution-popup__description__title"]}>
              {contribution.type === "pull_request" ? (
                <span>
                  <img
                    className={
                      css["contribution-popup__description__title__icon"]
                    }
                    src={prIcon}
                    alt=""
                  />
                  {contribution.prTitle}
                  <span
                    className={
                      css["contribution-popup__description__title__pr-number"]
                    }
                  >
                    {" "}
                    #{contribution.prNumber}
                  </span>
                </span>
              ) : (
                <span>
                  <img
                    className={
                      css["contribution-popup__description__title__icon"]
                    }
                    src={commitIcon}
                    alt=""
                  />
                  {contribution.commitMessage}
                </span>
              )}
            </span>
          </a>
          <span className={css["contribution-popup__description__footer"]}>
            <a href={contribution.repoUrl} target="_blank">
              <span className={css["footer__repo"]}>
                {contribution.repoOrg}/{contribution.repoName}
              </span>
            </a>
            <span className={css["footer__time"]}>
              {getTimeDeltaFromNow(
                DateTime.fromISO(contribution.time, { zone: "local" }),
                now,
              )}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
function ContributorRow() {
  const { data, error, isLoading } = tsr.getLatestActivity.useQuery({
    queryKey: ["latestActivity"],
  });
  if (error !== null || data?.body.length === 0) {
    console.error(error);
    return;
  }

  return (
    <div>
      <div className={css["contributor-row-container"]}>
        <span className={css["contributor-pill-container__text"]}>
          Recent contributors:
        </span>

        {data ? (
          data.body.slice(0, 5).map((contribution, i) => {
            return <Contributor contribution={contribution} key={i} />;
          })
        ) : isLoading ? (
          Array.from(Array(5)).map((_, i) => {
            return (
              <div className={css["contributor-pill-wrapper"]} key={i}>
                <a
                  className={clsx(
                    css["contributor-pill"],
                    css["contributor-pill--inactive"],
                  )}
                >
                  <img
                    src={spinnerIcon}
                    alt=""
                    className={css["contributor-pill__loading-icon"]}
                  />
                  Loading...
                </a>
              </div>
            );
          })
        ) : (
          <></> // case that we should never hit
        )}
      </div>
    </div>
  );
}
function ProjectTab({
  name,
  assetFolder,
  isSelected,
  onClick,
}: {
  name: string;
  assetFolder: string;
  isSelected: boolean;
  onClick: (position: [number, number]) => unknown;
}) {
  const tabRef = useRef<HTMLButtonElement | null>(null);
  const updateBottomBorderPosition = useCallback(() => {
    onClick(
      tabRef.current
        ? [
            tabRef.current.getBoundingClientRect().left,
            tabRef.current.getBoundingClientRect().right,
          ]
        : [0, 0],
    );
  }, []); // onClick doesn't really "change", and if we include it we get stuck in an infinite render loop when we call onClick, since every re-render of the parent component produces a "new version" of the onClick function
  useEffect(() => {
    const onResize = () => {
      if (isSelected) {
        updateBottomBorderPosition();
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [updateBottomBorderPosition, isSelected]);
  return (
    <button
      className={css["tab"]}
      role="tab"
      aria-selected={isSelected ? "true" : "false"}
      onClick={updateBottomBorderPosition}
      key={assetFolder}
      ref={tabRef}
    >
      <img
        className={css["tab__image"]}
        src={`/projects/${assetFolder}/icon.png`}
        onLoad={() => {
          if (isSelected) updateBottomBorderPosition();
        }}
        alt=""
      />
      <div className={css["tab__name"]}>{name}</div>
    </button>
  );
}
function ProjectPreviews() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [bottomBorderCoords, setBottomBorderCoords] = useState<
    [number, number]
  >([0, 0]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        className={css["project-tabs-container"]}
        style={
          {
            "--border-left-px": bottomBorderCoords[0] + "px",
            "--border-right-px": bottomBorderCoords[1] + "px",
          } as CSSProperties
        }
        ref={containerRef}
      >
        <ul className={css["project-tabs"]} role="tablist">
          {featuredProjects.map(({ name, assetFolder }, i) => {
            return (
              <ProjectTab
                name={name}
                assetFolder={assetFolder}
                isSelected={i === selectedProjectIndex}
                key={assetFolder}
                onClick={(coords: [number, number]) => {
                  const offsetPx =
                    containerRef.current?.getBoundingClientRect().left ?? 0;
                  setSelectedProjectIndex(i);
                  setBottomBorderCoords([
                    coords[0] - offsetPx,
                    coords[1] - offsetPx,
                  ]);
                }}
              />
            );
          })}
          <Link to="/projects">
            <button className={css["tab"]}>
              <img
                className={css["tab__image"]}
                src={goToIcon}
                alt=""
                style={{ height: "1em" }}
              />
              <div className={css["tab__name"]}>See more</div>
            </button>
          </Link>
        </ul>
      </div>
      <div className={css["panel-container"]}>
        <AnimatePresence>
          <motion.div
            className={css["panel"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // we want to keep the old panel visible for a while for a smoother transition,
            // but setting opacity to 1 destroys the panel immediately
            exit={{ opacity: 0.99 }}
            key={selectedProjectIndex}
          >
            <img
              className={css["panel__img"]}
              src={`/projects/${featuredProjects[selectedProjectIndex].assetFolder}/main.png`}
              alt=""
            />
            <div className={css["panel__details"]}>
              <span className={css["panel__details__description"]}>
                {featuredProjects[selectedProjectIndex].description}
              </span>
              <div className={css["panel__details__footer"]}>
                <Link
                  to={"projects#" + featuredProjects[selectedProjectIndex].name}
                >
                  <button className={buttonCSS["button--animated"]}>
                    More details
                  </button>
                </Link>
                <a
                  href={featuredProjects[selectedProjectIndex].link}
                  target="_blank"
                >
                  <img src={externalLinkIcon} alt="" />
                  Visit
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
export default function Projects() {
  return (
    <section className="centered-section">
      <div className={css["title-section"]}>
        <h1 className={css["title-section__header"]}>
          From{" "}
          <span className={css["title-section__header__design-text"]}>
            Design
            <DesignBoxDecoration />
          </span>{" "}
          to{" "}
          <span className={css["title-section__header__code-block"]}>
            {"<"}
          </span>
          Development
          <span className={css["title-section__header__code-block"]}>
            {"/>"}
          </span>
          <IconDecoration />
        </h1>
        <p className={css["title-section__desc"]}>
          We bring to life a variety of tech services geared towards improving
          the CMU campus experience and inspiring the community!
        </p>
      </div>
      <ProjectPreviews />
      <ContributorRow />
    </section>
  );
}
