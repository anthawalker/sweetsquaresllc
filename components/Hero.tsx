import Image from "next/image";
import React from "react";
import heroImage from "@/public/static/hero-bg-line-art.jpg";

import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import Link from "next/link";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function Hero() {
    return (
        <div className="relative w-full h-96 mt-24 md:mt-0 md:h-screen overflow-hidden">
            <Image
                src={heroImage}
                alt="hero background image with sweet squares line art"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div className="z-10 relative flex flex-col items-center justify-center h-full w-full">
                <h1
                    className={`text-8xl md:text-[140px] text-center leading-[70px] md:leading-[100px] text-white ${lalezar.className}`}>
                    Sweet
                    <br />
                    Squares
                </h1>
                <p
                    className={`text-white w-72 text-center text-xl mt-6 ${firaSansCondensed.className}`}>
                    Get squared away for the season with some delightful treats
                </p>
                <Link
                    href="/order"
                    className="text-center text-white bg-pink-600 font-semibold border rounded-lg border-white w-36 py-1 px-2 mt-6">
                    Order
                </Link>
            </div>
        </div>
    );
}
