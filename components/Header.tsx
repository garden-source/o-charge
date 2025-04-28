"use client";
import { useState } from "react";
import { CldImage } from 'next-cloudinary';
import { usePathname } from 'next/navigation';
import ScrollLink from './ScrollLink';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 現在のパスに基づいてメニュー内容を取得する関数
  const getMenuItems = () => {
    // トップページの場合
    if (pathname === '/') {
      return (
        <ul className="flex flex-col space-y-2">
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#about-work" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">お仕事内容</ScrollLink>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#feti-model" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">フェチモデルとは</ScrollLink>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#salary" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">お給料について</ScrollLink>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#studio" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">スタジオ紹介</ScrollLink>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#assurance" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">3つの安心</ScrollLink>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#voice" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">先輩モデルさんの声</ScrollLink>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <ScrollLink href="/#flow" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">応募の流れ</ScrollLink>
          </li>
          <li className="">
            <ScrollLink href="/#faq" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">よくあるご質問</ScrollLink>
          </li>
        </ul>
      );
    }

    // お仕事詳細ページの場合
    if (pathname === '/job-details') {
      return (
        <ul className="flex flex-col space-y-2">
          <li className="pb-2">
            <a href="/job-details" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">具体的なお仕事内容</a>
          </li>
          <li className="pb-2">
            <ScrollLink href="/job-details#chira-mise" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">①チラ見せ風撮影</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/job-details#onara-satuei" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">②おなら撮影</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/job-details#toire-satuei" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">③トイレ系撮影</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/job-details#salary-examples" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">お給料例</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/job-details#payment-system" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">即日で貰えるワケ</ScrollLink>
          </li>
          <br />
          <li className="pb-2">
            <a href="/?noModal=true" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">トップページに戻る</a>
          </li>
        </ul>
      );
    }

    // 3つの安心ページの場合
    if (pathname === '/three-assurances') {
      return (
        <ul className="flex flex-col space-y-2">
          <li className="pb-2 text-white font-bold rounded">
            <a href="/three-assurances" className="text-white rounded px-3 py-2 transition duration-300">アダルト行為一切なし！</a>
          </li>
          <li className="pb-2">
            <ScrollLink href="/three-assurances#no-adult" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} 近年の夜職の傾向について</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/three-assurances#no-guarantee" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} モデルのお仕事が稼げる理由</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/three-assurances#no-force" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} NO!強要宣言</ScrollLink>
          </li>
          <br />
          <li className="pb-2">
            <a href="/anshin-anzen" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">安心安全の取り組み</a>
          </li>
          <li className="pb-2">
            <a href="/contactless-service" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">接触・接客いりません！</a>
          </li>
          <li className="pb-2">
            <a href="/?noModal=true" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">トップページに戻る</a>
          </li>
        </ul>
      );
    }

    // 安心安全の取り組みページの場合
    if (pathname === '/anshin-anzen') {
      return (
        <ul className="flex flex-col space-y-2">
          <li className="pb-2 text-white font-bold rounded">
            <a href="/anshin-anzen" className="text-white rounded px-3 py-2 transition duration-300">安心安全の身バレ対策</a>
          </li>
          <li className="pb-2">
            <ScrollLink href="/anshin-anzen#personal-info" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} 掲載サイトについて</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/anshin-anzen#piracy-protection" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} 海賊版対策</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/anshin-anzen#makeup-disguise" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} メイクアップについて</ScrollLink>
          </li>
          <br />
          <li className="pb-2">
            <a href="/contactless-service" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">接触・接客いりません！</a>
          </li>
          <li className="pb-2">
            <a href="/three-assurances" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">安心安全の身バレ対策</a>
          </li>
          <li className="pb-2">
            <a href="/?noModal=true" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">トップページに戻る</a>
          </li>
        </ul>
      );
    }

    // 接触・接客なしの仕事内容ページの場合
    if (pathname === '/contactless-service') {
      return (
        <ul className="flex flex-col space-y-2">
          <li className="pb-2 text-white font-bold rounded">
            <a href="/contactless-service" className="text-white rounded px-3 py-2 transition duration-300">接触・接客いりません！</a>
          </li>
          <li className="pb-2">
            <ScrollLink href="/contactless-service#staff-info" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} スタッフ紹介</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/contactless-service#studio-location" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} アクセス</ScrollLink>
          </li>
          <li className="pb-2">
            <ScrollLink href="/contactless-service#message" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">{`>`} 代表からのメッセージ</ScrollLink>
          </li>
          <br />
          <li className="pb-2">
            <a href="/three-assurances" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">アダルト行為一切なし！</a>
          </li>
          <li className="pb-2">
            <a href="/anshin-anzen" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">安心安全の身バレ対策</a>
          </li>
          <li className="pb-2">
            <a href="/?noModal=true" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">トップページに戻る</a>
          </li>
        </ul>
      );
    }

    // // 各記事ページで共通のメニュー項目（デフォルト）
    // return (
    //   <ul className="flex flex-col space-y-2">
    //     <li className="border-b border-gray-400 pb-2">
    //       <a href="/" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">トップページ</a>
    //     </li>
    //     <li className={`border-b border-gray-400 pb-2 ${pathname === '/job-details' ? 'bg-[#f95858] text-white font-bold rounded' : ''}`}>
    //       <a href="/job-details" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">お仕事詳細</a>
    //     </li>
    //     <li className={`border-b border-gray-400 pb-2 ${pathname === '/three-assurances' ? 'bg-[#f95858] text-white font-bold rounded' : ''}`}>
    //       <a href="/three-assurances" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">3つの安心</a>
    //     </li>
    //     <li className={`border-b border-gray-400 pb-2 ${pathname === '/anshin-anzen' ? 'bg-[#f95858] text-white font-bold rounded' : ''}`}>
    //       <a href="/anshin-anzen" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">安心安全の取り組み</a>
    //     </li>
    //     <li className={`border-b border-gray-400 pb-2 ${pathname === '/contactless-service' ? 'bg-[#f95858] text-white font-bold rounded' : ''}`}>
    //       <a href="/contactless-service" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">接触・接客なしの仕事内容</a>
    //     </li>
    //   </ul>
    // );
  };

  return (
    <header className="bg-gradient-to-r from-[#f9daf2] to-[#dae6ff] px-4 fixed top-0 left-0 w-full z-50">
      {/* ヘッダー内のレイアウトコンテナ */}
      <div className="max-w-screen-md mx-auto flex items-center justify-between py-1">
        {/* 左側: ロゴ画像 */}
        <a href="/">
          <CldImage
            src="images/Other/site-title_lfefuv"
            width={300}
            height={150}
            alt="高収入パーツモデルアルバイトのおさいふチャージ"
            className="w-[220px] h-auto p-0"
          />
        </a>

        {/* 右側: ハンバーガーアイコン（常に表示） */}
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-600"
          aria-label="Menu Toggle"
        >
          {/* 3本線アイコン (SVG) */}
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="#A0A0A0"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* オーバーレイ（メニューが開いたときのみ表示） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={closeMenu}
        />
      )}

      {/* ハンバーガーメニュー本体 (モバイル/PC問わずトグル表示) */}
      <nav
        className={`
          ${isOpen ? "block" : "hidden"}
          absolute top-[60px] right-4
          bg-[#4b4a4d] rounded
          p-4 z-50
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {getMenuItems()}
      </nav>
    </header>
  );
}
