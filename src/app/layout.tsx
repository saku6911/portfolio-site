import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "2025 Shiratori Portfolio Site",
  keywords: [
    "Portfolio Site",
    "フロントエンドエンジニア",
    "デザイナー",
    "白取優花",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="text-gray-900">
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
