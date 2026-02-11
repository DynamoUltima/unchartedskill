"use client";

import { X, Globe, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface BioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BioModal({ isOpen, onClose }: BioModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

                {/* Image Column */}
                <div className="w-full md:w-5/12 relative h-64 md:h-auto shrink-0">
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Annie Vance"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-zinc-950/20"></div>
                </div>

                {/* Text Column */}
                <div className="flex-1 p-8 md:p-12 overflow-y-auto relative bg-zinc-950 custom-scrollbar">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-1 group"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div className="mb-8">
                        <p className="text-xs font-medium uppercase tracking-widest text-brand-gold mb-2">Instructor</p>
                        <h2 className="text-4xl font-serif text-white mb-2">Annie Vance</h2>
                        <p className="text-zinc-400 text-sm italic">Photographer, Artist, Visionary</p>
                    </div>

                    <div className="space-y-6 text-zinc-300 text-sm leading-7 font-light">
                        <p>
                            <span className="text-3xl float-left mr-2 mt-[-6px] font-serif text-white">A</span>nnie Vance is widely regarded as one of the most influential portrait photographers of the 21st century. Born in Lyon, France, she began her career assisting legendary fashion photographers in Paris before breaking out on her own with a distinct style that rejected the glossy, over-retouched aesthetic of the era.
                        </p>
                        <p>
                            Her work focuses on the raw humanity of her subjects, often utilizing natural light and minimal staging to capture moments of profound vulnerability. "I don't create images," Vance famously said in her 2018 TED Talk, "I uncover them."
                        </p>
                        <p>
                            Vance's photographs have appeared on over 500 magazine covers worldwide, including <em>Vogue</em>, <em>TIME</em>, <em>Vanity Fair</em>, and <em>National Geographic</em>. In 2020, she became the first woman to win the prestigious Lumière Award for Lifetime Achievement in Photography.
                        </p>
                        <p>
                            Beyond her commercial success, Annie is a dedicated educator and philanthropist. She founded the "Light & Truth" foundation, which provides photography equipment and mentorship to underprivileged youth in urban communities across Europe and North America.
                        </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">Connect & Follow</h4>
                        <div className="flex gap-4">
                            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 transition-colors text-xs font-medium uppercase tracking-wide">
                                <Instagram className="w-4 h-4" />
                                Instagram
                            </a>
                            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 transition-colors text-xs font-medium uppercase tracking-wide">
                                <Twitter className="w-4 h-4" />
                                Twitter
                            </a>
                            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 transition-colors text-xs font-medium uppercase tracking-wide">
                                <Globe className="w-4 h-4" />
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
