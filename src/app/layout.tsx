import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  metadataBase: new URL("https://portfolio-site-six-fawn.vercel.app/"),
  openGraph: {
    title: "Portfolio Site - 白取優花",
    description:
      "フロントエンドエンジニア兼デザイナー、白取優花のポートフォリオサイト。",
    url: "https://portfolio-site-six-fawn.vercel.app/",
    siteName: "Shiratori Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Site - 白取優花",
    description:
      "フロントエンドエンジニア兼デザイナー、白取優花のポートフォリオサイト。",
    images: ["/og-image.webp"],
    creator: "@Cndn1eHw",
  },
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
