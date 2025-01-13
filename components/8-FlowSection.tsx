// components/FlowSection.tsx

import SectionHeading from '@/components/SectionHeading';

export default function FlowSection() {
  return (
    <section id="flow" className="p-8 bg-gray-50">
      {/* タイトル */}
      <SectionHeading>応募の流れ</SectionHeading>

      <ol className="list-decimal list-inside pl-4 space-y-2">
        <li>お問い合わせフォーム(外部)からご連絡</li>
        <li>スタッフより面談日程のご案内</li>
        <li>面談・簡単な撮影テスト</li>
        <li>本契約後にお仕事スタート</li>
      </ol>

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
    </section>
  );
}
