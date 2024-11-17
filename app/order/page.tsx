import { Suspense } from "react";
import dynamic from "next/dynamic";

const DynamicCookieStore = dynamic(() => import("@/components/CookieStore"), {
    loading: () => <p>Loading...</p>,
});

export default function Home() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <DynamicCookieStore />
            </Suspense>
        </>
    );
}
