"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    FileText,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Volume1,
    VolumeX,
    Settings,
    Maximize,
    ChevronDown,
    PlayCircle
} from "lucide-react";

export default function LessonPage({ params }: { params: { id: string; lessonId: string } }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(80);
    const [isHovering, setIsHovering] = useState(false);

    const lessons = [
        { id: "01", title: "Introduction", duration: "04:12", isPlaying: true },
        { id: "02", title: "Finding Your Subject", duration: "12:45", isPlaying: false },
        { id: "03", title: "Natural Light Mastery", duration: "18:20", isPlaying: false },
        { id: "04", title: "Breaking Composition Rules", duration: "15:10", isPlaying: false },
        { id: "05", title: "The Art of Direction", duration: "22:05", isPlaying: false },
    ];

    const currentLesson = lessons.find(l => l.id === "01") || lessons[0];

    return (
        <div className="h-screen flex flex-col bg-black text-white">
            {/* Top Navigation Bar */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-zinc-950 shrink-0 z-20">
                <div className="flex items-center gap-6">
                    <Link
                        href={`/class/${params.id}`}
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center">
                            <ArrowLeft size={18} />
                        </div>
                        <span className="text-sm font-medium hidden sm:inline">Back to Class</span>
                    </Link>
                    <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                    <h1 className="text-sm font-medium text-white tracking-wide truncate max-w-md">
                        {currentLesson.id}. {currentLesson.title}: The Soul of the Portrait
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">
                        <FileText size={16} />
                        <span className="hidden sm:inline">Workbook</span>
                    </button>
                    <button className="bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                        Next Lesson
                    </button>
                </div>
            </div>

            {/* Main Workspace */}
            <div className="flex-1 flex overflow-hidden">
                {/* Video Player Area */}
                <div
                    className="flex-1 bg-black flex flex-col relative group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="relative w-full h-full flex items-center justify-center bg-zinc-900">
                        {/* Placeholder Image */}
                        <img
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />

                        {/* Centered Play Button */}
                        {!isPlaying && (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute z-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all cursor-pointer border border-white/20"
                            >
                                <Play size={32} className="text-white ml-1 fill-current" />
                            </button>
                        )}

                        {/* Controls Overlay */}
                        <div className={`absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovering || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                            {/* Progress Bar */}
                            <div className="relative w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer group/progress">
                                <div className="absolute top-0 left-0 h-full w-[15%] bg-brand-gold rounded-full relative">
                                    <div className="w-3 h-3 bg-white rounded-full absolute -right-1.5 -top-1 shadow opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-brand-gold transition-colors">
                                        {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current" />}
                                    </button>
                                    <button className="text-white hover:text-zinc-300 transition-colors">
                                        <SkipBack size={20} />
                                    </button>
                                    <button className="text-white hover:text-zinc-300 transition-colors">
                                        <SkipForward size={20} />
                                    </button>

                                    <div className="flex items-center gap-2 group/volume relative">
                                        <button className="text-white hover:text-zinc-300 transition-colors">
                                            {volume === 0 ? <VolumeX size={20} /> : volume < 50 ? <Volume1 size={20} /> : <Volume2 size={20} />}
                                        </button>
                                        <div className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300">
                                            <div className="w-16 h-1 bg-white/20 rounded ml-2 relative cursor-pointer">
                                                <div
                                                    className="h-full bg-white rounded absolute top-0 left-0"
                                                    style={{ width: `${volume}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-300">04:12 / 18:24</span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <button className="text-white hover:text-zinc-300 transition-colors flex items-center gap-1.5 text-xs font-medium border border-white/20 px-2 py-1 rounded">
                                        <span>CC</span>
                                    </button>
                                    <button className="text-white hover:text-zinc-300 transition-colors">
                                        <Settings size={20} />
                                    </button>
                                    <button className="text-white hover:text-zinc-300 transition-colors">
                                        <Maximize size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Playlist Sidebar */}
                <div className="w-96 bg-zinc-950 border-l border-white/5 flex flex-col hidden lg:flex">
                    <div className="p-6 border-b border-white/5">
                        <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1">Class Playlist</h3>
                        <h2 className="text-white font-serif text-lg">Creative Portraiture</h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 space-y-1 no-scrollbar">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className={`p-3 rounded flex items-start gap-3 cursor-pointer group transition-colors ${lesson.isPlaying
                                        ? "bg-white/10 border border-white/5"
                                        : "hover:bg-white/5"
                                    }`}
                            >
                                <div className="mt-1">
                                    {lesson.isPlaying ? (
                                        <PlayCircle size={16} className="text-brand-gold fill-current" />
                                    ) : (
                                        <span className="text-xs font-mono w-4 block text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                            {lesson.id}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {lesson.isPlaying && (
                                        <span className="text-[10px] font-medium text-brand-gold uppercase tracking-wide block mb-0.5">
                                            Now Playing
                                        </span>
                                    )}
                                    <h4 className={`text-sm font-medium leading-snug mb-1 ${lesson.isPlaying ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                                        }`}>
                                        {lesson.id}. {lesson.title}
                                    </h4>
                                    <span className={`text-xs font-mono ${lesson.isPlaying ? "text-zinc-400" : "text-zinc-600"
                                        }`}>
                                        {lesson.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Playlist Drawer */}
            <div className="h-64 bg-zinc-900 border-t border-white/5 lg:hidden overflow-y-auto p-4 shrink-0">
                <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">Up Next</h3>
                <div className="space-y-4">
                    {lessons.slice(1).map((lesson) => (
                        <div key={lesson.id} className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-sm text-zinc-400">{lesson.id}. {lesson.title}</span>
                            <span className="text-xs text-zinc-500">{lesson.duration}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
