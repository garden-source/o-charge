// components/SalarySection.tsx
"use client";

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { CldImage } from 'next-cloudinary'; // Cloudinaryを利用

export default function SalarySection() {
  return (
    <SectionWrapper id="salary" backgroundColor="bg-pink">
      {/* タイトル */}
      <SectionHeading>お給料は？</SectionHeading>

      {/* 説明文 */}
      <p className="text-center mb-6 leading-relaxed">
        おさいふチャージは
        <br className="sm:hidden" />
        プロダクション事務所ではなく
        <br />
        コンテンツ作成メーカーのため
        <br />
        <span className="text-[#f94040] font-bold text-lg">
          完全手渡し・日払い制
        </span>
        <br />
        お仕事したその日にGET
      </p>

      {/* 画像の配置例 */}
      <div className="flex flex-col items-center">
        {/* 1) repeater.png (1:1) */}
        <div className="w-full max-w-sm sm:max-w-sm md:max-w-md">
          {/* width/height指定で1:1画像を取得し、表示も1:1にしたい場合 */}
          <CldImage
            src="images/4-Salary/new_svnlkm" // 例: Cloudinaryのpublic_id
            alt="新規価格"
            width={600}       // Cloudinary用のパラメータ (元画像に合わせて調整)
            height={600}      // height も同じ値で1:1
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 2) midashi.png (39:21) */}
        <div className="mt-8 relative w-full max-w-sm sm:max-w-sm md:max-w-md aspect-[13/4]">
          {/* fill を使って親要素のアスペクト比にフィットさせる */}
          <CldImage
            src="images/4-Salary/midashi_mrywmy"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* 3) new.png (1:1) */}
        <div className="mt-1 w-full max-w-sm sm:max-w-sm md:max-w-md">
          <CldImage
            src="images/4-Salary/repeater_y7mznn"
            alt="リピーター価格"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
