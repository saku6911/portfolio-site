"use client";

import Heading from "../../ui/heading/page";
import SkillCard from "../../ui/skillCard/page";
import skillFe from "../../../public/skillFe.webp"
import skillDe from "../../../public/skillDe.webp"
import skillCom from "../../../public/skillCommunication.webp"
import { Fade } from "react-awesome-reveal";

export default function Skill() {

  return (
    <div className="w-4/5 mx-auto py-15 md:py-24" id="skill">
      <Fade direction="up" triggerOnce cascade damping={0.3}>
      <Heading headingEn="Skill" headingJa="技術スキル" />
      <div className="flex justify-between gap-14  max-xl:flex-col max-xl:items-center">
      <SkillCard 
        imgSrc={skillFe} 
        imgAlt="フロントエンドエンジニア風の人のイラスト画像" 
        heading="フロントエンドエンジニア" 
        text="主にTypeScript、Reactを使用した静的サイト制作、アプリケーション開発の経験があります。" 
        linkText="言語やライブラリの経験年数は"
        skillText="HTML 3年/CSS 3年/JavaScript 1年/TypeScript 1年/React 1年/Next.js 1年"/>
      <SkillCard 
        imgSrc={skillDe} 
        imgAlt="デザイナー風の人のイラスト画像" 
        heading="デザイナー" 
        text="WEBサイトデザインやWEBアプリケーションのデザインをFigmaで行っていました。イラレを使用してDTP制作の経験もあります。" 
        linkText="使用ソフトの経験年数は"
        skillText="Adobe Illustrator 3年/Adobe Photoshop 1年/Figma 3年/"/>
      <SkillCard 
        imgSrc={skillCom} 
        imgAlt="ディレクター風の人のイラスト画像" 
        heading="コミュニケーション力" 
        text="人事として人前に立って会社説明を行ったり、面接や説明会で初めて会う人とコミュニケーションをとっていたので、職場でのコミュニケーションには問題ないと自負しております。" 
        linkText="OSその他ツールの経験年数は"
        skillText="Windows 8年/MacOS 2年/Github 2年/Backlog 0.5年/Slack 5年/Google Workspace 5年/MicrosoftOffice 5年"/>
      </div>
      </Fade>
    </div>
  );
}
