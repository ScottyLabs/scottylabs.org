import css from "./Header.module.css";
import clsx from "clsx";

import scottylabsLogo from "./assets/scottylabs-logo.svg";
import aboutIcon from "./assets/icons/about.svg";
import teamIcon from "./assets/icons/team.svg";
import projectsIcon from "./assets/icons/projects.svg";
import eventsIcon from "./assets/icons/events.svg";
import sponsorsIcon from "./assets/icons/sponsors.svg";
const navLinks = [
  {
    icon: aboutIcon,
    url: "/about",
    text: "About",
  },
  {
    icon: teamIcon,
    url: "/team",
    text: "Team",
  },
  {
    icon: projectsIcon,
    url: "/projects",
    text: "Projects",
  },
  {
    icon: eventsIcon,
    url: "/events",
    text: "Events",
  },
  {
    icon: sponsorsIcon,
    url: "/sponsors",
    text: "Sponsors",
  },
];
function Header() {
  return (
    <header className={css["main-header"]}>
      <div className={css["logo"]}>
        <img className={css["logo__img"]} src={scottylabsLogo} />

        <div className={css["logo__text"]}>ScottyLabs</div>
      </div>
      <nav className={css["main-nav"]}>
        {navLinks.map(({ icon, url, text }) => (
          <a aria-current={url === "/about"} key={url}>
            <button
              className={clsx(
                css["nav-button"],
                url === "/about" && css["nav-button--active"]
              )}
            >
              <img className={css["nav-button__icon"]} src={icon} />
              <div className={css["nav-button__text"]}>{text}</div>
            </button>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
