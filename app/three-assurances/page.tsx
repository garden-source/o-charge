import type { Metadata } from 'next'
import SectionWrapper from '@/components/SectionWrapper'
import H3Heading from '@/components/H3Heading'
import H3HeadingSmall from '@/components/H3HeadingSmall'

export const metadata: Metadata = {
  title: '3つの安心 | 高収入モデルアルバイトのおさいふチャージ！',
  description: 'おさいふチャージが提供する3つの安心についてのご説明です。フェチ系パーツモデルのアルバイトで安心して働けます。',
  openGraph: {
    title: "3つの安心 | 高収入モデルアルバイトのおさいふチャージ！",
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
    <>
      <SectionWrapper id="three-assurances" backgroundColor="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-pink-50 rounded-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">アダルト行為一切なし！</h1>
            <H3HeadingSmall>ヘルスがなくても稼げる時代到来！？</H3HeadingSmall>
            
            <div className="border-b-2 border-purple-200 w-full mb-6 mx-auto"></div>
            
            {/* 安心ポイント説明ボックス */}
            <div 
              className="bg-gradient-to-r from-pink-200 via-purple-100 to-blue-200 rounded-4xl pb-1 mb-6"
              style={{ 
                background: 'linear-gradient(to right,rgb(252, 217, 237),rgb(206, 226, 251))',
                borderRadius: '1.7rem'
              }}
            >
              {/* 見出し部分 */}
              <div className="px-5 pt-2">
                <p className="text-lg font-semibold text-[rgb(109,89,122)] mb-1">ココが安心✓</p>
              </div>
              
              {/* 本文部分 - 白背景 */}
              <div 
                className="mx-1 bg-white p-4"
                style={{
                  borderBottomLeftRadius: '1.5rem',
                  borderBottomRightRadius: '1.5rem'
                }}
              >
                <p className="mb-4">
                  ヘルスサービスとは、性的な接触を含むサービスのこと。
                </p>
                
                <p className="mb-4">
                  AV出演もこの仕事に当てはまりますよね。
                </p>
                
                <p className="font-medium mb-3">おさいふチャージなら</p>
                
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="font-medium relative">
                      <span className="absolute bottom-0 left-0 w-full h-[60%] z-0" style={{ backgroundColor: '#fefdb5' }}></span>
                      <span className="relative z-10">完全非接触！</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="font-medium relative">
                      <span className="absolute bottom-0 left-0 w-full h-[60%] z-0" style={{ backgroundColor: '#fefdb5' }}></span>
                      <span className="relative z-10">性病リスクはもちろん0！</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="font-medium relative">
                      <span className="absolute bottom-0 left-0 w-full h-[60%] z-0" style={{ backgroundColor: '#fefdb5' }}></span>
                      <span className="relative z-10">男性器を見せられることもなし！</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="font-medium relative">
                      <span className="absolute bottom-0 left-0 w-full h-[60%] z-0" style={{ backgroundColor: '#fefdb5' }}></span>
                      <span className="relative z-10">接客じゃないから病みにくい！</span>
                    </span>
                  </li>
                </ul>
                
                <p className="pt-2">
                  安心安全にお仕事ができます！
                </p>
              </div>
            </div>
            
            {/* キャラクターコメント */}
            <div className="bg-pink-200 rounded-lg p-4 relative">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-purple-300 flex-shrink-0 overflow-hidden mr-3">
                  {/* キャラクターイラスト位置 */}
                  <div className="w-full h-full flex items-center justify-center text-purple-800">
                    <span className="text-2xl">👧</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    接触なしの添い寝店応募したら、デリヘルのお店だった...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
} 