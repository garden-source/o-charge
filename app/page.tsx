// app/page.tsx
import HeroSection from "@/components/1-HeroSection";
import AboutWorkSection from "@/components/2-AboutWorkSection";
import FetiModelSection from "@/components/3-FetiModelSection";
import SalarySection from "@/components/4-SalarySection";
import StudioSection from "@/components/5-StudioSection";
import AssuranceSection from "@/components/6-AssuranceSection";
import VoiceSection from "@/components/7-VoiceSection";
import FlowSection from "@/components/8-FlowSection";
import FaqSection from "@/components/9-FaqSection";

export default function HomePage() {
  return (
    <>
      {/* メインコピー＋メイン説明＋どんなお仕事？ */}
      <HeroSection />

      {/* フェチモデルとは？吹き出し形式 */}
      <AboutWorkSection />

      {/* フェチモデルとは？吹き出し形式 */}
      <FetiModelSection />

      {/* 料金体系 */}
      <SalarySection />

      {/* ギャラリー／画像タイル */}
      <StudioSection />

      {/* 3つの安心 */}
      <AssuranceSection />

      {/* モデルさんの声 */}
      <VoiceSection />

      {/* 応募の流れ（フォーム） */}
      <FlowSection />

      {/* よくあるご質問 (アコーディオン) */}
      <FaqSection />
    </>
  );
}
