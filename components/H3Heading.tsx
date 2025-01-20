// app/components/H3Heading.tsx
"use client";
import { CldImage } from 'next-cloudinary';
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
            <CldImage
                src="images/BG/hyo523znltiww7ljk4na" // 仕切り線として使う画像 (public/images/h3-line.png)
                width={400}
                height={100}
                alt=""                  // 装飾目的なら空ALTでもOK, SEO的には必要に応じて
                className="mx-auto w-[200px] h-auto"
            />
        </>
    );
}
