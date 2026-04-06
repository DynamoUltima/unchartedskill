import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Palette, BarChart2, PenTool, ChefHat, Laptop, Dumbbell, BookOpen, Leaf, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AllCategoriesPage() {
    return (
        <div className="bg-zinc-950 text-zinc-300 font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen flex flex-col">
            <Navbar />

            <div className="grow pt-20">
                <header className="relative bg-zinc-900/30 border-b border-white/5 overflow-hidden">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-16">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight strokeWidth={2} className="w-3 h-3" />
                            <span className="text-white">All Categories</span>
                        </div>

                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight">Explore Categories</h1>
                            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
                                Discover classes from the world&#39;s best across a variety of disciplines. Master your craft with exclusive lessons.
                            </p>

                            {/* Category Search */}
                            <div className="relative max-w-md">
                                <Search strokeWidth={1.5} className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    className="w-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all placeholder:text-zinc-500"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {/* Arts & Entertainment */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                                alt="Arts & Entertainment"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <Palette strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Arts &amp; Entertainment</h3>
                                <p className="text-[11px] text-zinc-400 font-medium tracking-widest uppercase flex items-center gap-1.5">
                                    42 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Business */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                                alt="Business"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <BarChart2 strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Business</h3>
                                <p className="text-[11px] text-zinc-400 font-medium tracking-widest uppercase flex items-center gap-1.5">
                                    28 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Design & Style */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                alt="Design & Style"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <PenTool strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Design &amp; Style</h3>
                                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    19 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Food */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                alt="Food"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <ChefHat strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Food</h3>
                                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    14 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Tech */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                alt="Tech"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <Laptop strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Tech</h3>
                                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    22 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Sports & Gaming */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                                alt="Sports & Gaming"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <Dumbbell strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Sports &amp; Gaming</h3>
                                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    16 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Writing */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                                alt="Writing"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <BookOpen strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Writing</h3>
                                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    31 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>

                        {/* Wellness */}
                        <Link href="/category" className="group relative block aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-lg cursor-pointer">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                alt="Wellness"
                                fill
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/40 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 group-hover:bg-brand-gold group-hover:text-zinc-950 group-hover:border-brand-gold transition-all duration-300">
                                    <Leaf strokeWidth={1.5} className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-1.5 transition-colors">Wellness</h3>
                                <p className="text-[11px] text-zinc-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                                    18 Classes
                                    <ArrowRight strokeWidth={2} className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </p>
                            </div>
                        </Link>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}

