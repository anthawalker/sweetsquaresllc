import Image from "next/image";
import aboutHeroImage from "@/public/static/about-hero-bg-2.jpg";

import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import Link from "next/link";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function AboutHero() {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <Image
                src={aboutHeroImage}
                alt="hero background image with sweet squares line art"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div className="z-10 relative flex flex-col items-center justify-center h-full w-full">
                <h1
                    className={`text-8xl md:text-[140px] text-center leading-[100px] text-white ${lalezar.className}`}>
                    Our Story
                </h1>
                <p
                    className={`text-white w-72 text-xl text-center mt-6 ${firaSansCondensed.className}`}>
                    Learn more about us!
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
