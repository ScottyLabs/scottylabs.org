import accenture from "../../assets/sponsors-page/sponsors/accenture.svg?inline";
import agentuity from "../../assets/sponsors-page/sponsors/agentuity.svg?inline";
import balysany from "../../assets/sponsors-page/sponsors/balysany.svg?inline";
import citadel from "../../assets/sponsors-page/sponsors/citadel.svg?inline";
import coderabbit from "../../assets/sponsors-page/sponsors/coderabbit.svg?inline";
import commvault from "../../assets/sponsors-page/sponsors/commvault.svg?inline";
import imc from "../../assets/sponsors-page/sponsors/imc.svg?inline";
import dedalusLabs from "../../assets/sponsors-page/sponsors/dedalus.webp";
import deshaw from "../../assets/sponsors-page/sponsors/deshaw.svg?inline";
import fly from "../../assets/sponsors-page/sponsors/fly.svg?inline";
import hrt from "../../assets/sponsors-page/sponsors/hrt.svg?inline";
import janeStreet from "../../assets/sponsors-page/sponsors/janestreet.svg?inline";
import modal from "../../assets/sponsors-page/sponsors/modal.svg?inline";
import optiver from "../../assets/sponsors-page/sponsors/optiver.svg?inline";
import scale from "../../assets/sponsors-page/sponsors/scale.svg?inline";
import snl from "../../assets/sponsors-page/sponsors/snl.svg?inline";
import visa from "../../assets/sponsors-page/sponsors/visa.svg?inline";
import decagon from "../../assets/sponsors-page/sponsors/decagon.svg?inline";
import ripple from "../../assets/sponsors-page/sponsors/ripple.svg?inline";
import conway from "../../assets/sponsors-page/sponsors/conway.png";
import capitalOne from "../../assets/sponsors-page/sponsors/capitalone.svg?inline";
import transfyr from "../../assets/sponsors-page/sponsors/transfyr.png";
import bny from "../../assets/sponsors-page/sponsors/bny.png";
import phoebe from "../../assets/sponsors-page/sponsors/phoebe.svg?inline";
export type SponsorTypes = "lowest" | "partner" | "premier";

export const sponsors = [
  {
    imageUrl: accenture,
    type: "partner",
    websiteUrl: "https://www.accenture.com",
  },
  {
    imageUrl: agentuity,
    type: "partner",
    websiteUrl: "https://agentuity.com/",
  },
  {
    imageUrl: balysany,
    type: "lowest",
    websiteUrl: "https://www.bamfunds.com/",
  },
  {
    imageUrl: citadel,
    type: "partner",
    websiteUrl: "https://www.citadel.com/",
  },
  {
    imageUrl: coderabbit,
    type: "premier",
    websiteUrl: "https://www.coderabbit.ai/",
  },
  // {
  //   imageUrl: commvault,
  //   type: "partner",
  //   websiteUrl: "https://www.commvault.com/",
  // },
  {
    imageUrl: deshaw,
    type: "partner",
    websiteUrl: "https://www.deshaw.com/",
  },
  {
    imageUrl: fly,
    type: "partner",
    websiteUrl: "https://fly.io/",
  },
  {
    imageUrl: hrt,
    type: "partner",
    websiteUrl: "https://www.hudsonrivertrading.com/",
  },
  {
    imageUrl: janeStreet,
    type: "lowest",
    websiteUrl: "https://www.janestreet.com/",
  },
  {
    imageUrl: modal,
    type: "partner",
    websiteUrl: "https://modal.com/",
  },
  {
    imageUrl: optiver,
    type: "partner",
    websiteUrl: "https://optiver.com/",
  },
  {
    imageUrl: scale,
    type: "partner",
    websiteUrl: "https://scale.com/",
  },
  {
    imageUrl: snl,
    type: "partner",
    websiteUrl: "https://www.sandia.gov/",
  },
  {
    imageUrl: visa,
    type: "premier",
    websiteUrl: "https://visa.com/",
  },
  {
    imageUrl: decagon,
    type: "partner",
    websiteUrl: "https://decagon.ai/",
  },
  {
    imageUrl: ripple,
    type: "premier",
    websiteUrl: "https://ripple.com/",
  },
  {
    imageUrl: conway,
    type: "premier",
    websiteUrl: "https://conway.ai/",
  },
  {
    imageUrl: dedalusLabs,
    type: "premier",
    websiteUrl: "https://www.dedaluslabs.ai/",
  },
  {
    imageUrl: imc,
    type: "partner",
    websiteUrl: "https://www.imc.com/",
  },
  {
    imageUrl: capitalOne,
    type: "premier",
    websiteUrl: "https://www.capitalone.com/",
  },
  {
    imageUrl: transfyr,
    type: "partner",
    websiteUrl: "https://transfyr.ai/",
  },
  {
    imageUrl: bny,
    type: "premier",
    websiteUrl: "https://www.bny.com/",
  },
  {
    imageUrl: phoebe,
    type: "partner",
    websiteUrl: "https://phoebe.work/",
  },
] satisfies { imageUrl: string; type: SponsorTypes; websiteUrl: string }[];
