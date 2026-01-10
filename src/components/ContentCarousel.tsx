"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Mountain, Atom, Trophy, BookOpen } from "lucide-react";
import CategoryPill from "./pills/CategoryPill";
import { useRef } from "react";

const CATEGORIES = [
    { label: "Outdoor Adventures & Events", icon: <Mountain size={16} /> },
    { label: "Science & Technology", icon: <Atom size={16} /> },
    { label: "Sports & Athletics", icon: <Trophy size={16} /> },
    { label: "Writing", icon: <BookOpen size={16} /> },
];

const CARDS = [
    {
        id: 1,
        slug: "practice",
        badge: "New",
        kicker: "ORIGINAL SERIES",
        title: "In Practice",
        subtitle: "Thriving Through The Holiday Chaos",
        footer: "4 episodes",
        image: "/card-writing.png", // Reuse for aesthetic
    },
    {
        id: 2,
        slug: "dopamine",
        badge: "New",
        kicker: "TAKE YOUR BRAIN BACK",
        title: "Dopamine",
        subtitle: "With Dr. Anna Lombke",
        footer: "1 hour 1 minute",
        image: "/hero-bg.png",
    },
    {
        id: 3,
        slug: "cyberwarfare",
        badge: "New",
        kicker: "THE FRONT LINE IS YOU",
        title: "Cyberwarfare",
        subtitle: "With Notable Instructors",
        footer: "1 hour 39 minutes",
        image: "/card-cyber.png",
    },
    {
        id: 4,
        slug: "financial",
        badge: "New",
        kicker: "ORIGINAL SERIES",
        title: "Financial Wellness",
        subtitle: "11 episodes",
        footer: "1 hour 39 minutes", // Typo in design? keeping logic
        image: "/card-finance.png",
    },
    {
        id: 5,
        slug: "peter-attia",
        badge: "New",
        kicker: "ORIGINAL SERIES",
        title: "Dr. Peter Attia",
        subtitle: "Longevity and Health",
        footer: "3 episodes",
        image: "/card-drone.png",
    },
];

export default function ContentCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-12 pl-8 md:pl-16 w-full overflow-hidden">
            {/* Categories */}
            <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
                {CATEGORIES.map((cat) => (
                    <CategoryPill key={cat.label} label={cat.label} icon={cat.icon} />
                ))}
            </div>

            {/* Header */}
            <div className="flex justify-between items-end mb-6 pr-8 md:pr-16 max-w-[1600px]">
                <div className="flex items-baseline gap-4">
                    <h2 className="text-xl font-bold text-white">Popular now</h2>
                    <a href="#" className="text-[#b3b3b3] text-sm hover:text-white transition-colors">See all</a>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#444] transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-[#444] transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar pr-16"
                style={{ scrollbarWidth: "none" }}
            >
                {CARDS.map((card) => (
                    <div
                        key={card.id}
                        className="relative min-w-[280px] w-[280px] aspect-[3/4] rounded-lg overflow-hidden snap-start cursor-pointer group hover:border border-white/20 transition-all duration-300"
                    >
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay Gradient: Bottom to Top */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* New Badge */}
                        {card.badge && (
                            <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                {card.badge}
                            </div>
                        )}

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center text-center">
                            <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300 mb-2">
                                {card.kicker}
                            </div>
                            {/* Specific styling for Dopamine/Cyberwarfare vs others */}
                            <h3 className={`font-serif leading-none mb-3 text-white ${card.title.length > 15 ? 'text-2xl' : 'text-4xl'}`}>
                                {card.title}
                            </h3>

                            <div className="w-4 h-0.5 bg-white/50 mb-3"></div>

                            <div className="text-sm font-semibold text-white mb-6">
                                {card.subtitle}
                            </div>

                            <div className="text-xs text-gray-400 font-medium tracking-wide">
                                {card.footer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Button */}
            <div className="flex justify-center mt-8 pr-16">
                <button className="bg-[#333] text-white px-8 py-3 rounded text-sm font-bold hover:bg-[#444] transition-colors">
                    Explore Classes
                </button>
            </div>
        </section>
    );
}
