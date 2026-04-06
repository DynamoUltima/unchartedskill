"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Play, Bookmark, Clock, Video, FileText, Users, Smartphone, ChevronDown, CheckCircle, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CategoryPage() {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState("Recommended");
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSortSelect = (value: string) => {
        setSortBy(value);
        setIsSortOpen(false);
    };

    return (
        <div className="bg-zinc-950 text-zinc-300 font-sans antialiased selection:bg-white/20 selection:text-white overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />

            <div className="grow pt-20 animate-in fade-in duration-500">
                {/* Category Header */}
                <header className="relative bg-zinc-900/30 border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                            alt="Filmmaking Cover"
                            fill
                            className="object-cover opacity-10 grayscale mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/80 via-zinc-950/95 to-zinc-950"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-zinc-500 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link href="/categories" className="hover:text-white transition-colors">
                                Categories
                            </Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-white">Arts & Entertainment</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-serif text-white mb-4 tracking-tight">
                                    Filmmaking
                                </h1>
                                <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
                                    Learn the art of moving pictures from the world's greatest
                                    directors, cinematographers, and screenwriters. Master every
                                    stage of production.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Filters Sidebar */}
                        <aside className="w-full lg:w-64 shrink-0 space-y-10">
                            <div className="flex items-center justify-between lg:hidden border-b border-white/10 pb-4">
                                <h2 className="text-lg font-serif text-white">Filters</h2>
                                <button className="text-sm font-medium text-brand-gold">
                                    Clear All
                                </button>
                            </div>

                            {/* Topic Filter */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                                        Topic
                                    </h3>
                                </div>
                                <div className="space-y-3.5">
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" defaultChecked />
                                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                                            All Filmmaking
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Directing
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Screenwriting
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Cinematography
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Documentary
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Producing
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Instructor Filter */}
                            <div className="pt-8 border-t border-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                                        Instructor
                                    </h3>
                                </div>
                                <div className="space-y-3.5">
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Martin Scorsese
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Ron Howard
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Aaron Sorkin
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Ken Burns
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            Spike Lee
                                        </span>
                                    </label>
                                    <button className="text-xs text-brand-gold font-medium hover:text-white transition-colors mt-2 block">
                                        + Show 12 more
                                    </button>
                                </div>
                            </div>

                            {/* Class Length Filter */}
                            <div className="pt-8 border-t border-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                                        Class Length
                                    </h3>
                                </div>
                                <div className="space-y-3.5">
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            &lt; 2 Hours
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            2 - 4 Hours
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-3 group cursor-pointer">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                                            4+ Hours
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </aside>

                        {/* Course Grid Area */}
                        <div className="flex-1">
                            {/* Grid Header Bar */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 z-20 relative">
                                <span className="text-sm text-zinc-400 font-medium">
                                    Showing
                                    <span className="text-white ml-1 mr-1">24</span>
                                    classes
                                </span>

                                {/* SORT DROPDOWN FLOW */}
                                <div className="relative" ref={sortRef}>
                                    <button
                                        onClick={() => setIsSortOpen(!isSortOpen)}
                                        className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors bg-zinc-900 border border-white/10 rounded-full px-5 py-2.5 shadow-sm focus:outline-none"
                                    >
                                        <span>Sort by: {sortBy}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isSortOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                            <div className="py-1.5 flex flex-col">
                                                {["Recommended", "Newest", "Popular", "Trending"].map((option) => (
                                                    <button
                                                        key={option}
                                                        onClick={() => handleSortSelect(option)}
                                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${sortBy === option
                                                            ? "text-white bg-white/5 hover:bg-white/10"
                                                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                                                            }`}
                                                    >
                                                        {option}
                                                        {sortBy === option && <CheckCircle className="w-4 h-4 text-white" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* END SORT DROPDOWN FLOW */}
                            </div>

                            {/* Active Filters Pill */}
                            <div className="hidden flex-wrap gap-2 mb-8 lg:flex">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white border border-white/10">
                                    Category: Filmmaking
                                    <button className="hover:text-zinc-300">
                                        <span className="sr-only">Remove</span>
                                        &times;
                                    </button>
                                </span>
                                <button className="text-xs text-zinc-500 hover:text-white font-medium ml-2 transition-colors">
                                    Clear All
                                </button>
                            </div>

                            {/* Courses Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
                                {/* Card 1 */}
                                <Link href="/class/1" className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-4/5 w-full rounded-xl bg-zinc-900 relative overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                            alt="Martin Scorsese"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-white border border-white/10 flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            30 Lessons
                                        </div>
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black text-white">
                                            <Bookmark className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-gold mb-1.5">
                                            Staff Pick
                                        </p>
                                        <h3 className="text-white font-serif text-xl leading-tight mb-1 group-hover:text-zinc-300 transition-colors">
                                            Martin Scorsese
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light">
                                            Teaches Filmmaking
                                        </p>
                                        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                4h 15m
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 2 */}
                                <Link href="/class/2" className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-4/5 w-full rounded-xl bg-zinc-900 relative overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                                            alt="Ron Howard"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-white border border-white/10 flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            22 Lessons
                                        </div>
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black text-white">
                                            <Bookmark className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1.5">
                                            Directing
                                        </p>
                                        <h3 className="text-white font-serif text-xl leading-tight mb-1 group-hover:text-zinc-300 transition-colors">
                                            Ron Howard
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light">
                                            Teaches Directing
                                        </p>
                                        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                3h 40m
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 3 */}
                                <Link href="/class/3" className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-4/5 w-full rounded-xl bg-zinc-900 relative overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                                            alt="Aaron Sorkin"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-white border border-white/10 flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            18 Lessons
                                        </div>
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black text-white">
                                            <Bookmark className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1.5">
                                            Screenwriting
                                        </p>
                                        <h3 className="text-white font-serif text-xl leading-tight mb-1 group-hover:text-zinc-300 transition-colors">
                                            Aaron Sorkin
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light">
                                            Teaches Screenwriting
                                        </p>
                                        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                2h 50m
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 4 */}
                                <Link href="/class/4" className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-4/5 w-full rounded-xl bg-zinc-900 relative overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                            alt="Ken Burns"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-white border border-white/10 flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            25 Lessons
                                        </div>
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black text-white">
                                            <Bookmark className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1.5">
                                            Documentary
                                        </p>
                                        <h3 className="text-white font-serif text-xl leading-tight mb-1 group-hover:text-zinc-300 transition-colors">
                                            Ken Burns
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light">
                                            Teaches Documentary Filmmaking
                                        </p>
                                        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                5h 10m
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 5 */}
                                <Link href="/class/5" className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-4/5 w-full rounded-xl bg-zinc-900 relative overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                            alt="Spike Lee"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-white border border-white/10 flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            19 Lessons
                                        </div>
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black text-white">
                                            <Bookmark className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1.5">
                                            Independent Film
                                        </p>
                                        <h3 className="text-white font-serif text-xl leading-tight mb-1 group-hover:text-zinc-300 transition-colors">
                                            Spike Lee
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light">
                                            Teaches Independent Filmmaking
                                        </p>
                                        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                3h 25m
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 6 */}
                                <Link href="/class/6" className="group cursor-pointer flex flex-col h-full">
                                    <div className="aspect-4/5 w-full rounded-xl bg-zinc-900 relative overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                                            alt="Hans Zimmer"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-white border border-white/10 flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            24 Lessons
                                        </div>
                                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black text-white">
                                            <Bookmark className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1.5">
                                            Film Scoring
                                        </p>
                                        <h3 className="text-white font-serif text-xl leading-tight mb-1 group-hover:text-zinc-300 transition-colors">
                                            Hans Zimmer
                                        </h3>
                                        <p className="text-zinc-400 text-sm font-light">
                                            Teaches Film Scoring
                                        </p>
                                        <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                4h 05m
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 text-center border-t border-white/5 pt-10">
                                <button className="px-8 py-3 rounded-full border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors">
                                    Load More Classes
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
