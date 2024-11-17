import Image from "next/image";
import React from "react";
import aboutSectionImage from "@/public/static/about-section-bg.png";

import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import Link from "next/link";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function AboutSection() {
    return (
        <section className="relative w-full h-[40rem] overflow-hidden p-8 bg-pink-600">
            <Image
                src={aboutSectionImage}
                alt="hero background image with sweet squares line art"
                fill
                style={{ objectFit: "cover" }}
                className="hidden md:block"
                loading="lazy"
            />
            <div className="z-10 relative flex flex-col h-full max-w-7xl mx-auto justify-center">
                <h2
                    className={`text-7xl md:text-[100px] md:leading-[100px] text-white ${lalezar.className}`}>
                    About Us
                </h2>
                <p
                    className={`text-white text-xl w-96 ${firaSansCondensed.className}`}>
                    Sweet Squares LLC was born from our family&apos;s love for
                    baking and our desire to honor God in everything we do. Our
                    mission is simple: to share joy through our homemade sweet
                    squares while preserving our family’s cherished traditions.
                </p>
                <Link
                    href="/about"
                    className="text-pink-600 text-center bg-white font-semibold border rounded-lg border-white w-36 py-1 px-2 mt-6">
                    Read Our Story
                </Link>
            </div>
        </section>
    );
}
