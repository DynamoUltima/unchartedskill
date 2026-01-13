"use client";

import { Play, Star, Film, Clock } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" alt="Cinematic Portrait" className="w-full h-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 border border-white/20 text-[10px] uppercase tracking-widest text-white/80 rounded-sm">New Launch</span>
            <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Photography & Art</span>
          </div>

          <h2 className="text-lg font-medium text-zinc-400 mb-2 tracking-widest uppercase">Annie Vance</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[0.95] tracking-tight mb-8">
            Teaches Creative <br /> <span className="italic text-white/90">Portraiture</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-10 max-w-lg font-light">
            Join the world-renowned photographer as she breaks down her approach to lighting, composition, and capturing the human soul through the lens.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="group flex items-center gap-3 bg-white text-zinc-950 px-8 py-3.5 rounded hover:bg-zinc-200 transition-all">
              <Play strokeWidth={1.5} className="w-4 h-4 fill-zinc-950" />
              <span className="text-sm font-medium tracking-wide">Watch Trailer</span>
            </button>
            <button className="flex items-center gap-3 px-8 py-3.5 rounded border border-white/20 hover:bg-white/5 transition-all text-white">
              <span className="text-sm font-medium tracking-wide">Explore Class</span>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-zinc-500 text-xs tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <Clock strokeWidth={1.5} className="w-4 h-4" />
              <span>3h 15m</span>
            </div>
            <div className="flex items-center gap-2">
              <Film strokeWidth={1.5} className="w-4 h-4" />
              <span>18 Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Star strokeWidth={1.5} className="w-4 h-4 text-white" />
              <span className="text-white">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
