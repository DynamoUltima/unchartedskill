
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentCarousel from "@/components/ContentCarousel";

export default function Home() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Hero />
            <ContentCarousel />

            {/* Footer Placeholder */}
            <footer style={{
                padding: "4rem 2rem",
                textAlign: "center",
                color: "var(--text-muted)",
                borderTop: "1px solid #333",
                marginTop: "auto"
            }}>
                <p>&copy; 2026 UnchartedSkill. All rights reserved.</p>
            </footer>
        </main>
    );
}
