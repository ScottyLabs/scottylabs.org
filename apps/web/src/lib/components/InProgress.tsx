import css from "./InProgress.module.css";
import scotty from "../assets/scotty-in-progress.svg";
export default function InProgress() {
  return (
    <section className="centered-section">
      <div className={css["in-progress-container"]}>
        <img src={scotty} />
        We are still working on this page! Please check back later
      </div>
    </section>
  );
}
