// components/FlowSection.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function FlowSection() {
  return (
    <SectionWrapper id="flow" backgroundColor="bg-flow-tile bg-repeat bg-128-128 w-full">
      {/* タイトル */}
      <SectionHeading>応募の流れ</SectionHeading>
      <div className="p-4 text-center">
        <p>
          応募条件：18歳以上（高校生不可）〜40歳未満
        </p>
        <img
          src="/images/8-Flow/1.png"
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <p>
          LINEでの応募はこちらから
        </p>
        <img
          src="/images/8-Flow/2.png"
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <img
          src="/images/8-Flow/3.png"
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <img
          src="/images/8-Flow/4.png"
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
        <img
          src="/images/8-Flow/5.png"
          alt=""
          className="mx-auto w-[450px] h-auto mb-4"
        />
      </div>
      {/* 外部フォームへのリンク */}
      <div className="mt-6">
        <a
          href="https://docs.google.com/forms/..."  // 例: Googleフォームなど
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          外部フォームへ移動
        </a>
      </div>
    </SectionWrapper >
  );
}
