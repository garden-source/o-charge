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
              <h1 className="text-3xl font-bold text-center mb-2">安心安全の身バレ対策</h1>
              <H3HeadingSmall>身バレ知らずの実態とは！？</H3HeadingSmall>

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

                  <p className="font-medium mb-3">おさいふチャージは</p>

                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>媒体掲載の少なさでネットバレ防止</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>海賊版の徹底排除</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>本編以外の媒体は全てモザイク処理をして掲載</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="font-medium" style={{ color: '#ea9500' }}>ウィッグやメイクで雰囲気を変えれる！</span>
                    </li>
                  </ul>

                  <p className="pt-2">
                    なので安心してお仕事に挑んでいただけます！
                  </p>
                </div>
              </div>
            </div>

            <SpeechBubbleLeft
              content={
                <>
                  う～～～～ん。この出演モデル、フィールにそっくりな子だなぁ…
                </>
              }
              characterSrc="images/other/chichioya_b1cqp6"
              characterAlt=""
              bubbleBgColor="#dae6ff"
            />
            <SpeechBubbleRight
              content={
                <>
                  (((お、お父さん！？！！)))
                  <br />
                  (((そんなもの見てたの…！？)))
                </>
              }
              characterSrc="images/other/feel_awate-right_jaddmq"
              characterAlt=""
            />
            <SpeechBubbleRight
              content={
                <>
                  できることなら接触がない高収入のお仕事をしたいなぁ
                </>
              }
              characterSrc="images/other/feel_tameiki_otu0u4"
              characterAlt=""
            />

            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                といった不安は、もちろんあるかと思いますが……
              </p>
              <p className="leading-relaxed mb-4">
                おさいふチャージのこれまでの制作歴は2025年現在、25年目になりました。今までおよそ5000人ほど撮影し、ご出演いただいておりますが<span style={{ color: '#ef4444' }}>バレたことのない</span>ことがありません。
              </p>
              <p className="leading-relaxed">
                ここではおさいふチャージの身バレ対策についてご紹介させていただきます。
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl -mx-4 md:mx-auto">
          <CldImage
            src="images/anshin-anzen/no-mibare_rprrse"
            width={1200}
            height={400}
            alt="安心してお仕事に挑むために"
            className="w-full h-auto"
          />
        </div>


        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="mt-8 mb-8">
              <p className="leading-relaxed mb-4">
                おさいふチャージが身バレしにくい理由として<span style={{ color: '#ef4444' }}>『マニアックなお客様だけが有料で見ている』</span>という点が大きく関わってきます。
              </p>

              <SpeechBubbleLeft
                content={
                  <>
                    セッ○ス？？？
                    <br />
                    そんなものに興味はない！！！
                    <br />
                    俺は排泄姿にしか興奮しないんだっ！！！
                  </>
                }
                characterSrc="images/other/oyaji_vsyhgk"
                characterAlt=""
                bubbleBgColor="#dae6ff"
              />
              <SpeechBubbleRight
                content={
                  <>
                    こんなど変態出会ったことがないよ…
                  </>
                }
                characterSrc="images/other/feel_awate-right_jaddmq"
                characterAlt=""
              />

              <p className="leading-relaxed mb-4">
                彼氏や友人でこのような方に出会ったことはありますか？こんな経験がある方は、相当少ないと思います。
              </p>

              <p className="leading-relaxed mb-4">
                おさいふチャージはこのような方に向けた作品を制作しているので、<span style={{ color: '#ef4444' }}>そもそも見る人がめちゃくちゃ少ないのです！</span>
              </p>
            </div>


            <SpeechBubbleRight
              content={
                <>
                  ここでちょこっと！
                  <br />
                  フィールの豆知識をご紹介！
                </>
              }
              characterSrc="images/other/feel_interi_hsrskl"
              characterAlt=""
            />

            <div className="max-w-3xl -mx-4 md:mx-auto">
              <CldImage
                src="images/anshin-anzen/av-zittai_t1vohd"
                width={1200}
                height={400}
                alt="日本のAV業界の実態"
                className="w-full h-auto"
              />
            </div>

            <SpeechBubbleRight
              content={
                <>
                  またアダルト動画サイトの閲覧数はNetflixよりはるかに上回るアクセス数を維持しているよっ！
                </>
              }
              characterSrc="images/other/feel_interi_hsrskl"
              characterAlt=""
            />

            <p className="leading-relaxed mb-4">
              そんな変態大国な日本ですが、そのほとんどが<span style={{ fontWeight: 'bold' }}>「カラミ」と呼ばれるいわゆるエッチな要素、また性器を触ったり触られたり、という性行為</span>があるものになります。
            </p>

            <p className="leading-relaxed mb-4">
              おさいふチャージの提供するコンテンツでは、<span style={{ color: '#ef4444' }}>普通のアダルトビデオにあるような性行為が一切ございません</span>。
            </p>


            <p className="leading-relaxed mb-4">
              いわゆるノーマルな人が思いつく<span style={{ color: '#ef4444' }}>性的な要素が全く無いジャンルだから</span>というのが、バレたことがない一番大きな理由です。
            </p>

            <p className="leading-relaxed mb-4">
              ユーザーの絶対数が違うため、<span style={{ color: '#ef4444' }}>極めて露出が少ない</span>のです。ノーマルな人が買って楽しめるようなエッチなコンテンツは一切無いのです。
            </p>

            <SpeechBubbleRight
              content={
                <>
                  日本人200万人に1人、購入してくれるかどうかくらいの流通数になるよ！
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <SpeechBubbleRight
              content={
                <>
                  またおさいふチャージは
                  <br />
                  ✅<span style={{ color: '#cf1dea' }}> 自社サイトでの販売</span>
                  <br />
                  ✅<span style={{ color: '#cf1dea' }}> 徹底した海賊版対策</span>
                  <br />
                  ✅<span style={{ color: '#cf1dea' }}> 本編以外の全てのものに顔モザイク処理をして販売</span>
                  <br />
                  ✅<span style={{ color: '#cf1dea' }}> メガネやマスク、ウィッグなどで大変身できる</span>
                  <br />
                  ため、より見つかりにくいことでモデル様から評価を得ています◎
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <SpeechBubbleLeft
              content={
                <>
                  確かに普通のAV作品と違ってみんなが見るものじゃないから不意バレは防げそう…！
                </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <div className="max-w-3xl -mx-4 md:mx-auto">
              <CldImage
                src="images/anshin-anzen/kaizokuban-taisaku_rfa2de"
                width={1200}
                height={400}
                alt="徹底した海賊版対策"
                className="w-full h-auto"
              />
            </div>

            <p className="leading-relaxed mb-4">
              販売者を悩ませる犯罪行為の海賊版。これは残念ながら私たちも被害を受けている現状にあります。
            </p>

            <p className="leading-relaxed mb-4">
              勝手に違法アップロードされてしまっていたら、身バレの確率も上がってしまいますよね…。
            </p>

            <p className="leading-relaxed mb-4">
              おさいふチャージでは、<span style={{ color: '#ef4444' }}>私たちを信用してご利用いただいているモデル様に恥じないよう、徹底した海賊版対策</span>を行っております。
            </p>

            <p className="leading-relaxed mb-4">
              日々のチェックはもちろん、月に２度、全社員で海賊版を探す日を設け、見つけ次第サイト運営元に削除依頼をしております。
            </p>

            <p className="leading-relaxed mb-4">
              この徹底ぶりは他社さんからも評判をいただくほどです！
            </p>

            <p className="leading-relaxed mb-4">
              安心してお仕事に挑んでいただくために、私たちに課せられた義務に努めて参ります。
            </p>

            <SpeechBubbleLeft
              content={
                <>
                  海賊版を野放しにしている会社も多いから、ちゃんと対応してくれるのはありがたい！！
                </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <SpeechBubbleRight
              content={
                <>
                  こういった業界だからこそ信頼関係は大切。安心して私たちに任せてね！
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <div className="max-w-3xl -mx-4 md:mx-auto">
              <CldImage
                src="images/anshin-anzen/tensen_nuxnt0"
                width={1200}
                height={400}
                alt="点線"
                className="w-full h-auto"
              />
            </div>

            <SpeechBubbleLeft
              content={
                <>
                  フィールちゃん！
                  <br />
                  &ldquo;<span style={{ color: '#ef4444' }}>本編以外はモザイク処理</span>&rdquo;をしてるっていうのはパッケージのこと？？？
                </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <SpeechBubbleRight
              content={
                <>
                  パッケージもそうだね！！
                  <br />
                  他にはサイト内にある紹介ブログに使うときも<span style={{ color: '#ef4444' }}>必ず顔にはモザイク処理が入る</span>よ！
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <SpeechBubbleRight
              content={
                <>
                  <span style={{ color: '#ef4444' }}>購入しない限り顔が見えることがない</span>ように細心の注意を払って制作しているんだっ！
                </>
              }
              characterSrc="images/other/feel_nomal_gug0dm"
              characterAlt=""
            />

            <SpeechBubbleLeft
              content={
                <>
                  パッケージからバレちゃうんじゃって思ってたからよかったぁ～～～！
                  <br />
                  けど本編見られたらバレちゃうかな！？
                </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

          </div>
        </div>

        <div className="max-w-3xl -mx-4 md:mx-auto">
          <CldImage
            src="images/anshin-anzen/himitu-mahou_sr8rfc"
            width={1200}
            height={400}
            alt="バレないため"
            className="w-full h-auto"
          />
        </div>


        <div className="max-w-md mx-auto space-y-6">
          <p className="leading-relaxed mb-4">
            女性はメイクでガラリと雰囲気が変わりますよね！</p>
          <p className="leading-relaxed mb-4">
            おさいふチャージでは基本的に女性メイクスタッフが出勤しておりますので、ノーメイクでお越しいただいて全然ＯＫ！
          </p>
          <p className="leading-relaxed mb-4">
            顔バレ防止の為にいつもと雰囲気の違うメイクを施したり、ウィッグやメガネなども多数ご用意がありますので<span style={{ color: '#ef4444' }}>印象を変えて出演</span>していただくことができます。
          </p>
          <p className="leading-relaxed mb-4">
            また、お出迎えやモデル様のケアなども担当させていただきますので、異性には言いにくい悩みや不安などがありましたらお気軽にご相談下さいね。
          </p>
          <p className="leading-relaxed mb-4">
            モデルの皆様が働きやすいようにお手伝いさせていただきます！
          </p>
          <SpeechBubbleLeft
            content={
              <>
                あんまり上手にメイクができないからスタッフさんがしてくれてよかったぁ！              </>
            }
            characterSrc="images/other/usamin_zbf3hh"
            characterAlt=""
            bubbleBgColor="#ecfccb"
          />
          <SpeechBubbleLeft
            content={
              <>
                けどすっぴんで向かうのはちょっと嫌かも…              </>
            }
            characterSrc="images/other/usamin_zbf3hh"
            characterAlt=""
            bubbleBgColor="#ecfccb"
          />

          <SpeechBubbleRight
            content={
              <>
                メイクをした状態でお越しいただいても大丈夫だよ！！
              </>
            }
            characterSrc="images/other/feel_nomal_gug0dm"
            characterAlt=""
          />
          <SpeechBubbleRight
            content={
              <>
                その上から濃さの調整やスタジオメイクをさせていただきます！                </>
            }
            characterSrc="images/other/feel_nomal_gug0dm"
            characterAlt=""
          />

          <p className="leading-relaxed mb-4">
            「それでも心配！」という方にはマスク有でのご案内もできますので、一度ご相談いただければ幸いです。          </p>
          <SpeechBubbleLeft
            content={
              <>
                手術痕が体に入ってるんだけど隠せたりするかな…？
              </>
            }
            characterSrc="images/other/usamin_zbf3hh"
            characterAlt=""
            bubbleBgColor="#ecfccb"
          />

          <SpeechBubbleRight
            content={
              <>
                ファンデーションシールなどの用意もあるから隠せるよっ！                </>
            }
            characterSrc="images/other/feel_nomal_gug0dm"
            characterAlt=""
          />
        </div>


      </SectionWrapper >
    </>
  )
} 