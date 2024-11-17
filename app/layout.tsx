import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Sweet Squares LLC",
    description: "The Best Cookie Bars in Town",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-100`}>
                    <Navigation />
                    {children}
                    <ToastContainer />
                    <CookieConsent />
                    <Footer />
                </body>
            </html>
        </>
    );
}
