// components/StudioSection.tsx
"use client";

import React, { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function StudioSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SectionWrapper id="studio" backgroundColor="bg-gradient-to-b from-[#d1edf6] to-[#e4dbf9]">

      {/* タイトル */}
      <SectionHeading>スタジオ紹介</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 仮の画像URLを配置。必要に応じてpublicフォルダやCDN画像を使用 */}
        <img src="/studio1.jpg" alt="Studio 1" className="w-full h-auto" />
        <img src="/studio2.jpg" alt="Studio 2" className="w-full h-auto" />
        <img src="/studio3.jpg" alt="Studio 3" className="w-full h-auto" />
      </div>
      <p className="mt-4">
        こんな雰囲気のスタジオで撮影します。完全個室もあり安心です。
      </p>

      {/* もっと見るボタン */}
      <div className="mt-6">
        <button
          onClick={handleToggle}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          {isOpen ? '閉じる' : 'もっと見る'}
        </button>
      </div>

      {/* アコーディオンで表示するコンテンツ */}
      {isOpen && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p className="mb-2">
            さらに詳しいスタジオ情報がここに入ります。
            例: 撮影ブースの詳細や設備の紹介など。
          </p>
          <img
            src="/studio4.jpg"
            alt="Studio 4"
            className="w-full h-auto mb-2"
          />
          <p>
            例: 照明機材やメイクスペースの写真など、より具体的なスタジオ情報を載せられます。
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}