// components/AboutWorkSection.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import dynamic from "next/dynamic";
// クライアント側で動作する Slider を SSR なしで読み込む
const Slider = dynamic(() => import("@/components/Slider"), { ssr: false });

export default function AboutWorkSection() {
  return (
    <SectionWrapper id="about-work" backgroundColor="bg-purple">
      {/* タイトル */}
      <SectionHeading>どんなお仕事？</SectionHeading>

      {/* メインの説明文 */}
      <p className="text-center leading-relaxed mb-8">
        フェチ向けの老舗制作スタジオが<br />
        運営する動画へフェチモデルとして<br />
        出演していただくお仕事です！
      </p>

      {/* チェック項目（リスト） */}
      <ul className="space-y-2 mb-8 mx-auto text-left" style={{ maxWidth: 'fit-content' }}>
        <li className="text-lg">☑ エロ行為なし</li>
        <li className="text-lg">☑ 接客・接触なし</li>
        <li className="text-lg">☑ 登録・所属必要なし</li>
      </ul>

      {/* サブの説明文 */}
      <p className="text-center leading-relaxed">
        毎日しているあの行為が<br />
        お金に変わる時代。<br />
        それ万札にして還元します！
      </p>

      {/* ここにスライダーを表示 */}
      <div className="mt-8">
        <Slider />
      </div>
    </SectionWrapper>
  );
}
