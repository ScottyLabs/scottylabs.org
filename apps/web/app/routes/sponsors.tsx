import SponsorsSection from "../components/SponsorSection";
import css from "./sponsors.module.css";
export default function Sponsors() {
  const sponsorPacketURL =
    "https://assets.scottylabs.org/legal/sponsorship-packet-2627.pdf";

  return (
    <section className={"centered-section"}>
      <h1 className={css["header"]}>Sponsors</h1>
      <p className={css["description"]}>
        Interested in becoming a sponsor? View our{" "}
        <a href={sponsorPacketURL} target="_blank">
          sponsorship packet
        </a>{" "}
        or contact us at{" "}
        <a href="mailto:sponsorship@scottylabs.org">sponsorship@scottylabs.org</a>.
      </p>
      <SponsorsSection />
    </section>
  );
}
