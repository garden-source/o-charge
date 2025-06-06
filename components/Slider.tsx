"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface SlideData {
    imageId: string;
    link: string;
}

interface SliderProps {
    slides?: SlideData[];
}

export default function Slider({ slides: customSlides }: SliderProps) {
    // デフォルトのスライドデータ（カスタムデータがない場合）
    const defaultSlides: SlideData[] = [
        { imageId: "slide1_uu801f", link: "/job-details#shichaku" },
        { imageId: "slide2_lzvrgv", link: "/job-details#chirari" },
        { imageId: "slide3_xrwb3m", link: "/job-details#onara-satuei" },
        { imageId: "slide4_do0br4", link: "/job-details#toire-satuei" }
    ];

    const slides = customSlides || defaultSlides;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // 5秒ごとに自動で次のスライドへ
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full">
            {/* スライダー本体を囲む要素 */}
            <div className="overflow-hidden border border-gray-200 bg-gray-50 rounded-lg">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <Link href={slide.link} className="block cursor-pointer">
                                <div className="relative w-full aspect-[78/21]">
                                    <CldImage
                                        src={slide.imageId}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Prev ボタン (左矢印) */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    prevSlide();
                }}
                className="
                    absolute 
                    left-[-0.8rem]    /* 枠外に飛び出す負の値 */
                    top-[50%]
                    -translate-y-1/2
                    p-2
                    rounded-full
                    shadow
                    bg-white/50
                    hover:bg-white/80
                    focus:outline-none
                    z-10
                "
            >
                {/* アイコン / テキストなど */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 stroke-current text-gray-600/70"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>

            {/* Next ボタン (右矢印) */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    nextSlide();
                }}
                className="
                    absolute 
                    right-[-0.8rem]    /* 枠外に飛び出す負の値 */
                    top-[50%]
                    -translate-y-1/2
                    p-2
                    rounded-full
                    shadow
                    bg-white/50
                    hover:bg-white/80
                    focus:outline-none
                    z-10
                "
            >
                {/* アイコン / テキストなど */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 stroke-current text-gray-600/70"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
        </div>
    );
}
