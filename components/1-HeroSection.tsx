// components/HeroSection.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" backgroundColor="bg-white">

      <SectionHeading>HERO画像</SectionHeading>

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
