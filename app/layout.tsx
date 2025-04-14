// app/layout.tsx
import "./globals.css";  // 必要に応じてグローバルCSS
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";
import { Metadata } from 'next'

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: '高収入モデルアルバイトのおさいふチャージ！',
    template: 'TOP | 高収入モデルアルバイトのおさいふチャージ！'
  },
  description: "フェチ系パーツモデルのアルバイトで高収入！高収入モデルのお仕事ならおさいふチャージへどうぞ！",
  openGraph: {
    title: "高収入モデルアルバイトのおさいふチャージ！",
    description: "フェチ系パーツモデルのアルバイトで高収入！高収入モデルのお仕事ならおさいふチャージへどうぞ！",
    url: "https://o-charge.net/",
    siteName: "高収入モデルアルバイトのおさいふチャージ！",
    images: [
      {
        url: "https://res.cloudinary.com/dvwy63ef7/image/upload/v1/images/1-Hero/top_wllyhi?_a=BAVAZGIB0",
        width: 800,
        height: 600,
        alt: "高収入モデルアルバイトのおさいふチャージ！",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@OsaifuCharge",
    title: "高収入モデルアルバイトのおさいふチャージ！",
    description: "フェチ系パーツモデルのアルバイトで高収入！高収入モデルのお仕事ならおさいふチャージへどうぞ！",
    images: ["https://res.cloudinary.com/dvwy63ef7/image/upload/v1/images/1-Hero/top_wllyhi?_a=BAVAZGIB0"],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://sdk.form.run/js/v2/formrun.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Header />
        <main className="mt-[60px]">
          {children}
        </main>
        <Footer />
        {/* フッターメニュー (SNSリンクなど) */}
        <FooterMenu />
      </body>
    </html>
  );
}
