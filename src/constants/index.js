import { job } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  vite,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  vercel,
  snapgram,
  summiz,
  tailwindcss,
  yoom,
  typescript,
  firebase,
  ticket,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend developer",
    company_name: "Passwave",
    icon: "https://www.passwave.ng/favicon.ico",
    iconBg: "#ff9800",
    date: "Jan 2024 - Present",
    points: [
      "Developed dynamic and interactive frontend components using React.js, GraphQL, and other related technologies to enhance user experience. ",
      "Collaborated closely with a team of developers to build and maintain the Passwave event ticketing system, ensuring its reliability and scalability.",
      "Participated actively in code reviews, providing valuable feedback to enhance code quality and maintainability.",
      "Contributed to the overall architecture and design of the Passwave platform, ensuring alignment with project goals and objectives.",
    ],
  },
  // {
  //   title: "UpComing",
  //   company_name: "Pending",
  //   icon: job,
  //   iconBg: "#fbc3bc",
  //   date: "Month 0000 - Month 0000",
  //   points: ["null", "null", "null", "null"],
  // },
  // {
  //   title: "Upcoming",
  //   company_name: "Pending",
  //   icon: job,
  //   iconBg: "#b7e4c7",
  //   date: "Month 0000 - Month 0000",
  //   points: ["null", "null", "null", "null"],
  // },
  // {
  //   title: "Upcoming",
  //   company_name: "Pending",
  //   icon: job,
  //   iconBg: "#a2d2ff",
  //   date: "Month 0000 - Month 0000",
  //   points: ["null", "null", "null", "null"],
  // },
];

// export const socialLinks = [
//   {
//     name: "Contact",
//     iconUrl: contact,
//     link: "/contact",
//   },
//   {
//     name: "GitHub",
//     iconUrl: github,
//     link: "https://github.com/YourGitHubUsername",
//   },
//   {
//     name: "LinkedIn",
//     iconUrl: linkedin,
//     link: "https://www.linkedin.com/in/YourLinkedInUsername",
//   },
// ];

export const projects = [
  {
    iconUrl: ticket,
    theme: "btn-back-red",
    name: "Evently",
    description:
      "A dynamic ticket-buying application crafted for seamless user experiences. Leveraging Clerk for authentication and Stripe for secure payments, this platform ensures a smooth and trustworthy transaction process. Powered by MongoDB on the backend and deployed with Vercel, it offers a robust, scalable solution for event organizers and attendees alike",
    link: "https://evently-ticket-app.vercel.app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "PaySpy",
    description:
      "This project is an Amazon web scraping application built using technologies such as BrightData, cron jobs, MongoDB, and Next.js. The app monitors product prices and sends email notifications to users when there are drops in prices or updated discounts on Amazon products. With automated price tracking and personalized notifications, users can stay informed about the best deals and save money on their favorite products.",
    link: "https://pricespycron.vercel.app",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Snapgram",
    description:
      "SnapGram is a dynamic social media application designed as a learning project to explore MongoDB, Mongoose, Express.js, TypeScript, and other technologies. With user authentication provided by Clerk, SnapGram enables users to securely log in and immerse themselves in a world of visual storytelling. Users can effortlessly share their moments through images accompanied by captions, follow other users to stay updated with their posts, and explore a rich tapestry of content curated by the vibrant SnapGram community.",
    link: "https://snapgramapp.vercel.app",
  },
  {
    iconUrl: yoom,
    theme: "btn-back-blue",
    name: "Zoom Clone",
    description:
      "Experience seamless video conferencing with this Zoom clone built using Next.js, Clerk for authentication, and the Stream SDK for real-time communication. Enjoy high-quality video calls, instant meetings, and easy access to recordings in a secure and user-friendly environment. Whether you're collaborating with colleagues or connecting with friends, this Zoom clone provides the tools you need for efficient communication and collaboration.",
    link: "https://yoomvideo.vercel.app",
  },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Upcoming",
  //   description: "Null",
  //   link: "https://github.com/onunkwor",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "Upcoming",
  //   description: "Null",
  //   link: "https://github.com/onunkwor",
  // },
];
