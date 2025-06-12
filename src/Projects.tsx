import { useState } from "react";
import css from "./Projects.module.css";
import { AnimatePresence, motion } from "motion/react";
import { getAllImageLinksInAssetDirectory } from "./utils/files";
import clsx from "clsx";
const featuredProjects = [
  {
    name: "CMU Courses",
    assetFolder: "cmu-courses",
    description: `CMU Courses is a course browser built by and for CMU students.
          Bringing together course information, schedules and FCE data, it makes
          it possible for CMU students to plan their semesters and browse for
          courses. lmao what is this description`,
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

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const designIcons = getAllImageLinksInAssetDirectory("design-app-icons");
  const codeIcons = getAllImageLinksInAssetDirectory("code-app-icons");
  return (
    <div className="centered-section">
      <div className={css["title-section"]}>
        <h1 className={css["title-section__header"]}>
          From{" "}
          <span className={css["design-text-container"]}>
            Design
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
          </span>{" "}
          to{" "}
          <span className={css["title-section__header__code-block"]}>
            {"<"}
          </span>
          Development
          <span className={css["title-section__header__code-block"]}>
            {"/>"}
          </span>
        </h1>
        <p className={css["title-section__desc"]}>
          We bring to life a variety of tech services geared towards improving
          the CMU campus experience and inspiring the community!˙
        </p>
        <div>
          {designIcons.slice(0, 4).map((icon) => (
            <motion.img
              drag
              dragSnapToOrigin
              className={clsx(
                css["tool-logo-slot"],
                icon.includes("/ai") && css["tool-logo-slot--ai-san"]
              )}
              src={icon}
              alt=""
            />
          ))}
          {codeIcons.slice(0, 4).map((icon) => (
            <motion.img
              drag
              dragSnapToOrigin
              className={css["tool-logo-slot"]}
              src={icon}
              alt=""
            />
          ))}
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
          <div className={css["tool-logo-slot"]} />
        </div>
      </div>
      <ul className={css["project-tabs"]} role="tablist">
        {featuredProjects.map(({ name, assetFolder }, i) => {
          return (
            <button
              className={css["tab"]}
              role="tab"
              aria-selected={i === selectedProjectIndex ? "true" : "false"}
              onClick={() => setSelectedProjectIndex(i)}
            >
              <img
                className={css["tab__image"]}
                src={
                  new URL(
                    `./assets/projects/${assetFolder}/icon.png`,
                    import.meta.url
                  ).href
                }
                alt=""
              />
              <div className={css["tab__name"]}>{name}</div>
            </button>
          );
        })}
        <button className={css["tab"]}>
          <img
            className={css["tab__image"]}
            src={new URL("./assets/icons/go-to-icon.svg", import.meta.url).href}
            alt=""
            style={{ height: "1em" }}
          />
          <div className={css["tab__name"]}>See more</div>
        </button>
      </ul>
      <div className={css["panel-container"]}>
        <AnimatePresence>
          <motion.div
            className={css["panel"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={selectedProjectIndex}
          >
            <a
              href={featuredProjects[selectedProjectIndex].link}
              target="_blank"
            >
              <img
                className={css["panel__img"]}
                src={
                  new URL(
                    `./assets/projects/${featuredProjects[selectedProjectIndex].assetFolder}/main.png`,
                    import.meta.url
                  ).href
                }
                alt=""
              />
            </a>
            <div className={css["panel__footer"]}>
              {featuredProjects[selectedProjectIndex].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
