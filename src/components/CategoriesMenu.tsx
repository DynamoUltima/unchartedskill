"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
    Palette,
    ArrowRight,
    TrendingUp,
    ChefHat,
    Compass,
    ChevronDown
} from "lucide-react";
import Image from "next/image";

interface CategoriesMenuProps {
    isOpen: boolean;
    onClose: () => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function CategoriesMenu({ isOpen, onClose, triggerRef }: CategoriesMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose, triggerRef]);

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className="absolute top-20 left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 z-40 transition-all duration-300 animate-in fade-in slide-in-from-top-2 shadow-2xl"
        >
            <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
                {/* Column 1: Arts & Entertainment */}
                <div className="col-span-3 space-y-6 border-r border-white/5 pr-4">
                    <div className="flex items-center gap-2 text-brand-gold mb-4">
                        <Palette strokeWidth={1.5} className="w-[18px] h-[18px]" />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                            Arts &amp; Entertainment
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {["Filmmaking", "Acting", "Photography", "Writing", "Music & Audio"].map((item) => (
                            <li key={item}>
                                <Link
                                    href="/category"
                                    onClick={onClose}
                                    className="flex items-center justify-between text-sm text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 group"
                                >
                                    <span>{item}</span>
                                    <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2: Business & Tech */}
                <div className="col-span-3 space-y-6 border-r border-white/5 pr-4">
                    <div className="flex items-center gap-2 text-brand-gold mb-4">
                        <TrendingUp strokeWidth={1.5} className="w-[18px] h-[18px] text-[#D4AF37]" />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                            Business &amp; Tech
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {["Leadership", "Entrepreneurship", "Marketing", "Science & Tech"].map((item) => (
                            <li key={item}>
                                <Link
                                    href="/category"
                                    onClick={onClose}
                                    className="flex items-center justify-between text-sm text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 group"
                                >
                                    <span>{item}</span>
                                    <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Home & Lifestyle */}
                <div className="col-span-3 space-y-6 border-r border-white/5 pr-4">
                    <div className="flex items-center gap-2 text-brand-gold mb-4">
                        <ChefHat strokeWidth={1.5} className="w-[18px] h-[18px] text-[#D4AF37]" />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                            Home &amp; Lifestyle
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {["Culinary Arts", "Design & Style", "Sports & Games", "Wellness"].map((item) => (
                            <li key={item}>
                                <Link
                                    href="/category"
                                    onClick={onClose}
                                    className="flex items-center justify-between text-sm text-zinc-400 hover:text-white hover:pl-2 transition-all duration-200 group"
                                >
                                    <span>{item}</span>
                                    <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Featured Card */}
                <div className="col-span-3">
                    <div className="h-full rounded-lg bg-zinc-900 border border-white/5 overflow-hidden group relative cursor-pointer min-h-[240px]">
                        {/* Using a placeholder image since I cannot access the suprebase one directly or it might break */}
                        <div className="absolute inset-0 bg-zinc-800">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                                alt="Featured Class"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-5">
                            <span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white mb-2 border border-white/10">
                                Staff Pick
                            </span>
                            <h4 className="text-lg font-serif text-white leading-tight mb-1">
                                Modern Leadership
                            </h4>
                            <p className="text-xs text-zinc-300">with Robert Iger</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900/50 border-t border-white/5 py-3 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/categories"
                        className="text-xs font-medium text-zinc-500 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-2"
                        onClick={onClose}
                    >
                        <Compass strokeWidth={1.5} className="w-4 h-4" />
                        View All Categories
                    </Link>
                    <span className="text-[10px] text-zinc-600">Press Esc to close</span>
                </div>
            </div>
        </div>
    );
}
