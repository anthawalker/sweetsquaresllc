import React from "react";
import { Lalezar } from "next/font/google";
import Image from "next/image";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });

import bananaNut from "@/public/static/banana-nut.png";
import doubleChocolate from "@/public/static/double-chocolate.png";
import butterPecan from "@/public/static/butter-pecan.png";
import strawberryCreme from "@/public/static/strawberry-creme.png";
import lemonIceCream from "@/public/static/lemon-ice-cream.png";
import pumpkinSpice from "@/public/static/pumpkin-spice.png";
import redVelvetOreo from "@/public/static/red-velvet-oreo.png";
import oreo from "@/public/static/oreo.png";
import chocSprinkle from "@/public/static/chocsprinkle.png";
import strawburst from "@/public/static/strawburst.png";

export default function FeaturedSection() {
    return (
        <section
            className={`${lalezar.className} mt-20 pb-20 max-w-7xl mx-auto justify-center`}>
            <h4 className="text-4xl text-center text-pink-600">
                Deliciously Fresh
            </h4>
            <h2 className="text-6xl text-center text-gray-800 mt-4">
                Our Featured Treats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 text-center items-baseline gap-4">
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={230}
                        height={230}
                        src={bananaNut}
                        alt="Banana Nut square"
                    />
                    <h4
                        className={`text-pink-600 text-3xl mt-1 drop-shadow-lg`}>
                        Banana Nut
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={230}
                        height={230}
                        src={doubleChocolate}
                        alt="Double Chocolate square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Double Chocolate
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={230}
                        height={230}
                        src={butterPecan}
                        alt="Butter Pecan square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Butter Pecan
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={200}
                        height={200}
                        src={strawberryCreme}
                        alt="Strawberry Creme square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Strawberry Creme
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={200}
                        height={200}
                        src={lemonIceCream}
                        alt="Lemon Ice Cream square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Lemon Ice Cream
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={200}
                        height={200}
                        src={pumpkinSpice}
                        alt="Pumpkin Spice square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Pumpkin Spice
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={210}
                        height={210}
                        src={redVelvetOreo}
                        alt="Red Velvet Oreo square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Red Velvet Oreo
                    </h4>
                </div>

                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={250}
                        height={203}
                        src={oreo}
                        alt="Oreo Blast square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Oreo Blast
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={230}
                        height={170}
                        src={chocSprinkle}
                        alt="Double Chocolate Confetti square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Double Chocolate Confetti
                    </h4>
                </div>
                <div className="mx-auto mt-8 justify-items-center">
                    <Image
                        className="drop-shadow-2xl"
                        width={210}
                        height={170}
                        src={strawburst}
                        alt="Strawberry Lemon square"
                    />
                    <h4 className={`text-pink-600 text-3xl mt-1`}>
                        Strawberry Lemon
                    </h4>
                </div>
            </div>
        </section>
    );
}
