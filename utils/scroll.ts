/**
 * アンカーリンクでスクロールする際のヘッダー高さを考慮したスクロール処理
 * @param id - スクロール先の要素ID（#なし）
 * @param offset - ヘッダーの高さなどオフセット値（デフォルト: 80px）
 */
export function scrollToElement(id: string, offset: number = 80): void {
    // ユーザーがページ内リンクをクリックした場合に実行
    const element = document.getElementById(id);

    if (!element) return;

    try {
        // 要素の位置を計算する2つの方法を試す

        // 方法1: offsetTopを使用した方法（より信頼性が高い）
        let position = 0;
        let currentElement = element;

        // offsetTopは親要素からの相対位置なので、全ての親要素のoffsetTopを合計
        while (currentElement) {
            position += currentElement.offsetTop;
            currentElement = currentElement.offsetParent as HTMLElement;
        }

        // オフセットを考慮した最終位置
        const finalPosition = Math.max(0, position - offset);

        // 直接最終位置にスクロール
        window.scrollTo({
            top: finalPosition,
            behavior: 'smooth'
        });
    } catch (error) {
        // 何らかの理由で上記の方法が失敗した場合のフォールバック
        console.error("Error in scrollToElement:", error);

        // 方法2: getBoundingClientRectを使用した方法（フォールバック）
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - offset);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * ページ読み込み時にURLにハッシュフラグメントがあれば適切にスクロールする
 * @param offset - ヘッダーの高さなどオフセット値（デフォルト: 80px）
 */
export function handleInitialScroll(offset: number = 80): void {
    // URLからハッシュを取得（例: #about-us → about-us）
    const hash = window.location.hash.replace('#', '');

    if (!hash) return;

    // ハッシュがある場合、要素が確実にレンダリングされるまで少し待つ
    // 段階的に遅延時間を増やしながら複数回試行する
    const tryScroll = (attempts: number = 0) => {
        const element = document.getElementById(hash);

        if (element) {
            // 要素が見つかればスクロール
            scrollToElement(hash, offset);
        } else if (attempts < 5) {
            // 要素が見つからなければ、少し待ってから再試行（最大5回）
            // 遅延時間を段階的に増やす
            setTimeout(() => tryScroll(attempts + 1), 100 * (attempts + 1));
        }
    };

    // 最初の試行
    setTimeout(() => tryScroll(), 100);
} 