"use client"

import SectionWrapper from '@/components/SectionWrapper'
import H3HeadingSmall from '@/components/H3HeadingSmall'
import SpeechBubbleLeft from '@/components/SpeechBubbleLeft'
import SpeechBubbleRight from '@/components/SpeechBubbleRight'
import { CldImage } from 'next-cloudinary'
import { useScrollToHash } from '@/utils/useScrollToHash'

export default function ThreeAssurancesPage() {
  // ページ読み込み時にハッシュフラグメントがあれば自動スクロール
  useScrollToHash(80); // ヘッダーの高さに合わせて調整（80px）

  return (
    <>
      <SectionWrapper id="three-assurances" backgroundColor="bg-[#fff9f7]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-pink-50 rounded-lg p-6">
              <h1 className="text-3xl font-bold text-center mb-2">アダルト行為一切なし！</h1>
              <H3HeadingSmall>ヘルスがなくても稼げる時代到来！？</H3HeadingSmall>

              <div className="border-b-2 border-purple-200 w-full mb-6 mx-auto"></div>

              {/* 安心ポイント説明ボックス */}
              <div
                className="bg-gradient-to-r from-pink-200 via-purple-100 to-blue-200 rounded-4xl pb-1"
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
            </div>

            <SpeechBubbleLeft
              content="接触なしの添い寝店応募したら、デリヘルのお店だった…"
              characterSrc="images/other/feel_ikari_jsymuo"
              characterAlt=""
              bubbleBgColor="#fde0e0"
            />
            <SpeechBubbleRight
              content="チャトレをノンアダでしてもお客さんがつかないし、知り合いに出会うリスクが高くて怖いなぁ"
              characterSrc="images/other/feel_tameiki_otu0u4"
              characterAlt=""
            />
            <SpeechBubbleLeft
              content="やっぱりエッチがないと稼げないの？？？"
              characterSrc="images/other/feel_awate-left_faxrj1"
              characterAlt=""
              bubbleBgColor="#fde0e0"
            />

            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                お仕事を探しているといろんな壁にぶつかりますよね。
              </p>
              <p className="leading-relaxed mb-4">
                昨今では、「ヘルスプレイがないとまともに稼げない」なんていわれることも…
              </p>
              <p className="leading-relaxed">
                ここではおさいふチャージの３つの安心についてより詳しくご紹介していきます。
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl -mx-4 md:mx-auto">
          <CldImage
            src="images/three-assurances/no-adult_yys7gv"
            width={1200}
            height={400}
            alt="アダルト行為一切なし"
            className="w-full h-auto"
            id="no-adult"
          />
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <SpeechBubbleRight
              content="できることなら接触がない高収入のお仕事をしたいなぁ"
              characterSrc="images/other/feel_tameiki_otu0u4"
              characterAlt=""
            />

            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                おさいふチャージに来ていただいているモデル様からよくこういったお声を伺うことがあります。
              </p>
              <p className="leading-relaxed mb-4">
                昼職とは別に、チャットレディやガールズバーで働いてるけど、チップがない日は全く稼げない…など。

              </p>
              <p className="leading-relaxed">
                実際、
                <span className="font-bold relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-[60%] z-1" style={{ backgroundColor: '#fefdb5', opacity: 0.8 }}></span>
                  <span className="relative z-2">ソフトサービスでは稼ぎにくくなった</span>
                </span>
                ことは事実です。
              </p>

              {/* 枠線付きボックス */}
              <div className="mt-10 mb-8 relative">
                {/* 見出し部分 - 枠の上に重ねる */}
                <div className="absolute -top-2.5 left-8 px-2 bg-[#fff9f7]">
                  <p className="text-md font-bold whitespace-nowrap text-[#a27b9d]">ソフトサービスで稼ぎにくくなった理由</p>
                </div>

                <div className="border-4 border-[#a27b9d] p-5 pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>日本全体が<span className="text-blue-500">不景気傾向</span>にある</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>風俗系の夜職で働く女の子が急増したため<span className="text-blue-500">競争がより激しく</span>なった</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>業界全体の<span className="text-blue-500">低単価化</span>が止まらない</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <SpeechBubbleLeft
              content="そもそも『ソフトサービス』ってどんなものなの？"
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <SpeechBubbleRight
              content={`一般的な『ソフトサービス』は
              🩵 お客様からのボディタッチがない
              🩵 キス・フェラ・素股などがなく、
              　　手だけで行うサービス
              🩵服を脱がなくてOK
              などがあるよっ！`}
              characterSrc="images/other/feel_glasan_u7zps4"
              characterAlt=""
            />

            <SpeechBubbleRight
              content="『ソフトサービス』の定義ははっきりときまっているわけではないのがややこしいところなんだけどね…"
              characterSrc="images/other/feel_glasan_u7zps4"
              characterAlt=""
            />

            <SpeechBubbleLeft
              content="たしかにお店や自分がどんなサービスをソフトと思うかはその人次第だもんね"
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                いざ高収入系のお仕事を探す際、ソフトサービスのオナクラやメンズエステ、チャットレディ等に挑戦したくなりますよね。
              </p>
              <p className="leading-relaxed mb-4">
                しかし敷居が低い分、より競争が激しく、6時間待機してもお客がつかないなんてことはよくある話。
              </p>
              <p className="leading-relaxed">
                また昨今問題視されている立ちんぼの影響で、本番行為まで1～2万円で行えてしまうことが増え、業界としての需要が落ち込んでいるのが現状です。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl -mx-4 md:mx-auto">
          <CldImage
            src="images/three-assurances/hosyonashi_e6qqdw"
            width={1200}
            height={400}
            alt="ヘルスをしても稼げる保証はない"
            className="w-full h-auto"
            id="no-guarantee"
          />
        </div>
        <div className="max-w-md mx-auto space-y-6">
          <SpeechBubbleRight
            content="ここで登場！フェチ・パーツモデルアルバイト！！"
            characterSrc="images/other/feel_nomal_gug0dm"
            characterAlt=""
          />

          {/* 枠線付きボックス */}
          <div className="mt-10 mb-8 relative">
            {/* 見出し部分 - 枠の上に重ねる */}
            <div className="absolute -top-2.5 left-8 px-2 bg-[#fff9f7]">
              <p className="text-md font-bold whitespace-nowrap text-[#eb9595]">モデルのお仕事が稼げる理由</p>
            </div>

            <div className="border-4 border-[#eb9595] p-5 pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-800 mr-2">•</span>
                  <span>出演料として支払われるため、客入りや<span className="text-[#eb8f7f]">閑散期</span>が関係ない！</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-800 mr-2">•</span>
                  <span>女の子同士の<span className="text-[#eb8f7f]">競争に参加しなくて良い◎</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-800 mr-2">•</span>
                  <span><span className="text-[#eb8f7f]">バックが引かれない</span>から風俗よりも高時給♪</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            おさいふチャージはフェチ・パーツモデルのお仕事のみを扱っている制作メーカーになります。
          </p>
          <p className="leading-relaxed mb-4">
            フェチ・パーツモデルは男性に触れたり、触れられたりなどの

            <span className="font-bold relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-[60%] z-1" style={{ backgroundColor: '#fefdb5', opacity: 0.8 }}></span>
              <span className="relative z-2">性的要素が一切無いお仕事になります。</span>
            </span>
          </p>

          <SpeechBubbleRight
            content="”マニアックなお客様向けのコンテンツ”だから接触が必要ないんだ！"
            characterSrc="images/other/feel_smile_ewdnmz"
            characterAlt=""
          />

          <SpeechBubbleLeft
            content="セッ○スしても稼げないなら必ず稼げるモデルのお仕事のほうが良いかも…"
            characterSrc="images/other/usamin_zbf3hh"
            characterAlt=""
            bubbleBgColor="#ecfccb"
          />
        </div>
        <div className="mt-8 max-w-3xl -mx-4 md:mx-auto">
          <CldImage
            src="images/three-assurances/no-force_rmnl5g"
            width={1200}
            height={400}
            alt="ヘルスをしても稼げる保証はない"
            className="w-full h-auto"
            id="no-force"
          />
        </div>
        <div className="pt-8 max-w-md mx-auto space-y-6">
          <p className="leading-relaxed mb-4">
            『人がいるとやりづらいな…』<br />
            『コレだけは見せるの嫌！』など、<br />
            自分の中の線引きはありますよね。
          </p>
          <p className="leading-relaxed mb-4">
            おさいふチャージではモデル様の声を第一に臨機応変に取り組んでおります。
          </p>
          <p className="leading-relaxed mb-4">
            気になることはお気軽にご相談いただければと思います◎
          </p>
        </div>
        <div className="pt-8 max-w-md mx-auto space-y-6">
          <h3 className="text-3xl font-bold m-2">他の記事はこちらから</h3>

          <div className="space-y-4">
            <div className="rounded-lg p-4">
              <a href="/contactless-service">
                <CldImage
                  src="images/other/bunner-m_dgsxyf"
                  width={800}
                  height={300}
                  alt="no_force"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>

            <div className="rounded-lg p-4">
              <a href="/anshin-anzen">
                <CldImage
                  src="images/other/bunner-mb_u3ojq4"
                  width={800}
                  height={300}
                  alt="身バレがトラウマに..."
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>

            <div className="text-center mt-6">
              <a href="/?noModal=true" className="text-gray-500 hover:text-gray-700 text-sm border-b-2 border-dotted border-gray-500 pb-1 px-2">トップページに戻る</a>
            </div>
          </div>

        </div>

      </SectionWrapper>
    </>
  )
} 