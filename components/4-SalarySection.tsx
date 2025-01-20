// components/SalarySection.tsx
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

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
        <span className="text-[#e13f55] font-bold text-lg">
          完全手渡し・日払い制
        </span>
        <br />
        お仕事したその日にGET
      </p>


    </SectionWrapper>
  );
}