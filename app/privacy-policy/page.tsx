
export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="mx-auto max-w-screen-md p-8 text-gray-600 bg-white">
      <h1 className="text-2xl font-bold mb-4">プライバシーポリシー</h1>

      <p>
        高収入モデルアルバイトのおさいふチャージは、情報の安全管理を厳守することが重要な社会的責任であると認識し、個人情報保護に努めます。また、これを確実に実践していくために以下の個人情報保護基本方針を定め、この方針に従い、個人情報の適切な取り扱い、管理に努めるものとします。
      </p>

      <ol className="list-decimal list-inside mt-4 mb-8 space-y-2">
        <li>
          当運営事務局は、個人情報に関して、ご本人の同意なく無断で収集・利用することはありません。また、ご本人の同意を得た場合でも同意を得た範囲でのみ使用します。ご本人が提供を同意された場合や法令に基づく場合以外は第三者に当該個人情報を提供することはありません。
        </li>
        <li>
          保有する個人情報への不正アクセスや個人情報の紛失、破壊、改ざん、漏洩について、予防及び是正の措置を講じています。
        </li>
        <li>個人情報に関する諸法令を遵守します。</li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">個人情報取扱基準</h2>

      <div className="mt-4 mb-4">
        <p className="font-bold">１．個人情報の定義</p>
        <p>
          「個人情報」とは、当該情報に含まれる氏名、住所、電話番号、メールアドレス、勤務先、生年月日その他の記述等により特定の個人を識別することが出来るもの（他の情報と容易に照合することができ、それにより識別す特定の個人をることが出来る事となるものを含む。）を指します。
        </p>
      </div>

      <div className="mt-4 mb-4">
        <p className="font-bold">２．利用目的</p>
        <p>
          当運営事務局は、求人情報サイト「高収入モデルアルバイトのおさいふチャージ」の運営を行うことに伴い、事業遂行上必要となる個人情報を取得しますが、これらの個人情報は下記目的で利用させていただきます。
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>当運営事務局の定める高収入撮影アルバイトへのご出演希望者（本人）への連絡。</li>
          <li>法令に基づき開示提供を求められた場合</li>
          <li>当運営事務局の合併・分割などその他の事由により必要と認められた場合</li>
        </ol>
      </div>

      <div className="mt-4 mb-4">
        <p className="font-bold">３．第三者への開示提供</p>
        <p>『プライバシーポリシー』をご確認下さい。</p>
      </div>

      <div className="mt-4 mb-4">
        <p className="font-bold">４．開示</p>
        <p>
          当運営事務局保有の個人データに関して、ご本人の情報開示をご希望される場合には、お申し出ていただいた方が本人である事を確認した上で、合理的な期間及び範囲で回答します。
        </p>
      </div>

      <div className="mt-4 mb-4">
        <p className="font-bold">５．訂正・削除</p>
        <p>
          当運営事務局保有の個人データに関して、ご本人の情報について訂正、追加又は削除をご希望なされる場合には、お申し出頂いた方がご本人である事を確認した上で、事実と異なる内容がある場合には、合理的な期間及び範囲で情報の訂正、追加又は削除をします。
        </p>
      </div>

      <div className="mt-4 mb-4">
        <p className="font-bold">６．利用停止･消去</p>
        <p>
          当運営事務局保有の個人データに関しまして、ご本人の情報の利用停止･消去をご希望なさる場合には、お申し出ていただいた方がご本人である事を確認した上で、合理的な期間及び範囲で利用停止又は消去を致します。 なお、関係法令に基づき保有している情報については、利用停止又は消去のお申し出に応じられない場合があります。
        </p>
      </div>

      <p className="mt-4 mb-4">場所: 埼玉県戸田市</p>

      <p className="text-sm text-gray-500 mt-4">
        Copyright © 高額モデルアルバイトのおさいふチャージ {currentYear}　all rights reserved.
      </p>
    </main>
  );
}