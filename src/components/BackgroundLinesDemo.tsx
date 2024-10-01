"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "./variants"; // Import your fadeIn variant

export function BackgroundLinesDemo() {
  // Using useInView from 'react-intersection-observer'
  const { ref, inView } = useInView({
    threshold: 0.1, // Animation will trigger when 10% of the element is in view
    triggerOnce: false, // Re-triggers every time the component enters the view
  });

  // Framer Motion variants for the line animation
  const lineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  return (
    <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col md:flex-row px-6 md:px-14] bg-gradient-to-r from-[#664343] via-[#B17457] to-[#B17457] ">
      {/* Text coming from top */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate based on visibility
        variants={fadeIn({ direction: "up" })} // Enhanced fadeIn with 'up' direction
        className="w-full md:w-1/2 flex flex-col items-start text-left p-6 md:p-8"
      >
        <h2 className="bg-clip-text text-emerald-50 text-2xl md:text-4xl lg:text-6xl font-sans py-4 md:py-8 relative z-20 font-bold tracking-tight">
          Welcome to <br />
          <span className="text-[#FFF0D1]">NAIYO24 PRIVATE LIMITED</span>
        </h2>
      </motion.div>

      <div className="w-full md:w-1/2 flex flex-col items-start text-left p-6 md:p-8">
        {/* Text coming from left */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeIn({ direction: "left", delay: 0.2 })} // Enhanced fadeIn with 'left' direction and delay
        >
          <h2 className="text-[#FFEB00] bg-clip-text text-2xl md:text-4xl lg:text-6xl font-sans py-4 md:py-8 relative z-20 font-bold tracking-tight">
            Innovating Your Digital Presence
          </h2>

          {/* Purple line animated on scroll */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-1 bg-[#FFF0D1] mt-2"
          />
        </motion.div>

        {/* Text coming from right */}
        <motion.p
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeIn({ direction: "right", delay: 0.4 })} // Enhanced fadeIn with 'right' direction and delay
          className="w-full text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mt-4"
        >
          At NAIYO24 PRIVATE LIMITED, we&apos;re committed to transforming your
          digital dreams into reality. As a leading provider of online
          application and website development services, our mission is to
          deliver cutting-edge solutions that propel your business forward in
          the digital world.
        </motion.p>
      </div>
    </BackgroundLines>
  );
}