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
          フェチモデルとは特定の部位や行為に嗜好を持った人を対象にした
          動画に出演するモデルのこと。<br />
          たとえば「胸チラ」や「パンチラ」と聞くと
          想像しやすいかもしれません。
        </p>
      </section>

      {/* セクション自体を中央寄せしたい */}
      <section className="max-w-xs mx-auto space-y-6">
        {/* 吹き出し① */}
        <div className="flex items-start space-x-2">
          {/* 吹き出し本体 */}
          <div className="relative max-w-sm p-4 bg-pink-50 border border-pink-200 rounded-xl speech-bubble">
            <p className="leading-relaxed">
              おさいふチャージはチラリズムや
              特定の行為に興奮する人たちに
              向けた作品を作っているよっ！
            </p>
          </div>
          {/* キャラクターイラスト（右側） */}
          <div className="w-16 h-16 relative">
            <Image
              src="/images/character1.png" // 実際のパスに置き換えてください
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
              src="/images/rabbit.png" // 実際のパスに置き換えてください
              alt="ウサギ"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* 吹き出し本体 */}
          <div className="relative max-w-sm p-4 bg-pink-50 border border-pink-200 rounded-xl speech-bubble">
            <p className="leading-relaxed">
              AVと何が違うの？
            </p>
          </div>
        </div>

        {/* 吹き出し③ */}
        <div className="flex items-start space-x-2">
          {/* 吹き出し本体 */}
          <div className="relative max-w-sm p-4 bg-pink-50 border border-pink-200 rounded-xl speech-bubble">
            <p className="leading-relaxed">
              AVは性的な行為をメインに描き、<br />
              一般的な性的嗜好を持つ成人向け視聴者を
              対象とした作品に対し、
            </p>
          </div>
          {/* キャラクターイラスト */}
          <div className="w-14 h-14 relative">
            <Image
              src="/images/character2.png"
              alt="キャラクター2"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* 吹き出し④ */}
        <div className="flex items-start space-x-2">
          {/* 吹き出し本体 */}
          <div className="relative max-w-sm p-4 bg-pink-50 border border-pink-200 rounded-xl speech-bubble">
            <p className="leading-relaxed">
              フェチ動画は特定の行為に興奮や満足を
              見いだす人を対象として作られる作品に
              なるよっ！
            </p>
          </div>
          {/* キャラクターイラスト（左側） */}
          <div className="w-14 h-14 relative">
            <Image
              src="/images/character3.png"
              alt="キャラクター3"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
