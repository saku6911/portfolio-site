"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Img, { StaticImageData } from "next/image";
import WorkModal from "../../modal/workModal/page";

export default function WorkCard({
  imgSrc,
  imgAlt,
  heading,
  skill,
  label,
  supportPeriod,
  overview,
  number,
  learning,
  site,
}: {
  imgSrc: StaticImageData;
  imgAlt: string;
  heading: string;
  skill: string;
  label: string;
  supportPeriod:string;
  overview:string;
  number:string;
  learning:string;
  site:string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalClass, setModalClass] = useState("opacity-0 scale-95");

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const handleAfterOpen = () => {
    setModalClass("opacity-100 scale-100");
  };

  const handleClose = () => {
    setModalClass("opacity-0 scale-95");
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setModalClass("opacity-0 scale-95");
        }}
        className=" text-left max-w-sm rounded overflow-hidden shadow-lg transition-all duration-300 hover:translate-x-1 hover:translate-y-1 p-4 bg-white"
      >
        <Img src={imgSrc} alt={imgAlt} className="w-full" />
        <div className="grid gap-4 px-6 py-4 items-center">
          <h3 className="font-bold text-xl h-14">{heading}</h3>
          <p className="whitespace-pre-line">
            ・使用スキル
            <br />
            {skill}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <label className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {label}
          </label>
        </div>
      </button>

      <WorkModal
        isOpen={isOpen}
        modalClass={modalClass}
        onAfterOpen={handleAfterOpen}
        onRequestClose={handleClose}
        title={heading}
        useSkill={skill}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        supportPeriod={supportPeriod}
        overview={overview}
        number={number}
        learning={learning}
        site={site}
      />
    </>
  );
}
