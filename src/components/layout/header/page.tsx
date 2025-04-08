import Img from "next/image";
import Link from "next/link";
import logoImage from "../../../public/logo.webp";
import DrawerMenu from "../menu/page"

export default function Header() {
  return (
    <header className="bg-gray-50 flex items-center h-24 py-2.5">
      <div className="w-4/5 mx-auto flex items-center justify-between">
        <div className="w-2/5 lg:w-1/5">
        <Img src={logoImage} alt="ポートフォリオサイトのロゴ画像" className="object-contain" />
        </div>
        <div className="hidden md:flex md:gap-5 text-xl">
          <Link href="#profile">Profile</Link>
          <Link href="#skill">Skill</Link>
          <Link href="#work">Work</Link>
          <Link href="#learning">Learnig</Link>
        </div>
        <div className="md:hidden">
          <DrawerMenu />
        </div>
     </div>
   </header>
  );
}