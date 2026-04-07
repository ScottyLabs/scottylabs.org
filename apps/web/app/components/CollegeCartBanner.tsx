import { Link } from "react-router";
import css from "./CollegeCartBanner.module.css";
import collegeCartLogo from "../assets/collegecart-logo-white.png";

function CollegeCartBanner() {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-indexed
  const day = now.getDate();
  const isActive =
    (month === 4 && day >= 11 && day <= 15) ||
    new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    ).has("force-collegecart");

  if (!isActive) return null;

  return (
    <section className={css["banner"]}>
      <div className={`centered-section ${css["banner-inner"]}`}>
        <div className={css["logo-section"]}>
          <img
            src={collegeCartLogo}
            alt="CollegeCart logo"
            className={css["logo"]}
          />
          <span className={css["logo-text"]}>CollegeCart</span>
        </div>
        <p className={css["message"]}>
          Moving out or graduating? Buy and sell furniture, textbooks, and more
          with fellow CMU students.
        </p>
        <Link to="https://collegecart.org" target="_blank">
          <button className={css["cta"]}>Shop & List Now</button>
        </Link>
      </div>
    </section>
  );
}

export default CollegeCartBanner;
