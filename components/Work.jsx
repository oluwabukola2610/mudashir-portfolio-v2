"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { projectData2 } from "./projects/content";

const Work = () => {
  return (
    <section className="py-2">
     
      {/* Slider */}
      <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Swiper
          className="xl:h-[480px]"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          autoplay
          pagination={{ clickable: true }}
        >
          {/* Show only the first 6 projects for the slides */}
          {projectData2.slice(0, 6).map((project, index) => {
            return (
              <SwiperSlide key={index} className="pb-12">
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
