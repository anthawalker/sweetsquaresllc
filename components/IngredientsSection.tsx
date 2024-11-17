import Image from "next/image";
import React from "react";
import ingredientsSectionImage from "@/public/static/ingredients-bg.jpg";

import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function IngredientsSection() {
    return (
        <section className="relative w-full h-[40rem] overflow-hidden p-8 bg-black">
            <Image
                src={ingredientsSectionImage}
                alt="hero background image with sweet squares line art"
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                className="hidden md:block"
            />
            <div className="z-10 relative flex flex-col h-full max-w-7xl mx-auto justify-center">
                <h2
                    className={`text-7xl md:text-[100px] md:leading-[100px] text-white ${lalezar.className}`}>
                    High-Quality
                    <br />
                    Ingredients
                </h2>
                <p
                    className={`text-xl text-white w-96 ${firaSansCondensed.className}`}>
                    We offer high-quality, homemade desserts that leave out all
                    the seed oils and artificial ingredients
                </p>
            </div>
        </section>
    );
}
