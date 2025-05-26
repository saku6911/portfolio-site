import Img from "next/image";
import mainVisual from "../public/mainVisual.webp";
import Header from "../components/organisms/header/page";
import Footer from "../components/organisms/footer/page";
import styles from "./page.module.css";
import Work from "../components/pages/work/page";
import Learning from "../components/pages/learning/page";
import Profile from "../components/pages/profile/page";
import Skill from "../components/pages/skill/page";
import { Fade } from "react-awesome-reveal";
import HeadingMainvisual from "../components/atoms/heading/headingMainvisual";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Header />
        <div className="grid items-center h-3/5 md:h-full">
          <div className="grid gap-6 w-4/5 mx-auto">
            <Fade direction="up" triggerOnce cascade damping={0.5}>
              <HeadingMainvisual>
                コードとデザインの交差点で、
                <br />
                最高の体験を。
              </HeadingMainvisual>
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
            alt="メインビジュアル"
            priority
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 70vw"
            className="w-full h-auto object-contain"
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
