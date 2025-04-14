"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react';

// プロパティの型定義（必要なら children 以外の prop を追加してもOK）
type H3HeadingSmallProps = {
    children: React.ReactNode;
    className?: string; // 追加クラスがあればここで指定
};

export default function H3HeadingSmall({
    children,
    className = '',
}: H3HeadingSmallProps) {
    return (
        <>
            <h3 className={`font-normal text-center ${className} text-lg mb-0`}
            >
                {children}
            </h3>
            <CldImage
                src="images/BG/hyo523znltiww7ljk4na" // 仕切り線として使う画像
                width={400}
                height={100}
                alt=""                  // 装飾目的なら空ALTでもOK, SEO的には必要に応じて
                className="mx-auto w-[200px] h-auto -mt-3"
            />
        </>
    );
} 