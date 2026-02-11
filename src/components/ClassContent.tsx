"use client";

import { useState } from "react";
import { Play, Lock, CheckCircle, FileText, Users, Smartphone, Heart, MessageSquare, Pin, Image as ImageIcon, Link as LinkIcon } from "lucide-react";
import BioModal from "./BioModal";

export default function ClassContent() {
    const [activeTab, setActiveTab] = useState<"plan" | "about" | "community">("plan");
    const [showBio, setShowBio] = useState(false);

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Main Content */}
                <div className="lg:col-span-8">
                    {/* Tab Navigation */}
                    <div className="flex items-center gap-8 border-b border-white/10 mb-8 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`pb-4 border-b-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${activeTab === "plan" ? "border-white text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
                                }`}
                        >
                            Class Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("about")}
                            className={`pb-4 border-b-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${activeTab === "about" ? "border-white text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
                                }`}
                        >
                            About Instructor
                        </button>
                        <button
                            onClick={() => setActiveTab("community")}
                            className={`pb-4 border-b-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${activeTab === "community" ? "border-white text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
                                }`}
                        >
                            Community
                        </button>
                        <button className="pb-4 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium tracking-wide cursor-not-allowed opacity-50 whitespace-nowrap">
                            FAQ
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[400px]">
                        {activeTab === "plan" && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {/* Introduction Lesson */}
                                <div className="group flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 mb-2 hover:border-white/10 transition-colors cursor-pointer">
                                    <div className="relative w-32 aspect-video bg-zinc-800 rounded overflow-hidden shrink-0">
                                        <img
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <Play className="w-4 h-4 text-white ml-0.5 fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-white font-medium">01. Introduction</h3>
                                            <span className="text-xs text-zinc-500 font-mono">04:12</span>
                                        </div>
                                        <p className="text-sm text-zinc-400 line-clamp-2">
                                            Meet Annie Vance. She shares her philosophy on why technical
                                            perfection often kills creativity and outlines what you'll
                                            achieve in this class.
                                        </p>
                                    </div>
                                </div>

                                {/* Standard Lesson List */}
                                <div className="space-y-1">
                                    {[
                                        { id: "02", title: "Finding Your Subject", desc: "Discovering character in unexpected places.", time: "12:45", icon: Play },
                                        { id: "03", title: "Natural Light Mastery", desc: "Using window light and shadows to sculpt faces.", time: "18:20", icon: Lock },
                                        { id: "04", title: "Breaking Composition Rules", desc: "Why centering isn't always boring.", time: "15:10", icon: Lock },
                                        { id: "05", title: "The Art of Direction", desc: "How to talk to your models to get genuine reactions.", time: "22:05", icon: Lock },
                                    ].map((lesson) => (
                                        <div key={lesson.id} className="group flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0">
                                            <span className="text-zinc-500 font-serif text-lg w-6">{lesson.id}</span>
                                            <div className="flex-1">
                                                <h3 className="text-zinc-300 group-hover:text-white transition-colors font-medium mb-0.5">
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-xs text-zinc-500">
                                                    {lesson.desc}
                                                </p>
                                            </div>
                                            <span className="text-xs text-zinc-500 font-mono">{lesson.time}</span>
                                            <lesson.icon className={`w-5 h-5 ${lesson.icon === Play ? "text-zinc-600 group-hover:text-white" : "text-zinc-600"} transition-colors`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "about" && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                    <div className="md:col-span-1">
                                        <div className="aspect-3/4 w-full rounded-lg overflow-hidden bg-zinc-800 relative group">
                                            <img
                                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 text-zinc-300 space-y-6">
                                        <h3 className="text-2xl font-serif text-white mb-2">
                                            Meet Annie Vance
                                        </h3>
                                        <p className="leading-relaxed font-light">
                                            Annie Vance is not just a photographer; she is a storyteller
                                            who uses light and shadow to reveal the hidden narratives
                                            within her subjects. With a career spanning over two
                                            decades, her work has redefined modern portraiture,
                                            stripping away the artificial to find the authentic.
                                        </p>
                                        <p className="leading-relaxed font-light">
                                            Beginning her career in the darkrooms of Paris, Annie
                                            quickly rose to prominence for her raw, unretouched style
                                            that challenged the glossy perfectionism of the late 90s
                                            fashion industry. She believes that a great portrait is a
                                            collaboration, a shared moment of vulnerability between the
                                            artist and the muse.
                                        </p>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 mt-8">
                                            <div>
                                                <span className="block text-2xl font-serif text-white mb-1">20+</span>
                                                <span className="text-xs uppercase tracking-widest text-zinc-500">Years Exp.</span>
                                            </div>
                                            <div>
                                                <span className="block text-2xl font-serif text-white mb-1">500+</span>
                                                <span className="text-xs uppercase tracking-widest text-zinc-500">Covers</span>
                                            </div>
                                            <div>
                                                <span className="block text-2xl font-serif text-white mb-1">3</span>
                                                <span className="text-xs uppercase tracking-widest text-zinc-500">Awards</span>
                                            </div>
                                            <div>
                                                <span className="block text-2xl font-serif text-white mb-1">4.9</span>
                                                <span className="text-xs uppercase tracking-widest text-zinc-500">Rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="relative p-8 border border-white/10 rounded-lg bg-white/5">
                                    <span className="text-brand-gold absolute top-6 left-6 opacity-80 text-4xl leading-none">"</span>
                                    <p className="text-lg md:text-xl font-serif text-white italic text-center px-6 leading-relaxed">
                                        "I don't take photographs with my camera. I take them with my
                                        eyes, my heart, and my gut. The camera is just the tool that
                                        proves I was there."
                                    </p>
                                    <footer className="mt-6 text-center text-xs font-medium tracking-widest uppercase text-brand-gold/80">
                                        — Annie Vance
                                    </footer>
                                </blockquote>
                            </div>
                        )}

                        {activeTab === "community" && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {/* Create Post */}
                                <div className="bg-zinc-900/30 border border-white/5 rounded-lg p-6 mb-10">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-zinc-400 font-serif shrink-0">
                                            Y
                                        </div>
                                        <div className="flex-1">
                                            <textarea className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-white placeholder-zinc-600 resize-none h-24 p-0 text-sm leading-relaxed" placeholder="Share your progress, ask a question, or start a discussion..."></textarea>
                                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                                                <div className="flex gap-4">
                                                    <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
                                                        <ImageIcon className="w-4 h-4" />
                                                        <span className="hidden sm:inline">Photo</span>
                                                    </button>
                                                    <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
                                                        <LinkIcon className="w-4 h-4" />
                                                        <span className="hidden sm:inline">Link</span>
                                                    </button>
                                                </div>
                                                <button className="bg-white text-zinc-950 px-5 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-serif text-white">
                                        Discussions
                                        <span className="text-zinc-500 ml-2 text-sm font-sans font-normal">
                                            (124)
                                        </span>
                                    </h3>
                                    <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-zinc-500">
                                        <button className="text-white border-b border-white pb-0.5">Latest</button>
                                        <button className="hover:text-white transition-colors pb-0.5 border-b border-transparent">Top</button>
                                        <button className="hover:text-white transition-colors pb-0.5 border-b border-transparent">My Posts</button>
                                    </div>
                                </div>

                                {/* Feed */}
                                <div className="space-y-8">
                                    {/* Pinned Post */}
                                    <div className="border-b border-white/5 pb-8">
                                        <div className="flex items-center gap-2 mb-4 text-brand-gold text-xs font-medium uppercase tracking-widest">
                                            <Pin className="w-3.5 h-3.5 fill-current" />
                                            <span>Pinned by Instructor</span>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-gold/20" />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-sm font-medium text-white">Annie Vance</h4>
                                                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300">Instructor</span>
                                                    <span className="text-xs text-zinc-500 ml-auto">2 days ago</span>
                                                </div>
                                                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                                                    Welcome to the class! For your first assignment, I want
                                                    you to go out and shoot without overthinking. Don't
                                                    worry about settings. Focus on the feeling. Share your
                                                    results here!
                                                </p>
                                                <div className="flex items-center gap-6 text-xs font-medium text-zinc-500">
                                                    <button className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                                                        <Heart className="w-4 h-4 text-brand-gold fill-current" />
                                                        <span className="text-white">342</span>
                                                    </button>
                                                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                                                        <MessageSquare className="w-4 h-4" />
                                                        <span>86 Replies</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Progress Card */}
                    <div className="p-6 rounded-lg bg-zinc-900/50 border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                                Your Progress
                            </span>
                            <span className="text-xs text-white">0%</span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-1 mb-4">
                            <div className="bg-white h-1 rounded-full w-0"></div>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                            Sign in to track your progress and access course materials
                            across all your devices.
                        </p>
                    </div>

                    {/* Instructor Mini Bio */}
                    <div className="p-6 rounded-lg border border-white/5">
                        <div className="flex items-center gap-4 mb-4">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-12 h-12 rounded-full object-cover border border-white/10" />
                            <div>
                                <h4 className="text-white font-medium text-sm">Annie Vance</h4>
                                <p className="text-zinc-500 text-xs">Photographer & Artist</p>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                            Annie Vance is an award-winning portrait photographer whose work
                            has graced the covers of Vogue, Time, and Vanity Fair.
                        </p>
                        <button
                            onClick={() => setShowBio(true)}
                            className="text-xs font-medium text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors inline-block"
                        >
                            View Full Bio
                        </button>
                    </div>

                    {/* Related Specs */}
                    <div className="p-6">
                        <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
                            Class Details
                        </h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li className="flex items-center gap-3">
                                <FileText className="w-4 h-4" />
                                <span>Includes 45-page Workbook</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Users className="w-4 h-4" />
                                <span>Community Access</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Smartphone className="w-4 h-4" />
                                <span>Available on iOS & Android</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <BioModal isOpen={showBio} onClose={() => setShowBio(false)} />
        </main>
    );
}
