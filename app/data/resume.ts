import { SOCIAL_GITHUB, SOCIAL_LINKEDIN, SOCIAL_TWITTER } from "~/config/constants";

export interface Experience {
  company: string;
  companyUrl: string;
  contract?: boolean;
  date: string;
  dateRange?: [start: Date, end?: Date];
  description: string;
  highlights: string[];
  image?: string;
  tags: string[];
  title: string;
}

export const experience: Experience[] = [
  // {
  //   company: "Rocket CMS",
  //   companyUrl: "https://rocketcms.org/",
  //   date: `Feb 2022 - Present`,
  //   description: `<p>RocketCMS lets anyone manage your website using the components you've designed.</p>`,
  //   highlights: [
  //     `Delivered a full rebuild & rebrand of the Python + Django website to NextJS`,
  //     `Migrated to a (nearly) fully containerized stack and development workflow`,
  //     `Introduced GraphQL and strong (generated) types across services`,
  //     `Abstracted a core style-guide used across services`
  //   ],
  //   image: `https://rocketcms.org/favicon.ico`,
  //   tags: [
  //      "NodeJS",
  //      "TailwindCSS",
  //      "TypeScript"
  //   ],
  //   title: `Founder`
  // },
];

export interface Social {
  icon: string;
  title?: string;
  url: string;
}

export const social: Social[] = [
  {
    icon: `/images/svg/envelope.svg`,
    title: `Vignesh Murugan`,
    url: `mailto:vignesh328@gmail.com`
  },
  {
    icon: `/images/svg/phone.svg`,
    title: `+91 96209 00378`,
    url: `tel:+919620900378`
  },
  {
    icon: `/images/svg/github.svg`,
    title: `Github`,
    url: SOCIAL_GITHUB
  },
  {
    icon: `/images/svg/linkedin.svg`,
    title: `LinkedIn`,
    url: SOCIAL_LINKEDIN
  },
  {
    icon: `/images/svg/twitter.svg`,
    title: `Twitter`,
    url: SOCIAL_TWITTER
  }
];
