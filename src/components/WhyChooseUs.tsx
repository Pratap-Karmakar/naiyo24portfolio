'use client'

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const WhyChooseUs = () => {

  const data = [
    {
      title : 'Expert Team',
      description : 'Our skilled professionals bring years of experience in web and app development, ensuring top-notch solutions tailored to your needs.',
      slig : 'Expert-Team',
      isFeaturted : true,
    },
    {
      title : 'Innovative Solutions',
      description : 'We leverage the latest technologies and industry best practices to deliver innovative, efficient, and effective digital solutions.',
      slig : 'Innovative-Solutions',
      isFeaturted : true,
    },
    {
      title : 'Client-Centric Approach',
      description : 'Your satisfaction is our priority. We work closely with you throughout the development process to ensure your vision is realized.',
      slig : 'Client-Centric-Approach',
      isFeaturted : true,
    },
    {
      title : 'Quality Assurance',
      description : 'We adhere to rigorous quality standards to provide you with reliable, high-performance applications and websites.',
      slig : 'Quality-Assurance',
      isFeaturted : true,
    },
    {
      title: 'Scalable Architecture',
      description: 'We design and build scalable systems that grow with your business, ensuring your digital solutions can handle increasing demands and user loads.',
      slug: 'Scalable-Architecture',
      isFeaturted: true,
    },
    {
      title: 'Ongoing Support',
      description: 'Our commitment does not end at launch. We provide continuous support and maintenance to keep your digital products running smoothly and up-to-date.',
      slug: 'Ongoing-Support',
      isFeaturted: true,
    }
  ]

  return (
    <div className="py-12 mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
        <p className="bg-clip-text bg-black text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight ">
        Why Choose Us
      </p>
          <div className="mt-10">
          <HoverEffect
          items={data.map(something => (
            {
              title: something.title,
              description: something.description,
              link: '/'
            }
          ))}
          />
            {/* <div className="mt-10 text-center">3</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
  