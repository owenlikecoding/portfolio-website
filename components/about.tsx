"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">software developer</span> based in Charleston, Sc. I'm passionate about creating{" "}
        <span className="font-medium">beautiful, functional, and accessible</span>{" "}
        web applications. Aswell as fun Websites and games
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football and {" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning to {" "}
        <span className="font-medium">build games</span>
      </p>
    </motion.section>
  );
}
