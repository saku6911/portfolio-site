"use client";

import Img, {StaticImageData}from "next/image";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import SkillModal from "../../modal/skillModal/page";
import Modal from "react-modal";

export default function SkillCard({ imgSrc, imgAlt, heading, text, linkText, skillText }: { imgSrc: StaticImageData;imgAlt: string;heading: string; text: string; linkText: string; skillText: string; }) {
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
    <div className={styles.skillCardWrap}> 
      <div className="w-4/6 mx-auto md:w-full">
        <Img src={imgSrc} alt={imgAlt}  loading="lazy"/>
      </div>
      <h3 className="text-xl font-bold text-center">{heading}</h3>
      <p className="md:text-xl">{text}</p>
      <p className="flex">{linkText}
        <button onClick={() => {
          setIsOpen(true);
          setModalClass("opacity-0 scale-95");
        }} 
        className="flex items-center  hover:text-gray-400 transition duration-300">こちら<ChevronDoubleRightIcon className="h-5 w-5 ml-2" /></button></p>
    </div>
    <SkillModal
            isOpen={isOpen}
            modalClass={modalClass}
            onAfterOpen={handleAfterOpen}
            onRequestClose={handleClose}
            skillText={skillText}
            
          />
      </>
  );
}