"use client";

import Heading from "../../molecules/heading/page";
import profile from "../../../public/profile.webp";
import Img from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Profile() {
  return (
    <div
      className="flex w-4/5 mx-auto py-15 md:py-24 md:justify-between max-md:flex-col-reverse"
      id="profile"
    >
      <div className="flex flex-col gap-4">
        <Fade direction="up" triggerOnce cascade damping={0.3}>
          <Heading headingEn="Profile" headingJa="自己紹介" />
          <div className="2xl:text-xl">
            <p>
              1994年生まれの30歳。一児の母です。
              <br />
              WEBデザイナーやコーダーの経験が約2年、フロントエンドの経験が約1年ございます。
              <br />
              2021年から中小企業のWEBデザイナー/コーダーとして業務に従事していました。
              <br />
              それまでは約5年間人事‧広報‧総務･営業事務などの事務業務を行なっていました。
            </p>
            <br />
            <p>
              職場の人からはよく「明るい人」と言われます。
              <br />
              ゲラでよく笑っているからかもしれません。職場ではヘラヘラしないように気を付けています。
            </p>
            <br />
            <p>
              デザインを行うときは「コーディングしやすいデザインを」
              <br />
              コーディングを行うときは「無駄を一切なくす」をモットーにしています。
            </p>
          </div>
        </Fade>
      </div>
      <div className="mx-auto w-4/6 md:my-auto md:w-2/6 2xl:w-1/6 md:mx-0">
        <Img
          src={profile}
          alt="プロフィール文の横に表示される女性のイラスト"
          loading="lazy"
        />
      </div>
    </div>
  );
}
