// components/VoiceSection.tsx

import SectionHeading from '@/components/SectionHeading';

export default function VoiceSection() {
  return (
    <section id="voice" className="p-8 bg-white">
      {/* タイトル */}
      <SectionHeading>モデルさんの声</SectionHeading>
      <div className="space-y-4">
        {/* ダミー: 実際はAPI等で取得してもOK */}
        <blockquote className="p-4 bg-gray-100 rounded">
          <p>
            「初めは不安でしたが、スタッフさんが優しくフォローしてくれて安心でした。」
          </p>
          <cite className="block mt-2 text-sm text-gray-500">- @model_tanaka</cite>
        </blockquote>

        <blockquote className="p-4 bg-gray-100 rounded">
          <p>
            「自分の得意分野で活躍できるのが魅力。自由な働き方ができます！」
          </p>
          <cite className="block mt-2 text-sm text-gray-500">- @model_sayaka</cite>
        </blockquote>
      </div>
    </section>
  );
}
