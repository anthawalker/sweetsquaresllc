"use client";

import { useState, useRef } from "react";
import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section
            className={`${lalezar.className} mt-20 pb-4 md:pb-20 max-w-7xl mx-auto justify-center`}>
            <h4 className="text-2xl md:text-4xl text-center text-pink-600">
                Origin
            </h4>
            <h2 className="text-4xl md:text-6xl text-center text-gray-800 mt-0 md:mt-4">
                The Beginning
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                <div className="md:w-1/2 justify-items-center ">
                    <div className="relative">
                        {/* iPhone frame */}
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[50px] shadow-xl overflow-hidden border-[14px] border-black">
                            {/* iPhone notch */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl z-10"></div>
                            {/* Video container */}
                            <div className="absolute inset-0 rounded-[36px] overflow-hidden">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    src="/timeline-video.mp4"
                                    loop
                                    muted
                                    autoPlay
                                    playsInline>
                                    Your browser does not support the video tag.
                                </video>
                                {/* Play/Pause button */}
                                <button
                                    onClick={togglePlay}
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                    <svg
                                        className="w-16 h-16 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        {isPlaying ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            {/* iPhone home indicator */}
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <p
                        className={`p-8 text-lg md:text-3xl text-gray-800 mb-6 ${firaSansCondensed.className}`}>
                        Sweet Squares LLC began in 2018, during a difficult time
                        when one of our founders was battling cancer. To help
                        with medical bills, we turned to our great-grandmother’s
                        beloved sweet squares recipe, baking and selling them
                        with love. What started as a way to make ends meet soon
                        became a heartfelt journey to share our family’s
                        traditions and faith, one sweet square at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}
