"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const data = [
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Srijani Ghosh",
    title: "BDM SEO and Marketing",
  },
  {
    quote: "Ongoing Projects - Niayo24, Nariii",
    name: "Sambik Karmakar",
    title: "IT Full Stack Graphic Desing",
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Aaryan Sinha Roy",
    title: "API,Server-side programming and App Deployment",
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Rohit Ghosh",
    title: "Full Stack, Bakend Professional",
  },
  {
    quote: "Ongoing Projects - Luriana",
    name: "Pratap Karmakar",
    title: "Full Stack Website Developer Professional",
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Rana Kobiraj",
    title: "Bakend Developer",
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Subhankar Das",
    title: "Frontend Developer",
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Kaustubh Upadhyay",
    title: "IT Bakend Developer",
  },
  {
    quote: "Intern",
    name: "Samadrita Banarjee",
    title: "IT Frontend Developer",
  },
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Tamashree Halder",
    title: "BDM, SEO And Markening",
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Souvik Nandy",
    title: "Full stack Developer",
  },
];

const TeamData = () => {
  return (
    <div className="text-neutral-300 h-[20rem] w-full md:mt-48">
      <h2 className="bg-clip-text bg-black text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans  relative z-20 font-bold tracking-tight mb-14 mt-20">Meet Our Team</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 md::px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={data}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamData;
