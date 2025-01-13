// components/FaqSection.tsx
"use client"; // アコーディオンの開閉にクライアント側の状態管理を使用

import { useState } from "react";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

const faqs = [
  {
    question: "未経験でも大丈夫ですか？",
    answer: "もちろんです。スタッフが一からサポートしますのでご安心ください。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "身バレ対策はありますか？",
    answer:
      "撮影時のメイクやマスクなど、個人を特定されにくい工夫をしています。",
  },
  {
    question: "年齢制限はありますか？",
    answer: "基本的には18歳以上であれば大丈夫です。ただし学生は不可です。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" backgroundColor="bg-purple relative w-full overflow-hidden">
      {/* コンテンツを包む要素（疑似要素を重ねるために relative + z-index）*/}
      <div className="relative z-10 p-8">
        {/* タイトル */}
        <SectionHeading>よくあるご質問</SectionHeading>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-2 bg-gray-200 font-semibold"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 疑似要素を使って背景だけを回転させる */}
      <div
        className="
          absolute inset-0
          -z-0
          before:content-[''] 
          before:absolute 
          before:inset-0 
          before:bg-[url('/images/faq-tile.png')] 
          before:opacity-30
          before:bg-repeat 
          before:bg-[length:30px_30px]
          /* 回転のための変形を適用 */
          before:rotate-45
          /* rotate を効かせるには transform が有効になっている必要がある */
          before:transform
          /* 回転の中心を指定 (デフォルトは中心) */
          before:origin-center
          /* 回転すると四隅が足りなくなるので3倍に拡大 */
          before:scale-[3]
        "
      >
      </div>
    </SectionWrapper>
  );
}
