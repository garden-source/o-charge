// components/Footer.tsx
import FooterMenu from "@/components/FooterMenu";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 mt-10">
      <div className="max-w-4xl mx-auto">
        {/* フッターメニュー (SNSリンクなど) */}
        <FooterMenu />

        <div className="mt-4">
          {/* プライバシーポリシーへのリンク例 */}
          <a href="#privacy-policy" className="text-sm text-gray-600">
            プライバシーポリシー
          </a>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          © 2024 FetiModelSite
        </p>
      </div>
    </footer>
  );
}
