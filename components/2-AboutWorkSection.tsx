// components/AboutWorkSection.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';

export default function AboutWorkSection() {
  return (
    <SectionWrapper id="about-work" backgroundColor="bg-purple">
      {/* タイトル */}
      <SectionHeading>どんなお仕事？</SectionHeading>

      {/* メインの説明文 */}
      <p className="text-center leading-relaxed mb-8">
        フェチ向けの老舗制作スタジオが<br />
        運営する動画へフェチモデルとして<br />
        出演していただくいお仕事です！
      </p>

      {/* チェック項目（リスト） */}
      <ul className="flex flex-col items-center space-y-2 mb-8">
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
    </SectionWrapper>
  );
}
