import React from "react";

import Image from "next/image";

import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

import ovenArt from "@/public/static/oven-art.jpg";
import boxOfBars from "@/public/static/boxofbars.png";
import cookieMan from "@/public/static/cookie-man.png";

export default function TraditionalValuesSection() {
    return (
        <section
            className={`${lalezar.className} mt-20 pb-20 max-w-7xl mx-auto justify-center`}>
            <h4 className="text-4xl text-center text-pink-600">
                Family & Faith
            </h4>
            <h2 className="text-6xl text-center text-gray-800 mt-4">
                Traditional Values
            </h2>
            <div className=" dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80">
                            <div className="pointer-events-none absolute inset-0 border-2 border-gray-800 rounded-lg p-2 md:p-8 text-center justify-center items-center flex flex-col">
                                <h3 className="text-lg md:text-3xl">
                                    FAMILY-OWNED
                                </h3>
                                <p
                                    className={`text-small leading-4 mt-0 md:text-xl md:mt-6 ${firaSansCondensed.className}`}>
                                    Sweet Squares LLC is a family-owned business
                                    where every member contributes to creating
                                    our homemade sweet squares with love and
                                    care.
                                </p>
                            </div>
                        </div>

                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:col-span-2 md:h-80">
                            <Image
                                src={ovenArt}
                                loading="lazy"
                                alt="Oven art"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Family-Owned
                            </span>
                        </div>

                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:col-span-2 md:h-80">
                            <Image
                                src={boxOfBars}
                                loading="lazy"
                                alt="Photo by Martin Sanchez"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Faith-Driven
                            </span>
                        </div>

                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80">
                            <div className="pointer-events-none absolute inset-0 border-2 border-gray-800 rounded-lg p-2 md:p-8 text-center justify-center items-center flex flex-col">
                                <h3 className="text-lg md:text-3xl">
                                    FAITH-DRIVEN
                                </h3>
                                <p
                                    className={`text-small leading-4 mt-0 md:text-xl md:mt-6 ${firaSansCondensed.className}`}>
                                    Rooted in our Christian faith, we aim to
                                    glorify God through the quality of our work
                                    and the joy our products bring to others.
                                </p>
                            </div>
                        </div>

                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:h-80">
                            <div className="pointer-events-none absolute inset-0 border-2 border-gray-800 rounded-lg p-2 md:p-8 text-center justify-center items-center flex flex-col">
                                <h3 className="text-lg md:text-3xl">
                                    LASTING LEGACY
                                </h3>
                                <p
                                    className={`text-small leading-4 mt-0 md:text-xl md:mt-6 ${firaSansCondensed.className}`}>
                                    Our sweet squares are made using our
                                    family’s timeless recipe, preserving a
                                    family tradition that we proudly share with
                                    every customer.
                                </p>
                            </div>
                        </div>

                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-white shadow-lg md:col-span-2 md:h-80">
                            <Image
                                src={cookieMan}
                                loading="lazy"
                                alt="Oven art"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Lasting Legacy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
