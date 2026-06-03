import type React from "react";
import css from "./cards.module.css";

export type CardData = {
  name: string;
  role: string;
  photoUrl?: string;
  href?: string;
};

const ClickableWrapper: React.FC<{
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}> = ({ href, children, ariaLabel }) => {
  if (!href) return <div className={css["static-wrapper"]}>{children}</div>;
  return (
    <a
      href={href.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={css["clickable-wrapper"]}
    >
      {children}
    </a>
  );
};

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export const DirectorCard: React.FC<{ person: CardData }> = ({ person }) => (
  <ClickableWrapper href={person.href} ariaLabel={`Open ${person.name}'s link`}>
    <div className={css["director-card"]}>
      <div className={css["photo-frame-director"]}>
        {person.photoUrl ? (
          <img
            src={person.photoUrl}
            alt={person.name}
            className={css.photo}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`${css.initials} ${css["initials-director"]}`}>
            {initialsOf(person.name)}
          </div>
        )}
      </div>
      <div className={css.label}>
        <div className={css["name-director"]}>{person.name}</div>
        <div className={css["role-director"]}>{person.role}</div>
      </div>
    </div>
  </ClickableWrapper>
);

export const TeamMemberCard: React.FC<{ person: CardData }> = ({ person }) => (
  <ClickableWrapper href={person.href} ariaLabel={`Open ${person.name}'s link`}>
    <div className={css["team-member-card"]}>
      <div className={css["photo-frame-member"]}>
        {person.photoUrl ? (
          <img
            src={person.photoUrl}
            alt={person.name}
            className={css.photo}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`${css.initials} ${css["initials-member"]}`}>
            {initialsOf(person.name)}
          </div>
        )}
      </div>
      <div className={css.label}>
        <div className={css["name-member"]}>{person.name}</div>
        <div className={css["role-member"]}>{person.role}</div>
      </div>
    </div>
  </ClickableWrapper>
);
