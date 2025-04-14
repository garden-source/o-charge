import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アダルト行為一切なし！ | 高収入モデルアルバイトのおさいふチャージ！',
  description: 'おさいふチャージが提供する3つの安心についてのご説明です。フェチ系パーツモデルのアルバイトで安心して働けます。',
  openGraph: {
    title: "アダルト行為一切なし！ | 高収入モデルアルバイトのおさいふチャージ！",
    description: "おさいふチャージが提供する3つの安心についてのご説明です。フェチ系パーツモデルのアルバイトで安心して働けます。",
    url: "https://o-charge.net/three-assurances",
    siteName: "高収入モデルアルバイトのおさいふチャージ！",
    images: [
      {
        url: "https://res.cloudinary.com/dvwy63ef7/image/upload/v1/images/1-Hero/top_wllyhi?_a=BAVAZGIB0",
        width: 800,
        height: 600,
        alt: "高収入モデルアルバイトのおさいふチャージ！",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
}

export default function ThreeAssurancesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">アダルト行為一切なし！</h1>
      {/* ここにコンテンツを追加 */}
    </div>
  )
} 