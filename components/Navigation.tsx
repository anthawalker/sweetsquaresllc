"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/static/sweet-squares-official-logo.png";

export default function Navigation() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="py-2 fixed top-0 z-50 w-full bg-orange-100 md:bg-transparent">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Sweet Squares Logo"
                        width={70}
                        height={70}
                        className="mt-2"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4 bg-orange-100 p-4 border-2 rounded-xl border-gray-800">
                    <Link className="font-semibold text-gray-800" href="/">
                        Home
                    </Link>
                    <Link className="font-semibold text-gray-800" href="/order">
                        Order
                    </Link>
                    <Link className="font-semibold text-gray-800" href="/about">
                        About
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-gray-800 focus:outline-none">
                    <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMobileMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-orange-100 py-4">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            className="font-semibold text-gray-800"
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link
                            className="font-semibold text-gray-800"
                            href="/order"
                            onClick={() => setMobileMenuOpen(false)}>
                            Order
                        </Link>
                        <Link
                            className="font-semibold text-gray-800"
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}>
                            About
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
