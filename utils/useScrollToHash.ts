"use client";

import { useEffect } from 'react';
import { handleInitialScroll } from './scroll';

/**
 * ページ読み込み時にURLのハッシュフラグメントに基づいて適切な位置にスクロールするフック
 * @param offset - ヘッダーの高さなどオフセット値（デフォルト: 80px）
 */
export function useScrollToHash(offset: number = 80): void {
    useEffect(() => {
        // コンポーネントがマウントされた後に実行
        handleInitialScroll(offset);

        // ブラウザの戻る/進むボタンでのハッシュ変更時にも対応
        const handleHashChange = () => {
            handleInitialScroll(offset);
        };

        // イベントリスナーを登録
        window.addEventListener('hashchange', handleHashChange);

        // クリーンアップ関数
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [offset]); // offsetが変更されたときだけ再実行
} 