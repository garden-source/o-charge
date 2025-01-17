// components/StudioSection.tsx
"use client";

import React, { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

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
          <img
            src="/images/5-Studio/photo1.jpg"
            alt="スタジオ1"
            className="w-full h-36 object-cover rounded-lg mb-4"
            onClick={() =>
              handleImageClick('/images/5-Studio/photo1.jpg', [
                '# 撮影前はメイクのお時間',
                '# メイク道具ぜんぶあります◎',
                '# すっぴんでこれちゃう',
                '# 身バレ対策',
                '# 自分でメイクをしてきてもOK',
                '# 女性メイクスタッフ在中',
              ])
            }
          />
          <img
            src="/images/5-Studio/photo3.jpg"
            alt="スタジオ3"
            className="w-full h-60 object-cover rounded-lg"
            onClick={() =>
              handleImageClick('/images/5-Studio/photo3.jpg', [
                '#スタジオ3',
                '#写真3',
                '#インスタ風3',
              ])
            }
          />
        </div>
        <div className="flex flex-col">
          <img
            src="/images/5-Studio/photo2.jpg"
            alt="スタジオ2"
            className="w-full h-60 object-cover rounded-lg mb-4"
            onClick={() =>
              handleImageClick('/images/5-Studio/photo2.jpg', [
                '#スタジオ2',
                '#写真2',
                '#インスタ風2',
              ])
            }
          />
          <img
            src="/images/5-Studio/photo4.jpg"
            alt="スタジオ4"
            className="w-full h-36 object-cover rounded-lg"
            onClick={() =>
              handleImageClick('/images/5-Studio/photo4.jpg', [
                '#スタジオ4',
                '#写真4',
                '#インスタ風4',
              ])
            }
          />
        </div>

        {showMore && (
          <>
            <div className="flex flex-col">
              <img
                src="/images/5-Studio/photo5.jpg"
                alt="スタジオ5"
                className="w-full h-36 object-cover rounded-lg mb-4"
                onClick={() =>
                  handleImageClick('/images/5-Studio/photo5.jpg', [
                    '#スタジオ5',
                    '#写真5',
                    '#インスタ風5',
                  ])
                }
              />
              <img
                src="/images/5-Studio/photo7.jpg"
                alt="スタジオ7"
                className="w-full h-60 object-cover rounded-lg"
                onClick={() =>
                  handleImageClick('/images/5-Studio/photo7.jpg', [
                    '#スタジオ7',
                    '#写真7',
                    '#インスタ風7',
                  ])
                }
              />
            </div>
            <div className="flex flex-col">
              <img
                src="/images/5-Studio/photo6.jpg"
                alt="スタジオ6"
                className="w-full h-60 object-cover rounded-lg mb-4"
                onClick={() =>
                  handleImageClick('/images/5-Studio/photo6.jpg', [
                    '#スタジオ6',
                    '#写真6',
                    '#インスタ風6',
                  ])
                }
              />
              <img
                src="/images/5-Studio/photo8.jpg"
                alt="スタジオ8"
                className="w-full h-36 object-cover rounded-lg"
                onClick={() =>
                  handleImageClick('/images/5-Studio/photo8.jpg', [
                    '#スタジオ8',
                    '#写真8',
                    '#インスタ風8',
                  ])
                }
              />
            </div>
          </>
        )}
      </div>

      {/* 「もっと見る」ボタン */}
      <div className="text-center mt-4">
        {/* ① ボタンを包む div でグラデーションを指定 */}
        <div className="inline-block bg-gradient-to-r from-[#fbd3ee] to-[#a3c2fe] p-[3px] rounded-full">
          {/* ② 内側のボタンは単色背景 */}
          <button
            onClick={handleShowMore}
            // もともとのクラスに加えて、グラデーション境界線が見やすいよう border は削除
            className="bg-[#f2f3ff] text-[#736b99] px-12 rounded-full border-4 border-transparent"
          >
            {showMore ? '閉じる' : 'もっと見る'}
          </button>
        </div>
      </div>

      {/* オーバーレイ */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-start justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative max-w-md h-[calc(28rem*1.3)] m-4 mt-20">
            <img
              src={selectedImage}
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
