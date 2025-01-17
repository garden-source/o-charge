// components/FetiModelSection.tsx
import Image from 'next/image';
import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function FetiModelSection() {
  return (
    <SectionWrapper id="fetimodel" backgroundColor="bg-purple">
      {/* タイトル */}
      <SectionHeading>フェチモデルとは？</SectionHeading>

      <section className="max-w-screen-md mx-auto mb-8">
        <p className="leading-relaxed text-center">
          フェチモデルとは特定の部位や行為に<br />
          嗜好を持った人を対象にした<br />
          動画に出演するモデルのこと。<br />
          たとえば「胸チラ」や「パンチラ」と聞くと<br />
          想像しやすいかもしれません。
        </p>
      </section>

      {/* セクション自体を中央寄せしたい */}
      <section className="max-w-xs mx-auto space-y-6">
        {/* 吹き出し① */}
        <div className="flex items-start space-x-2">
          {/* 吹き出し本体 */}
          <div className="relative w-[200px] p-4 bg-red rounded-xl speech-bubble">
            <p className="leading-relaxed font-jkg ">
              おさいふチャージはチラリズムや特定の行為に興奮する人たちに向けた作品を作っているよっ！
            </p>
          </div>
          {/* キャラクターイラスト（右側） */}
          <div className="w-36 h-36 relative">
            <Image
              src="/images/3-FetiModel/character1.png" // 実際のパスに置き換えてください
              alt="キャラクター1"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* 吹き出し② */}
        <div className="flex items-start space-x-2">
          {/* うさぎアイコン（左側） */}
          <div className="w-12 h-12 relative">
            <Image
              src="/images/3-FetiModel/character2.png" // 実際のパスに置き換えてください
              alt="ウサギ"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* 吹き出し本体 */}
          <div className="relative w-[300px] p-4 bg-red rounded-xl speech-bubble">
            <p className="leading-relaxed font-jkg ">
              AVと何が違うの？
            </p>
          </div>
        </div>

        {/* 吹き出し③ */}
        <div className="flex items-start space-x-2">
          {/* 吹き出し本体 */}
          <div className="relative w-[300px] p-4 bg-red rounded-xl speech-bubble">
            <p className="leading-relaxed font-jkg">
              AVは性的な行為をメインに描き、一般的な性的嗜好を持つ成人向け視聴者を対象とした作品に対し、
            </p>
          </div>
          {/* キャラクターイラスト（右側） */}
          <div className="w-16 h-16 relative">
            <Image
              src="/images/3-FetiModel/character1-icon.png" // 実際のパスに置き換えてください
              alt="キャラクター1"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* 吹き出し④ */}
        <div className="flex items-start space-x-2">
          {/* 吹き出し本体 */}
          <div className="relative w-[300px] p-4 bg-red rounded-xl speech-bubble">
            <p className="leading-relaxed font-jkg ">
              フェチ動画は特定の行為に興奮や満足を見いだす人を対象として作られる作品になるよっ！
            </p>
          </div>
          {/* キャラクターイラスト（右側） */}
          <div className="w-16 h-16 relative">
            <Image
              src="/images/3-FetiModel/character1-icon.png" // 実際のパスに置き換えてください
              alt="キャラクター1"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
