// components/FaqSection.tsx
"use client"; // アコーディオンの開閉にクライアント側の状態管理を使用

import { useState } from "react";
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

const faqs = [
  {
    question: "未経験でもパーツモデルのアルバイトはできますか？",
    answer: (
      <>
        もちろんです！99％のモデル様が未経験からスタートしています！！<br />
        特別な技術も必要なくできてしまうので、リラックスしてお越しいただければ幸いです♪
      </>
    ),
  },
  {
    question: "あまり容姿に自信がないのですが、できるお仕事はありますか？",
    answer:
      "あります！年代やスタイルなどを重視したコンテンツではないため、やる気と勇気さえあれば可能な限り稼ぐお手伝いをさせていただきます◎",
  },
  {
    question: "アルバイト代は日払いですか？",
    answer: (
      <>
        パーツモデルの撮影後、アルバイトしていただいたお給料は【当日に現金で全額手渡し】させて頂く日払い制を取っています。<br />
        またその際、交通費も上乗せしてお渡ししております。
      </>
    ),
  },
  {
    question: "先輩モデルさんの口コミもよく、挑戦してみたいけど正直身バレが心配です･･･",
    answer: (
      <>
        これは一番気になる問題だと思います。<br />
        弊社が提供するコンテンツは普通のアダルトビデオにあるような「カラミ」と呼ばれるエッチな要素、ノーマルな人が思いつく性的な要素が全く無いジャンルのためバレにくくなっております。<br />
        変わった撮影ですので流通数が圧倒的に少なく、希少性が高いのでバレる要素が低いのです。(日本人200万人に1人くらいの割合でしか購入されない)<br />
        また、専属のヘアメイク担当による変装も承っておりますので雰囲気を変えて撮影に挑めばより身バレ防止に繋がります！
      </>
    ),
  },
  {
    question: "パーツモデルの面接はどんな感じですか？",
    answer: (
      <>
        日暮里にある面接センターにお越しいただき、お仕事内容の詳細やメリットデメリットについてお話させていただきます。<br />
        文面だけではご不安事も尽きないと思いますので、ぜひこの場を活用していただければと思います！
      </>
    ),
  },
  {
    question: "会社や家族に税金関係でアルバイトしてることがバレることはありますか？",
    answer:
      "ありません。これは給与と支払報酬の違いです。もしご不安であれば、詳しい税金の仕組みをスタッフにお尋ねください。",
  },
  {
    question: "提示された金額から源泉徴収は引かれますか？",
    answer: (
      <>
        引かれません。弊社では皆様の代わりに源泉所得税を負担し納税しております。ですので額面通りお給料を受け取っていただくことが可能です。<br />
        また、自営業などをされていて、確定申告をご自身でされている方など用に支払調書もお出ししています。
      </>
    ),
  },
  {
    question: "交通費は出ますか？",
    answer: (
      <>
        首都圏のフェチ、パーツモデルさんには交通費をお出ししております！<br />
        首都圏以外のパーツモデルさんには条件はございますが、上限2万円まで交通費をお出しいたします。
      </>
    ),
  },
  {
    question: "遠方に住んでいるのですがお仕事することは可能でしょうか？",
    answer: (
      <>
        もちろん可能です！面接はオンラインでも対応できますのでご相談いただければ幸いです。名古屋・北海道から来られたパーツモデルさんもいらっしゃいます。交通費も出ますので在住エリアに関係なくお問合せいただけると嬉しいです！
      </>
    ),
  },
  {
    question: "アルバイトは何度来てもいいですか？また、お給料は変わりますか？",
    answer: (
      <>
        可能です。一度きりでも大丈夫ですし、何度もリピートしてお越しいただいても大丈夫です！<br />
        こちらから勧誘することは致しませんので、ご都合の良い時やお小遣いを稼ぎたい時にご連絡いただければ幸いです！<br />
        また、リピーター様は基本報酬がUPしますので初回よりも稼ぎやすくなっております♪
      </>
    ),
  },
  {
    question: "個人撮影のスタジオなんですか？",
    answer: (
      <>
        違います。おさいふチャージの母体は長年の実績がある映像、コンテンツ制作会社（株式会社）です。<br />
        <br />
        個人撮影は撮影する方の「趣味」ですが、こちらは「プロ」の制作者達が対応致します。モデルさんの立場からすれば、個人の「欲」に対応するのか、プロの「仕事」に対応するのかという極めて大きな違いがあると思います。<br />
        <br />
        また、個人撮影には報酬未払いや強要などのトラブルがつきものですので危険性も潜んでおりますが、長年の実績のある法人の運営なのでその様な心配もございません。安心してお越しください。
      </>
    ),
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
            <div key={index} className="flex items-start">
              <div className="flex-1 bg-[#f9daf2] rounded">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start px-4 py-2 bg--[#f9daf2] text-sm font-normal"
                >
                  <div className="flex items-top">
                    <div className="text-2xl mr-3 text-[#aa57c1]">Q</div>
                    <div className="flex-1 text-left text-sm">
                      {faq.question}
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="flex items-start px-4 py-2 bg-gradient-to-b from-[#f9daf2] to-[#dae6ff] text-sm font-normal rounded-b">
                    <div className="flex items-top">
                      <div className="text-2xl mr-3 text-[#aa57c1]">A</div>
                      <div className="flex-1">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
          before:bg-[url('https://res.cloudinary.com/dvwy63ef7/image/upload/q_auto,f_auto/images/BG/d6hig8nb8vl22edtwfcx.png')] 
          before:opacity-50
          before:bg-repeat 
          before:bg-[length:15px_15px]
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
