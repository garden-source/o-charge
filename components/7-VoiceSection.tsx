// components/VoiceSection.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function VoiceSection() {
  return (
    <SectionWrapper id="voice" backgroundColor="relative w-full">
      {/* 上の画像（右上に固定） */}
      <img
        src="/images/BG/voice-purple-top.png"
        alt=""
        className="absolute top-0 right-0 w-[350px] h-auto"
      />

      {/* 新たに追加する右上画像（手前に表示） */}
      <img
        src="/images/BG/voice-star.png"
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
      <img
        src="/images/BG/voice-purple-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-[350px] h-auto"
      />

      <div className="relative z-[1]">
        {/* タイトル */}
        <SectionHeading>モデルさんの声</SectionHeading>
        <div className="space-y-4">
          {/* ダミー: 実際はAPI等で取得してもOK */}
          <blockquote className="p-4">
            <p>
              「初めは不安でしたが、スタッフさんが優しくフォローしてくれて安心でした。」
            </p>
            <cite className="block mt-2 text-sm text-gray-500">- @model_tanaka</cite>
          </blockquote>

          <blockquote className="p-4">
            <p>
              「自分の得意分野で活躍できるのが魅力。自由な働き方ができます！」
            </p>
            <cite className="block mt-2 text-sm text-gray-500">- @model_sayaka</cite>
          </blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
}
