// components/SalarySection.tsx
export default function SalarySection() {
    return (
      <section id="salary" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">お給料は？</h2>
        <p className="mb-2">
          ここで、報酬体系・時給・歩合制などについて説明します。例:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>1時間あたり 〇〇円～</li>
          <li>月〇〇回以上の勤務でボーナスあり</li>
          <li>交通費全額支給</li>
        </ul>
      </section>
    );
  }
  