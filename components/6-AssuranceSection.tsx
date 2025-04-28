// components/AssuranceSection.tsx
"use client";

import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import H3Heading from '@/components/H3Heading';
import { CldImage } from 'next-cloudinary';

export default function AssuranceSection() {
  return (
    <SectionWrapper id="assurance" backgroundColor="bg-pink">

      {/* タイトル */}
      <SectionHeading>3つの安心</SectionHeading>
      {/* 1つ目 */}
      <div className="p-4 text-center">
        <CldImage
          src="images/6-Assurance/daiemoh2vcuvmtv5fuqh"
          width={360}
          height={230}
          alt=""
          className="mx-auto w-[180px] h-auto mb-4"
        />
        <H3Heading>アダルト行為一切なし！</H3Heading>
        <p>
          面接に行ったら絡みありの<br />
          お仕事しかないと言われた･･･<br />
          自慰行為を撮られた･･･<br />
          なんてことはありません！<br />
          <br />
          嫌なことはNGでOK！<br />
          ご自身でお仕事を選んでいただけます◎
        </p>

        <div className="m-3">
          <a
            href="/three-assurances"
            className="text-[#8c7ab4] font-medium inline-block px-3 py-1 hover:opacity-80"
            style={{ borderBottom: '2px dotted #8c7ab4', borderSpacing: '4px' }}
          >
            Read more→
          </a>
        </div>
      </div>

      {/* 2つ目 */}
      <div className="p-4 text-center">
        <CldImage
          src="images/6-Assurance/rhxpuw8qzkkw6yg88drn"
          width={300}
          height={300}
          alt=""
          className="mx-auto w-[140px] h-auto mb-4"
        />
        <H3Heading>接触・接客いりません</H3Heading>
        <p>
          アダルト行為が不要なので<br />
          接触・接客ももちろん必要ありません！
          <br />
          <br />

          接客業息苦しくないですか？？？
          <br />
          <br />

          トイレをしたくなったら撮影をして<br />
          あとはご自宅のようにくつろいで過ごす。<br />
          そんな仕事の仕方で<br />
          風俗より稼げてしまいます♪
        </p>
        <div className="m-3">
          <a
            href="/contactless-service"
            className="text-[#8c7ab4] font-medium inline-block px-3 py-1 hover:opacity-80"
            style={{ borderBottom: '2px dotted #8c7ab4', borderSpacing: '4px' }}
          >
            Read more→
          </a>
        </div>
      </div>

      {/* 3つ目 */}
      <div className="p-4 text-center">
        <CldImage
          src="images/6-Assurance/m8ormjug8vb5ujew6uur"
          width={300}
          height={300}
          alt=""
          className="mx-auto w-[140px] h-auto mb-4"
        />
        <H3Heading>安心安全の身バレ対策</H3Heading>
        <h3 className="font-semibold"></h3>
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
        <div className="m-3">
          <a
            href="/anshin-anzen"
            className="text-[#8c7ab4] font-medium inline-block px-3 py-1 hover:opacity-80"
            style={{ borderBottom: '2px dotted #8c7ab4', borderSpacing: '4px' }}
          >
            Read more→
          </a>
        </div>
      </div>
    </SectionWrapper>

  );
}
