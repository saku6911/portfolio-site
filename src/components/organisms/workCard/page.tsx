"use client";

import React from "react";
import Img from "next/image";
import { useRouter } from "next/navigation";
import HeadingSm from "../../atoms/heading/headingSm";

export default function WorkCard({
  id,
  imgSrc,
  imgAlt,
  heading,
  skill,
  categories,
}: {
  id: string;
  imgSrc: string;
  imgAlt: string;
  heading: string;
  skill: string;
  categories: { id: string; name: string }[];
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/work/${id}`);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-left max-w-sm rounded h-[450] overflow-hidden shadow-lg transition-all duration-150 hover:translate-x-1 hover:translate-y-1 p-4 bg-white"
      >
        <Img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-auto"
          width={352}
          height={211}
          priority
          sizes="(max-width: 768px) 100vw, 352px"
        />
        <div className="grid gap-4 px-6 py-4 items-center">
          <HeadingSm>{heading}</HeadingSm>
          <p className="whitespace-pre-line">{skill}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {categories?.map((category) => (
            <label
              key={category.id}
              className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {category.name}
            </label>
          ))}
        </div>
      </button>
    </>
  );
}
