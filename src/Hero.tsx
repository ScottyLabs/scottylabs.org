import Button from "./components/Button";
import css from "./Hero.module.css";
import heroBg from "./assets/hero-bg.svg";

function Hero() {
  return (
    <section className={css["hero-container"]}>
      <div className="centered-section">
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
            enhances campus life—empowering the CMU community to create,
            collaborate, and solve real-world problems through apps and events.
          </div>

          <div className={css["action-buttons"]}>
            <Button label="View Products" variant="primary" />
            <Button label="Join Us" variant="outlined" />
          </div>

          <link rel="preload" href={heroBg} as="image" />
          <img className={css["hero-background"]} src={heroBg} />
        </div>
      </div>
      <div className={css["events-container"]}>
        <div className="centered-section">
          <div className={css["events"]}>
            {[
              "Read about demo day",
              "Register for TartanHacks",
              "Check out CMUCal",
            ].map((txt) => (
              <button className={css["events__button"]} key={txt}>
                {txt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
