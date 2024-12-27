// components/AssuranceSection.tsx
export default function AssuranceSection() {
    return (
      <section id="assurance" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">3つの安心</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 border rounded flex-1">
            <h3 className="font-semibold">1. セキュリティ</h3>
            <p>個人情報や撮影データの取り扱いを厳重に管理します。</p>
          </div>
          <div className="p-4 border rounded flex-1">
            <h3 className="font-semibold">2. サポート体制</h3>
            <p>未経験でも安心の研修＆フォロー体制をご用意。</p>
          </div>
          <div className="p-4 border rounded flex-1">
            <h3 className="font-semibold">3. 報酬保障</h3>
            <p>安定した収入が得られるよう、最低保障制度を設けています。</p>
          </div>
        </div>
      </section>
    );
  }
  