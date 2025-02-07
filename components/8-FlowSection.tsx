// components/FlowSection.tsx
"use client";

import { useState } from "react";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { CldImage } from 'next-cloudinary';

export default function FlowSection() {
  // ポップアップ（オーバーレイ）開閉管理
  const [showOverlay, setShowOverlay] = useState(false);

  // クリックされた画像・タグ管理
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // カカオ画像など任意の画像クリック時
  const handleKakaoImageClick = () => {
    setShowOverlay(true);
  };

  // オーバーレイを閉じる
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedImage(null);
  };

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
        <a
          href="https://line.me/ti/p/xp0_jLBhA4"
          target=""
          rel="noopener noreferrer"
          className="underline text-blue-400"
        >
          LINEでの応募はこちらから
        </a>
        <CldImage
          src="images/8-Flow/pe6uwo9twkszak8hi3ua"
          width={900}
          height={500}
          alt=""
          className="mx-auto w-[450px] h-auto mt-8 mb-4"
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


      <div className="mx-auto max-w-md sm:max-w-md md:max-w-md p-4 bg-[color:var(--bg-custom)]">
        {/* まず見出し */}
        <h4 className="w-full text-base font-bold mb-4 text-left underline">
          友達追加でLINE応募
        </h4>

        {/* その後に2カラムのflexレイアウト */}
        <div className="flex items-stretch gap-4">
          {/* 左カラム */}
          <div className="flex flex-col gap-4 w-[40%]">
            <div className="w-full h-auto flex flex-col items-center">
              <h5 className="w-full text-base font-bold mb-2 text-left">LINE</h5>
              <a
                href="https://line.me/ti/p/xp0_jLBhA4"
                target=""
                rel="noopener noreferrer"
                className="underline text-blue-400"
              >
                <CldImage
                  src="image/8-Flow/line-qr_gvgpjc"
                  width={500}
                  height={500}
                  alt=""
                  className="border-2 rounded-md border-gray-300 w-full h-auto object-cover"
                />
              </a>
            </div>

            <div className="w-full h-auto flex flex-col items-center">
              <h5 className="w-full text-base font-bold mb-2 text-left">カカオトーク</h5>
              {/* 画像をクリックでモーダルを開く */}
              <div onClick={handleKakaoImageClick} className="cursor-pointer">
                <CldImage
                  src="image/8-Flow/kakao-qr_toypg3"
                  width={500}
                  height={500}
                  alt="カカオトーク QR"
                  className="border-2 rounded-md border-gray-300 w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* 右カラム (下寄せ) */}
          <div className="w-[60%] flex flex-col justify-end">
            <p className="text-sm mb-4 text-center">
              画像を保存して友達追加したら
              「HPを見た」でご連絡ください♪
            </p>
            <CldImage
              src="image/8-Flow/flow_y5rj1z"
              width={600}
              height={500}
              alt="OCgroup Circle"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>


      <div id="mail_offer" className="mb-8"></div>
      {/* メールでご応募フォーム */}
      <div className="mx-auto max-w-md p-4 mt-8">
        <h4 className="text-lg font-bold mb-4 underline">メールでご応募</h4>

        {/* お名前 */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            お名前（ニックネーム可）
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-pink-400"
            placeholder=""
          />
        </div>

        {/* メールアドレス */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-pink-400"
            placeholder="xxxx@yyy.com"
          />
          <p className="text-sm text-gray-600 mt-1">
            ※ iCloud アドレスの方はこちらからのお返事が届きませんので、
            <br />
            他のメールアドレスか、LINE にてご応募ください。
          </p>
        </div>

        {/* 内容 */}
        <div className="mb-4">
          <label htmlFor="content" className="block mb-1 font-semibold">
            内容
          </label>
          <textarea
            id="content"
            rows={4}
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-pink-400"
            placeholder="「パーツモデル希望」と一言打ち込んでいただければご応募完了とさせていただきます。"
          />
        </div>

        {/* 送信ボタン */}
        <div className="text-center mt-4">
          {/* ① ボタンを包む div でグラデーション枠を表現 */}
          <div className="inline-block bg-gradient-to-r from-[#fbd3ee] to-[#a3c2fe] p-[3px] rounded-full">
            {/* ② 内側のボタンは単色背景 */}
            <button
              type="button"
              className="bg-[#f2f3ff] text-[#736b99] px-12 py-2 rounded-full border-4 border-transparent"
            >
              送信する
            </button>
          </div>
        </div>
      </div>
      {/* ==== ここからモーダル ==== */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-start justify-center z-50"
          onClick={handleCloseOverlay}
        >
          <div
            className="relative max-w-[80vw] h-[calc(50vh)] m-4 mt-20"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* 拡大画像 */}
            <CldImage
              src="images/Other/kakao-bigqr_in1h1t"
              width={500}
              height={500}
              alt="拡大画像"
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
      {/* ==== モーダルここまで ==== */}
    </SectionWrapper >
  );
}
