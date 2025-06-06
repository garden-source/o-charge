// components/VoiceSection.tsx
"use client";
import dynamic from "next/dynamic";

const TwitterTimelineEmbed = dynamic(
  () => import("react-twitter-embed").then((mod) => mod.TwitterTimelineEmbed),
  { ssr: false }
); import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import { CldImage } from 'next-cloudinary';

export default function VoiceSection() {
  return (
    <SectionWrapper id="voice" backgroundColor="relative w-full">
      {/* 上の画像（右上に固定） */}
      <CldImage
        src="images/BG/a6a4qxyevea9m6umi8yi"
        width={700}
        height={400}
        alt=""
        className="absolute top-0 right-0 w-[350px] h-auto"
      />

      {/* 新たに追加する右上画像（手前に表示） */}
      <CldImage
        src="images/BG/jbrdkzwgmwk6olwe2vks"
        width={200}
        height={200}
        alt=""
        className="
          absolute
          top-5
          right-5
          w-[100px]  /* 大きさはお好みで */
          h-auto
          z-[2]       /* 既存の要素より前面に */
        "
      />

      {/* 下の画像（左下に固定） */}
      <CldImage
        src="images/BG/jr7xw2z8rwrnerbdn41b"
        width={700}
        height={400}
        alt=""
        className="absolute bottom-0 left-0 w-[350px] h-auto"
      />

      <div className="relative z-[1]">
        {/* タイトル */}
        <SectionHeading>モデルさんの声</SectionHeading>
        <div className="space-y-4">
          <p className="text-center">
            お仕事終わりに記入いただいているアンケート大公開！！
          </p>
          {/* モバイル用の表示 */}
          <p className="text-center md:hidden">
            <a
              href="https://twitter.com/OsaifuCharge"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              最新のものは公式Xにて随時更新中♪
            </a>
          </p>
          <div className="hidden md:flex justify-center">
            <div className="m-4">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="OsaifuCharge"
                options={{ height: 600, width: 350 }}
                noHeader
                noFooter
                theme="light"
                autoHeight={false}
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="https://kanto.qzin.jp/ocharge/blog/?v=official" target="" rel="noopener noreferrer">
            <CldImage
              src="images/7-Voice/hhgcj1kjzo8lhwcz9wul"
              width={900}
              height={500}
              alt=""
              className="mx-auto w-[450px] h-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
          <p className="text-sm text-gray-600 mb-2">
            【画像をクリックして口コミを見る】
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
