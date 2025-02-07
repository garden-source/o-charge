"use client";
import { useState } from "react";
import { CldImage } from 'next-cloudinary';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-[#f9daf2] to-[#dae6ff] px-4">
      {/* ヘッダー内のレイアウトコンテナ */}
      <div className="max-w-screen-md mx-auto flex items-center justify-between py-1">
        {/* 左側: ロゴ画像 */}
        <CldImage
          src="images/Other/site-title_lfefuv"
          width={300}
          height={150}
          alt="高収入パーツモデルアルバイトのおさいふチャージ"
          className="w-[220px] h-auto p-0"
        />

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

      {/* ハンバーガーメニュー (モバイル/PC問わずトグル表示) */}
      <nav
        className={`
          ${isOpen ? "block" : "hidden"}
          absolute top-[60px] right-4
          bg-[#4b4a4d] rounded
          p-4
        `}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="#hero"></a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#about-work" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">お仕事内容</a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#feti-model" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">フェチモデルとは</a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#salary" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">お給料について</a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#studio" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">スタジオ紹介</a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#assurance" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">3つの安心</a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#voice" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">先輩モデルさんの声</a>
          </li>
          <li className="border-b border-gray-400 pb-2">
            <a href="#flow" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">応募の流れ</a>
          </li>
          <li className="">
            <a href="#faq" className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-300">よくあるご質問</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
