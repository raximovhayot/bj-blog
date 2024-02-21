import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://backend-journey.uz/",
  author: "Hayot",
  desc: "Faqat backend bilan cheklanmaydigan loyiha😉",
  title: "Backend Journey",
  // ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "uz", // html lang code. Set this empty and default will be "en"
  langTag: ["uz-UZ"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/uzinfowebuz",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@uzinfoweb",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/uzinfoweb_uz",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
