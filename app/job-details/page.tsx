"use client"

import SectionWrapper from '@/components/SectionWrapper'
import SpeechBubbleLeft from '@/components/SpeechBubbleLeft'
import SpeechBubbleRight from '@/components/SpeechBubbleRight'
import { CldImage } from 'next-cloudinary'
import { useScrollToHash } from '@/utils/useScrollToHash'
import ScrollLink from '@/components/ScrollLink'

export default function ThreeAssurancesPage() {
  // ページ読み込み時にハッシュフラグメントがあれば自動スクロール
  useScrollToHash(80); // ヘッダーの高さに合わせて調整（80px）

  return (
    <>
      <SectionWrapper id="job-details1" backgroundColor="bg-[#f2f3ff]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="">
              <h1 className="text-3xl font-bold text-center mb-2">具体的なお仕事内容</h1>
              <div className="text-center mb-6">
                <div className="inline-block w-full max-w-md">
                  <div className="border-b-2 border-gray-400 border-dotted pb-2"></div>
                </div>
              </div>
              <SpeechBubbleLeft
                content={
                  <>
                    ざっくりとはお仕事内容をわかったけど、もっと詳しく知りたいな…！
                  </>
                }
                characterSrc="images/other/usamin_zbf3hh"
                characterAlt=""
                bubbleBgColor="#ecfccb"
              />

              <SpeechBubbleRight
                content={
                  <>
                    フィールちゃん登場！
                    <br />
                    お仕事内容について詳しく教えるね！
                  </>
                }
                characterSrc="images/other/feel_zenshin_f7z4op"
                characterAlt=""
              />

              <div className="mt-8 mb-8">
                <p className="leading-relaxed mb-4">
                  おさいふチャージでは、かなり少数派の<span style={{ color: '#ef4444' }}>フェチズムに特化した作品</span>を作っております！
                </p>

                <p className="leading-relaxed mb-4">
                  だからこそ<span style={{ color: '#ef4444' }}>非接触が叶う</span>お仕事となります。
                </p>

                <p className="leading-relaxed mb-4">
                  お仕事内容は大きく分けて3種類。
                </p>

                <p className="leading-relaxed mb-4">
                  <ScrollLink
                    href="#chira-mise"
                    className="inline-block py-0 border-b border-dotted border-[#f6a1bd]"
                    offset={80}
                  >
                    <span style={{ color: '#f6a1bd', cursor: 'pointer' }}>①チラ見せ風撮影</span>
                  </ScrollLink><br />
                  <ScrollLink
                    href="#onara-satuei"
                    className="inline-block py-0 border-b border-dotted border-[#7ba67f]"
                    offset={80}
                  >
                    <span style={{ color: '#7ba67f', cursor: 'pointer' }}>②おなら撮影</span>
                  </ScrollLink><br />
                  <ScrollLink
                    href="#toire-satuei"
                    className="inline-block py-0 border-b border-dotted border-[#778ce7]"
                    offset={80}
                  >
                    <span style={{ color: '#778ce7', cursor: 'pointer' }}>③トイレ系撮影</span>
                  </ScrollLink>
                </p>

                <p className="leading-relaxed mb-4">
                  その中から<span style={{ color: '#ef4444' }}>「出来そうなもの、やってもいいかなと思えるもの」 だけ</span>を選んでいただく流れになります。
                </p>
              </div>

              <SpeechBubbleRight
                content={
                  <>
                    それぞれの項目ごとに報酬が決まっているから、いくら稼ぎたいかで撮るものを決めてもOK！！
                  </>
                }
                characterSrc="images/other/feel_zenshin_f7z4op"
                characterAlt=""
              />

              <SpeechBubbleLeft
                content={
                  <>
                    それなら安心して
                    <br />
                    挑戦できそうかも…！
                  </>
                }
                characterSrc="images/other/usamin_zbf3hh"
                characterAlt=""
                bubbleBgColor="#ecfccb"
              />
            </div>
          </div>
          <div className="max-w-3xl -mx-4 md:mx-auto">
            <div className="bg-[#fff] p-3">
              <h3 className="text-xl font-bold text-[#ff7bac]" id="chira-mise">①チラ見せ風撮影 例</h3>
            </div>
            <div className="max-w-md mx-auto space-y-6">
              <div className="max-w-3xl mx-auto p-4">
                <div className="mt-2">
                  <p className="text-right text-[#ff7bac]">高収入度：★★★☆☆</p>

                  <div className="border-t border-[#ff7bac] border-dotted my-3"></div>
                  <div id="shichaku" className="">
                    <p className="mb-1"><span className="font-bold text-[#3366cc] text-xl">試着室風</span><span className="font-normal text-[#3366cc] text-base">：試着室セットで着替えるだけ</span></p>
                    <p className="mb-4 text-sm text-[#ff7bac]">撮影時間：5~10分位</p>

                    <p className="mb-4">
                      お洋服を買うときに、試着室でお着替えをしたご経験はありますか？？
                    </p>

                    <p className="mb-4">
                      こっそり覗いて撮影していたら「盗撮」に
                      なってしまい大変なことになってしまいま
                      すよね。<br />
                      そんな現実ではできないような願望を叶え
                      る存在がフェチモデルさんです！！
                    </p>

                    <p className="mb-4">
                      コンテンツ撮影バイトの内容は、スタジオ内にある試着室セットで、服を選んでから着替えていただきます。<br />
                      <span style={{ color: '#ef4444' }}>着替えるだけで特に他には何もする事はありません。</span><br />
                      これだけでお給料をGETしていただくことができます！
                    </p>

                  </div>
                  <SpeechBubbleLeft
                    content={
                      <>
                        えっちぃことはしたくないけど、
                        <br />
                        着替えるだけなら余裕かな！
                      </>
                    }
                    characterSrc="images/other/usamin_zbf3hh"
                    characterAlt=""
                    bubbleBgColor="#ecfccb"
                  />
                </div>
              
              </div>

              
              
              <div id="chirari" className="p-4">
              <div className="border-t border-[#ff7bac] border-dotted my-3"></div>
                <p className="mb-1"><span className="font-bold text-[#3366cc] text-xl">チラ見え風</span><span className="font-normal text-[#3366cc] text-base">：日常の様々な動作をするだけ</span></p>
                <p className="mb-4 text-sm text-[#ff7bac]">撮影時間：5~10分位</p>

                <p className="mb-4">
                  偶然見えてしまった！！<br />
                  そういったことがお好きな方に向けた作品を作るお仕事になります！<br />
                  <br />
                  少年誌などでよく見る<span style={{ color: '#ef4444' }}>「チラリズム」</span>
                  や<span style={{ color: '#ef4444' }}>「ラッキースケベ」</span>をイメージするとわかりやすいかもしれません。
                </p>

                <p className="mb-4">
                  動作の例でいうと「洗濯物を畳んでください」など。<br />
                  <br />
                  谷間が少し見えてしまうようにカメラをセットし、その風景を<span style={{ color: '#ef4444' }}>５～１０分撮影して終了</span>です。<br />
                  <br />
                  フェチモデルさんといっても難しい事は何もなく、<span style={{ color: '#ef4444' }}>日常の自然な動作を演じていただく短時間でとても簡単なアルバイト</span>になります！
                </p>

                <SpeechBubbleLeft
                  content={
                    <>
                      ラッキースケベがない少年誌って確かに見たことないかも笑
                    </>
                  }
                  characterSrc="images/other/usamin_zbf3hh"
                  characterAlt=""
                  bubbleBgColor="#ecfccb"
                />

                <SpeechBubbleRight
                  content={
                    <>
                      実際には絶対にあり得ないからこそ、そういう夢の詰まった作品はロマンがあるみたいだよっ！
                    </>
                  }
                  characterSrc="images/other/feel_zenshin_f7z4op"
                  characterAlt=""
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl -mx-4 md:mx-auto">
            <div className="bg-[#fff] p-3">
              <h3 className="text-xl font-bold text-[#7ba67f]" id="onara-satuei">②おなら撮影　例</h3>
            </div>
            <div className="max-w-md mx-auto space-y-6">
              <div className="max-w-3xl mx-auto p-4">
                <div className="mt-2">
                  <p className="text-right text-[#7ba67f]">高収入度：★★★★☆</p>

                  <div className="border-t border-[#7ba67f] border-dotted my-3"></div>
                  <div className="">
                    <p className="mb-1"><span className="font-bold text-[#3366cc] text-xl">おならフェチに向けたコンテンツ</span>
                      <br />
                      <span className="font-normal text-[#3366cc] text-base">待機中に不意に出てしまったおならを撮るなど</span></p>
                    <p className="mb-4 text-sm text-[#7ba67f]">撮影時間：15～20分位</p>

                    <p className="mb-4">
                      世の中には女性の「おなら」にすらフェチズムを感じてしまう人たちがいることをご存知でしょうか…！
                    </p>

                    <p className="mb-4">
                      そういった方に向けたコンテンツへのご出演です。
                    </p>

                    <p className="mb-4">
                      待機中の姿を盗撮風にカメラを設置し、おならが出てしまって臭いを払うような仕草をする。
                    </p>

                    <p className="mb-4">
                      スタッフに聞かれてしまってごまかすような様子を見せるといったものになります。
                    </p>

                    <p className="mb-4">
                      <span style={{ color: '#ef4444' }}>チラ見せ風の撮影に+おならがついてきたもの</span><br />
                      と考えていただくといいかもしれません！
                    </p>
                  </div>
                  <SpeechBubbleLeft
                    content={
                      <>
                        変なのすぎて笑っちゃった笑笑笑
                        <br />
                        おならって自然に出さないといけないの？
                      </>
                    }
                    characterSrc="images/other/usamin_zbf3hh"
                    characterAlt=""
                    bubbleBgColor="#ecfccb"
                  />

                  <SpeechBubbleRight
                    content={
                      <>
                        撮影するタイミングで自然に出すのは難しいから、空気浣腸を使用して出してもらってるよ！                  </>
                    }
                    characterSrc="images/other/feel_zenshin_f7z4op"
                    characterAlt=""
                  />

                  <SpeechBubbleLeft
                    content={
                      <>
                        なにそれ痛そう…
                      </>
                    }
                    characterSrc="images/other/usamin_zbf3hh"
                    characterAlt=""
                    bubbleBgColor="#ecfccb"
                  />

                  <SpeechBubbleRight
                    content={
                      <>
                        フィールも最初はそう思ってたんだけど、空気を入れるときは<span style={{ color: '#ef4444' }}>痛さも全然なく</span>てびっくりしたよ！
                      </>
                    }
                    characterSrc="images/other/feel_zenshin_f7z4op"
                    characterAlt=""
                  />
                  <SpeechBubbleRight
                    content={
                      <>
                        空気が入っているときは張ってる感じはあったけど、<span style={{ color: '#ef4444' }}>おならが出ちゃえばスッキリするし</span>気にならなかったかな…
                      </>
                    }
                    characterSrc="images/other/feel_zenshin_f7z4op"
                    characterAlt=""
                  />

                  <SpeechBubbleLeft
                    content={
                      <>
                        そうなんだ！自然で出してって言われないならよかった～笑                  </>
                    }
                    characterSrc="images/other/usamin_zbf3hh"
                    characterAlt=""
                    bubbleBgColor="#ecfccb"
                  />

                </div>
              </div>

            </div>
          </div>

          <div className="max-w-3xl -mx-4 md:mx-auto">
            <div className="bg-[#fff] p-3">
              <h3 className="text-xl font-bold text-[#778ce7]" id="toire-satuei">③トイレ系撮影　例</h3>
            </div>
            <div className="max-w-md mx-auto space-y-6">
              <div className="max-w-3xl mx-auto p-4">
                <div className="mt-2">
                  <p className="text-right text-[#778ce7]">高収入度：★★★★★</p>

                  <div className="border-t border-[#778ce7] border-dotted my-3"></div>
                  <div className="">
                    <p className="mb-4">
                      トイレというとちょっと引いてしまいますよね…
                    </p>

                    <p className="mb-4">
                      信じられないかもしれませんが、世の中には色々な癖があり、女性が尿意をこらえている姿にドキドキしてしまう、という方もいらっしゃるのです。
                    </p>

                    <p className="mb-4">
                      トイレ系の撮影は簡単に言うと、そういう方が喜ぶ動画へのご出演となります。
                    </p>

                    <p className="mb-4">

                      短時間で終わるのですが、<span style={{ color: '#ef4444' }}>圧倒的に報酬が良く</span>、効率的に稼げるのがこのトイレ系撮影になります。
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#778ce7] border-dotted my-3"></div>

                <div className="max-w-3xl -mx-4 md:mx-auto">
                  <div className="bg-[#fff] p-4">
                    <p className="text-xl text-[#778ce7] text-center">
                      一切触れたり、触れられたりという<br />
                      性的な行為がないのに<br />
                      風俗よりも稼げてしまうので、<br />
                      <br />
                      向いている方はとことん向いている<br />
                      お仕事になると思います。</p>
                  </div>
                </div>

                <div className="border-t border-[#778ce7] border-dotted my-3"></div>
              </div>

              <div className="max-w-3xl mx-auto px-6">
                <div className="">
                  <p className="">
                    <span className="font-bold text-[#ff7bac] text-xl">
                      尿意があるときの撮影
                    </span>
                    <br />
                    <span className=" text-sm text-[#778ce7]">撮影時間：20〜30分位</span>
                  </p>


                  <p className="mb-4">
                    撮影の内容は様々で、トイレ盗撮風や１回の撮影で出した量に応じて報酬金額が変わるものなどがあります。
                  </p>

                  <p className="mb-4">
                    尿意に関してはスタジオにいる間に催した回数分だけ撮影ができるため、たくさん水分を取ってもらえるとより稼ぎやすくなります◎
                  </p>
                </div>
                <SpeechBubbleRight
                  content={
                    <>
                      詳細な金額が気になる場合は是非お問合せ下さい☆
                    </>
                  }
                  characterSrc="images/other/feel_zenshin_f7z4op"
                  characterAlt=""
                />

                <div className="max-w-3xl mx-auto">
                  <p className="">
                    <span className="font-bold text-[#ff7bac] text-xl">
                      便意があるときの撮影                </span>
                    <br />
                    <span className=" text-sm text-[#778ce7]">撮影時間：20～30分位</span>
                  </p>


                  <p className="mb-4">
                    こちらも撮影の内容は様々で、トイレ盗撮風や和式トイレの体勢でしてもらうものなどがあります。
                  </p>

                  <p className="mb-4">便意に関しては1日1回しか撮れないことが多いため、撮影単価は小さい方と比べ約２倍以上の価格と高く設定しております！
                  </p>

                  <p className="mb-4">
                    「金額が高いから挑戦したいのに緊張で出ない…」なんてこともよくあるのですが、市販されている下剤や浣腸の準備はありますので、お腹にうんちさえいればスッキリもしてお金にも変わる撮影となります！
                  </p>
                </div>
                <SpeechBubbleLeft
                  content={
                    <>
                      抵抗はあるけど、口コミを見てると皆さん
                      <span style={{ color: '#ef4444' }}>慣れるって言ってて気になる</span>
                      んだよなぁ…
                    </>
                  }
                  characterSrc="images/other/usamin_zbf3hh"
                  characterAlt=""
                  bubbleBgColor="#ecfccb"
                />

                <SpeechBubbleRight
                  content={
                    <>
                      初めは誰しも恥ずかしいし、本当に安全なスタジオなのか不安だよね…                  </>
                  }
                  characterSrc="images/other/feel_zenshin_f7z4op"
                  characterAlt=""
                />

                <SpeechBubbleRight
                  content={
                    <>
                      実際に<span style={{ color: '#ef4444' }}>20年以上続いている制作スタジオ</span>でこれまでも数多くのモデル様がご利用していただいているけど
                    </>
                  }
                  characterSrc="images/other/feel_zenshin_f7z4op"
                  characterAlt=""
                />

                <SpeechBubbleRight
                  content={
                    <>
                      <span style={{ color: '#ef4444' }}>リピート率97％</span>を超えるなど、がっつり拒否反応が出る人は面接の時点で諦めているみたいだから
                    </>
                  }
                  characterSrc="images/other/feel_zenshin_f7z4op"
                  characterAlt=""
                />

                <SpeechBubbleRight
                  content={
                    <>
                      お話だけでも聞いてみても良いんじゃないかな？
                    </>
                  }
                  characterSrc="images/other/feel_zenshin_f7z4op"
                  characterAlt=""
                />

                <SpeechBubbleLeft
                  content={
                    <>
                      みんな同じ気持ちって思ったら余計気になってきたかも…！
                      <br />
                      詳しいお話聞いてみるね！！
                    </>
                  }
                  characterSrc="images/other/usamin_zbf3hh"
                  characterAlt=""
                  bubbleBgColor="#ecfccb"
                />

              </div>
            </div>
          </div>
        </div >
      </SectionWrapper >

      <SectionWrapper id="job-details2" backgroundColor="bg-[#fff7f0]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="">
              <h1 id="salary-examples" className="text-3xl font-bold text-center mb-2">お給料例</h1>
              <div className="text-center mb-6">
                <div className="inline-block w-full max-w-md">
                  <div className="border-b-2 border-gray-400 border-dotted pb-2"></div>
                </div>
              </div>
              <div className="p-5 flex justify-center">
                <div className="mb-5 text-center max-w-xs">
                  <p className="flex items-center justify-start mb-3">
                    <span className="mr-2">✅</span>
                    <span className="font-bold text-[#ef4444]">完全手渡し・日払い制</span>
                  </p>
                  <p className="flex items-center justify-start mb-3">
                    <span className="mr-2">✅</span>
                    <span className="">お仕事したその日にGET♡</span>
                  </p>
                  <p className="flex items-center justify-start mb-3">
                    <span className="mr-2">✅</span>
                    <span className="font-">交通費も支給（規定あり）</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-5">
            {/* 1枚目の給料例 */}
            <div className="flex items-center justify-center w-full" style={{ maxWidth: "380px", margin: "0 auto" }}>
              {/* 花形画像 */}
              <div className="flex-shrink-0 z-0" style={{ width: "65%" }}>
                <CldImage
                  src="images/job-details/syokai-1_ysbief"
                  width={230}
                  height={230}
                  alt="お給料例1"
                  className="w-full h-auto"
                />
              </div>
              {/* バッジ画像 - 左マージンをネガティブに設定して重ね合わせ */}
              <div className="flex-shrink-0 z-10 -ml-5 mt-20">
                <CldImage
                  src="images/job-details/kingaku-1_lxj5dc"
                  width={140}
                  height={140}
                  alt="23歳会社員 月1～2回 1回4～7時間 月収12万以上"
                  className="w-auto h-auto"
                />
              </div>
            </div>

            {/* 2枚目の給料例 */}
            <div className="flex items-center justify-center w-full mt-8" style={{ maxWidth: "380px", margin: "0 auto" }}>
              {/* バッジ画像 - 右マージンをネガティブに設定して重ね合わせ */}
              <div className="flex-shrink-0 z-10 -mr-5 -mt-20">
                <CldImage
                  src="images/job-details/kingaku-2_psfzm5"
                  width={140}
                  height={140}
                  alt="25歳主婦 月1回 1回6時間 月収5万以上"
                  className="w-auto h-auto"
                />
              </div>
              {/* 花形画像 */}
              <div className="flex-shrink-0 z-0" style={{ width: "65%" }}>
                <CldImage
                  src="images/job-details/syokai-2_uae5jf"
                  width={230}
                  height={230}
                  alt="お給料例2"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* 3枚目の給料例 */}
            <div className="flex items-center justify-center w-full mt-8" style={{ maxWidth: "380px", margin: "0 auto" }}>
              {/* 花形画像 */}
              <div className="flex-shrink-0 z-0" style={{ width: "65%" }}>
                <CldImage
                  src="images/job-details/syokai-3_yvhxkk"
                  width={230}
                  height={230}
                  alt="お給料例3"
                  className="w-full h-auto"
                />
              </div>
              {/* バッジ画像 - 左マージンをネガティブに設定して重ね合わせ */}
              <div className="flex-shrink-0 z-10 -ml-5 mt-20">
                <CldImage
                  src="images/job-details/kingaku-3_yodipj"
                  width={140}
                  height={140}
                  alt="3枚目の給料例"
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-6 pt-8">
            <div className="max-w-3xl mx-auto">
              <p className="leading-relaxed mb-4 text-center">
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
                <a href="https://kanto.qzin.jp/ocharge/reviews/?v=official" target="_blank" rel="noopener noreferrer" className="block">
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
        </div>
      </SectionWrapper >

      <SectionWrapper id="job-details2" backgroundColor="bg-[#fff7f0]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="max-w-3xl mx-auto">
            <div className="">
              <h1 id="payment-system" className="text-3xl font-bold text-center mb-2">即日で貰えるワケ♡</h1>
              <div className="text-center mb-6">
                <div className="inline-block w-full max-w-md">
                  <div className="border-b-2 border-gray-400 border-dotted pb-2"></div>
                </div>
              </div>

              <SpeechBubbleLeft
                content={
                  <>
                    即日で貰えるのは凄くうれしいけど、裏がありそうでちょっと怖いな…
                  </>
                }
                characterSrc="images/other/usamin_zbf3hh"
                characterAlt=""
                bubbleBgColor="#ecfccb"
              />

              <SpeechBubbleRight
                content={
                  <>
                    これにはちゃんとした理由があるよっ！
                    悪質なところもあるから騙されないように説明しよう☆
                  </>
                }
                characterSrc="images/other/feel_zenshin-g_ccwxxa"
                characterAlt=""
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              高収入フェチ・パーツモデル専門のアルバイトである『おさいふチャージ』はプロダクション事務所ではなく、
              <span style={{ color: '#ef4444' }}>コンテンツ制作メーカーになります！</span>
            </p>

            <p className="mb-4">
              プロダクションというのは、モデルの皆様にお仕事を斡旋してくれる場所です。
            </p>

            <p className="mb-4">
              プロダクションではどのメーカーに派遣されるか？どんな仕事をするか？によってお給料日も異なってくるようです。
            </p>

            <p className="mb-4">
              おさいふチャージは専門の撮影スタジオを有する制作会社なので、図の様に様々な会社や人を経由せず
              <span style={{ color: '#ef4444' }}>【直接フェチモデル・パーツモデルさんへアルバイト代をお渡しする】手渡し・日払い制</span>
              を取っています。
            </p>

            <div className="flex justify-center my-6">
              <CldImage
                src="images/job-details/sokuzitu_b3wqug"
                width={500}
                height={350}
                alt="即日支払いの仕組み"
                className="w-full max-w-md"
              />
            </div>

            <p className="mb-4">
              急にお金が必要になり、高収入のバイトを探してみたけれど…実際の支払は日払いでも手渡しでもなかった…！
            </p>

            <p className="mb-4">
              同人AVで怖い目に合ったり、話と違うことをされたり…。
            </p>

            <p className="mb-4">
              そんな心配はおさいふチャージのパーツモデル、フェチモデル案件では<span style={{ color: '#ef4444' }}>絶対に発生致しません×</span>
            </p>

            <p className="mb-4">
              やっぱりバイトしたならすぐにアルバイト代は欲しいですよね！
            </p>

            <SpeechBubbleLeft
              content={
                <>
                  いろんな会社を通らないから即日支払いができるってことなんだね！
                </>
              }
              characterSrc="images/other/usamin_zbf3hh"
              characterAlt=""
              bubbleBgColor="#ecfccb"
            />

            <SpeechBubbleRight
              content={
                <>
                  脱！金欠回避！！にうってつけだよねっ
                </>
              }
              characterSrc="images/other/feel_zenshin-g_ccwxxa"
              characterAlt=""
            />
          </div>

          <div className="text-center mt-6">
            <a href="/?noModal=true" className="text-gray-500 hover:text-gray-700 text-sm border-b-2 border-dotted border-gray-500 pb-1 px-2">トップページに戻る</a>
          </div>
        </div>
      </SectionWrapper >
    </>
  )
} 