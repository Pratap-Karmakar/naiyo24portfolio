'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

// Define the type for each service item
interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Define the service data
export const serviceData: ServiceItem[] = [
  { icon: <RxCrop />, title: 'Custom Web Applications', description: 'From dynamic web apps to sophisticated online platforms, we design and develop tailor-made web applications that cater to your unique business needs. Our solutions are built with the latest technologies, ensuring optimal performance, security, and scalability.' },
  { icon: <RxPencil2 />, title: 'Website Design & Development', description: 'Your website is the face of your business online. Our team of expert designers and developers craft stunning, user-friendly websites that not only look great but also function seamlessly across all devices. We focus on creating engaging experiences that drive user interaction and conversion.' },
  { icon: <RxDesktop />, title: 'E-Commerce Solutions', description: 'Elevate your online store with our comprehensive e-commerce solutions. We create robust, secure, and scalable e-commerce platforms that provide a seamless shopping experience for your customers, helping you grow your business effortlessly.' },
  { icon: <RxReader />, title: 'Mobile App Development', description: 'Expand your reach with our mobile app development services. Whether you need an iOS app, an Android app, or a cross-platform solution, we have the expertise to deliver high-quality mobile applications that engage and retain users.' },
  { icon: <RxRocket />, title: 'Digital Strategy & Consulting', description: 'Navigating the digital landscape can be complex. Our digital strategy and consulting services offer you the guidance and insights needed to make informed decisions, optimize your digital presence, and achieve your business goals.' },
];

const ServiceSlider: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (title: string) => {
    if (title.toLowerCase() === 'mobile app development') {
      router.push('/pricing');
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-auto"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div 
              className="bg-[#313131] h-max text-[#FFF0D1] rounded-lg px-6 py-8 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#212121] transition-all duration-300"
              onClick={() => handleCardClick(item.title)}
            >
              {/* Purple line */}
              <div className="h-1 w-full bg-[#FFF0D1] mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Icon */}
              <div className="text-[#FFF0D1] mb-4">{item.icon}</div>

              {/* Title & Description */}
              <div className="mb-8">
                <div className="mb-2 text-lg text-[#FFF0D1] font-bold">{item.title}</div>
                <p className="max-w-[350px] text-[10px] leading-normal text-black hover:text-[#FFF0D1] transition-all duration-300">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="text-[#FFF0D1] group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;