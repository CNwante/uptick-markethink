import seoCover from "../assets/images/seo_cover.jpg";
import dmtCover from "../assets/images/dmt_cover.jpg";
import typewriterCover from "../assets/images/typewriter_cover.jpg"

export const blogTabs = ["Content Writing", "Content Marketing"];

export const blogPosts = [
  {
    title: "10 Reasons to invest in SEO copywriting services",
    date: "August 17, 2021",
    category: "Content Writing",
    excerpt: "",
    image: seoCover,
    decription: "seo-cover image",
    buttonType: "secondary",
  },
  {
    title: "How to get hired at a top Digital Marketing",
    date: "August 17, 2021",
    category: "Content Writing",
    excerpt:
      "Agency life. We’ve all seen the photos posted on social media – the cool...",
      image: dmtCover,
    decription: "digital-marketing-cover image",
    buttonType: "rounded",
  },
  {
    title: "Copywriting guidelines during the coronavirus",
    date: "August 17, 2021",
    category: "Content Marketing",
    excerpt:
      "Since the coronavirus hit earlier this year, it’s hard to go anywhere...",
      image: typewriterCover,
    decription: "typewriter-cover image",
    buttonType: "rounded",
  }
];
