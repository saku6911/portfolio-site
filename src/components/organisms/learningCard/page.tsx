"use client";

import React from "react";
import Img from "next/image";
import { useRouter } from "next/navigation";
import HeadingSm from "../../atoms/heading/headingSm";
import Label from "@/components/atoms/label/page";

export default function LearningCard({
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
    router.push(`/learning/${id}`);
  };

  return (
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
          <Label key={category.id}>{category.name}</Label>
        ))}
      </div>
    </button>
  );
}
