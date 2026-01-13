"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionItem {
    id: number;
    image: string;
    category: string;
    author: string;
    title: string;
}

interface SectionGridProps {
    title: string;
    subtitle: string;
    items: SectionItem[];
}

export default function SectionGrid({ title, subtitle, items }: SectionGridProps) {
    return (
        <div className="mb-24">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h3 className="text-[10px] font-bold tracking-widest text-[#565656] uppercase mb-1">{subtitle}</h3>
                    <h2 className="text-3xl font-serif text-white tracking-tight">{title}</h2>
                </div>
                <div className="hidden sm:flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <ChevronLeft strokeWidth={1} className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <ChevronRight strokeWidth={1} className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="group relative cursor-pointer">
                        <div className="aspect-3/4 w-full overflow-hidden rounded-sm bg-zinc-900 relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="w-8 h-0.5 bg-white mb-4 transition-all duration-300 group-hover:w-12"></div>
                                <p className="text-[9px] font-bold tracking-widest uppercase text-zinc-500 mb-2">{item.category}</p>
                                <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1">{item.author}</h4>
                                <h3 className="text-xl font-serif text-white leading-tight">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
