"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import learning1 from "../../../public/learning1.webp";
import learning2 from "../../../public/learning2.webp";
import learning3 from "../../../public/learning3.webp";
import learning4 from "../../../public/learning4.webp";
import learning5 from "../../../public/learning5.webp";
import learning6 from "../../../public/learning6.webp";
import learning7 from "../../../public/learning7.webp";
import learning8 from "../../../public/learning8.webp";
import Heading from "../../ui/heading/page";
import { Fade } from "react-awesome-reveal";
import LearningCard from "@/components/ui/learningCard/page";

export default function Learning() {
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
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning8}
                  imgAlt="ポケモン図鑑の画像"
                  heading="ポケモン図鑑"
                  skill="TypeScript/React/TailwindCSS
       Vite/Jotai/Firebase/PokeAPI"
                  label="フロント/API/デザイン"
                  supportPeriod="2025年5月"
                  overview="ユーザーごとにお気に入りのポケモン図鑑を作れる"
                  number="1人"
                  learning="Firebaseを初めて使用したので、ログイン認証やユーザーごとのDB格納等勉強になった。また、PokeAPIのような膨大なDBからデータを取得することもいい勉強になった。"
                  site="https://jyakee-stepup-app.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning7}
                  imgAlt="マフラータオルデザインの画像"
                  heading="マフラータオルデザイン"
                  skill="Illustrator"
                  label="デザイン"
                  supportPeriod="2025年5月"
                  overview="Music Fesのノベルティ（マフラータオル）デザイン"
                  number="1人"
                  learning="マフラータオルのデザインは初めてだったので、タオルに印刷するときの注意点（特定の色がきれいに出ないかも）等勉強になった。"
                  site=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning6}
                  imgAlt="React App 100 knockの画像"
                  heading="React App 100 knock"
                  skill="TypeScript/React/TailwindCSS
       Next.js/Jotai"
                  label="フロント"
                  supportPeriod="2025年4月"
                  overview="ReactAppを100個作る。"
                  number="1人"
                  learning="日々更新中。"
                  site="https://react-app-100.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning5}
                  imgAlt="音楽アプリの画像"
                  heading="音楽WEBアプリ"
                  skill="JavaScript/React/TailwindCSS
       Vite/SpotifyAPI/Axios"
                  label="フロント/API"
                  supportPeriod="2025年4月"
                  overview="動画教材（Udemy）を見ながら曲の検索ができる音楽アプリを作成した。"
                  number="1人"
                  learning="世の中にはいろいろなAPIが公開されていて、それをもとに自分でアプリが開発できることを学んだ"
                  site="https://music-app-eight-delta.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning4}
                  imgAlt="ポートフォリオサイトの画像"
                  heading="ポートフォリオサイト"
                  skill="TypeScript/React/TailwindCSS
        Next.js/Figma/Vercel"
                  label="デザイン/コーディング"
                  supportPeriod="2025年4月"
                  overview="ポートフォリオサイトを作成した。"
                  number="1人"
                  learning="CSSのフレームワークをあまり使用したことがなかったのでシェアの高いTailwindCSSを学習のため使用した。FigmaURL:https://x.gd/Y9izo"
                  site="https://calendar-app-kgh3.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning1}
                  imgAlt="カレンダーウェブアプリの画像"
                  heading="カレンダーウェブアプリ"
                  skill="TypeScript/React/CSS/Figma
        Next.js/REST API/JSON Server"
                  label="デザイン/フロント/API"
                  supportPeriod="2025年4月"
                  overview="動画教材を見終えた後、自分で考えたカレンダーアプリを作成した"
                  number="1人"
                  learning="簡易的だが、初めて一からWEBアプリを作成した。どんなアプリを作成するかという考えから始まり、実装する機能等を整理し考えた。少し設計の部分が学べた気がした。
                  【2025/4/17】 Node.js(JSON Server)、REST APIを使用してログイン機能追加"
                  site="https://calendar-app-kgh3.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning2}
                  imgAlt="TODOアプリの画像"
                  heading="TODOアプリ"
                  skill="JavaScript/React
        CSS/Next.js/Vercel"
                  label="コーディング"
                  supportPeriod="2025年4月"
                  overview="Udemyの動画教材内で作成したTODOアプリをデプロイした"
                  number="1人"
                  learning="動画教材を見ながら記載コードの文法をしっかり学ぶことができた。"
                  site="https://to-do-app-sage-delta.vercel.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LearningCard
                  imgSrc={learning3}
                  imgAlt="イベントサイトの画像"
                  heading="イベントサイト"
                  skill="TypeScript/React/CSS
        Next.js/Figma/Vercel"
                  label="デザイン/コーディング"
                  supportPeriod="2024年6月"
                  overview="会社の夏イベントで謎解きを行うため、その答えを入力するサイトを作成した。"
                  number="1人"
                  learning="仕事の際はあらかじめ用意されたリポジトリをクローンして作成するだけだったが、初めて一人でゼロからサイト作成を学んだ。(答え：9970)"
                  site="https://14ththanksparty.pages.dev/"
                />
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </Fade>
    </div>
  );
}
