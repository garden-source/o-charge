"use client";
import { useState } from "react";

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
        <img
          src="/images/Other/site-title.png"
          alt="高収入パーツモデルアルバイトのおさいふチャージ"
          className="w-[280px] h-auto p-0"
        />

        {/* 右側: ハンバーガーアイコン（常に表示） */}
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-600"
          aria-label="Menu Toggle"
        >
          {/* 3本線アイコン (SVG) */}
          <svg
            className="w-12 h-12"
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
          bg-gray-200 rounded
          p-4
        `}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <a href="#hero"></a>
          </li>
          <li>
            <a href="#about-work">お仕事内容</a>
          </li>
          <li>
            <a href="#feti-model">フェチモデルとは</a>
          </li>
          <li>
            <a href="#salary">お給料について</a>
          </li>
          <li>
            <a href="#studio">スタジオ紹介</a>
          </li>
          <li>
            <a href="#assurance">3つの安心</a>
          </li>
          <li>
            <a href="#voice">先輩モデルさんの声</a>
          </li>
          <li>
            <a href="#flow">応募の流れ</a>
          </li>
          <li>
            <a href="#faq">よくあるご質問</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
