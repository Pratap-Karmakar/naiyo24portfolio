"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
      >
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Welcome to NAIYO24 PRIVATE LIMITED
        </h2>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Innovating Your Digital Presence
        </h2>

        <p className="w-[80vw] mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          At NAIYO24 PRIVATE LIMITED, we’re committed to transforming your
          digital dreams into reality. As a leading provider of online
          application and website development services, our mission is to
          deliver cutting-edge solutions that propel your business forward in
          the digital world.
        </p>
      </motion.div>
    </BackgroundLines>
  );
}
