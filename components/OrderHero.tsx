import Image from "next/image";
import orderHeroImage from "@/public/static/ORDER-hero-bg.jpg";

import { Lalezar, Fira_Sans_Condensed } from "next/font/google";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function OrderHero() {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <Image
                src={orderHeroImage}
                alt="hero background image with sweet squares line art"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div className="z-10 relative flex flex-col items-center justify-center h-full w-full">
                <h1
                    className={`text-8xl md:text-[140px] text-center leading-[100px] text-white ${lalezar.className}`}>
                    Order
                </h1>
                <p
                    className={`text-white w-72 text-center text-xl mt-6 ${firaSansCondensed.className}`}>
                    Place your order below!
                </p>
            </div>
        </div>
    );
}
