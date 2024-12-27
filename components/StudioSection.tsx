// components/StudioSection.tsx
export default function StudioSection() {
    return (
      <section id="studio" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">スタジオ紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 仮の画像URLを配置。必要に応じてpublicフォルダやCDN画像を使用 */}
          <img src="/studio1.jpg" alt="Studio 1" className="w-full h-auto" />
          <img src="/studio2.jpg" alt="Studio 2" className="w-full h-auto" />
          <img src="/studio3.jpg" alt="Studio 3" className="w-full h-auto" />
        </div>
        <p className="mt-4">
          こんな雰囲気のスタジオで撮影します。完全個室もあり安心です。
        </p>
      </section>
    );
  }
  