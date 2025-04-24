import Img from "next/image";
import SNSicon1 from ".././../../public/SNSicon1.png";
import SNSicon2 from ".././../../public/SNSicon2.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 flex items-center justify-center h-40 p-20 flex-col gap-10">
      <div className="flex gap-6">
        <Link href="https://x.com/Cndn1eHw">
          <Img
            src={SNSicon1}
            alt="Xのアイコン画像"
            className="object-contain"
            loading="lazy"
          />
        </Link>
        <Link href="https://qiita.com/saku6911">
          <Img
            src={SNSicon2}
            height={50}
            alt="qiitaのアイコン画像"
            className="object-contain"
            loading="lazy"
          />
        </Link>
      </div>
      <small>&copy; 2025 Shiratori Portfolio Site</small>
    </footer>
  );
}
