"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function GetInTouch() {
  return (
    <div className=" h-[40rem] relative overflow-hidden flex items-center justify-center">
        
        <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Get In Touch
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Ready to take your digital presence to the next level? Contact us today to discuss your project and discover how NAIYO24 PRIVATE LIMITED can help you achieve your digital goals.
      </p>
    </WavyBackground>
    </div>
  );
}
