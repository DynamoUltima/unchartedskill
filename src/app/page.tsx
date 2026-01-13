import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryRail from "@/components/CategoryRail";
import TrendingSection from "@/components/TrendingSection";
import OutdoorSection from "@/components/OutdoorSection";
import FeaturedLargeBlock from "@/components/FeaturedLargeBlock";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="bg-zinc-950 text-zinc-300 font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen">
            <Navbar />
            <Hero />
            <CategoryRail />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-20">
                <TrendingSection />
                <OutdoorSection />
                <FeaturedLargeBlock />
                <ComingSoon />
            </main>

            <Footer />
        </div>
    );
}
