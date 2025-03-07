// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 max-w-screen-md mx-auto">
      <div className="max-w-screen-md mx-auto">
        <div className="m-8">
          <h4 className="font-bold mb-2">コンテンツ</h4>
          <ul className="space-y-4 list-inside">
            <li>
              <a href="/#about-work" className="block">お仕事内容</a>
            </li>
            <li>
              <a href="/#feti-model" className="block">フェチモデルとは</a>
            </li>
            <li>
              <a href="/#salary" className="block">お給料について</a>
            </li>
            <li>
              <a href="/#studio" className="block">スタジオ紹介</a>
            </li>
            <li>
              <a href="/#assurance" className="block">3つの安心</a>
            </li>
            <li>
              <a href="/#voice" className="block">先輩モデルさんの声</a>
            </li>
            <li>
              <a href="/#flow" className="block">応募の流れ</a>
            </li>
            <li>
              <a href="/#faq" className="block">よくあるご質問</a>
            </li>
          </ul>
        </div>
        <div className="m-8">
          <h4 className="font-bold mb-2">公式SNS</h4>
          <ul className="space-y-4 list-inside">
            <li>
              <a href="https://x.com/OsaifuCharge" className="block">X</a>
            </li>
            <li>
              <a href="https://www.instagram.com/osaifu_max/" className="block">Instagram</a>
            </li>
            <li>
              <a href="https://tiktok.com/@osaifucharge" className="block">Tik Tok</a>
            </li>
            <li>
              <a href="https://kanto.qzin.jp/ocharge/?v=official" className="block">バニラサイト</a>
            </li>
          </ul>
        </div>
        <div className="m-8">
          <h4 className="font-bold mb-2">規約</h4>
          <ul className="space-y-4 list-inside">
            <li>
              {/* <a href="/privacy-policy" className="block">プライバシーポリシー</a> */}
              <a href="/privacy-policy" className="block">プライバシーポリシー</a>
            </li>

          </ul>
        </div>

        <div className="m-8">
          <p className="mt-2 text-sm text-gray-500 mb-[100px]">
            © {new Date().getFullYear()} おさいふチャージ
          </p>
        </div>
      </div>
    </footer >
  );
}
