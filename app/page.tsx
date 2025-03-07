"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [showAgeCheck, setShowAgeCheck] = useState(true);

  useEffect(() => {
    // 何もなし => 毎回モーダルが表示される
  }, []);

  const handleEnter = () => {
    setShowAgeCheck(false);
  };

  const handleExit = () => {
    window.location.href = "http://www.google.co.jp/";
  };

  return (
    <>
      {/* 18歳認証モーダル */}
      {showAgeCheck && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div
            className="bg-white/90 w-[90%] max-w-md p-6 rounded shadow relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-4">
              <img
                src="/images/Other/modal_logo.png"
                width="350"
                height="100"
                alt="おさいふチャージ"
                className="mx-auto"
              />
            </p>

            <p className="text-center mb-4">
              このサイトは成人向けの情報を含みますので、<br />
              18歳未満の方の閲覧を固くお断りいたします。
            </p>

            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={handleExit}
                className="border-none bg-transparent p-0"
              >
                <img
                  src="/images/Other/modal_leave.png"
                  width="125"
                  height="40"
                  alt="LEAVE"
                />
              </button>

              <img
                src="/images/Other/modal_confirm.png"
                width="100"
                height="107"
                alt=""
              />

              <button
                onClick={handleEnter}
                className="border-none bg-transparent p-0"
              >
                <img
                  src="/images/Other/modal_enter.png"
                  width="125"
                  height="40"
                  alt="ENTER"
                />
              </button>
            </div>
          </div>
        </div>
      )}

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
