import Image from "next/image";
import Link from "next/link";
import { Play, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MyLearningPage() {
    return (
        <div className="bg-zinc-950 text-zinc-300 font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen flex flex-col">
            <Navbar />
            <div className="grow pt-20 animate-in fade-in duration-500">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                            My Learning
                        </h1>
                        <p className="text-zinc-400 text-sm">
                            Track your progress and pick up right where you left off.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-8 border-b border-white/5 mb-8 overflow-x-auto no-scrollbar">
                        <button className="pb-4 border-b-2 border-white text-white text-sm font-medium tracking-wide whitespace-nowrap">
                            In Progress
                        </button>
                        <button className="pb-4 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium tracking-wide whitespace-nowrap">
                            Completed
                        </button>
                        <button className="pb-4 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium tracking-wide whitespace-nowrap">
                            Saved
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Course 1 */}
                        <Link
                            href="/class/1"
                            className="group cursor-pointer rounded-xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            <div className="aspect-video relative overflow-hidden bg-zinc-800">
                                <Image
                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                    alt="Creative Portraiture"
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white border border-white/10 flex items-center gap-1.5">
                                    <Play className="w-3 h-3 fill-white" />
                                    Resume Lesson 4
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">
                                    Annie Vance
                                </p>
                                <h3 className="text-white font-serif text-xl leading-tight mb-6">
                                    Creative Portraiture
                                </h3>
                                <div className="mt-auto space-y-2">
                                    <div className="flex justify-between text-xs font-medium text-zinc-400">
                                        <span>60% Complete</span>
                                        <span>11/18 Lessons</span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-gold w-[60%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Course 2 */}
                        <Link
                            href="/class/2"
                            className="group cursor-pointer rounded-xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            <div className="aspect-video relative overflow-hidden bg-zinc-800">
                                <Image
                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                                    alt="The Art of Storytelling"
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white border border-white/10 flex items-center gap-1.5">
                                    <Play className="w-3 h-3 fill-white" />
                                    Resume Lesson 2
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">
                                    Arthur West
                                </p>
                                <h3 className="text-white font-serif text-xl leading-tight mb-6">
                                    The Art of Storytelling
                                </h3>
                                <div className="mt-auto space-y-2">
                                    <div className="flex justify-between text-xs font-medium text-zinc-400">
                                        <span>10% Complete</span>
                                        <span>2/20 Lessons</span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-gold w-[10%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Course 3 (Completed) */}
                        <Link
                            href="/class/3"
                            className="group cursor-pointer rounded-xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col opacity-70 hover:opacity-100"
                        >
                            <div className="aspect-video relative overflow-hidden bg-zinc-800">
                                <Image
                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                    alt="Strategic Thinking for CEOs"
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-green-500/20 text-green-400 backdrop-blur-md rounded text-[10px] uppercase font-bold border border-green-500/20 flex items-center gap-1.5">
                                    <CheckCircle className="w-3 h-3" />
                                    Completed
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-2">
                                    Marcus Sterling
                                </p>
                                <h3 className="text-white font-serif text-xl leading-tight mb-6">
                                    Strategic Thinking for CEOs
                                </h3>
                                <div className="mt-auto space-y-2">
                                    <div className="flex justify-between text-xs font-medium text-zinc-400">
                                        <span className="text-green-400">100% Complete</span>
                                        <span>24/24 Lessons</span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-full rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
