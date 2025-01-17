// app/layout.tsx
import "./globals.css";  // 必要に応じてグローバルCSS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";

import { ReactNode } from "react";

export const metadata = {
  title: "フェチモデル募集サイト",
  description: "フェチモデル募集サイトです。",
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
