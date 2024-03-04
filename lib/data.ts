import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ai from "@/public/ai.png";
import owenbucks from "@/public/owenbucks.png";
import burt from "@/public/burt.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Coding",
    location: "Charelston, SC",
    description:
      "Started Making simple websites and games. I was 10 years old when I started coding.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer For Myself",
    location: "Charelston, SC",
    description:
      "Built owen bucks and crapchat. I used html, css, and js to build these projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Charelston, SC",
    description:
      "I'm now a full-stack developer Still making stupid projects and games.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Owen AI",
    description:
      "Simple Side Project I worked on for a couple of weeks. It's a web app that uses OpenAI's GPT-3.5 turbo to generate human-like text.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Vercel AI SDK"],
    imageUrl: ai,
  },
  {
    title: "Owen Bucks",
    description:
      "Simple crypto currency in html that let you create transactions and see the balance of the wallet. It uses Firebase to store the data.",
    tags: ["Html", "Css", "Js", "Firebase"],
    imageUrl: owenbucks,
  },
  {
    title: "Burt Coin",
    description:
      "Simalar to owen Bucks a crypto currency in html that let you create transactions and see the balance of the wallet. It uses Firebase to store the data.",
    tags: ["Html", "Css", "Js", "Firebase"],
    imageUrl: burt,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "Vercel Ai SDK",
  "Express",
  "Python",
  "Django",
] as const;
