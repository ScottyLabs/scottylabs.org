import Button from "../../components/Button";
import css from "./Hero.module.css";
import heroBg from "../../assets/hero-bg.svg?inline"; // basically gets embedded into the source code so there's not a moment where the bg image is blank.
import { Link } from "react-router";

function Hero() {
  return (
    <section className={css["hero-container"]}>
      <div className="centered-section centered-section--relative">
        <div className={css["hero-section"]}>
          <div className={css["title-container"]}>
            <span className={css["title"]}>
              ScottyLabs
              <div className={css["decoration"]}>
                <div className={css["decoration__line"]}></div>
                <div className={css["decoration__line"]}></div>
                <div className={css["decoration__line"]}></div>
                <div className={css["decoration__line"]}></div>
                <div className={css["decoration__tooltip"]}>
                  font-family: Satoshi; <br />
                  font-size: 3.75rem;
                  <br />
                  font-weight: 700;
                  <div className={css["decoration__tooltip__arrow"]} />
                </div>
              </div>
            </span>
          </div>
          <div className={css["subtitle"]}>
            The best place to build software @ CMU
          </div>
          <div className={css["marketing-text"]}>
            We’re a student-run organization dedicated to building tech that
            enhances campus life—empowering the Carnegie Mellon University
            community to create, collaborate, and solve real-world problems
            through apps and events.
          </div>

          <div className={css["action-buttons"]}>
            <Link to={"/projects"} prefetch="viewport">
              <Button label="View Projects" variant="primary" />
            </Link>
            <Link
              to={"https://tartanconnect.cmu.edu/scottylabs/club_signup"}
              target="_blank"
            >
              <Button label="Join Us" variant="outlined" />
            </Link>
          </div>

          <link rel="preload" href={heroBg} as="image" />
        </div>
        <div className={css["hero-background"]}>
          <img src={heroBg} alt="" fetchPriority="high" />
        </div>
      </div>
      <div className={css["events-container"]}>
        <div className="centered-section">
          <div className={css["events"]}>
            {[
              {
                text: "Check out CollegeCart from the Labrador committee!",
                url: "https://collegecart.org/",
              },
            ].map(({ text, url }) => (
              <Link to={url} target="_blank" key={url}>
                <button className={css["events__button"]}>{text}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
