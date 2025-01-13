// components/FaqSection.tsx
"use client"; // アコーディオンの開閉にクライアント側の状態管理を使用

import { useState } from "react";
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
    <section id="faq" className="p-8 bg-white">
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
    </section>
  );
}
