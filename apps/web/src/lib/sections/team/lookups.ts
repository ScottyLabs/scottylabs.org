import {
  type Committee,
  PEOPLE,
  type Person,
  type PersonId,
} from "../../data/team";

export const ASSETS_BASE_URL = "https://assets.scottylabs.org/team-page/";

const COMMITTEE_LABELS: Record<Committee, string> = {
  scottylabs: "ScottyLabs",
  events: "Events",
  outreach: "Outreach",
  tech: "Tech",
  labrador: "Labrador",
  design: "Design",
  finance: "Finance",
};

export const directorRoleFor = (committee: Committee) =>
  `Director of ${COMMITTEE_LABELS[committee]}`;

export const personById = (id: PersonId): Person => PEOPLE[id];

export const photoUrlFor = (id: PersonId): string | undefined => {
  const { photo } = personById(id);
  return photo ? `${ASSETS_BASE_URL}${photo}` : undefined;
};
