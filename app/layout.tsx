// app/layout.tsx
import "./globals.css";  // 必要に応じてグローバルCSS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";

import { ReactNode } from "react";

export const metadata = {
  title: "フェチモデル募集サイト",
  description: "フェチモデル募集サイトです。",
  openGraph: {
    title: "フェチモデル募集サイト",
    description: "フェチモデル募集サイトです。",
    url: "https://www.yourdomain.com/",
    siteName: "フェチモデル募集サイト",
    images: [
      {
        url: "https://www.yourdomain.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "フェチモデル募集サイトのOG画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "フェチモデル募集サイト",
    description: "フェチモデル募集サイトです。",
    images: ["https://www.yourdomain.com/images/twitter-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* フッターメニュー (SNSリンクなど) */}
        <FooterMenu />
      </body>
    </html>
  );
}
