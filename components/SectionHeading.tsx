// app/components/SectionHeading.tsx
import React from 'react';

// プロパティの型定義（必要なら children 以外の prop を追加してもOK）
type SectionHeadingProps = {
    children: React.ReactNode;
    className?: string; // 追加クラスがあればここで指定
};

export default function SectionHeading({
    children,
    className = '',
}: SectionHeadingProps) {
    return (
        <>
            <h2
                className={`text-2xl font-bold text-center mb-4 ${className}`}
            >
                {children}
            </h2>
            <hr className="border-dotted border-1 border-gray-300 my-4" />
        </>
    );
}
