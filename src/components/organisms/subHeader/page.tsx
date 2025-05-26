"use client";

import Img from "next/image";
import logoImage from "../../../public/logo.webp";
import { useRouter } from "next/navigation";

export default function SubHeader() {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <header className="bg-gray-50 flex items-center h-24 py-2.5">
      <div className="w-4/5 mx-auto flex items-center justify-between">
        <div className="w-2/5 lg:w-1/5">
          <button onClick={handleClick} className="cursor-pointer">
            <Img
              src={logoImage}
              alt="ポートフォリオサイトのロゴ画像"
              className="object-contain"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
