// components/FooterMenu.tsx
"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";

const FooterMenu = () => {
  // モーダル表示制御
  const [showOverlay, setShowOverlay] = useState(false);

  // カカオ画像がクリックされた時
  const handleKakaoClick = () => {
    setShowOverlay(true);
  };

  // モーダルを閉じる
  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  // メール画像クリック → mail_offer へスクロール
  const handleMailClick = () => {
    const mailOfferSection = document.getElementById("mail_offer");
    if (mailOfferSection) {
      mailOfferSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="bg-[#4b4a4d] p-4 max-w-screen-md mx-auto fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-between">
          <div onClick={handleMailClick} className="flex flex-col items-center flex-1 border-r border-gray-400 min-w-[50px]">
            <CldImage
              src="images/Other/qaint4gqgolot0nhxc2z"
              width={140}
              height={140}
              alt="メール"
              className="h-12 w-auto"
            />
          </div>

          {/* カカオトーク (クリックでモーダル開く) */}
          <div className="flex flex-col items-center flex-1 border-r border-gray-400 min-w-[80px]">
            <div onClick={handleKakaoClick} className="cursor-pointer">
              <CldImage
                src="images/Other/ylrehplbfz0t0iseeef0"
                width={140}
                height={140}
                alt="カカオトーク"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* LINE (リンク) */}
          <div className="flex flex-col items-center flex-1 min-w-[50px]">
            <a
              href="https://line.me/ti/p/xp0_jLBhA4"
              target=""
              rel="noopener noreferrer"
            >
              <CldImage
                src="images/Other/qydrrimsegmulyishjub"
                width={140}
                height={140}
                alt="LINE"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </nav>

      {/* ==== モーダル（オーバーレイ） ==== */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleCloseOverlay}
        >
          <div
            className="relative max-w-[80vw] h-[calc(50vh)] m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 拡大画像 */}
            <CldImage
              src="images/Other/kakao-bigqr_in1h1t"
              width={500}
              height={500}
              alt="カカオQR拡大"
              className="w-full h-full object-cover rounded-lg mb-2"
            />
            {/* 閉じるボタン */}
            <button
              onClick={handleCloseOverlay}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-4 text-3xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterMenu;
