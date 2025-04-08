"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import work1 from "../../../public/work1.webp";
import work2 from "../../../public/work2.webp";
import work3 from "../../../public/work3.webp";
import work4 from "../../../public/work4.webp";
import work5 from "../../../public/work5.webp";
import work6 from "../../../public/work6.webp";
import work7 from "../../../public/work7.webp";
import work8 from "../../../public/work8.webp";
import work10 from "../../../public/work10.webp";
import work11 from "../../../public/work11.webp";
import work12 from "../../../public/work12.webp";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import Heading from "../../ui/heading/page";
import WorkCard from "../../ui/workCard/page";
import { Fade } from "react-awesome-reveal";

export default function Work() {
  return (
    <div className="w-4/5 mx-auto py-15 md:py-24" id="work">
    <Fade direction="up" triggerOnce cascade damping={0.3}>
    <Heading headingEn="Work" headingJa="仕事成果" />
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            spaceBetween={24}
            slidesPerView={3}
            grabCursor={true} 
            pagination={{ clickable: true }}
            className="h-120 w-full"
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
            <SwiperSlide>
            <WorkCard 
            imgSrc={work1} 
             imgAlt="自社コーポレートサイト運用保守の案件画像" 
             heading="自社コーポレートサイト運用保守" 
             skill="TypeScript/React/CSS/Next.js" 
             label="コーディング"
             supportPeriod="2021年11月-2021年11月"
             overview="自社コーポレートサイトの文言変更や機能追加の対応"
             number="2人"
             learning="コードを書くのではなく、主にコードリーディングをしながら文言変更等を対応することで、React、TypeScriptを使用したWEBサイト開発の仕方を学びました。"
             site="https://kanamekey.com/"
            />
            </SwiperSlide> <SwiperSlide>
            <WorkCard 
            imgSrc={work2} 
            imgAlt="社内受託開発LPデザイン、開発の案件画像" 
            heading="社内受託開発LPデザイン/開発" 
            skill="TypeScript/React/CSS/Figma" 
            label="デザイン/コーディング"
            supportPeriod="2021年12月"
            overview="社内受託開発のLPをデザインと開発"
            number="1人"
            learning="初めて自分一人でReactとTypeScriptを使用してサイトを作成し、実際にコードの書き方等を学んだ。"
            site=""
          />
            </SwiperSlide> <SwiperSlide>
            <WorkCard 
            imgSrc={work3} 
            imgAlt="土木‧建築分野企業の採用サイトデザイン、開発の案件画像" 
            heading="土木‧建築分野企業の採用サイトデザイン/開発" 
            skill="TypeScript/React/CSS/Next.js" 
            label="デザイン/コーディング"
            supportPeriod="2022年5月-2022年12月"
            overview="土木‧建築分野企業の採用サイトを一新するため、デザインと開発を担当した。"
            number="3人"
            learning="お客様との打ち合わせにも同席し実際にどのような要望が出ているか、どのようなことをデザイン&開発担当者として求められているかを知ることができた。"
            site=""
          />
            </SwiperSlide> <SwiperSlide>
            <WorkCard 
            imgSrc={work4} 
            imgAlt="M&AマッチングWEBアプリのデザイン/開発の案件画像" 
            heading="M&AマッチングWEBアプリのデザイン/開発" 
            skill="TypeScript/React/CSS/Figma" 
            label="デザイン/コーディング"
            supportPeriod="2023年12月-2024年1月"
            overview="ものつくり補助金に申請するシステムとしてM&AマッチングWEBアプリを開発"
            number="5人"
            learning="ものつくり補助金に申請するシステムとしてM&AマッチングWEBアプリを開発"
            site=""
          />
            </SwiperSlide> 
            <SwiperSlide>
            <WorkCard 
            imgSrc={work5} 
            imgAlt="自社サービスのティザーサイトとLP作成の案件画像" 
            heading="自社サービスのティザーサイトとLP作成" 
            skill="STUDIO/Figma" 
            label="デザイン/コーディング"
            supportPeriod="自社で開発したSES営業向けメールサービスのティザーサイトとLP作成"
            overview=""
            number="1人"
            learning="初めてノーコードツールのSTUDIOを使用してサイト作成を行なった。時と場合や目的によってノーコードのサイト作成ツールを使用することも視野に入れるということを学んだ。"
            site="https://portal.pbullet.io/"
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
            imgSrc={work6} 
            imgAlt="ギャンブル依存症関連の記事まとめサイトの保守運用の案件画像" 
            heading="ギャンブル依存症関連の記事まとめサイトの保守運用" 
            skill="TypeScript/Remix" 
            label="コーディング（SEO対応)"
            supportPeriod="2024年4月-2024年4月"
            overview="ギャンブル依存症関連の記事まとめサイトのコードリーディングを含めたディレクトリ整理とSEO対策(動的サイトマップと構造化データ作成)"
            number="3人"
            learning="初めてRemixとvanilla-extractを使用したのでコードリーディングで書き方を学んだ。また動的サイトマップと構造化データを作成しSEO対策についての知識を得た"
            site="https://addiction.report/"
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
            imgSrc={work7} 
            imgAlt="高齢者向け食事宅配アプリ開発支援の案件画像" 
            heading="高齢者向け食事宅配アプリ開発支援" 
            skill="HTML(Bootstrap)/CSS" 
            label="コーディング"
            supportPeriod="2024年5月-2024年5月"
            overview="高齢者向け食事宅配アプリの開発支援としてスマホ画面のレイアウト構築(Bootstrap)を行なった(バックエンドとは絡まない部分)"
            number="30人"
            learning="開発支援ではあるが初めて数十人規模のチーム開発を経験した。"
            site=""
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
            imgSrc={work8} 
            imgAlt="再生医療系企業コーポレートサイトRNの案件画像" 
            heading="再生医療系企業コーポレートサイトRN" 
            skill="HTML/CSS/WordPress/Figma" 
            label="UIデザイン/コーディング"
            supportPeriod="2024年11月-2024年12月"
            overview="再生医療系企業のコーポレートサイトをリニューアル。主にコーディングを担当。UIデザインも担当。"
            number="4人"
            learning="新しい職場で初めての案件のため、このチームがどのような流れでWEB制作を行っているかなどを学んだ"
            site="https://cysay.co.jp/"
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
            imgSrc={work7} 
            imgAlt="不動産系企業コーポレートサイト制作の案件画像" 
            heading="土木‧建築分野企業の採用サイトデザイン、開発" 
            skill="HTML/SCSS/WordPress/Figma" 
            label="UIデザイン/コーディング"
            supportPeriod="2024年12月"
            overview="不動産系企業のコーポレートサイをリニューアル。主にコーディングを担当。UIデザインも担当。"
            number="4人"
            learning="Dockerやgulpなど前職では使用してこなかったツールの使い方を学んだ"
            site=""
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
            imgSrc={work10} 
            imgAlt="自社ロゴデザイン(LGBTQ +用)の案件画像" 
            heading="自社ロゴデザイン(LGBTQ +用)" 
            skill="Illustrator" 
            label="ロゴデザイン"
            supportPeriod="2022年4月-2022年4月"
            overview="「ALLY」を宣言するロゴを作成してほしいと自社から要望があり作成。"
            number="1人"
            learning="自社のブランドを出しつつALLYの要件(カラフル6色)を満たすためのデザインを学んだ。"
            site=""
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
             imgSrc={work11} 
             imgAlt="自社サービスのフライヤー作成(A4裏表)の案件画像" 
             heading="自社サービスのフライヤー作成(A4裏表)" 
             skill="Illustrator" 
             label="DTPデザイン"
             supportPeriod="2024年3月-2024年3月"
             overview="自社で開発したSES営業向けメールサービスのティザーサイトとLP作成"
             number="1人"
             learning="AIの機能を使用しながらデザインを構築した(キャッチコピー)"
             site=""
          />
            </SwiperSlide>
            <SwiperSlide>
            <WorkCard 
            imgSrc={work12} 
            imgAlt="自社開発アプリの自治体向けリーフレットデザインの案件画像" 
            heading="自社開発アプリの自治体向けリーフレットデザイン" 
            skill="Illustrator" 
            label="DTPデザイン"
            supportPeriod="2024年6月-2024年6月"
            overview="自社で開発した道路点検システムのリーフレットを各自治体向けに作成(A4三つ折り)"
            number="1人"
            learning="三つ折りデザインを初めて行なった。折られることを想定するデザイン作成を学んだ。"
            site=""
          />
            </SwiperSlide>
          </Swiper>
          </Fade>
        </div>
  );
};

