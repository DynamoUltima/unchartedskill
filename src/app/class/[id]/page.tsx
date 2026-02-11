import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassHero from "@/components/ClassHero";
import ClassContent from "@/components/ClassContent";

export default function ClassPage() {
    return (
        <div className="bg-zinc-950 text-zinc-300 font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen">
            <Navbar />
            <ClassHero />
            <ClassContent />
            <Footer />
        </div>
    );
}
