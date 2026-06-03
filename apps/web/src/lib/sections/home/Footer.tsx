import type { CSSProperties } from "react";
import css from "./Footer.module.css";
import tartanConnectIcon from "../../assets/icons/socials/tartan-connect.png";
import instagramIcon from "../../assets/icons/socials/instagram.svg";
import linkedinIcon from "../../assets/icons/socials/linkedin.svg";
import mediumIcon from "../../assets/icons/socials/medium.svg";
import slackIcon from "../../assets/icons/socials/slack.svg";
import emailIcon from "../../assets/icons/socials/email.svg";
import divider from "../../assets/icons/socials/social-divider.png";
import React from "react";
// I didn't use the go.scottylabs.org links because they take over 1s to redirect you to the actual destination
// if that's fixed, I can replace these with go.scottylabs.org
const socialLinks = [
  {
    icon: tartanConnectIcon,
    name: "Tartan Connect",
    url: "https://tartanconnect.cmu.edu/scottylabs/club_signup",
    color: "hsl(0,100%,30%)",
  },
  {
    icon: instagramIcon,
    name: "Instagram",
    url: "https://www.instagram.com/cmu.scottylabs/",
    color: "#6532D2",
  },
  {
    icon: linkedinIcon,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/scottylabs",
    color: "#0E76A8",
  },
  {
    icon: mediumIcon,
    name: "Medium",
    url: "https://medium.com/tartanhacks",
    color: "black",
  },
  {
    icon: slackIcon,
    name: "Slack",
    url: "https://join.slack.com/t/scottylabs/shared_invite/zt-3bgp5in0l-T5KKNY70k70CvVVqLcKlDg",
    color: "#4A154B",
  },
  {
    icon: emailIcon,
    name: "Email us!",
    url: "mailto:hello@scottylabs.org",
    color: "gray",
  },
];

const legalDocs = [
  {
    label: "IRS determination letter",
    url: "https://assets.scottylabs.org/legal/irs-determination-letter.pdf",
  },
  {
    label: "Articles of incorporation",
    url: "https://assets.scottylabs.org/legal/articles-of-incorporation.pdf",
  },
  {
    label: "Form 1023-EZ",
    url: "https://assets.scottylabs.org/legal/form-1023-ez.pdf",
  },
];
export default function Footer() {
  return (
    <footer className={css["footer-container"]}>
      <div className={css["footer"]}>
        <div className={css["footer__copyright"]}>
          Made with ❤️ by ScottyLabs © {new Date().getFullYear()}
        </div>
        {socialLinks.map(({ icon, name, url, color }, i) => {
          return (
            <React.Fragment key={name}>
              <a
                className={css["social-link"]}
                href={url}
                target="_blank"
                style={{ "--bg-color": color } as CSSProperties}
              >
                <div>
                  <img src={icon} alt="" />
                  <div className={css["social-link__description"]}>{name}</div>
                </div>
              </a>
              {i !== socialLinks.length - 1 && (
                <img className={css["social-link-divider"]} src={divider} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className={css["footer__legal"]}>
        <div>ScottyLabs is a 501(c)(3) tax-exempt nonprofit organization.</div>
        <div>
          502 W 7th St Ste 100, Erie, PA 16502
          {" · "}EIN 42-2037653
          {" · "}D-U-N-S 145005627
        </div>
        <div className={css["footer__legal-docs"]}>
          {legalDocs.map(({ label, url }, i) => (
            <React.Fragment key={url}>
              {i > 0 && " · "}
              <a href={url} target="_blank" rel="noreferrer">
                {label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
