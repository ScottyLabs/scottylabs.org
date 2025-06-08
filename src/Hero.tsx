import Button from "./components/Button";
import css from "./Hero.module.css";
import heroBg from "./assets/hero-bg.svg";
function Hero() {
  return (
    <section className={css["hero-section"]}>
      <img className={css["hero-background"]} src={heroBg} />
      <div className={css["title"]}>ScottyLabs</div>
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
    </section>
  );
}
export default Hero;
