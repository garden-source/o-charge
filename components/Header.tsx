// components/Header.tsx
export default function Header() {
  return (
    <header className="p-4 bg-gray-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* ロゴまたはサイトタイトル */}
        <div className="text-xl font-bold">
          <a href="#hero">FetiModelSite</a>
        </div>

        {/* メニュー: ページ内アンカーリンク例 */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#feti-model">フェチモデルとは？</a>
            </li>
            <li>
              <a href="#studio">スタジオ紹介</a>
            </li>
            <li>
              <a href="#flow">応募の流れ</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
