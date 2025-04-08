"use client";

import React from "react";
import Modal from "react-modal";
import Img, { StaticImageData } from "next/image";
import work1 from "../../../public/work1.webp";

type ModalWindowProps = {
  isOpen: boolean;
  modalClass: string;
  onAfterOpen: () => void;
  onRequestClose: () => void;
  title?: string;
  useSkill?: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  supportPeriod:string;
  overview:string;
  number:string;
  learning:string;
  site:string;
};

export default function WorkModal({
  isOpen,
  modalClass,
  onAfterOpen,
  onRequestClose,
  title = "モーダルの中身",
  useSkill = "React",
  imgSrc=work1,
  imgAlt="",
  supportPeriod="対応期間",
  overview="案件概要",
  number="対応人数",
  learning="学習内容",
  site="なし"
}: ModalWindowProps) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50 transition-opacity duration-300"
      className={`overflow-y-auto max-h-[90vh] bg-white rounded-xl p-6  max-w-md mx-auto shadow-lg outline-none transform transition-all duration-300 ease-in-out ${modalClass} w-5/6 md:w-full`}
      contentLabel="アニメーション付きモーダル"
    >
      <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <Img src={imgSrc} alt={imgAlt} className="w-full" loading="lazy"/>
        <ul className="flex flex-col gap-2 py-6">
          <li><p className="font-medium">案件概要</p><p>{overview}</p></li>
          <li><p className="font-medium">対応期間</p><p>{supportPeriod}</p></li>
          <li><p className="font-medium">使用スキル</p><p>{useSkill}</p></li>
          <li><p className="font-medium">対応人数</p><p>{number}</p></li>
          <li><p className="font-medium">学習内容</p><p>{learning}</p></li>
          <li><p className="font-medium">サイトURL</p><a href={site} className="hover:text-gray-400 transition duration-300">{site}</a></li>
        </ul>
        <button
          onClick={onRequestClose}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          閉じる
        </button>
      </div>
    </Modal>
  );
}
