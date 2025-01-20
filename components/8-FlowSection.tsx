// components/FlowSection.tsx
"use client";

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { CldImage } from 'next-cloudinary';

export default function FlowSection() {
  return (
    <SectionWrapper id="flow" backgroundColor="bg-flow-tile bg-repeat bg-128-128 w-full">
      {/* タイトル */}
      <SectionHeading>応募の流れ</SectionHeading>
      <div className="p-4 text-center">
        <p className='text-sm mb-2'>
          応募条件：18歳以上（高校生不可）〜40歳未満
        </p>
        <CldImage
          src="images/8-Flow/sdifdfs4mil1aesnzyrd"
          width={900}
          height={500}
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <p className='text-sm m-4'>
          LINEでの応募はこちらから
        </p>
        <CldImage
          src="images/8-Flow/pe6uwo9twkszak8hi3ua"
          width={900}
          height={500}
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <CldImage
          src="images/8-Flow/rmvcrfuoo76kzxy7k6ec"
          width={900}
          height={500}
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <CldImage
          src="images/8-Flow/gjkgeo4canmlmk8f6dwn"
          width={900}
          height={500}
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <CldImage
          src="images/8-Flow/soklvk6ks8zebdoh2wlz"
          width={900}
          height={500}
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
      </div>
      {/* 外部フォームへのリンク */}
      <div className="mt-6">
        <a
          href="https://docs.google.com/forms/..."  // 例: Googleフォームなど
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          外部フォームへ移動
        </a>
      </div>
    </SectionWrapper >
  );
}
