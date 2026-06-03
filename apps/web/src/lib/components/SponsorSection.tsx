import css from "./SponsorSection.module.css";
import clsx from "clsx";
import { sponsors } from "../sections/sponsors/sponsors";
import appLovin from "../assets/sponsors-page/sponsors/applovin-axon.png";
const SponsorTile = ({
  imageUrl,
  websiteUrl,
}: {
  imageUrl: string;
  websiteUrl: string;
}) => {
  return (
    <a href={websiteUrl} target="_blank" className={clsx(css["sponsor"])}>
      {imageUrl && <img src={imageUrl} alt={imageUrl} key={imageUrl} />}
    </a>
  );
};

export default function SponsorsSection() {
  const premierSponsors = sponsors.filter((s) => s.type === "premier");
  const partnerSponsors = sponsors.filter((s) => s.type === "partner");
  const lowestSponsors = sponsors.filter((s) => s.type === "lowest");
  return (
    <div className={css["main-container"]}>
      <h2 className={css["header"]}>Thank you to our 2025 Sponsors!</h2>
      <div className={css["title-sponsor-container"]}>
        <h2 className={css[""]}>TITLE SPONSOR</h2>
        <a href="https://www.applovin.com/en" target="_blank">
          <img src={appLovin} alt="AppLovin" />
        </a>
      </div>

      <div
        className={clsx(
          css["sponsors-container"],
          css["sponsors-container--premier"],
        )}
      >
        {premierSponsors.map(({ imageUrl, websiteUrl }) => (
          <div
            className={css["sponsors-container--premier__inner-container"]}
            key={websiteUrl}
          >
            <SponsorTile {...{ imageUrl, websiteUrl }} />
          </div>
        ))}
      </div>
      <div
        className={clsx(
          css["sponsors-container"],
          css["sponsors-container--partner"],
        )}
      >
        {partnerSponsors.map(({ imageUrl, websiteUrl }) => (
          <SponsorTile {...{ imageUrl, websiteUrl }} key={websiteUrl} />
        ))}
      </div>
      <div
        className={clsx(
          css["sponsors-container"],
          css["sponsors-container--smaller"],
        )}
      >
        {lowestSponsors.map(({ imageUrl, websiteUrl }) => (
          <SponsorTile {...{ imageUrl, websiteUrl }} key={websiteUrl} />
        ))}
      </div>
    </div>
  );
}
