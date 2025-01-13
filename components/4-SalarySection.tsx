// components/SalarySection.tsx
import Image from 'next/image';
import React from 'react';

export default function SalarySection() {
  return (
    <section className="max-w-screen-md mx-auto my-8 px-4">
      {/* タイトル */}
      <h2 className="text-2xl font-bold text-center mb-4">お給料は？</h2>
      <hr className="border-gray-300 mb-4" />
      
      {/* 説明文 */}
      <p className="text-center mb-6 leading-relaxed">
        おさいふチャージは
        <br className="sm:hidden" />
        プロダクション事務所ではなく
        <br />
        コンテンツ作成メーカーのため
        <br />
        <span className="text-red-500 font-bold text-lg">
          完全手渡し・日払い制
        </span>
        <br />
        お仕事したその日にGET
      </p>

      {/* 四角い画像１ */}
      <div className="flex justify-center mb-4">
        <Image
          src="/images/salary-box-1.png"
          alt="10分 35,000円"
          width={400}
          height={80}
        />
      </div>

      {/* 四角い画像２ */}
      <div className="flex justify-center mb-4">
        <Image
          src="/images/salary-box-2.png"
          alt="半日 70,000円"
          width={400}
          height={80}
        />
      </div>

      {/* 四角い画像３ */}
      <div className="flex justify-center mb-4">
        <Image
          src="/images/salary-box-3.png"
          alt="リピート料金"
          width={400}
          height={80}
        />
      </div>

      {/* 四角い画像４ */}
      <div className="flex justify-center">
        <Image
          src="/images/salary-box-4.png"
          alt="リピート料金"
          width={400}
          height={80}
        />
      </div>
    </section>
  );
}