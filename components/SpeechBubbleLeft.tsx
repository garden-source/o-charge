"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react';

type SpeechBubbleLeftProps = {
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

export default function SpeechBubbleLeft({
  content,
  characterSrc,
  characterAlt,
  characterWidth = 64,
  characterHeight = 64,
  bubbleWidth = "100%",
  characterSize = "w-16 h-16",
  className = '',
  bubbleClassName = '',
  bubbleBgColor = '#fff9f7',
}: SpeechBubbleLeftProps) {
  return (
    <div className={`flex items-start w-full my-6 ${className}`}>
      {/* キャラクターイラスト（左側） */}
      <div className={`${characterSize} relative flex-shrink-0`}>
        <CldImage
          src={characterSrc}
          width={characterWidth}
          height={characterHeight}
          alt={characterAlt}
          className="object-contain w-full h-full"
        />
      </div>
      {/* 吹き出し本体 */}
      <div 
        className={`relative p-4 rounded-xl speech-bubble flex-grow ml-2 ${bubbleClassName}`} 
        style={{ 
          width: bubbleWidth,
          backgroundColor: bubbleBgColor
        }}
      >
        <p className="leading-relaxed font-jkg whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
} 