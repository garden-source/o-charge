// components/AssuranceSection.tsx

import SectionHeading from '@/components/SectionHeading';

export default function AssuranceSection() {
  return (
    <section id="assurance" className="p-8 bg-gray-50">
      {/* タイトル */}
      <SectionHeading>スタジオ紹介</SectionHeading>
      <div className="flex flex-col md:flex-row gap-4">
        {/* 1つ目 */}
        <div className="p-4 border rounded flex-1">
          <h3 className="font-semibold">アダルト行為一切なし！</h3>
          <p>
            面接に行ったら絡みありのお仕事しかないと言われた…
            自慰行為を撮られて…なんてことはありません！
            <br />
            嫌なことはNGでOK！<br />
            ご自身でお仕事を選んでいただけます◎
          </p>
        </div>

        {/* 2つ目 */}
        <div className="p-4 border rounded flex-1">
          <h3 className="font-semibold">接触・接客いりません</h3>
          <p>
            アダルト行為が不要なので接触・接客ももちろん必要ありません！
            <br />
            <br />

            接客業息苦しくないですか？？？
            <br />
            <br />

            トイレをしたくなったら撮影をして、あとはご自宅のようにくつろいで過ごす。
            <br />
            そんな仕事の仕方で
            <br />
            風俗より稼げてしまいます♪
          </p>
        </div>

        {/* 3つ目 */}
        <div className="p-4 border rounded flex-1">
          <h3 className="font-semibold">安心安全の身バレ対策</h3>
          <p>
            一番厄介になる身バレ事情。
            <br />
            20年以上続く撮影スタジオですが、
            <br />
            身バレ率は驚異のゼロ！！！
            <br />
            <br />
            コンテンツ自体がマニアック
            <br />
            見られている母体数が限りなく少ない
            <br />
            <br />
            またヘアメイク担当のスタッフが
            <br />
            ウィッグやメガネで大変身させちゃいます！
          </p>
        </div>
      </div>
    </section>
  );
}
