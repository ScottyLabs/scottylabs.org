import css from "./Header.module.css";
import projectImg from "../../assets/projects-page/projects.svg?inline";
export function Header() {
  return (
    <section className="centered-section">
      <div className={css["container"]}>
        <div>
          <h1 className={css["title"]}>Projects</h1>
          <h3 className={css["description"]}>
            ScottyLabs designs and develops a variety of tech services geared
            towards improving the CMU campus experience. We also develop our
            TartanHacks registration system and dashboard app in-house.
          </h3>
        </div>
        <div className={css["projects-img"]}>
          <img src={projectImg} alt="" />
        </div>
      </div>
    </section>
  );
}
