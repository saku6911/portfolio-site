"use client";

import Img from "next/image";
import mainVisual from "../public/mainVisual.webp";
import Header from "./components/layout/header/page";
import Footer from "./components/layout/footer/page";
import styles from "./page.module.css";
import Work from "./components/pages/work/page";
import Learning from "./components/pages/learning/page";
import Profile from "./components/pages/profile/page";
import Skill from "./components/pages/skill/page";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Header />
        <div className="grid items-center h-3/5 md:h-full">
          <div className="grid gap-6 w-4/5 mx-auto">
            <Fade direction="up" triggerOnce cascade damping={0.5}>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-widest leading-normal">
                コードとデザインの交差点で、<br />
                最高の体験を。
              </h1>
              <p className="text-base md:text-xl leading-normal">
                デザイナー兼フロントエンドエンジニア
                <br />
                白取のポートフォリオサイトです。
              </p>
            </Fade>
          </div>
        </div>
        <div className={styles.mainVisualImg}>
          <Img
            src={mainVisual}
            alt="メインビジュアルに表示れる人のイラスト画像"
          />
        </div>
      </div>
      <div className="bg-gray-50">
        <Profile />
      </div>
      <Skill />
      <Work />
      <Learning />
      <Footer />
    </>
  );
}
