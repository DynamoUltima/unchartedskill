"use client";

import { Play, Bookmark, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import TrailerModal from "./TrailerModal";

export default function ClassHero() {
    const router = useRouter();
    const [showCheckout, setShowCheckout] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);

    return (
        <>
            <div className="relative w-full h-[60vh] lg:h-[70vh] flex items-end">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                        alt="Class Cover"
                        className="w-full h-full object-cover object-top opacity-60"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">

                    <div className="max-w-3xl">
                        <p className="text-sm font-medium tracking-widest uppercase text-brand-gold mb-4">
                            Mastery Original
                        </p>
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-[1.1]">
                            Annie Vance teaches Creative Portraiture
                        </h1>
                        <p className="text-lg text-zinc-300 max-w-xl mb-6 font-light">
                            Learn how to break the rules of classical photography to capture
                            raw emotion, authentic moments, and the true essence of your
                            subjects.
                        </p>

                        {/* Price & CTA */}
                        <div className="flex items-end gap-3 mb-8">
                            <span className="text-4xl font-serif text-white tracking-tight">$19</span>
                            <span className="text-zinc-400 text-sm font-medium mb-1.5 pb-0.5 border-b border-zinc-700">/ month</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <button
                                onClick={() => setShowCheckout(true)}
                                className="bg-white text-zinc-950 px-8 py-3.5 rounded flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span className="font-medium tracking-wide">Buy Course</span>
                            </button>
                            <button
                                onClick={() => setShowTrailer(true)}
                                className="px-8 py-3.5 rounded border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                            >
                                <Play className="w-5 h-5" />
                                <span className="font-medium tracking-wide">Watch Trailer</span>
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-zinc-500 font-medium tracking-wide">
                            Includes lifetime access to all 18 lessons & class workbook.
                        </p>
                    </div>
                </div>
            </div>

            <CheckoutModal isOpen={showCheckout} onClose={() => setShowCheckout(false)} />
            <TrailerModal isOpen={showTrailer} onClose={() => setShowTrailer(false)} videoId="dQw4w9WgXcQ" />
        </>
    );
}
