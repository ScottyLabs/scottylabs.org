import css from "./Projects.module.css";
export default function Projects() {
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
      </div>
      <ul className={css["project-tabs"]} role="tablist">
        {[
          {
            name: "CMU Courses",
            img: "./assets/project-icons/cmu-courses.png",
          },
          {
            name: "CMU Eats",
            img: "./assets/project-icons/cmueats.png",
          },
          {
            name: "CMU Maps",
            img: "./assets/project-icons/cmu-maps.png",
          },
        ].map(({ name, img }) => {
          return (
            <button
              className={css["tab"]}
              role="tab"
              aria-selected={name === "CMU Courses" ? "true" : "false"}
            >
              <img
                className={css["tab__image"]}
                src={new URL(img, import.meta.url).href}
                alt=""
              />
              <div className={css["tab__name"]}>{name}</div>
            </button>
          );
        })}
        <button className={css["tab"]}>
          <img
            className={css["tab__image"]}
            src={
              new URL("./assets/project-icons/go-to-icon.png", import.meta.url)
                .href
            }
            alt=""
          />
          <div className={css["tab__name"]}>See more</div>
        </button>
      </ul>
      <div className={css["panel"]}>
        <img
          className={css["panel__img"]}
          src={
            new URL("./assets/projects/cmu-courses/main.png", import.meta.url)
              .href
          }
          alt=""
        />
        <div className={css["panel__footer"]}>
          CMU Courses is a course browser built by and for CMU students.
          Bringing together course information, schedules and FCE data, it makes
          it possible for CMU students to plan their semesters and browse for
          courses. lmao what is this description
        </div>
      </div>
    </div>
  );
}
