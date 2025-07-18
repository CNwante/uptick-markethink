import markethinkLogo from "../assets/icons/markethink_icon.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import instagramIcon from "../assets/icons/instagram.svg";

export const footerData = {
  about: {
    logo: markethinkLogo,
    title: "markethink",
    description: "Marketing is a company that focus on developing company’s strategy for increase digital marketing",
  },

  socialHandles: [ facebookIcon, twitterIcon, instagramIcon ],

  headings: [
    {
      title: "Menu",
      links: [
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "About", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Content Strategy", href: "/services/content-strategy" },
        { label: "Content Development", href: "/services/content-development" },
        { label: "Content Creation", href: "/services/content-creation" },
        { label: "Content Optimization", href: "/services/content-optimization" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Site Map", href: "/sitemap" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Notice", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
        { label: "Modern Slavery", href: "/modern-slavery" },
      ],
    },
  ],

  copyright: "© Copyright Markethink. All right reserved",
};
