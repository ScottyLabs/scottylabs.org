import css from "./TartanHacks.module.css";
import tartanhacksLogo from "./assets/tartanhacks-logo.svg";
import Button from "./components/Button";
import { getAllImageLinksInAssetDirectory } from "./utils/files";

export default function TartanHacks() {
  const pics = getAllImageLinksInAssetDirectory("tartanhacks-photos");

  return (
    <div className={css["main-container"]}>
      <div className="centered-section">
        <h1 className={css["header"]}>
          We host Pittsburgh's largest annual hackathon,
        </h1>
        <img className={css["tartanhacks-logo"]} src={tartanhacksLogo} alt="" />
        <div className={css["photo-gallery"]}>
          {pics.slice(0, 5).map((pic) => (
            <img className={css["photo-gallery__image"]} src={pic} alt="" />
          ))}
          <div className={css["photo-gallery__stat-box"]}>
            <div className={css["stat-box__number"]}>700+</div>
            <div className={css["stat-box__description"]}>boba recipients</div>
          </div>
        </div>
        <Button
          label="View all events"
          variant="primary"
          className={css["all-events-button"]}
        />
      </div>
    </div>
  );
}
