import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import IngredientsSection from "@/components/IngredientsSection";
import TraditionalValuesSection from "@/components/TraditionalValuesSection";

export default function Home() {
    return (
        <main>
            <Hero />
            <FeaturedSection />
            <AboutSection />
            <TraditionalValuesSection />
            <IngredientsSection />
        </main>
    );
}
