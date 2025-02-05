import Image from "next/image";
// import footerImage from "@/public/static/footer-bg-art.jpg";
import logo from "@/public/static/sweet-squares-official-logo.png";
import ig from "@/public/static/icon-ig.svg";

import { Lalezar } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import Link from "next/link";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function Footer() {
    return (
        <div>
            <hr />
            <div className="relative w-full p-8 h-full md:h-[230px] overflow-hidden max-w-7xl mx-auto mt-2 md:mt-4 md:mb-8">
                <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
                    <div className="flex md:justify-start justify-center">
                        <Image src={logo} alt="company logo" width={180} />
                    </div>
                    <div className="z-10 relative flex flex-col h-full gap-2">
                        <p
                            className={`text-xl font-semibold ${lalezar.className}`}>
                            Navigation
                        </p>
                        <Link
                            className={`text-gray-800 font-semibold cursor-pointer ${firaSansCondensed.className}`}
                            href="/order">
                            Order
                        </Link>
                        <Link
                            className={`text-gray-800 font-semibold cursor-pointer ${firaSansCondensed.className}`}
                            href="/about">
                            About
                        </Link>
                        <div>
                            <Link
                                className={`text-gray-800 font-semibold cursor-pointer mr-2 ${firaSansCondensed.className}`}
                                href="/terms">
                                Terms
                            </Link>
                            |
                            <Link
                                className={`text-gray-800 font-semibold cursor-pointer ml-2 ${firaSansCondensed.className}`}
                                href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </div>
                        <hr className="w-72" />
                        <p
                            className={`text-gray-800 font-semibold cursor-pointer ${firaSansCondensed.className}`}>
                            Copyright © {new Date().getFullYear()} | Sweet
                            Squares LLC
                        </p>
                    </div>
                    <div>
                        <p
                            className={`text-xl font-semibold ${lalezar.className}`}>
                            Follow Us!
                        </p>
                        <a
                            href="https://www.instagram.com/sweetsquaresllc/"
                            target="_blank"
                            className="cursor-pointer">
                            <Image
                                src={ig}
                                alt="company logo"
                                width={45}
                                className="mt-2 cursor-pointer"
                            />
                        </a>
                    </div>
                    <div>
                        <p
                            className={`text-xl font-semibold ${lalezar.className}`}>
                            Contact Info
                        </p>
                        <p
                            className={`text-gray-800 font-semibold ${firaSansCondensed.className}`}>
                            orders@sweetsquaresllc.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
