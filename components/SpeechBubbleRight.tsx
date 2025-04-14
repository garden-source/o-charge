"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react';

type SpeechBubbleRightProps = {
  content: React.ReactNode;
  characterSrc: string;
  characterAlt: string;
  characterWidth?: number;
  characterHeight?: number;
  bubbleWidth?: string;
  characterSize?: string;
  className?: string;
  bubbleClassName?: string;
  bubbleBgColor?: string;
};

export default function SpeechBubbleRight({
  content,
  characterSrc,
  characterAlt,
  characterWidth = 64,
  characterHeight = 64,
  bubbleWidth = "100%",
  characterSize = "w-16 h-16",
  className = '',
  bubbleClassName = '',
  bubbleBgColor = '#fde0e0',
}: SpeechBubbleRightProps) {
  return (
    <div className={`flex items-start w-full my-6 ${className}`}>
      {/* 吹き出し本体 */}
      <div 
        className={`relative p-4 rounded-xl speech-bubble flex-grow mr-2 ${bubbleClassName}`} 
        style={{ 
          width: bubbleWidth,
          backgroundColor: bubbleBgColor
        }}
      >
        <p className="leading-relaxed font-jkg whitespace-pre-line">
          {content}
        </p>
      </div>
      {/* キャラクターイラスト（右側） */}
      <div className={`${characterSize} relative flex-shrink-0`}>
        <CldImage
          src={characterSrc}
          width={characterWidth}
          height={characterHeight}
          alt={characterAlt}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
} 