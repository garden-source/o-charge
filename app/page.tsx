// app/page.tsx
import HeroSection from "@/components/HeroSection";
import FetiModelSection from "@/components/FetiModelSection";
import SalarySection from "@/components/SalarySection";
import StudioSection from "@/components/StudioSection";
import AssuranceSection from "@/components/AssuranceSection";
import VoiceSection from "@/components/VoiceSection";
import FlowSection from "@/components/FlowSection";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  return (
    <>
      {/* メインコピー＋メイン説明＋どんなお仕事？ */}
      <HeroSection />

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
