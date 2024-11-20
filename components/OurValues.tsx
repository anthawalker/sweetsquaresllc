import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function OurValues() {
    return (
        <>
            <h2
                className={`text-4xl md:text-6xl text-center mt-0 md:mt-12 ${lalezar.className}`}>
                Our Values
            </h2>
            <section
                className={`${lalezar.className} mt-8 pb-20 pt-16 bg-pink-600`}>
                <div className="max-w-7xl mx-auto justify-center text-white">
                    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 mt-0 md:mt-8">
                        <div className="md:w-1/2 items-center p-8">
                            <Image
                                src="/static/ABOUT-faith-img.png"
                                alt="cross and cookie squares"
                                width={500}
                                height={280}
                                className="mt-4 rounded-xl"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 text-center">
                            <h3 className="text-5xl">Faith</h3>
                            <p
                                className={`${firaSansCondensed.className} text-xl md:text-3xl mt-2`}>
                                At Sweet Squares LLC, our mission is to honor
                                God through our work and bring joy to our
                                community with every bite of our homemade sweet
                                squares. We believe in the power of family,
                                faith, and food to connect people and share
                                love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${lalezar.className} pb-4 md:pb-20 pt-16`}>
                <div className="max-w-7xl mx-auto justify-center text-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 mt-0 md:mt-8 text-center">
                        <div className="md:w-1/2 items-center p-8">
                            <h3 className="text-5xl">Family</h3>
                            <p
                                className={`${firaSansCondensed.className} text-xl md:text-3xl mt-2`}>
                                This is more than a business – it’s a family
                                legacy built on love and togetherness.
                            </p>
                        </div>
                        <div className="md:w-1/2 p-8">
                            <p
                                className={`text-[10rem] leading-[8rem] text-center opacity-15`}>
                                FAM
                                <br />
                                ILY
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className={`${lalezar.className} pb-4 md:pb-20 pt-16 bg-pink-600`}>
                <div className="max-w-7xl mx-auto justify-center text-white">
                    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 mt-0 md:mt-8">
                        <div className="md:w-1/2 items-center p-8">
                            <Image
                                src="/static/ABOUT-integrity.png"
                                alt="cross and cookie squares"
                                width={500}
                                height={280}
                                className="mt-4 rounded-xl"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 text-center">
                            <h3 className="text-5xl">Integrity</h3>
                            <p
                                className={`${firaSansCondensed.className} text-xl md:text-3xl mt-2`}>
                                We are committed to using only natural
                                ingredients, leaving out artificial additives
                                and seed oils.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${lalezar.className} pb-4 md:pb-20 pt-16`}>
                <div className="max-w-7xl mx-auto justify-center text-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 mt-0 md:mt-8">
                        <div className="md:w-1/2 items-center p-8 text-center">
                            <h3 className="text-5xl">Quality</h3>
                            <p
                                className={`${firaSansCondensed.className} text-xl md:text-3xl mt-2`}>
                                Every sweet square is carefully crafted to be
                                the best dessert you’ve ever tasted.
                            </p>
                            {/* <p
                                className={`text-[8rem] leading-[6rem] text-center opacity-15 mt-8`}>
                                QUAL
                                <br />
                                ITY
                            </p> */}
                        </div>
                        <div className="md:w-1/2 p-8 relative flex justify-center items-center flex-col drop-shadow-2xl">
                            <Image
                                src="/static/hand-3.png"
                                alt="cross and cookie squares"
                                width={295}
                                height={394}
                                className="mt-4 drop-shadow-2xl rounded-xl"
                            />
                            {/* <p
                                className={`text-[16rem] leading-[12rem] text-center opacity-15 absolute`}>
                                QUAL
                                <br />
                                ITY
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`${lalezar.className} pb-4 md:pb-20 pt-16 bg-pink-600`}>
                <div className="max-w-7xl mx-auto justify-center text-white">
                    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 mt-0 md:mt-8">
                        <div className="md:w-1/2 items-center p-8">
                            <Image
                                src="/static/cookie-man-wide.png"
                                alt="cross and cookie squares"
                                width={500}
                                height={280}
                                className="mt-4 rounded-xl"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 justify-center items-center flex flex-col">
                            <h3 className="text-5xl">Order Now!</h3>
                            <p
                                className={`${firaSansCondensed.className} text-xl md:text-3xl mt-2`}>
                                Place your order today
                            </p>
                            <div className="mt-8 w-40 flex flex-col items-center">
                                <Link
                                    href="/order"
                                    className="text-2xl text-pink-600 text-center bg-white font-semibold border rounded-lg border-white py-1 px-6">
                                    Order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
