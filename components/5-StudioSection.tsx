// components/StudioSection.tsx
"use client";

import React, { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { CldImage } from 'next-cloudinary';

export default function StudioSection() {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleImageClick = (image: string, tags: string[]) => {
    setSelectedImage(image);
    setSelectedTags(tags);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedTags([]);
  };

  return (
    <SectionWrapper id="studio" backgroundColor="bg-gradient-to-b from-[#d1edf6] to-[#d1c6ee]">

      {/* タイトル */}
      <SectionHeading>スタジオ紹介</SectionHeading>

      {/* スタジオ写真 */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <CldImage
            // src="/images/5-Studio/photo1.jpg"
            src="images/5-Studio/qmpbx8hbbuet9jdylaet"
            width="500"
            height="400"
            alt="スタジオ1"
            className="w-full h-36 object-cover rounded-lg mb-4"
            onClick={() =>
              handleImageClick('images/5-Studio/qmpbx8hbbuet9jdylaet', [
                '# 撮影前はメイクのお時間',
                '# メイク道具ぜんぶあります◎',
                '# すっぴんでこれちゃう',
                '# 身バレ対策',
                '# 自分でメイクをしてきてもOK',
                '# 女性メイクスタッフ在中',
              ])
            }
          />
          <CldImage
            // src="/images/5-Studio/photo3.jpg"
            src='images/5-Studio/ky8wl8rqjgukttlidju4'
            width={500}
            height={500}
            alt="スタジオ3"
            className="w-full h-60 object-cover rounded-lg"
            onClick={() =>
              handleImageClick('images/5-Studio/ky8wl8rqjgukttlidju4', [
                '#モデル様控室',
                '#タブレット・全機種対応充電コード',
                '#Free Wi-Fi完備',
                '#冷暖房あり',
                '#ホットカーペット・冷蔵庫・電子レンジあり',
                '#一人の時間'
              ])
            }
          />
        </div>
        <div className="flex flex-col">
          <CldImage
            // src="/images/5-Studio/photo2.jpg"
            src="images/5-Studio/oifrvuhqpntiz74hncpt"
            width="500"
            height="500"
            alt="スタジオ2"
            className="w-full h-60 object-cover rounded-lg mb-4"
            onClick={() =>
              handleImageClick('images/5-Studio/oifrvuhqpntiz74hncpt', [
                '#衣装部屋',
                '#1000点以上あり',
                '#いろんな系統があるよ',
                '#撮影ごとにお着替え',
                '#〇〇風撮影にも',
                '#お洋服で印象操作'
              ])
            }
          />
          <CldImage
            src="images/5-Studio/zncbfxjlom8tqngvpg57"
            width={500}
            height={400}
            alt="スタジオ4"
            className="w-full h-36 object-cover rounded-lg"
            onClick={() =>
              handleImageClick('images/5-Studio/zncbfxjlom8tqngvpg57', [
                '#変装グッズ多数あり',
                '#ウィッグ',
                '#ストレートアイロン',
                '#ドライヤー',
                '#メガネ・マスク',
                '#身バレ対策'
              ])
            }
          />
        </div>

        {showMore && (
          <>
            <div className="flex flex-col">
              <CldImage
                src="images/5-Studio/jmohboshwthot90pb9yy"
                width={500}
                height={400}
                alt="スタジオ5"
                className="w-full h-36 object-cover rounded-lg mb-4"
                onClick={() =>
                  handleImageClick('images/5-Studio/jmohboshwthot90pb9yy', [
                    '#トイレ風セット',
                    '#〇〇風撮影に',
                    '#たくさん出るとお給料UP！？'
                  ])
                }
              />
              <CldImage
                src="images/5-Studio/q0g1dcssxynr5ga0gmdu"
                width={500}
                height={500}
                alt="スタジオ7"
                className="w-full h-60 object-cover rounded-lg"
                onClick={() =>
                  handleImageClick('images/5-Studio/q0g1dcssxynr5ga0gmdu', [
                    '#エレベーター風セット',
                    '#手作り',
                    '#〇〇風撮影に',
                    '#狭い空間でのハプニング'
                  ])
                }
              />
            </div>
            <div className="flex flex-col">
              <CldImage
                src="images/5-Studio/qldwqixhatvwjjtaczms"
                width={500}
                height={500}
                alt="スタジオ6"
                className="w-full h-60 object-cover rounded-lg mb-4"
                onClick={() =>
                  handleImageClick('images/5-Studio/qldwqixhatvwjjtaczms', [
                    '#リビング風セット',
                    '#いろんなセットがあるよ',
                    '#〇〇風撮影に',
                    '#セットは毎回組み替えてるよ！'
                  ])
                }
              />
              <CldImage
                src="images/5-Studio/mtz2c1z2x5d4ojbrivic"
                width={500}
                height={400}
                alt="スタジオ8"
                className="w-full h-36 object-cover rounded-lg"
                onClick={() =>
                  handleImageClick('images/5-Studio/mtz2c1z2x5d4ojbrivic', [
                    '#オフィスの倉庫風セット',
                    '#高いものを取るときに…',
                    '#〇〇風撮影に',
                    '#セットは毎回組み替えてるよ！'
                  ])
                }
              />
            </div>
          </>
        )}
      </div>

      {/* 「もっと見る」ボタン */}
      <div className="mt-8 inline-block w-full rounded-full bg-gradient-to-r from-[#f9daf2] to-[#dae6ff] p-1">
        <button
          onClick={handleShowMore}
          className="w-full bg-[#f2f3ff] text-[#736b99] px-12 py-2 rounded-full"
        >
          {showMore ? '閉じる' : 'もっと見る'}
        </button>
      </div>
      {/* オーバーレイ */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-start justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative max-w-[80vw] h-[calc(50vh)] m-4 mt-20">
            <CldImage
              src={selectedImage}
              width={1000}
              height={1000}
              alt="拡大画像"
              className="w-full h-full object-cover rounded-lg mb-2"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-4 text-3xl"
            >
              ×
            </button>
            <div className="text-white text-left mt-2">
              {selectedTags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
