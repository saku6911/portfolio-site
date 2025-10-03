"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Heading from "../../molecules/heading/page";
import WorkCard from "../../organisms/workCard/page";
import { Fade } from "react-awesome-reveal";

type WorkProps = {
  posts: {
    id: string;
    title: string;
    thumbnail: { url: string };
    skill: string;
    categories: {
      id: string;
      name: string;
    }[];
  }[];
};
export default function WorkClient({ posts }: WorkProps) {
  return (
    <div className="w-4/5 mx-auto py-15 md:py-24" id="work">
      <Fade direction="up" triggerOnce cascade damping={0.3}>
        <Heading headingEn="Work" headingJa="仕事成果" />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          spaceBetween={24}
          slidesPerView={3}
          grabCursor={true}
          pagination={{ clickable: true }}
          className="h-130 w-full"
          breakpoints={{
            350: { slidesPerView: 1 },
            780: { slidesPerView: 2, spaceBetween: 32 },
            1200: { slidesPerView: 3, spaceBetween: 32 },
            1500: { slidesPerView: 4 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <WorkCard
                id={post.id}
                imgSrc={post.thumbnail.url}
                imgAlt="ブログのサムネイル画像"
                heading={post.title}
                skill={post.skill}
                categories={post.categories}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </div>
  );
}
