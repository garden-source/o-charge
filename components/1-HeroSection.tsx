// components/HeroSection.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" backgroundColor="bg-white">

      <SectionHeading>フェチモデルになってみませんか？</SectionHeading>

      <p className="text-center max-w-2xl">
        ここにメインとなる説明を配置。どんなお仕事なのか、初心者でも大丈夫か、などの概要を簡潔にまとめます。
      </p>
      {/* CTAボタンなどを置いてもOK */}
      <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded">
        応募はこちら
      </button>
    </SectionWrapper>
  );
}
