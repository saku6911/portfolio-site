"use client";

import React from "react";
import Modal from "react-modal";

type ModalWindowProps = {
  isOpen: boolean;
  modalClass: string;
  onAfterOpen: () => void;
  onRequestClose: () => void;
  skillText?: string;
};

export default function SkillModal({
  isOpen,
  modalClass,
  onAfterOpen,
  onRequestClose,
  skillText = "使用スキル",
}: ModalWindowProps) {
 
  const skillList = skillText.split("/").filter(Boolean);

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50 transition-opacity duration-300"
      className={`bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg outline-none transform transition-all duration-300 ease-in-out ${modalClass} w-5/6 md:w-full`}
      contentLabel="アニメーション付きモーダル"
    >
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">経験年数</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          {skillList.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
        <button
          onClick={onRequestClose}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          閉じる
        </button>
      </div>
    </Modal>
  );
}
