"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Heading from "../../molecules/heading/page";
import { Fade } from "react-awesome-reveal";
import LearningCard from "@/components/organisms/learningCard/page";

type LearningProps = {
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

export default function LearningClient({ posts }: LearningProps) {
  return (
    <div className="w-4/5 mx-auto py-15 md:py-24" id="learning">
      <Fade direction="up" triggerOnce cascade damping={0.3}>
        <Heading headingEn="Learning" headingJa="学習内容" />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          spaceBetween={24}
          slidesPerView={3}
          grabCursor={true}
          pagination={{ clickable: true }}
          className="h-140 w-full"
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            780: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          <div className="w-4/5 mx-auto py-15 md:py-24">
            <Heading headingEn="Learning" headingJa="自己学習内容" />
            <div className="flex justify-between gap-14 max-xl:flex-col max-xl:items-center">
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <LearningCard
                    id={post.id}
                    imgSrc={post.thumbnail.url}
                    imgAlt="ブログのサムネイル画像"
                    heading={post.title}
                    skill={post.skill}
                    categories={post.categories}
                  />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </Fade>
    </div>
  );
}
