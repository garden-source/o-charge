// components/FetiModelSection.tsx
export default function FetiModelSection() {
    return (
      <section id="feti-model" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">フェチモデルとは？</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 border rounded">
            <p>
              フェチモデルは、特定のフェティッシュを表現する撮影や作品づくりに参加するモデルさんを指します。
            </p>
          </div>
          <div className="p-4 border rounded">
            <p>
              吹き出し形式で何か説明を入れたい場合は、CSSや背景画像を工夫して装飾しましょう。
            </p>
          </div>
        </div>
      </section>
    );
  }
  