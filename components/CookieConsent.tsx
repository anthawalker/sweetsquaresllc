"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 w-full bg-gray-900 text-white px-4 py-4 shadow-md z-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">
                    We use cookies to improve your experience on our website. By
                    using our site, you agree to our{" "}
                    <a
                        href="/privacy-policy"
                        className="text-blue-500 underline hover:text-blue-400">
                        Privacy Policy
                    </a>
                    .
                </p>
                <div className="flex mt-2 md:mt-0 space-x-2">
                    <button
                        onClick={handleAccept}
                        className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600">
                        Accept
                    </button>
                    <button
                        onClick={handleDecline}
                        className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600">
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}
