"use client"

import SectionWrapper from '@/components/SectionWrapper'
import H3HeadingSmall from '@/components/H3HeadingSmall'
import SpeechBubbleLeft from '@/components/SpeechBubbleLeft'
import SpeechBubbleRight from '@/components/SpeechBubbleRight'
import { CldImage } from 'next-cloudinary'

export default function ThreeAssurancesPage() {
  return (
    <>
      <SectionWrapper id="three-assurances" backgroundColor="bg-[#fff9f7]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-pink-50 rounded-lg p-6">
              <h1 className="text-3xl font-bold text-center mb-2">接触・接客いりません</h1>
              <H3HeadingSmall>息苦しい接客業とおさらば！！</H3HeadingSmall>

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

                  <p className="font-medium mb-3">制作スタジオが募集を行っているおさいふチャージだからこそ！</p>

                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>口座の登録、事務所の所属必要なし

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>年間200人以上の撮影実績

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>支払調書もお渡し可能

                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>創業20年を超える老舗スタジオで株式会社として運営
                      </span>
                    </li>
                  </ul>

                  <p className="pt-2">
                    個撮や個人事務所と違い、プロが最後まで寄り添います！
                  </p>
                </div>
              </div>
            </div>

            <SpeechBubbleLeft
              content={
                <>
                  ほかのパーツモデルの面接いったら会員の顧客への接客業だった…！！！
                </>
              }
              characterSrc="images/other/feel_awate-left_faxrj1"
              characterAlt=""
              bubbleBgColor="#fde0e0"
            />
            <SpeechBubbleRight
              content={
                <>
                  SNSで知り合った個撮の人の撮影会に行ったらをレ○プされそうになった
                </>
              }
              characterSrc="images/other/feel_2P_k56xek"
              characterAlt=""
            />

            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                これ。かなりあります！！！
              </p>
              <p className="leading-relaxed mb-4">
                募集内容とかけ離れたお仕事内容を進められたり、個人で趣味として活動しているカメラマンとトラブルになったり、、、
              </p>
              <p className="leading-relaxed">
                実際、<span style={{ color: '#ef4444' }}>犯罪行為を企む人が潜んでいる可能性は捨てきれません</span>よね。              </p>
            </div>


            <SpeechBubbleLeft
              content={
                <>
                  このタグを使えば、お金を払うように見せかけて、可愛い女の子をホテルに呼び出せるぞ…ﾆﾔﾆﾔ
                </>
              }
              characterSrc="images/other/waruihito_swzabw"
              characterAlt=""
              bubbleBgColor="#dae6ff"
            />

            <SpeechBubbleLeft
              content={
                <>
                  撮った写真は無修正で販売して金儲けしよう！                </>
              }
              characterSrc="images/other/waruihito_swzabw"
              characterAlt=""
              bubbleBgColor="#dae6ff"
            />

            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                おさいふチャージでは、求人内容以外のお仕事をする必要はありません！！
                <br />
                もちろん対価もしっかりとお支払いしております。
              </p>
              <p className="leading-relaxed mb-4">
                というのも、会社として運営している以上、スタッフのことも守る必要があるからです。
              </p>
              <p className="leading-relaxed">
                ここでは代表の想いを含め、おさいふチャージがどんなところなのかご紹介します。
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl -mx-4 md:mx-auto">
          <CldImage
            src="images/contactless-service/staff_o68khb"
            width={1200}
            height={400}
            alt="どんなスタッフさんがいるの？"
            className="w-full h-auto"
          />
        </div>


        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                これ結構重要ですよね？
                <br />
                一緒に仕事をする訳ですから、気持ちの悪い変なおじさんや、ヤンキー・チンピラの様なコワモテの人、カメラを持っただけの素人さんだったら…など。
                <br />
                怖くもありますよね…
              </p>

              <p className="leading-relaxed mb-4">
                スタジオに所属しているのは、業界歴20年のベテランカメラマンを始め、
              </p>

              <p className="leading-relaxed mb-4">
                ディレクター・AD・デスク・音声・アシスタントなどをこなす<span style={{ color: '#ef4444' }}>【フェチ・パーツモデル撮影専門のスタッフ部隊】</span>で撮影させていただいております。
              </p>

              <SpeechBubbleLeft
                content={
                  <>
                    面接に行ったら怪しいマンションの一室に怖い人と二人きりだった…
                  </>
                }
                characterSrc="images/other/usamin_zbf3hh"
                characterAlt=""
                bubbleBgColor="#ecfccb"
              />


              <p className="leading-relaxed mb-4">
                ということは無いのでご安心ください！
              </p>

              <p className="leading-relaxed mb-4">
                また面接を担当するのは昼職で採用担当をしていた経験者になります。
              </p>

              <p className="leading-relaxed mb-4">
                本人確認やリスクマネジメントも踏まえ、<span style={{ color: '#ef4444' }}>出演を決めるかの意思確認</span>を行っていきますので、安心してアルバイト応募してみてくださいね。
              </p>
            </div>


            <SpeechBubbleLeft
              content={
                <>
                  男性スタッフしかいない現場なの？                  </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <SpeechBubbleRight
              content={
                <>
                  おさいふチャージは女性スタッフも在籍しているよっ♪
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />
            <SpeechBubbleRight
              content={
                <>
                  お迎えにあがるのは撮影もしたことがある女性スタッフなので、ぜひいろいろ聞いてみてね！                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <div className="p-8 max-w-3xl -mx-4 md:mx-auto">
              <CldImage
                src="images/contactless-service/where_y8jaat"
                width={1200}
                height={400}
                alt="スタジオはどこ？"
                className="w-full h-auto"
              />
            </div>

            <p className="leading-relaxed mb-4">
              おさいふチャージが運営する撮影スタジオの<span style={{ color: '#ef4444' }}>最寄り駅は埼玉県・さいたま市にある</span><span style={{ color: '#ef4444', fontWeight: 'bold' }}>「浦和駅・武蔵浦和駅」</span>です。
            </p>

            <p className="leading-relaxed mb-4">
              都心からのアクセスがいいので東京都・埼玉県・神奈川県・千葉県からフェチ、パーツモデルのアルバイトに来ていただくことが多いです。
            </p>

            <p className="leading-relaxed mb-4">
              また、栃木県・山梨県・茨城県・群馬県からもバイトに来ていただくことも。
            </p>

            <p className="leading-relaxed mb-4">
              パーツモデルを専門にしているスタジオはあまり存在しないので、こうして全国からモデルさんがスタジオに足を運んでいただけております。
            </p>

            <p className="leading-relaxed mb-4">
              22年6月には、<span style={{ color: '#ef4444' }}>面接センターが東京の日暮里</span>に開設されました。
            </p>


            <SpeechBubbleRight
              content={
                <>
                  北海道や名古屋など遠方から来てくれるモデル様もいるほど愛されているよ！
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <SpeechBubbleLeft
              content={
                <>
                  交通費って出たりするの…？
                </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />


            <SpeechBubbleRight
              content={
                <>
                  もちろん！！
                  <br />
                  首都圏のモデル様は<span style={{ color: '#ef4444' }}>全額</span>、首都圏以外のモデル様には撮るコンテンツ数や条件はあるけど、<span style={{ color: '#ef4444' }}>上限2万円</span>まで支給しているよっ！
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <p className="leading-relaxed mb-4">
              <span style={{ color: '#ef4444' }}>1日1名様完全予約制</span>の撮影スタジオ。
              <br />
              スタジオのご予約は2回目以降は繋がっているSNSやメールなどからお手軽にできるようになります。
            </p>

            <p className="leading-relaxed mb-4">
              埋まりが大変早くなっておりますが、モデル様のご予定やご都合によってはご案内できることもあるため、お気軽にご相談下されば幸いです。
            </p>

            <p className="leading-relaxed mb-4">
              信頼のおけるスタジオとして感じていただけるように努め、モデルの皆様が抱えるお金の悩みやご相談にも真摯に対応させていただきます。
            </p>
            <div className="p-8max-w-3xl -mx-4 md:mx-auto">
              <CldImage
                src="images/contactless-service/message_vmj8fi"
                width={1200}
                height={400}
                alt="おさいふチャージ代表からのメッセージ"
                className="w-full h-auto"
              />
            </div>

            <p className="text-lg font-bold leading-relaxed mb-4 text-[#72617c]">
              ⭐️ ご挨拶
            </p>

            <p className="leading-relaxed mb-4">
              AV新法が施行され数年が経ちましたが、すぐにお金を稼ぎたいモデルの皆様や、我々業者にとっては極めて難しい時代になったと言わざるを得ません。
            </p>

            <p className="leading-relaxed mb-4">
              業界の当事者たちが置き去りにされた法律で、差別される側としてその世界で生きて来た者たちは苦しむことになっております。
            </p>

            <p className="leading-relaxed mb-4">
              さて、厳密にいうとおさいふチャージのお仕事内容は、このAV新法で定義されている<span style={{ color: '#ef4444' }}>「性行為映像制作物」には当たりません。</span>
            </p>

            <p className="leading-relaxed mb-4">
              つまり性行為があるものをAVと定義するならば、おさいふチャージのフェチコンテンツはAVではなく、<span style={{ color: '#ef4444' }}>単なる18禁の動画</span>となります。
            </p>

            <p className="leading-relaxed mb-4">
              しかしながら、世間の状況を鑑みて、私たちも新法に則って運営することに致しました。
            </p>

            <p className="leading-relaxed mb-4">
              これまでは即お仕事が可能でしたが、まずは面接を面接センターで行っていただいてからお仕事が可能になります。
            </p>

            <p className="leading-relaxed mb-4">
              私たちは法律を守りながら、モデルの皆様も守り、そして私たちの生活も守って行きたいと考えております。
            </p>

            <p className="leading-relaxed mb-4">
              どうかご理解ご協力をいただければ幸いです。モデルの皆様においてはおさいふチャージをうまくご利用していただき、お小遣い稼ぎをしていただければと存じます。
            </p>

            <p className="leading-relaxed mb-4">
              性行為、一切必要ないお仕事だけご用意してお待ち致しております。
            </p>

            <hr className="border-0 border-b-4 border-dotted border-gray-400 my-8 text-[#72617c]" />


            <p className="leading-relaxed mb-4">
              支えてくださっていたリピーター様への感謝を込めて、報酬のアップを実現いたしました。
            </p>

            <p className="leading-relaxed mb-4" style={{ color: '#ef4444' }}>
              リピーター様のお給料
              <br />
              10分　35000円→40000円
              <br />
              半日　70000円→75000円
              <br />
              半日で40000円以上がより簡単に実現できるようになりました。
            </p>

            <p className="leading-relaxed mb-4">
              業界の常識の逆をゆく(通常モデルさんの報酬は出演が増えるごとに下がって行くことが多いです)、この報酬アップシステムはおさいふチャージオリジナルです。
            </p>

            <p className="leading-relaxed mb-4">
              モデルの皆様のことを第一に考えている「高収入モデルアルバイトのおさいふチャージ」はおかげさまで<span style={{ color: '#ef4444', fontWeight: 'bold' }}>殆ど口コミだけで成り立っております。</span>
            </p>

            <p className="leading-relaxed mb-4">
              無駄や誇大広告を省き、その分をお仕事しに来て下さる皆様にこれからもたくさん還元して参ります！
            </p>

            <p className="leading-relaxed mb-4 text-sm">
              ※他社や他SNSでこちらの名称の真似や、文言を多数引用している所がありますのでご注意ください。
            </p>

            <hr className="border-0 border-b-4 border-dotted border-gray-400 my-8 text-[#72617c]" />

            <p className="leading-relaxed mb-4">
              最新の口コミはSNSまたはバニラサイトをチェック←
            </p>

            <div className="flex space-x-8 mb-6 justify-center">
              <a href="https://x.com/OsaifuCharge" target="_blank" rel="noopener noreferrer" className="block">
                <CldImage
                  src="images/other/icon-x_d9tkzh"
                  width={70}
                  height={70}
                  alt="Twitter/X"
                  className="rounded-full"
                />
              </a>
              <a href="https://www.instagram.com/osaifu_max/" target="_blank" rel="noopener noreferrer" className="block">
                <CldImage
                  src="images/other/icon-insta_r5gxga"
                  width={70}
                  height={70}
                  alt="Instagram"
                  className="rounded-full"
                />
              </a>
              <a href="https://kanto.qzin.jp/ocharge/blog/?v=official" target="_blank" rel="noopener noreferrer" className="block">
                <CldImage
                  src="images/other/icon-vanila_tat7aq"
                  width={70}
                  height={70}
                  alt="Like"
                  className=""
                />
              </a>
            </div>

          </div>
        </div>

        <div className="pt-8 max-w-md mx-auto space-y-6">
          <h3 className="text-3xl font-bold m-2">他の記事はこちらから</h3>

          <div className="space-y-4">
            <div className="rounded-lg p-4">
              <a href="/three-assurances">
                <CldImage
                  src="images/other/bunner-h_m7649c"
                  width={800}
                  height={300}
                  alt="Hなことしたくない"
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
              <a href="/" className="text-gray-500 hover:text-gray-700 text-sm border-b-2 border-dotted border-gray-500 pb-1 px-2">トップページに戻る</a>
            </div>
          </div>

        </div>



      </SectionWrapper >
    </>
  )
} 