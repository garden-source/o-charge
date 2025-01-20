// components/HeroSection.tsx
"use client";

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { CldImage } from 'next-cloudinary';

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" backgroundColor="bg-white">

      <SectionHeading>HERO画像</SectionHeading>
      {/* <CldImage
        width="960"
        height="600"
        src="images/8-Flow/gjkgeo4canmlmk8f6dwn"
        sizes="100vw"
        alt="Description of my image"
      /> */}



      <p className="text-center max-w-2xl">
        未設定
      </p>
      {/* CTAボタンなどを置いてもOK */}
      <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded">
        応募はこちら
      </button>
    </SectionWrapper>
  );
}
