"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Search,
    PlusCircle,
    UserPlus,
    Clapperboard,
    Wallet,
    Medal,
    Globe,
    Bell,
    Settings,
    LogOut,
    LayoutDashboard,
    Users,
    Tag,
    LineChart,
    MessageSquare,
    TrendingUp,
    ArrowLeft,
    PlayCircle,
    Star,
    MoreVertical,
    ArrowRight,
    Eye,
    RefreshCcw,
    Menu as MenuIcon,
    Trash2,
    FileText,
    FolderPlus,
    FilePlus,
    UserCheck,
    Copyright,
    CheckCircle2,
    List as KanbanList,
    Kanban
} from "lucide-react";

type View =
    | "dashboard"
    | "users"
    | "courses"
    | "course-detail"
    | "finance"
    | "marketing"
    | "certifications"
    | "analytics"
    | "support"
    | "system";

type CourseTab = "content" | "curriculum" | "media" | "pricing" | "performance" | "compliance" | "log";

export default function SuperAdminPage() {
    const [activeView, setActiveView] = useState<View>("dashboard");
    const [activeCourseTab, setActiveCourseTab] = useState<CourseTab>("content");
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

    // Quick close dropdowns
    useEffect(() => {
        const handleNextClick = () => {
            setIsProfileOpen(false);
            setIsQuickActionsOpen(false);
        };
        window.addEventListener("click", handleNextClick);
        return () => window.removeEventListener("click", handleNextClick);
    }, []);

    const switchView = (view: View) => {
        setActiveView(view);
    };

    const openCourseDetail = () => {
        setActiveView("course-detail");
    };

    return (
        <div className="bg-zinc-950 text-zinc-300 font-sans antialiased overflow-hidden h-screen flex flex-col selection:bg-brand-gold/30 selection:text-white">
            {/* 1. FIXED TOP BAR */}
            <header className="h-16 bg-zinc-950 border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-50 relative">
                {/* Logo & Search */}
                <div className="flex items-center gap-8 w-1/3">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white text-zinc-950 rounded flex items-center justify-center font-bold font-serif">
                            U
                        </div>
                        <span className="text-sm font-bold tracking-tight text-white uppercase">
                            Uncharted Skills
                        </span>
                    </div>
                    <div className="relative w-full max-w-sm hidden md:block group">
                        <Search className="absolute left-3 top-2.5 text-zinc-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search users, courses, transactions..."
                            className="w-full bg-zinc-900/50 border border-white/5 rounded text-xs px-9 py-2.5 text-white focus:outline-none focus:border-white/20 transition-colors"
                        />
                        <div className="absolute right-2 top-2 flex items-center gap-1">
                            <span className="px-1.5 py-0.5 rounded border border-white/10 text-[10px] text-zinc-500">
                                ⌘K
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 justify-end w-2/3">
                    {/* Quick Actions */}
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsQuickActionsOpen(!isQuickActionsOpen);
                                setIsProfileOpen(false);
                            }}
                            className="flex items-center gap-2 bg-[#D4AF37] text-zinc-950 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                        >
                            <PlusCircle size={16} />
                            <span>Create</span>
                        </button>
                        {isQuickActionsOpen && (
                            <div
                                className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1 z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">
                                    <UserPlus size={16} /> Add Instructor
                                </a>
                                <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">
                                    <Clapperboard size={16} /> Create Course
                                </a>
                                <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">
                                    <Wallet size={16} /> Manual Payout
                                </a>
                                <a href="#" className="flex items-center gap-3 px-4 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors">
                                    <Medal size={16} /> Issue Certificate
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="h-6 w-px bg-white/10 mx-2"></div>

                    {/* Region */}
                    <button className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors">
                        <Globe size={16} />
                        <span>US (EN)</span>
                    </button>

                    {/* Notifications */}
                    <button className="relative text-zinc-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
                    </button>

                    {/* Settings */}
                    <button
                        onClick={() => switchView("system")}
                        className="text-zinc-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center"
                    >
                        <Settings size={20} />
                    </button>

                    {/* Profile */}
                    <div className="relative ml-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsProfileOpen(!isProfileOpen);
                                setIsQuickActionsOpen(false);
                            }}
                            className="flex items-center gap-3 hover:bg-white/5 rounded-full pr-3 pl-1 py-1 transition-colors"
                        >
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10"
                                alt="Profile"
                            />
                            <div className="text-left hidden md:block">
                                <p className="text-xs font-medium text-white">Admin User</p>
                                <p className="text-[10px] text-zinc-500">Super Admin</p>
                            </div>
                        </button>
                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg shadow-xl py-1 z-50">
                                <button
                                    className="w-full flex items-center gap-3 px-4 py-2 text-xs text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                                >
                                    <Settings size={16} /> Profile
                                </button>
                                <div className="h-px bg-white/5 my-1"></div>
                                <button
                                    className="w-full flex items-center gap-3 px-4 py-2 text-xs text-red-400 hover:bg-white/5 transition-colors"
                                >
                                    <LogOut size={16} /> Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* 2. COLLAPSIBLE SIDEBAR */}
                <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col overflow-y-auto py-6 shrink-0 scrollbar-hide">
                    <div className="px-4 mb-2">
                        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                            Platform
                        </p>
                        <nav className="space-y-1">
                            <SidebarItem
                                icon={LayoutDashboard}
                                label="Dashboard"
                                active={activeView === "dashboard"}
                                onClick={() => switchView("dashboard")}
                            />
                            <SidebarItem
                                icon={Users}
                                label="Users"
                                active={activeView === "users"}
                                onClick={() => switchView("users")}
                            />
                            <SidebarItem
                                icon={Clapperboard}
                                label="Courses"
                                active={activeView === "courses" || activeView === "course-detail"}
                                onClick={() => switchView("courses")}
                            />
                        </nav>
                    </div>

                    <div className="px-4 mt-6 mb-2">
                        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                            Commerce
                        </p>
                        <nav className="space-y-1">
                            <SidebarItem
                                icon={Wallet}
                                label="Finance"
                                active={activeView === "finance"}
                                onClick={() => switchView("finance")}
                            />
                            <SidebarItem
                                icon={Tag}
                                label="Marketing"
                                active={activeView === "marketing"}
                                onClick={() => switchView("marketing")}
                            />
                        </nav>
                    </div>

                    <div className="px-4 mt-6 mb-2">
                        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                            Growth & Ops
                        </p>
                        <nav className="space-y-1">
                            <SidebarItem
                                icon={Medal}
                                label="Certifications"
                                active={activeView === "certifications"}
                                onClick={() => switchView("certifications")}
                            />
                            <SidebarItem
                                icon={LineChart}
                                label="Analytics"
                                active={activeView === "analytics"}
                                onClick={() => switchView("analytics")}
                            />
                            <SidebarItem
                                icon={MessageSquare}
                                label="Support"
                                active={activeView === "support"}
                                onClick={() => switchView("support")}
                            />
                        </nav>
                    </div>

                    <div className="px-4 mt-6 mb-2">
                        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                            Configuration
                        </p>
                        <nav className="space-y-1">
                            <SidebarItem
                                icon={Settings}
                                label="System"
                                active={activeView === "system"}
                                onClick={() => switchView("system")}
                            />
                        </nav>
                    </div>

                    <div className="mt-auto px-6 pb-6 pt-6">
                        <div className="p-4 rounded bg-zinc-900 border border-white/5">
                            <h5 className="text-xs font-bold text-white mb-1">
                                Status: Operational
                            </h5>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] text-zinc-400">
                                    All systems normal
                                </span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* 3. MAIN CONTENT AREA */}
                <main className="flex-1 overflow-auto bg-black/20 p-8 relative scrollbar-hide">

                    {/* DASHBOARD VIEW (Preview placeholder) */}
                    {activeView === "dashboard" && (
                        <div className="animate-in fade-in duration-300 space-y-8">
                            <h1 className="text-2xl font-serif text-white tracking-tight">Overview</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                                <KPICard title="Total Revenue" value="$1,240,500" change="12.5%" />
                                <KPICard title="Active Users" value="45,231" change="8.2%" />
                                <KPICard title="Courses Live" value="892" detail="+12 this week" />
                                <KPICard title="Pending Review" value="24" valueColor="text-[#D4AF37]" detail="Needs Action" />
                                <KPICard title="Payouts Due" value="$42,000" detail="Processing" />
                                <KPICard title="Refund Req." value="8" valueColor="text-red-400" detail="Review Req." />
                            </div>
                            <div className="p-12 text-center text-zinc-500 border border-white/5 rounded-xl border-dashed">
                                <p>Dashboard main content would go here.</p>
                                <p className="text-sm mt-2">Click on <strong>Courses</strong> in the sidebar to see the required implementation.</p>
                            </div>
                        </div>
                    )}

                    {/* USERS VIEW (Placeholder) */}
                    {activeView === "users" && (
                        <div className="animate-in fade-in duration-300 space-y-8">
                            <h1 className="text-2xl font-serif text-white tracking-tight">User Management</h1>
                            <div className="p-12 text-center text-zinc-500 border border-white/5 rounded-xl border-dashed">
                                <p>User lists and management table would go here.</p>
                            </div>
                        </div>
                    )}

                    {/* COURSES VIEW */}
                    {activeView === "courses" && (
                        <div className="animate-in fade-in duration-300 space-y-6">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-serif text-white tracking-tight">
                                    Courses
                                </h1>
                                <div className="flex bg-zinc-900 border border-white/10 rounded-lg p-1">
                                    <button className="px-3 py-1.5 rounded bg-white/10 text-white text-xs font-medium">
                                        <Kanban size={16} />
                                    </button>
                                    <button className="px-3 py-1.5 rounded text-zinc-500 hover:text-white text-xs font-medium">
                                        <KanbanList size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Kanban Board */}
                            <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-200px)] scrollbar-hide">
                                {/* Column: Pending */}
                                <div className="w-80 shrink-0 flex flex-col">
                                    <div className="flex items-center justify-between mb-4 px-2">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                            Pending Review{" "}
                                            <span className="ml-2 bg-white/10 text-white px-1.5 rounded-sm">
                                                2
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="flex-1 space-y-3 overflow-y-auto scrollbar-hide">
                                        {/* Course Card Component */}
                                        <div
                                            onClick={openCourseDetail}
                                            className="p-4 bg-zinc-900 border border-white/10 rounded-lg hover:border-[#D4AF37]/50 cursor-pointer transition-colors group"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold rounded border border-yellow-500/20">
                                                    Pending
                                                </span>
                                                <button className="text-zinc-500 hover:text-white">
                                                    <MoreVertical size={16} />
                                                </button>
                                            </div>
                                            <h4 className="text-sm font-medium text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                                                Advanced Cinematography
                                            </h4>
                                            <p className="text-xs text-zinc-500 mb-3">
                                                with Martin Scorsese
                                            </p>
                                            <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                                <img
                                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                                    className="w-6 h-6 rounded-full"
                                                    alt="Instructor"
                                                />
                                                <span className="text-[10px] text-zinc-500">
                                                    Submitted 2h ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column: Approved */}
                                <div className="w-80 shrink-0 flex flex-col">
                                    <div className="flex items-center justify-between mb-4 px-2">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                                            Live{" "}
                                            <span className="ml-2 bg-emerald-500/10 text-emerald-400 px-1.5 rounded-sm">
                                                142
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="flex-1 space-y-3 overflow-y-auto scrollbar-hide">
                                        <div className="p-4 bg-zinc-900 border border-white/10 rounded-lg hover:border-white/20 cursor-pointer transition-colors">
                                            <div className="flex justify-between items-start mb-3">
                                                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-bold rounded border border-emerald-500/20">
                                                    Live
                                                </span>
                                                <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                                                    <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />{" "}
                                                    4.9
                                                </div>
                                            </div>
                                            <h4 className="text-sm font-medium text-white mb-1">
                                                Creative Portraiture
                                            </h4>
                                            <p className="text-xs text-zinc-500 mb-3">
                                                with Annie Vance
                                            </p>
                                            <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                                <div className="text-xs font-mono text-white">
                                                    $124k rev
                                                </div>
                                                <span className="text-[10px] text-zinc-500">
                                                    1.2k Students
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* COURSE DETAIL / REVIEW VIEW */}
                    {activeView === "course-detail" && (
                        <div className="animate-in fade-in duration-300 flex flex-col h-[calc(100vh-100px)] gap-6">
                            {/* Header Area */}
                            <div className="flex flex-col gap-6 shrink-0">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-start gap-6">
                                        <button
                                            onClick={() => switchView("courses")}
                                            className="text-zinc-500 hover:text-white transition-colors mt-2"
                                        >
                                            <ArrowLeft size={24} />
                                        </button>
                                        <div className="w-32 aspect-video bg-zinc-800 rounded border border-white/10 relative overflow-hidden group">
                                            <img
                                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                                alt="Course cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 cursor-pointer">
                                                <PlayCircle size={32} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                                                    Cinematography
                                                </span>
                                                <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold rounded border border-yellow-500/20">
                                                    Pending Review
                                                </span>
                                            </div>
                                            <h1 className="text-2xl font-serif text-white tracking-tight mb-2">
                                                Advanced Cinematography: Lighting & Composition
                                            </h1>
                                            <div className="flex items-center gap-6 text-xs text-zinc-400">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[8px] text-white">
                                                        MS
                                                    </div>
                                                    <span className="text-white">Martin Scorsese</span>
                                                </div>
                                                <span>NY Film Academy</span>
                                                <span>v1.4 (Draft)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 border border-red-500/30 text-red-400 rounded text-xs font-bold hover:bg-red-500/10 transition-colors">
                                                Reject
                                            </button>
                                            <button className="px-4 py-2 border border-white/10 text-white rounded text-xs font-bold hover:bg-white/5 transition-colors">
                                                Save Draft
                                            </button>
                                            <button className="px-4 py-2 bg-[#D4AF37] text-zinc-950 rounded text-xs font-bold hover:bg-white hover:scale-105 transition-all">
                                                Publish v1.4
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                                    <StatBox label="Enrollments" value="1,204" />
                                    <StatBox label="Revenue" value="$240,800" />
                                    <StatBox label="Completion" value="82%" valueColor="text-emerald-400" />
                                    <div className="bg-zinc-950 p-3">
                                        <p className="text-[10px] uppercase text-zinc-500 mb-1">Rating</p>
                                        <div className="flex items-center gap-1 text-sm font-mono text-white">
                                            4.9{" "}
                                            <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                                        </div>
                                    </div>
                                    <StatBox label="Refunds" value="0.8%" valueColor="text-zinc-400" />
                                </div>

                                {/* Version Control / PR UI */}
                                <div className="bg-yellow-500/5 border-y border-yellow-500/10 -mx-8 px-8 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded border border-white/5">
                                                Live: v1.3
                                            </span>
                                            <ArrowRight size={14} className="text-zinc-500" />
                                            <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20 font-bold">
                                                Pending: v1.4
                                            </span>
                                        </div>
                                        <span className="text-xs text-yellow-500/80">
                                            Instructor updated Curriculum and Description.
                                        </span>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="text-xs font-medium text-white flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                                            <RefreshCcw size={14} /> Compare Versions
                                        </button>
                                        <button className="text-xs font-medium text-white flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                                            <Eye size={14} /> Review Submission
                                        </button>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="border-b border-white/10 overflow-x-auto scrollbar-hide">
                                    <div className="flex gap-6 min-w-max">
                                        <CourseTabButton
                                            active={activeCourseTab === "content"}
                                            label="Content Editor"
                                            onClick={() => setActiveCourseTab("content")}
                                        />
                                        <CourseTabButton
                                            active={activeCourseTab === "curriculum"}
                                            label="Curriculum"
                                            onClick={() => setActiveCourseTab("curriculum")}
                                        />
                                        <CourseTabButton
                                            active={activeCourseTab === "media"}
                                            label="Media"
                                            onClick={() => setActiveCourseTab("media")}
                                        />
                                        <CourseTabButton
                                            active={activeCourseTab === "pricing"}
                                            label="Pricing"
                                            onClick={() => setActiveCourseTab("pricing")}
                                        />
                                        <CourseTabButton
                                            active={activeCourseTab === "performance"}
                                            label="Performance"
                                            onClick={() => setActiveCourseTab("performance")}
                                        />
                                        <CourseTabButton
                                            active={activeCourseTab === "compliance"}
                                            label="Compliance"
                                            onClick={() => setActiveCourseTab("compliance")}
                                        />
                                        <CourseTabButton
                                            active={activeCourseTab === "log"}
                                            label="Activity Log"
                                            onClick={() => setActiveCourseTab("log")}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Tab Content Area */}
                            <div className="flex-1 overflow-y-auto pr-2 pb-8 scrollbar-hide">
                                {/* TAB 1: CONTENT EDITOR */}
                                {activeCourseTab === "content" && (
                                    <div className="animate-in fade-in duration-300 space-y-6 max-w-4xl">
                                        <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-lg border border-white/5">
                                            <div className="flex items-center gap-2">
                                                <Eye size={16} className="text-zinc-400" />
                                                <span className="text-sm text-zinc-300">
                                                    Viewing Pending Changes
                                                </span>
                                            </div>
                                            <div className="relative inline-block w-32 align-middle select-none">
                                                <div className="flex items-center gap-2 justify-end">
                                                    <span className="text-xs text-zinc-500 uppercase font-bold">
                                                        Show Original
                                                    </span>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                                                        <input
                                                            type="checkbox"
                                                            name="toggle-orig"
                                                            id="toggle-orig"
                                                            className="peer absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-500 checked:right-0 checked:border-emerald-500 right-5 transition-all z-10"
                                                        />
                                                        <label
                                                            htmlFor="toggle-orig"
                                                            className="block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer peer-checked:bg-emerald-500 transition-colors"
                                                        ></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-zinc-500 uppercase">
                                                    Course Title
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="Advanced Cinematography: Lighting & Composition"
                                                    className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-zinc-500 uppercase">
                                                    Subtitle
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue="Master the art of visual storytelling"
                                                    className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                                                />
                                            </div>
                                            <div className="md:col-span-2 space-y-2 relative">
                                                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-yellow-500 rounded-full"></div>
                                                <div className="flex justify-between">
                                                    <label className="text-xs font-bold text-yellow-500 uppercase">
                                                        Description (Modified)
                                                    </label>
                                                    <span className="text-[10px] text-zinc-500">
                                                        Rich Text Editor
                                                    </span>
                                                </div>
                                                <div className="w-full bg-zinc-900 border border-yellow-500/30 rounded p-4 text-sm text-white min-h-[150px]">
                                                    <p className="mb-2">
                                                        In this comprehensive masterclass, we dive deep into the psychology of lighting.
                                                    </p>
                                                    <p className="text-green-400 bg-green-500/10 inline px-1 rounded block mb-2 w-max">
                                                        + New section added: We will cover the usage of practical lights in low-light scenarios.
                                                    </p>
                                                    <p>Students will learn how to...</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-zinc-500 uppercase">
                                                    Category
                                                </label>
                                                <select className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]">
                                                    <option>Film & Video</option>
                                                    <option>Photography</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-zinc-500 uppercase">
                                                    Level
                                                </label>
                                                <select className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]">
                                                    <option>Advanced</option>
                                                    <option>Intermediate</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TAB 2: CURRICULUM */}
                                {activeCourseTab === "curriculum" && (
                                    <div className="animate-in fade-in duration-300 space-y-6 max-w-4xl">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm font-medium text-white">Course Structure</h3>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium hover:bg-white/5 text-white flex items-center gap-2 transition-colors">
                                                    <FolderPlus size={14} /> Add Module
                                                </button>
                                                <button className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium hover:bg-white/5 text-white flex items-center gap-2 transition-colors">
                                                    <FilePlus size={14} /> Add Lesson
                                                </button>
                                            </div>
                                        </div>
                                        {/* Modules List */}
                                        <div className="space-y-4">
                                            <div className="border border-white/10 rounded-lg overflow-hidden bg-zinc-900/30">
                                                <div className="p-3 bg-zinc-900 flex justify-between items-center cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <MenuIcon size={16} className="text-zinc-600" />
                                                        <span className="text-sm font-bold text-white">Module 1: The Basics of Light</span>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xs text-zinc-500">3 Lessons • 45m</span>
                                                    </div>
                                                </div>
                                                <div className="divide-y divide-white/5">
                                                    <div className="p-3 pl-10 flex justify-between items-center hover:bg-white/5 transition-colors">
                                                        <div className="flex items-center gap-3">
                                                            <PlayCircle size={14} className="text-zinc-500" />
                                                            <span className="text-sm text-zinc-300">1.1 Introduction to Color Temperature</span>
                                                        </div>
                                                        <div className="flex gap-3 items-center">
                                                            <span className="px-2 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-400">Video: 12m</span>
                                                            <button className="text-zinc-500 hover:text-white"><FileText size={14} /></button>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 pl-10 flex justify-between items-center hover:bg-white/5 bg-red-500/5 transition-colors">
                                                        <div className="flex items-center gap-3">
                                                            <Trash2 size={14} className="text-red-400" />
                                                            <span className="text-sm text-red-300 line-through">1.2 Old Lighting Techniques</span>
                                                        </div>
                                                        <span className="px-2 py-0.5 border border-red-500/20 text-red-400 rounded text-[10px] uppercase font-bold">Deleted</span>
                                                    </div>
                                                    <div className="p-3 pl-10 flex justify-between items-center hover:bg-white/5 bg-emerald-500/5 border-l-2 border-emerald-500 transition-colors">
                                                        <div className="flex items-center gap-3">
                                                            <FileText size={14} className="text-emerald-400" />
                                                            <span className="text-sm text-white">1.3 Practical Lighting Setup (New)</span>
                                                        </div>
                                                        <div className="flex gap-3 items-center">
                                                            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[10px] uppercase font-bold">New</span>
                                                            <button className="text-zinc-500 hover:text-white"><FileText size={14} /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TAB 3: MEDIA */}
                                {activeCourseTab === "media" && (
                                    <div className="animate-in fade-in duration-300 space-y-8 max-w-4xl">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-sm font-medium text-white mb-4">Course Thumbnail</h3>
                                                <div className="aspect-video bg-zinc-800 rounded-lg border border-white/10 relative group overflow-hidden">
                                                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <button className="px-4 py-2 bg-white text-zinc-950 text-xs font-bold rounded">Replace Image</button>
                                                    </div>
                                                </div>
                                                <p className="text-[10px] text-zinc-500 mt-2">Recommended: 1920x1080, JPG/PNG, max 2MB</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-white mb-4">Intro Video</h3>
                                                <div className="aspect-video bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center relative group overflow-hidden cursor-pointer hover:bg-zinc-800 transition-colors">
                                                    <PlayCircle size={48} className="text-zinc-600" />
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <button className="px-4 py-2 bg-white text-zinc-950 text-xs font-bold rounded">Upload Video</button>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center mt-2">
                                                    <p className="text-[10px] text-zinc-500">intro_vfinal.mp4 (45MB)</p>
                                                    <button className="text-[10px] text-red-400 hover:text-red-300">Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-white/5 pt-6">
                                            <h3 className="text-sm font-medium text-white mb-4">Asset Protection</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-4 bg-zinc-900 rounded border border-white/5">
                                                    <div>
                                                        <p className="text-sm text-zinc-300">PDF Watermarking</p>
                                                        <p className="text-[10px] text-zinc-500">Stamp user email on downloadable files</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                                                        <input type="checkbox" defaultChecked name="toggle" id="wm1" className="peer absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#D4AF37] checked:right-0 checked:border-[#D4AF37] right-0 z-10 transition-all" />
                                                        <label htmlFor="wm1" className="block overflow-hidden h-5 rounded-full bg-[#D4AF37] cursor-pointer peer-checked:bg-[#D4AF37]"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TAB 4: PRICING */}
                                {activeCourseTab === "pricing" && (
                                    <div className="animate-in fade-in duration-300 space-y-8 max-w-5xl">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                            {/* Left: Controls */}
                                            <div className="lg:col-span-2 space-y-8">
                                                {/* Core Pricing */}
                                                <section>
                                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-4 flex items-center gap-2">
                                                        <Tag size={16} /> Core Pricing
                                                    </h3>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-zinc-500">Base Price (USD)</label>
                                                            <div className="relative">
                                                                <span className="absolute left-3 top-2.5 text-zinc-500">$</span>
                                                                <input type="number" defaultValue="199.00" className="w-full bg-zinc-900 border border-white/10 rounded pl-8 pr-4 py-2 text-white focus:border-[#D4AF37] focus:outline-none" />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-zinc-500">Access Type</label>
                                                            <select className="w-full bg-zinc-900 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]">
                                                                <option>Lifetime Access</option>
                                                                <option>Subscription Only</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-span-2 flex items-center justify-between p-3 bg-zinc-900 border border-white/5 rounded">
                                                            <span className="text-sm text-zinc-300">Enable Purchasing Power Parity (Regional Pricing)</span>
                                                            <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                                                                <input type="checkbox" defaultChecked className="peer absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#D4AF37] checked:right-0 checked:border-[#D4AF37] right-0 z-10 transition-all" />
                                                                <label className="block overflow-hidden h-5 rounded-full bg-[#D4AF37] cursor-pointer peer-checked:bg-[#D4AF37]"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>

                                            {/* Right: Financial Snapshot */}
                                            <div className="lg:col-span-1">
                                                <div className="bg-zinc-900 border border-white/5 rounded-xl p-6 sticky top-0">
                                                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Estimated Per Sale</h3>

                                                    <div className="space-y-4 border-b border-white/5 pb-6 mb-6">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm text-zinc-400">Gross Price</span>
                                                            <span className="text-sm font-medium text-white">$199.00</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm text-zinc-400">Payment Proc. (2.9%)</span>
                                                            <span className="text-sm font-medium text-red-400">-$5.77</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm text-zinc-400">Platform (30%)</span>
                                                            <span className="text-sm font-medium text-zinc-300">-$57.96</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-end mb-2">
                                                        <span className="text-sm font-bold text-white">Instructor Net</span>
                                                        <span className="text-2xl font-serif text-[#D4AF37]">$135.27</span>
                                                    </div>
                                                    <p className="text-[10px] text-zinc-500 text-right mb-6">Forecast based on current settings</p>

                                                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded text-xs font-bold text-white hover:bg-white/10 transition-colors">Simulate Sale</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TAB 5: PERFORMANCE */}
                                {activeCourseTab === "performance" && (
                                    <div className="animate-in fade-in duration-300 space-y-6 max-w-5xl">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5">
                                                <h3 className="text-sm font-medium text-white mb-4">Drop-off Heatmap</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-8 text-[10px] text-zinc-500">M1</span>
                                                        <div className="flex-1 h-6 bg-emerald-500/20 rounded relative overflow-hidden">
                                                            <div className="absolute inset-y-0 left-0 bg-emerald-500 rounded" style={{ width: "98%" }}></div>
                                                        </div>
                                                        <span className="text-[10px] text-zinc-300">98%</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-8 text-[10px] text-zinc-500">M2</span>
                                                        <div className="flex-1 h-6 bg-emerald-500/20 rounded relative overflow-hidden">
                                                            <div className="absolute inset-y-0 left-0 bg-emerald-500" style={{ width: "85%" }}></div>
                                                        </div>
                                                        <span className="text-[10px] text-zinc-300">85%</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-8 text-[10px] text-zinc-500">M3</span>
                                                        <div className="flex-1 h-6 bg-emerald-500/20 rounded relative overflow-hidden">
                                                            <div className="absolute inset-y-0 left-0 bg-yellow-500" style={{ width: "60%" }}></div>
                                                        </div>
                                                        <span className="text-[10px] text-zinc-300">60%</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-8 text-[10px] text-zinc-500">M4</span>
                                                        <div className="flex-1 h-6 bg-emerald-500/20 rounded relative overflow-hidden">
                                                            <div className="absolute inset-y-0 left-0 bg-red-500" style={{ width: "42%" }}></div>
                                                        </div>
                                                        <span className="text-[10px] text-zinc-300">42%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TAB 6: COMPLIANCE */}
                                {activeCourseTab === "compliance" && (
                                    <div className="animate-in fade-in duration-300 space-y-6 max-w-4xl">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-zinc-900 border border-white/5 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <UserCheck className="text-emerald-400" size={24} />
                                                    <div>
                                                        <p className="text-sm text-white font-medium">Instructor KYC Verified</p>
                                                        <p className="text-[10px] text-zinc-500">Identity confirmed via Stripe</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-emerald-400 font-bold uppercase">Passed</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-zinc-900 border border-white/5 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <Copyright className="text-yellow-500" size={24} />
                                                    <div>
                                                        <p className="text-sm text-white font-medium">Copyright Scan</p>
                                                        <p className="text-[10px] text-zinc-500">Possible match in Video 3.2 (Music)</p>
                                                    </div>
                                                </div>
                                                <button className="text-xs border border-white/10 text-white px-3 py-1 rounded hover:bg-white/5 transition-colors">Review</button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TAB 7: ACTIVITY LOG */}
                                {activeCourseTab === "log" && (
                                    <div className="animate-in fade-in duration-300 max-w-4xl">
                                        <div className="border-l border-white/10 ml-4 space-y-8 py-4">
                                            <div className="relative pl-8">
                                                <div className="absolute -left-1.5 top-1 w-3 h-3 bg-[#D4AF37] rounded-full border border-zinc-950"></div>
                                                <p className="text-xs font-bold text-white">Version 1.4 Submitted</p>
                                                <p className="text-[10px] text-zinc-500 mt-1">By Martin Scorsese • 2 hours ago</p>
                                                <p className="text-xs text-zinc-300 mt-2 bg-white/5 p-2 rounded">"Updated module 1 videos and fixed typos in description."</p>
                                            </div>
                                            <div className="relative pl-8">
                                                <div className="absolute -left-1.5 top-1 w-3 h-3 bg-zinc-700 rounded-full border border-zinc-950"></div>
                                                <p className="text-xs font-bold text-zinc-400">Admin Login</p>
                                                <p className="text-[10px] text-zinc-500 mt-1">Admin User • 5 hours ago</p>
                                            </div>
                                            <div className="relative pl-8">
                                                <div className="absolute -left-1.5 top-1 w-3 h-3 bg-emerald-500 rounded-full border border-zinc-950"></div>
                                                <p className="text-xs font-bold text-zinc-400">Version 1.3 Published</p>
                                                <p className="text-[10px] text-zinc-500 mt-1">By Admin User • 2 months ago</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* OTHER VIEWS (Finance, Marketing, Analytics etc. - Placeholders) */}
                    {(activeView === "finance" || activeView === "marketing" || activeView === "certifications" ||
                        activeView === "analytics" || activeView === "support" || activeView === "system") && (
                            <div className="animate-in fade-in duration-300 space-y-8">
                                <h1 className="text-2xl font-serif text-white tracking-tight capitalize">{activeView}</h1>
                                <div className="p-12 text-center text-zinc-500 border border-white/5 rounded-xl border-dashed">
                                    <p>View restricted or not implemented in this demo.</p>
                                </div>
                            </div>
                        )}

                </main>
            </div>
        </div>
    );
}

// Subcomponents

function SidebarItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded text-sm font-medium transition-colors ${active
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
        >
            <Icon size={18} />
            {label}
        </button>
    );
}

function KPICard({ title, value, change, detail, valueColor = "text-white" }: { title: string, value: string, change?: string, detail?: string, valueColor?: string }) {
    return (
        <div className="p-4 rounded-xl border border-white/5 bg-zinc-900/50">
            <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">
                {title}
            </div>
            <div className={`text-xl font-medium ${valueColor}`}>{value}</div>
            {(change || detail) && (
                <div className={`flex items-center gap-1 mt-2 text-xs ${change ? "text-emerald-400" : "text-zinc-500"}`}>
                    {change && <TrendingUp size={12} />}
                    <span>{change || detail}</span>
                </div>
            )}
        </div>
    );
}

function StatBox({ label, value, valueColor = "text-white" }: { label: string, value: string, valueColor?: string }) {
    return (
        <div className="bg-zinc-950 p-3">
            <p className="text-[10px] uppercase text-zinc-500 mb-1">{label}</p>
            <p className={`text-sm font-mono ${valueColor}`}>{value}</p>
        </div>
    );
}

function CourseTabButton({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`pb-3 border-b-2 text-xs font-bold uppercase tracking-wider transition-colors ${active
                ? "border-[#D4AF37] text-white"
                : "border-transparent text-zinc-500 hover:text-white"
                }`}
        >
            {label}
        </button>
    );
}
