"use client";

import { useEffect, useRef } from "react";
import { X, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Focus after a small delay to allow animation/rendering
            const timer = setTimeout(() => inputRef.current?.focus(), 100);
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Clean up overflow on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[70] bg-zinc-950/98 backdrop-blur-sm transition-all duration-300 animate-in fade-in">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white transition-colors group"
            >
                <X strokeWidth={1.5} className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="max-w-3xl mx-auto px-6 pt-32">
                <form onSubmit={(e) => e.preventDefault()} className="relative mb-16">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search classes, instructors, stories..."
                        className="w-full bg-transparent border-b border-zinc-800 text-2xl md:text-3xl font-serif text-white tracking-tight py-4 pr-12 focus:outline-none focus:border-white/40 transition-colors placeholder:text-zinc-700 placeholder:font-sans placeholder:tracking-normal"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <ArrowRight strokeWidth={1.5} className="w-6 h-6" />
                    </button>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xs font-medium tracking-widest text-zinc-600 uppercase mb-4">
                            Explore Categories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Photography", "Cinema", "Cooking", "Business", "Design"].map((category) => (
                                <button
                                    key={category}
                                    className="px-4 py-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs tracking-wide uppercase"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium tracking-widest text-zinc-600 uppercase mb-4">
                            Trending Searches
                        </h3>
                        <div className="space-y-4">
                            <Link href="#" className="flex items-center gap-3 group">
                                <TrendingUp strokeWidth={1.5} className="w-5 h-5 text-zinc-600 group-hover:text-brand-gold transition-colors" />
                                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                    Annie Vance Masterclass
                                </span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 group">
                                <TrendingUp strokeWidth={1.5} className="w-5 h-5 text-zinc-600 group-hover:text-brand-gold transition-colors" />
                                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                    Sleep Optimization
                                </span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 group">
                                <TrendingUp strokeWidth={1.5} className="w-5 h-5 text-zinc-600 group-hover:text-brand-gold transition-colors" />
                                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                    Storytelling Principles
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
