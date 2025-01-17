// app/components/H3Heading.tsx
import React from 'react';

// プロパティの型定義（必要なら children 以外の prop を追加してもOK）
type H3HeadingProps = {
    children: React.ReactNode;
    className?: string; // 追加クラスがあればここで指定
};

export default function H3Heading({
    children,
    className = '',
}: H3HeadingProps) {
    return (
        <>

            <h3 className={`font-semibold text-center ${className} text-xl`}
            >
                {children}
            </h3>
            <img
                src="/images/h3-line.png" // 仕切り線として使う画像 (public/images/h3-line.png)
                alt=""                  // 装飾目的なら空ALTでもOK, SEO的には必要に応じて
                className="mx-auto w-[200px] h-auto"
            />
        </>
    );
}
