// components/HeroSection.tsx
"use client";

import SectionWrapper from '@/components/SectionWrapper';
import { CldImage } from 'next-cloudinary';

export default function HeroSection() {
  return (
    <div id="hero" className="w-full max-w-full">
      <div className="relative w-full aspect-[65/24]">
        <CldImage
          src="images/1-Hero/top_wllyhi"
          alt="おさいふチャージ"
          fill
          className="object-contain w-full h-auto"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>
    </div>
  );
}
