import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portfolio Site",
  description: " 2025 Shiratori Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans text-gray-900">
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
