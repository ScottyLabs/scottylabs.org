import css from "./Header.module.css";
import clsx from "clsx";

import scottylabsLogo from "../../assets/scottylabs-logo.svg";
import teamIcon from "../../assets/icons/team.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import eventsIcon from "../../assets/icons/events.svg";
import sponsorsIcon from "../../assets/icons/sponsors.svg";
import { NavLink, useLocation } from "react-router";
const navLinks = [
  {
    icon: projectsIcon,
    url: "/projects",
    text: "Projects",
  },
  // {
  //   icon: eventsIcon,
  //   url: "/events",
  //   text: "Events",
  // },
  {
    icon: teamIcon,
    url: "/team",
    text: "Team",
  },
  {
    icon: sponsorsIcon,
    url: "/sponsors",
    text: "Sponsors",
  },
];
function Header() {
  return (
    <header className={css["main-header-container"]}>
      <div className={css["main-header-layout"]}>
        <NavLink
          className={css["logo"]}
          to={"/"}
          // onClick={() =>
          //   window.scrollTo({
          //     top: 0,
          //     left: 0,
          //     behavior: "smooth",
          //   })
          // }
          prefetch="intent"
        >
          <img className={css["logo__img"]} src={scottylabsLogo} />

          <div className={css["logo__text"]}>ScottyLabs</div>
        </NavLink>
        <nav className={css["main-nav"]}>
          {navLinks.map(({ icon, url, text }) => (
            <NavLink
              className={({ isActive }) =>
                clsx(css["nav-button"], isActive && css["nav-button--active"])
              }
              to={url}
              prefetch="intent"
              key={url}
            >
              <img className={css["nav-button__icon"]} src={icon} />
              <div className={css["nav-button__text"]}>{text}</div>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
