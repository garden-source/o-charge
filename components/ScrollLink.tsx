"use client";

import { ReactNode } from 'react';
import { scrollToElement } from '../utils/scroll';

interface ScrollLinkProps {
    href: string;      // リンク先（#id形式）
    children: ReactNode;
    className?: string;
    offset?: number;   // スクロール時のオフセット（任意）
}

/**
 * ヘッダーの高さを考慮したページ内スクロールリンクコンポーネント
 */
const ScrollLink = ({ href, children, className = "", offset = 80 }: ScrollLinkProps) => {
    // #から始まるページ内リンクか確認
    const isInternalLink = href.startsWith('#');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // 通常のページ遷移ではない場合だけカスタム処理
        if (isInternalLink) {
            e.preventDefault();
            const id = href.replace('#', '');
            scrollToElement(id, offset);

            // URLを更新（履歴に追加せず）
            window.history.replaceState(null, '', href);
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

export default ScrollLink; 