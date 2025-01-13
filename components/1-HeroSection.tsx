// components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section
        id="hero"
        className="h-auto p-8 bg-pink-100 flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold mb-4">
          フェチモデルになってみませんか？
        </h1>
        <p className="text-center max-w-2xl">
          ここにメインとなる説明を配置。どんなお仕事なのか、初心者でも大丈夫か、などの概要を簡潔にまとめます。
        </p>
        {/* CTAボタンなどを置いてもOK */}
        <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded">
          応募はこちら
        </button>
      </section>
    );
  }
  