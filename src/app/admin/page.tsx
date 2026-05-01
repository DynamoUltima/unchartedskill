"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Clapperboard,
    Wallet,
    Users,
    Settings,
    LogOut,
    ChevronRight,
    Bell,
    PlusCircle,
    TrendingUp,
    Clock,
    Star,
    Filter,
    UserCircle,
    Banknote,
    Info,
    Menu,
    Pencil,
    Trash2,
    FileDown,
    ArrowRightLeft,
    Image as ImageIcon,
    MonitorPlay,
    Mail,
    Search,
    MoreHorizontal,
    X,
    CheckCircle,
    Play,
    Save,
    Loader2,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { storage } from "../../lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getCurrentUser, updateUserProfile, updateUserNotifications } from "@dataconnect/generated";

const students = [
    { id: 1, initials: "JD", name: "John Doe", email: "john.doe@example.com", course: "Creative Portraiture", enrolledDate: "Enrolled Oct 12", progress: 60, lastActive: "2 hrs ago", avatarColor: "bg-blue-500/20 text-blue-300", ringColor: "ring-blue-500/30" },
    { id: 2, initials: "SM", name: "Sarah Miller", email: "sarah.m@example.com", course: "Storytelling Masterclass", enrolledDate: "Enrolled Oct 10", progress: 100, lastActive: "1 day ago", avatarColor: "bg-pink-500/20 text-pink-300", ringColor: "ring-pink-500/30" },
    { id: 3, initials: "MK", name: "Mike Kinsley", email: "mike.k@example.com", course: "Creative Portraiture", enrolledDate: "Enrolled Oct 08", progress: 25, lastActive: "3 days ago", avatarColor: "bg-orange-500/20 text-orange-300", ringColor: "ring-orange-500/30" },
    { id: 4, initials: "AL", name: "Aisha Lee", email: "aisha.l@example.com", course: "Creative Portraiture", enrolledDate: "Enrolled Oct 05", progress: 80, lastActive: "5 hrs ago", avatarColor: "bg-purple-500/20 text-purple-300", ringColor: "ring-purple-500/30" },
    { id: 5, initials: "RJ", name: "Ryan James", email: "ryan.j@example.com", course: "Storytelling Masterclass", enrolledDate: "Enrolled Sep 28", progress: 45, lastActive: "1 week ago", avatarColor: "bg-green-500/20 text-green-300", ringColor: "ring-green-500/30" },
];

export default function AdminPage() {
    const { user: firebaseUser } = useAuth();
    const [activeTab, setActiveTab] = useState<"dashboard" | "curriculum" | "earnings" | "students" | "settings">("dashboard");
    const [settingsTab, setSettingsTab] = useState<"profile" | "security" | "notifications">("profile");
    const [showStudentDrawer, setShowStudentDrawer] = useState(false);

    // Profile state
    const [userId, setUserId] = useState<string | null>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [headline, setHeadline] = useState("");
    const [bio, setBio] = useState("");
    const [website, setWebsite] = useState("");
    const [twitterUrl, setTwitterUrl] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [profileEmail, setProfileEmail] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [profileSaving, setProfileSaving] = useState(false);
    const [profileSaved, setProfileSaved] = useState(false);

    // Notification state
    const [notifyEnrollments, setNotifyEnrollments] = useState(true);
    const [notifyQuestions, setNotifyQuestions] = useState(true);
    const [notifyMarketing, setNotifyMarketing] = useState(false);
    const [notifSaving, setNotifSaving] = useState(false);

    // Security state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [securityMsg, setSecurityMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [securitySaving, setSecuritySaving] = useState(false);

    // Load user profile from DataConnect on mount
    useEffect(() => {
        if (!firebaseUser) return;
        getCurrentUser({ authUid: firebaseUser.uid }).then((res) => {
            const profile = res.data.users[0];
            if (!profile) return;
            setUserId(profile.id);
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
            setHeadline(profile.headline ?? "");
            setBio(profile.bio ?? "");
            setWebsite(profile.website ?? "");
            setTwitterUrl(profile.twitterUrl ?? "");
            setInstagramUrl(profile.instagramUrl ?? "");
            setLinkedinUrl(profile.linkedinUrl ?? "");
            setProfileEmail(profile.email);
            setNotifyEnrollments(profile.notifyEnrollments);
            setNotifyQuestions(profile.notifyQuestions);
            setNotifyMarketing(profile.notifyMarketing);
            setPhotoUrl(profile.photoUrl ?? "");
            if (profile.createdAt) {
                setJoinedDate(new Date(profile.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
            }
        }).catch(console.error);
    }, [firebaseUser]);

    const handleSaveProfile = async () => {
        if (!userId) return;
        setProfileSaving(true);
        try {
            await updateUserProfile({ id: userId, firstName, lastName, headline, bio, website, twitterUrl, instagramUrl, linkedinUrl, photoUrl });
            setProfileSaved(true);
            setTimeout(() => setProfileSaved(false), 3000);
        } catch (e) { console.error(e); }
        finally { setProfileSaving(false); }
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !firebaseUser || !userId) return;
        const storageRef = ref(storage, `profile-pictures/${firebaseUser.uid}`);
        const task = uploadBytesResumable(storageRef, file);
        task.on("state_changed",
            (snap) => setUploadProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
            (err) => { console.error(err); setUploadProgress(null); },
            async () => {
                const url = await getDownloadURL(task.snapshot.ref);
                setPhotoUrl(url);
                setUploadProgress(null);
                await updateUserProfile({ id: userId, firstName, lastName, headline, bio, website, twitterUrl, instagramUrl, linkedinUrl, photoUrl: url });
            }
        );
    };

    const handleSaveNotifications = async () => {
        if (!userId) return;
        setNotifSaving(true);
        try { await updateUserNotifications({ id: userId, notifyEnrollments, notifyQuestions, notifyMarketing }); }
        catch (e) { console.error(e); }
        finally { setNotifSaving(false); }
    };

    const handleChangePassword = async () => {
        if (!firebaseUser?.email || !currentPassword || !newPassword) return;
        setSecuritySaving(true);
        setSecurityMsg(null);
        try {
            const credential = EmailAuthProvider.credential(firebaseUser.email, currentPassword);
            await reauthenticateWithCredential(firebaseUser, credential);
            await updatePassword(firebaseUser, newPassword);
            setSecurityMsg({ type: "success", text: "Password updated successfully." });
            setCurrentPassword("");
            setNewPassword("");
        } catch (e: any) {
            setSecurityMsg({ type: "error", text: e.message ?? "Failed to update password." });
        } finally { setSecuritySaving(false); }
    };

    return (
        <div className="h-screen bg-zinc-950 flex overflow-hidden">
            {/* Admin Sidebar */}
            <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col justify-between shrink-0">
                <div>
                    <div className="h-20 flex items-center px-6 border-b border-white/5">
                        <Link href="/" className="text-xl font-serif text-white tracking-tighter hover:opacity-80 transition-opacity">
                            UnchartedSkill.
                            <span className="font-sans text-[10px] text-zinc-500 font-normal tracking-wider ml-1 uppercase">Creator</span>
                        </Link>
                    </div>

                    <div className="p-4 space-y-1">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${activeTab === "dashboard" ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <LayoutDashboard size={18} />
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab("curriculum")}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${activeTab === "curriculum" ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Clapperboard size={18} />
                            My Courses
                        </button>
                        <button
                            onClick={() => setActiveTab("earnings")}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${activeTab === "earnings" ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Wallet size={18} />
                            Earnings
                        </button>
                        <button
                            onClick={() => setActiveTab("students")}
                            className={"w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors " + (activeTab === "students" ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white")}
                        >
                            <Users size={18} />
                            Students
                        </button>
                        <button 
                            onClick={() => setActiveTab("settings")}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${activeTab === "settings" ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Settings size={18} />
                            Settings
                        </button>
                    </div>
                </div>

                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center gap-3 px-2 py-2">
                        <img
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Annie Vance</p>
                            <p className="text-xs text-zinc-500 truncate">annie@mastery.com</p>
                        </div>
                        <button className="text-zinc-500 hover:text-white">
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Admin Content */}
            <main className="flex-1 overflow-y-auto bg-black/20">
                {/* Top Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-zinc-950 sticky top-0 z-30">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <span className="hover:text-zinc-300 cursor-pointer">Instructor</span>
                        <ChevronRight size={12} />
                        <span className="text-white capitalize">{activeTab}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors relative">
                            <Bell size={18} />
                            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-zinc-950"></span>
                        </button>
                        <button className="bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2">
                            <PlusCircle size={16} />
                            New Course
                        </button>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto">
                    {/* DASHBOARD TAB */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 border border-white/5">
                                            <Users size={20} />
                                        </div>
                                        <span className="flex items-center text-green-400 text-xs font-medium">
                                            +12%
                                            <TrendingUp size={12} className="ml-1" />
                                        </span>
                                    </div>
                                    <div className="text-2xl font-semibold text-white mb-1">24.5k</div>
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                                        Total Students
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 border border-white/5">
                                            <Clock size={20} />
                                        </div>
                                        <span className="flex items-center text-green-400 text-xs font-medium">
                                            +5%
                                            <TrendingUp size={12} className="ml-1" />
                                        </span>
                                    </div>
                                    <div className="text-2xl font-semibold text-white mb-1">892 hrs</div>
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                                        Watch Time
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 border border-white/5">
                                            <Star size={20} />
                                        </div>
                                        <span className="text-zinc-500 text-xs font-medium">--</span>
                                    </div>
                                    <div className="text-2xl font-semibold text-white mb-1">4.92</div>
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                                        Avg Rating
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 border border-white/5">
                                            <Wallet size={20} />
                                        </div>
                                        <span className="flex items-center text-green-400 text-xs font-medium">
                                            +18%
                                            <TrendingUp size={12} className="ml-1" />
                                        </span>
                                    </div>
                                    <div className="text-2xl font-semibold text-white mb-1">$12,450</div>
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                                        Revenue (Mo)
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity Table */}
                            <div className="rounded-xl border border-white/5 bg-zinc-900/30 overflow-hidden">
                                <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
                                    <h3 className="text-sm font-medium text-white">Latest Enrollments</h3>
                                    <button className="text-xs text-zinc-500 hover:text-white transition-colors">
                                        View All
                                    </button>
                                </div>
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-zinc-400 font-medium text-xs uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Student</th>
                                            <th className="px-6 py-3 font-medium">Course</th>
                                            <th className="px-6 py-3 font-medium">Date</th>
                                            <th className="px-6 py-3 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-zinc-300">
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-bold">
                                                    JD
                                                </div>
                                                <span className="font-medium text-white">John Doe</span>
                                            </td>
                                            <td className="px-6 py-4">Creative Portraiture</td>
                                            <td className="px-6 py-4 text-zinc-500">2 mins ago</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center text-xs font-bold">
                                                    SM
                                                </div>
                                                <span className="font-medium text-white">Sarah Miller</span>
                                            </td>
                                            <td className="px-6 py-4">Storytelling Masterclass</td>
                                            <td className="px-6 py-4 text-zinc-500">1 hour ago</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center text-xs font-bold">
                                                    MK
                                                </div>
                                                <span className="font-medium text-white">Mike Kinsley</span>
                                            </td>
                                            <td className="px-6 py-4">Creative Portraiture</td>
                                            <td className="px-6 py-4 text-zinc-500">3 hours ago</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-wider border border-white/5">
                                                    Pending
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* EARNINGS TAB */}
                    {activeTab === "earnings" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-serif text-white tracking-tight">
                                        Earnings & Payouts
                                    </h2>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Track your revenue, manage payouts, and view transaction history.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2">
                                        <FileDown size={16} />
                                        Statement
                                    </button>
                                    <button className="bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                        <ArrowRightLeft size={16} />
                                        Withdraw
                                    </button>
                                </div>
                            </div>

                            {/* Financial Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                        Total Revenue
                                    </p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-2xl font-semibold text-white">
                                            $148,290.00
                                        </h3>
                                        <span className="text-green-400 text-xs font-medium mb-1">
                                            +12%
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                        Available Balance
                                    </p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-2xl font-semibold text-white">$4,250.00</h3>
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                        Pending Clearance
                                    </p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-2xl font-semibold text-zinc-400">
                                            $1,840.00
                                        </h3>
                                        <Clock className="text-zinc-500 mb-1" size={16} />
                                    </div>
                                </div>
                                <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                        Next Payout
                                    </p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-xl font-semibold text-white">
                                            Nov 15, 2023
                                        </h3>
                                        <span className="text-zinc-500 text-xs mb-1">In 3 days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Revenue Chart (Visual Only) */}
                            <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-sm font-medium text-white">
                                        Revenue Overview
                                    </h3>
                                    <div className="flex items-center gap-2 bg-zinc-950 p-1 rounded-lg border border-white/10">
                                        <button className="px-3 py-1 rounded bg-white/10 text-white text-xs font-medium shadow-sm">
                                            12M
                                        </button>
                                        <button className="px-3 py-1 rounded text-zinc-500 hover:text-white text-xs font-medium transition-colors">
                                            30D
                                        </button>
                                        <button className="px-3 py-1 rounded text-zinc-500 hover:text-white text-xs font-medium transition-colors">
                                            7D
                                        </button>
                                    </div>
                                </div>

                                <div className="h-64 flex items-end gap-2 sm:gap-4 w-full">
                                    {/* Chart Bars */}
                                    {[
                                        { label: "Jan", height: "45%", value: "$8.2k" },
                                        { label: "Feb", height: "65%", value: "$12.4k" },
                                        { label: "Mar", height: "50%", value: "$9.1k" },
                                        { label: "Apr", height: "75%", value: "$14.2k" },
                                        { label: "May", height: "60%", value: "$11.8k" },
                                        { label: "Jun", height: "90%", value: "$18.5k" },
                                        { label: "Jul", height: "82%", value: "$16.2k" },
                                        { label: "Aug", height: "95%", value: "$19.1k" },
                                        { label: "Sep", height: "68%", value: "$13.4k" },
                                        { label: "Oct", height: "78%", value: "$15.8k" },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 flex flex-col items-center gap-2 group relative"
                                        >
                                            <div className="absolute -top-10 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 z-10 w-max">
                                                {item.value}
                                            </div>
                                            <div
                                                className="w-full bg-zinc-800 rounded-t-sm group-hover:bg-brand-gold/80 transition-all duration-500 relative overflow-hidden"
                                                style={{ height: item.height }}
                                            >
                                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                                            </div>
                                            <span className="text-[10px] uppercase text-zinc-600 font-medium">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                    {/* November Active */}
                                    <div className="flex-1 flex flex-col items-center gap-2 group relative">
                                        <div className="absolute -top-10 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">$12.4k</div>
                                        <div className="w-full bg-brand-gold rounded-t-sm shadow-lg shadow-brand-gold/20 relative overflow-hidden" style={{ height: "65%" }}>
                                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                                        </div>
                                        <span className="text-[10px] uppercase text-white font-bold">Nov</span>
                                    </div>
                                    {/* December Empty */}
                                    <div className="flex-1 flex flex-col items-center gap-2 group relative">
                                        <div className="absolute -top-10 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">--</div>
                                        <div className="w-full bg-zinc-800/50 rounded-t-sm border border-zinc-800 border-dashed relative overflow-hidden" style={{ height: "0%" }}>

                                        </div>
                                        <span className="text-[10px] uppercase text-zinc-600 font-medium">Dec</span>
                                    </div>
                                </div>
                            </div>

                            {/* Transaction & Payout Settings */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Recent Transactions */}
                                <div className="lg:col-span-2 rounded-xl border border-white/5 bg-zinc-900/30 overflow-hidden">
                                    <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
                                        <h3 className="text-sm font-medium text-white">
                                            Recent Transactions
                                        </h3>
                                        <button className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
                                            Filter
                                            <Filter size={12} />
                                        </button>
                                    </div>
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-white/5 text-zinc-400 font-medium text-xs uppercase tracking-wider">
                                            <tr>
                                                <th className="px-6 py-3 font-medium">Source</th>
                                                <th className="px-6 py-3 font-medium">Date</th>
                                                <th className="px-6 py-3 font-medium text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-zinc-300">
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-1.5 rounded bg-zinc-800 text-zinc-400">
                                                            <UserCircle size={16} />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-white">
                                                                Creative Portraiture
                                                            </div>
                                                            <div className="text-xs text-zinc-500">
                                                                Student: John Doe
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-zinc-500 text-xs">
                                                    Nov 12, 2023
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-white">
                                                    +$199.00
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-1.5 rounded bg-zinc-800 text-zinc-400">
                                                            <UserCircle size={16} />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-white">
                                                                Storytelling Masterclass
                                                            </div>
                                                            <div className="text-xs text-zinc-500">
                                                                Student: Sarah Miller
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-zinc-500 text-xs">
                                                    Nov 11, 2023
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-white">
                                                    +$149.00
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-1.5 rounded bg-zinc-800 text-zinc-400">
                                                            <Banknote size={16} />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-white">
                                                                Monthly Payout
                                                            </div>
                                                            <div className="text-xs text-zinc-500">
                                                                To: Chase Bank ****4589
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-zinc-500 text-xs">
                                                    Nov 01, 2023
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-zinc-500">
                                                    -$4,250.00
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-1.5 rounded bg-zinc-800 text-zinc-400">
                                                            <UserCircle size={16} />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-white">
                                                                Creative Portraiture
                                                            </div>
                                                            <div className="text-xs text-zinc-500">
                                                                Student: Mike Kinsley
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-zinc-500 text-xs">
                                                    Oct 30, 2023
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-white">
                                                    +$199.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="w-full py-3 text-xs text-zinc-500 font-medium uppercase tracking-wider hover:bg-white/5 transition-colors border-t border-white/5">
                                        View Full History
                                    </button>
                                </div>

                                {/* Payout Settings */}
                                <div className="space-y-6">
                                    <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6">
                                        <h3 className="text-sm font-medium text-white mb-4">
                                            Payout Method
                                        </h3>
                                        <div className="p-4 rounded-lg bg-zinc-950 border border-white/10 mb-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                                                    <span className="font-bold text-zinc-950">CHASE</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">
                                                        Chase Bank
                                                    </p>
                                                    <p className="text-xs text-zinc-500">**** 4589</p>
                                                </div>
                                            </div>
                                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <button className="w-full py-2.5 rounded border border-white/10 text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                            Manage Accounts
                                        </button>
                                    </div>

                                    <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6">
                                        <h3 className="text-sm font-medium text-white mb-4">
                                            Payment Schedule
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Frequency</span>
                                                <span className="text-white">Monthly</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Next Payout</span>
                                                <span className="text-white">Nov 15, 2023</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Threshold</span>
                                                <span className="text-white">$100.00</span>
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-4 border-t border-white/5">
                                            <div className="flex items-start gap-2">
                                                <Info className="text-zinc-500 mt-0.5 shrink-0" size={14} />
                                                <p className="text-xs text-zinc-500 leading-relaxed">
                                                    Payouts are processed on the 15th of every month. Allow
                                                    3-5 business days for funds to appear.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CURRICULUM TAB */}
                    {activeTab === "curriculum" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-serif text-white tracking-tight">
                                        Creative Portraiture
                                    </h2>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Manage curriculum, upload videos, and edit resources.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-colors">
                                        Preview
                                    </button>
                                    <button className="bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left: Course Settings */}
                                <div className="lg:col-span-1 space-y-6">
                                    {/* Cover Image */}
                                    <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30">
                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                                            Course Thumbnail
                                        </label>
                                        <div className="aspect-video w-full rounded bg-zinc-800 relative group overflow-hidden border border-white/5 cursor-pointer">
                                            <img
                                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-medium text-white uppercase tracking-wider">
                                                    Change Image
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Basic Info */}
                                    <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-4">
                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">
                                            Course Settings
                                        </label>
                                        <div>
                                            <span className="text-xs text-zinc-400 block mb-1">
                                                Title
                                            </span>
                                            <input
                                                type="text"
                                                defaultValue="Creative Portraiture"
                                                className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                            />
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-400 block mb-1">
                                                Category
                                            </span>
                                            <select className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50">
                                                <option>Photography</option>
                                                <option>Art</option>
                                                <option>Business</option>
                                            </select>
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-400 block mb-1">
                                                Price
                                            </span>
                                            <div className="relative">
                                                <span className="absolute left-3 top-2.5 text-zinc-500">
                                                    $
                                                </span>
                                                <input
                                                    type="number"
                                                    defaultValue="199.00"
                                                    className="w-full bg-zinc-950 border border-white/10 rounded pl-6 pr-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                />
                                            </div>
                                        </div>
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-sm text-white">Published</span>
                                            <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                                                <input
                                                    type="checkbox"
                                                    name="toggle"
                                                    id="toggle"
                                                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500"
                                                />
                                                <label
                                                    htmlFor="toggle"
                                                    className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"
                                                ></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Curriculum Editor */}
                                <div className="lg:col-span-2 space-y-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-white">
                                            Course Content
                                        </h3>
                                        <button className="text-xs text-brand-gold font-medium uppercase tracking-widest hover:text-white transition-colors">
                                            + Add Chapter
                                        </button>
                                    </div>

                                    {/* Chapter 1 */}
                                    <div className="rounded-xl border border-white/5 bg-zinc-900/30 overflow-hidden">
                                        <div className="bg-white/5 px-4 py-3 flex items-center justify-between cursor-move">
                                            <div className="flex items-center gap-3">
                                                <Menu className="text-zinc-600 cursor-grab" size={16} />
                                                <span className="text-sm font-medium text-white">
                                                    Chapter 1: The Philosophy
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-zinc-500">1 Lesson</span>
                                                <button className="text-zinc-500 hover:text-white">
                                                    <Pencil size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-2 space-y-2">
                                            {/* Lesson Item */}
                                            <div className="flex items-center gap-3 p-3 rounded bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors group">
                                                <Menu className="text-zinc-700 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                                <div className="w-4 h-4 rounded flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        className="appearance-none w-4 h-4 border border-white/20 rounded-sm checked:bg-brand-gold checked:border-brand-gold relative cursor-pointer
                            after:content-[''] after:absolute after:hidden after:w-1 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5px] after:top-[2px] checked:after:block"
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-zinc-300 font-medium">
                                                        01. Introduction
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="px-1.5 py-0.5 rounded bg-green-900/30 text-green-400 text-[10px] uppercase font-bold tracking-wider">
                                                            Video
                                                        </span>
                                                        <span className="text-[10px] text-zinc-500">
                                                            04:12
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-red-400 transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chapter 2 */}
                                    <div className="rounded-xl border border-white/5 bg-zinc-900/30 overflow-hidden">
                                        <div className="bg-white/5 px-4 py-3 flex items-center justify-between cursor-move">
                                            <div className="flex items-center gap-3">
                                                <Menu className="text-zinc-600 cursor-grab" size={16} />
                                                <span className="text-sm font-medium text-white">
                                                    Chapter 2: Lighting & Composition
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-zinc-500">4 Lessons</span>
                                                <button className="text-zinc-500 hover:text-white">
                                                    <Pencil size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-2 space-y-2">
                                            {/* Lesson Item */}
                                            <div className="flex items-center gap-3 p-3 rounded bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors group">
                                                <Menu className="text-zinc-700 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                                <div className="w-4 h-4 rounded flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        className="appearance-none w-4 h-4 border border-white/20 rounded-sm checked:bg-brand-gold checked:border-brand-gold relative cursor-pointer
                            after:content-[''] after:absolute after:hidden after:w-1 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5px] after:top-[2px] checked:after:block"
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-zinc-300 font-medium">
                                                        02. Finding Your Subject
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="px-1.5 py-0.5 rounded bg-green-900/30 text-green-400 text-[10px] uppercase font-bold tracking-wider">
                                                            Video
                                                        </span>
                                                        <span className="text-[10px] text-zinc-500">
                                                            12:45
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-red-400 transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Lesson Item */}
                                            <div className="flex items-center gap-3 p-3 rounded bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors group">
                                                <Menu className="text-zinc-700 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                                <div className="w-4 h-4 rounded flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        className="appearance-none w-4 h-4 border border-white/20 rounded-sm checked:bg-brand-gold checked:border-brand-gold relative cursor-pointer
                            after:content-[''] after:absolute after:hidden after:w-1 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5px] after:top-[2px] checked:after:block"
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-zinc-300 font-medium">
                                                        03. Natural Light Mastery
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="px-1.5 py-0.5 rounded bg-green-900/30 text-green-400 text-[10px] uppercase font-bold tracking-wider">
                                                            Video
                                                        </span>
                                                        <span className="text-[10px] text-zinc-500">
                                                            18:20
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-red-400 transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Lesson Item Draft */}
                                            <div className="flex items-center gap-3 p-3 rounded bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors group">
                                                <Menu className="text-zinc-700 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                                <div className="w-4 h-4 rounded flex items-center justify-center">
                                                    <input type="checkbox" className="appearance-none w-4 h-4 border border-white/20 rounded-sm checked:bg-brand-gold checked:border-brand-gold relative cursor-pointer
                            after:content-[''] after:absolute after:hidden after:w-1 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5px] after:top-[2px] checked:after:block" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-zinc-300 font-medium">
                                                        04. Breaking Composition Rules
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="px-1.5 py-0.5 rounded bg-zinc-700 text-zinc-400 text-[10px] uppercase font-bold tracking-wider">
                                                            Draft
                                                        </span>
                                                        <span className="text-[10px] text-zinc-500">
                                                            --:--
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-red-400 transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full py-3 text-xs text-zinc-500 font-medium uppercase tracking-wider hover:bg-white/5 transition-colors border-t border-white/5">
                                            + Add Lesson
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STUDENTS TAB */}
                    {activeTab === "students" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-serif text-white tracking-tight">Students</h2>
                                    <p className="text-zinc-500 text-sm mt-1">Manage and monitor your enrolled students&apos; progress.</p>
                                </div>
                                <button className="bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                    <Mail size={16} />
                                    Message All
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2">Total Students</div>
                                    <div className="text-3xl font-serif text-white mb-1">24,532</div>
                                    <div className="text-xs text-green-400 font-medium">+12% this month</div>
                                </div>
                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2">Active (7d)</div>
                                    <div className="text-3xl font-serif text-white mb-1">8,401</div>
                                    <div className="text-xs text-zinc-400 font-medium">34% of total</div>
                                </div>
                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2">Avg Progress</div>
                                    <div className="text-3xl font-serif text-white mb-1">42%</div>
                                    <div className="text-xs text-green-400 font-medium">+5% vs last month</div>
                                </div>
                                <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2">Completion Rate</div>
                                    <div className="text-3xl font-serif text-white mb-1">18%</div>
                                    <div className="text-xs text-zinc-400 font-medium">Across all courses</div>
                                </div>
                            </div>

                            {/* Search & Filters */}
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="relative flex-1 w-full">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Search students by name or email..."
                                        className="w-full bg-zinc-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                                    />
                                </div>
                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <select className="bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-white/30 transition-colors cursor-pointer w-full md:w-auto">
                                        <option>All Courses</option>
                                        <option>Creative Portraiture</option>
                                        <option>Storytelling Masterclass</option>
                                    </select>
                                    <select className="bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-white/30 transition-colors cursor-pointer w-full md:w-auto">
                                        <option>Any Status</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                        <option>Completed</option>
                                    </select>
                                </div>
                            </div>

                            {/* Students Table */}
                            <div className="rounded-xl border border-white/5 bg-zinc-900/30 overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-white/5 text-zinc-400 font-medium text-xs uppercase tracking-wider border-b border-white/5">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">Student</th>
                                            <th className="px-6 py-4 font-medium">Enrolled Course</th>
                                            <th className="px-6 py-4 font-medium">Progress</th>
                                            <th className="px-6 py-4 font-medium hidden md:table-cell">Last Active</th>
                                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-zinc-300">
                                        {students.map((student) => (
                                            <tr
                                                key={student.id}
                                                className="hover:bg-white/5 transition-colors cursor-pointer group"
                                                onClick={() => setShowStudentDrawer(true)}
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={"w-8 h-8 rounded-full " + student.avatarColor + " flex items-center justify-center text-xs font-bold shrink-0 ring-1 " + student.ringColor}>
                                                            {student.initials}
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-white group-hover:text-brand-gold transition-colors">{student.name}</div>
                                                            <div className="text-xs text-zinc-500">{student.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>{student.course}</div>
                                                    <div className="text-xs text-zinc-500">{student.enrolledDate}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                                            <div className="h-full bg-brand-gold rounded-full" style={{ width: student.progress + "%" }}></div>
                                                        </div>
                                                        <span className="text-xs font-medium text-zinc-400">{student.progress}%</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 hidden md:table-cell text-zinc-500">{student.lastActive}</td>
                                                <td className="px-6 py-4 text-right">
                                                    <button
                                                        className="text-zinc-500 hover:text-white transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <MoreHorizontal size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination */}
                                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
                                    <div className="text-xs text-zinc-500">Showing 1 to 5 of 24,532 students</div>
                                    <div className="flex items-center gap-2">
                                        <button className="px-3 py-1.5 rounded text-xs font-medium text-zinc-400 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white transition-colors opacity-50 cursor-not-allowed" disabled>
                                            Previous
                                        </button>
                                        <button className="px-3 py-1.5 rounded text-xs font-medium text-zinc-400 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white transition-colors">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* SETTINGS TAB */}
                    {activeTab === "settings" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-serif text-white tracking-tight">
                                        Account Settings
                                    </h2>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Manage your public profile, notification preferences, and security.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    {profileSaved && <span className="text-xs text-green-400 flex items-center gap-1.5"><CheckCircle size={14}/> Saved</span>}
                                    {settingsTab === "profile" && (
                                        <button onClick={handleSaveProfile} disabled={profileSaving || !userId} className="flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors disabled:opacity-50">
                                            {profileSaving ? <Loader2 size={14} className="animate-spin"/> : <Save size={14}/>} Save Changes
                                        </button>
                                    )}
                                    {settingsTab === "notifications" && (
                                        <button onClick={handleSaveNotifications} disabled={notifSaving || !userId} className="flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors disabled:opacity-50">
                                            {notifSaving ? <Loader2 size={14} className="animate-spin"/> : <Save size={14}/>} Save Preferences
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Settings Navigation */}
                            <div className="flex items-center gap-6 border-b border-white/5 px-2">
                                <button
                                    onClick={() => setSettingsTab("profile")}
                                    className={`py-3 text-sm font-medium transition-colors relative ${settingsTab === "profile" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                                >
                                    Public Profile
                                    {settingsTab === "profile" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-full"></div>
                                    )}
                                </button>
                                <button
                                    onClick={() => setSettingsTab("security")}
                                    className={`py-3 text-sm font-medium transition-colors relative ${settingsTab === "security" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                                >
                                    Security
                                    {settingsTab === "security" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-full"></div>
                                    )}
                                </button>
                                <button
                                    onClick={() => setSettingsTab("notifications")}
                                    className={`py-3 text-sm font-medium transition-colors relative ${settingsTab === "notifications" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                                >
                                    Notifications
                                    {settingsTab === "notifications" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-full"></div>
                                    )}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main Settings Content */}
                                <div className="lg:col-span-2 space-y-6">
                                    {settingsTab === "profile" && (
                                        <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-6 animate-in fade-in duration-300">
                                            <div>
                                                <h3 className="text-white font-medium text-sm mb-4">Profile Picture</h3>
                                                <div className="flex items-center gap-6">
                                                     {/* Hidden file input */}
                                                     <input
                                                        id="photo-upload-input"
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handlePhotoUpload}
                                                    />
                                                    <div className="relative">
                                                        <img
                                                            src={photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName + " " + lastName)}&background=3f3f46&color=d4af37&size=128`}
                                                            alt="Profile"
                                                            className="w-20 h-20 rounded-full object-cover ring-4 ring-white/5"
                                                        />
                                                        {uploadProgress !== null && (
                                                            <div className="absolute inset-0 rounded-full bg-zinc-950/70 flex items-center justify-center">
                                                                <span className="text-xs font-bold text-brand-gold">{uploadProgress}%</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => document.getElementById("photo-upload-input")?.click()}
                                                            disabled={uploadProgress !== null}
                                                            className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                                                        >
                                                            {uploadProgress !== null ? `Uploading ${uploadProgress}%` : "Upload New"}
                                                        </button>
                                                        {photoUrl && (
                                                            <button
                                                                onClick={() => { setPhotoUrl(""); updateUserProfile({ id: userId!, firstName, lastName, headline, bio, website, twitterUrl, instagramUrl, linkedinUrl, photoUrl: "" }); }}
                                                                className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-white/5 transition-colors"
                                                            >
                                                                Remove
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/5 space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Professional Headline
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={headline}
                                                        onChange={(e) => setHeadline(e.target.value)}
                                                        placeholder="e.g. Award-winning Portrait Photographer"
                                                        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Bio
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        value={bio}
                                                        onChange={(e) => setBio(e.target.value)}
                                                        placeholder="A brief description for your profile."
                                                        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50 resize-none"
                                                    />
                                                    <div className="flex justify-between items-center mt-2">
                                                        <p className="text-zinc-500 text-xs">Brief description for your profile. URLs are hyperlinked.</p>
                                                        <span className="text-xs text-zinc-500 font-medium">{bio.length} / 500</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Personal Website
                                                    </label>
                                                    <div className="flex bg-zinc-950 border border-white/10 rounded overflow-hidden focus-within:border-brand-gold/50">
                                                        <span className="flex items-center px-3 bg-white/5 border-r border-white/10 text-zinc-500 text-sm">https://</span>
                                                        <input
                                                            type="text"
                                                            value={website}
                                                            onChange={(e) => setWebsite(e.target.value)}
                                                            placeholder="yourwebsite.com"
                                                            className="w-full bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-6">
                                                    <div>
                                                        <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                                            Twitter / X
                                                        </label>
                                                        <input type="text" value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)} placeholder="@username" className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"/>
                                                    </div>
                                                    <div>
                                                        <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                                            Instagram
                                                        </label>
                                                        <input type="text" value={instagramUrl} onChange={(e) => setInstagramUrl(e.target.value)} placeholder="@username" className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"/>
                                                    </div>
                                                    <div>
                                                        <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                                            LinkedIn
                                                        </label>
                                                        <input type="text" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="linkedin.com/in/username" className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {settingsTab === "security" && (
                                        <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-6 animate-in fade-in duration-300">
                                            <div>
                                                <h3 className="text-white font-medium text-sm mb-4">Email Address</h3>
                                                <div className="flex items-center gap-4">
                                                    <input type="email" value={profileEmail} disabled className="flex-1 bg-zinc-950 border border-white/5 rounded px-3 py-2 text-sm text-zinc-500 cursor-not-allowed"/>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/5 space-y-4">
                                                <h3 className="text-white font-medium text-sm mb-2">Change Password</h3>
                                                {securityMsg && (
                                                    <p className={`text-xs px-3 py-2 rounded ${securityMsg.type === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>{securityMsg.text}</p>
                                                )}
                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Current Password</label>
                                                    <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"/>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">New Password</label>
                                                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"/>
                                                </div>
                                                <button onClick={handleChangePassword} disabled={securitySaving || !currentPassword || !newPassword} className="flex items-center gap-2 px-4 py-2 mt-2 rounded text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50">
                                                    {securitySaving ? <Loader2 size={14} className="animate-spin"/> : null} Update Password
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {settingsTab === "notifications" && (
                                        <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-6 animate-in fade-in duration-300">
                                            <h3 className="text-white font-medium text-sm mb-2">Email Notifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">Course Enrollments</p>
                                                        <p className="text-xs text-zinc-500 mt-0.5">Get notified when a new student enrolls in your courses.</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none">
                                                        <input type="checkbox" id="n1" checked={notifyEnrollments} onChange={(e) => setNotifyEnrollments(e.target.checked)} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500"/>
                                                        <label htmlFor="n1" className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"></label>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between pt-4 border-t border-white/5">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">Student Questions</p>
                                                        <p className="text-xs text-zinc-500 mt-0.5">Receive emails when students ask questions in the Q&A.</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none">
                                                        <input type="checkbox" id="n2" checked={notifyQuestions} onChange={(e) => setNotifyQuestions(e.target.checked)} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500"/>
                                                        <label htmlFor="n2" className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"></label>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between pt-4 border-t border-white/5">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">Marketing & Updates</p>
                                                        <p className="text-xs text-zinc-500 mt-0.5">Receive news about product updates and creator tips.</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none">
                                                        <input type="checkbox" id="n3" checked={notifyMarketing} onChange={(e) => setNotifyMarketing(e.target.checked)} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500"/>
                                                        <label htmlFor="n3" className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar Info */}
                                <div className="lg:col-span-1 space-y-6">
                                    <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30">
                                        <h3 className="text-white font-medium text-sm mb-3">Your Account</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Plan</span>
                                                <span className="text-white font-medium">Creator Pro</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Joined</span>
                                                <span className="text-white">{joinedDate || "—"}</span>
                                            </div>
                                            <div className="pt-4 mt-4 border-t border-white/5">
                                                <button className="text-xs text-brand-gold hover:text-white transition-colors font-medium">
                                                    Upgrade Plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-xl border border-red-500/10 bg-red-500/5">
                                        <h3 className="text-red-400 font-medium text-sm mb-2">Danger Zone</h3>
                                        <p className="text-xs text-zinc-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                                        <button className="px-4 py-2 w-full rounded border border-red-500/20 text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-500/10 transition-colors">
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>

            {/* Student Details Drawer */}
            <div
                className={"fixed inset-0 z-50 transition-all duration-300 " + (showStudentDrawer ? "pointer-events-auto" : "pointer-events-none")}
            >
                {/* Backdrop */}
                <div
                    className={"absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out " + (showStudentDrawer ? "opacity-100" : "opacity-0")}
                    onClick={() => setShowStudentDrawer(false)}
                />
                {/* Drawer Panel */}
                <div className={"absolute inset-y-0 right-0 w-full max-w-md bg-zinc-950 border-l border-white/5 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out " + (showStudentDrawer ? "translate-x-0" : "translate-x-full")}>
                        {/* Drawer Header */}
                        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-zinc-900/50 shrink-0">
                            <h3 className="text-lg font-serif text-white tracking-tight">Student Profile</h3>
                            <button
                                onClick={() => setShowStudentDrawer(false)}
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Drawer Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {/* Profile Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-xl font-bold ring-1 ring-blue-500/30 shrink-0">
                                    JD
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-0.5 tracking-tight">John Doe</h2>
                                    <p className="text-sm text-zinc-400 mb-2">john.doe@example.com</p>
                                    <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                                        Active Student
                                    </span>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="flex items-center gap-3 pb-6 border-b border-white/5">
                                <button className="flex-1 bg-white text-zinc-950 px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                    <Mail size={14} />
                                    Message
                                </button>
                                <button className="flex-1 border border-white/10 text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                    <TrendingUp size={14} />
                                    Report
                                </button>
                                <button className="w-10 h-10 border border-white/10 text-zinc-400 rounded flex items-center justify-center hover:bg-white/5 hover:text-red-400 transition-colors shrink-0">
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            {/* Enrolled Courses */}
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Enrolled Courses</h4>
                                <div className="space-y-4">
                                    <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/30">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h5 className="text-sm font-semibold text-white mb-1">Creative Portraiture</h5>
                                                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Enrolled Oct 12, 2023</p>
                                            </div>
                                            <span className="text-xs font-bold text-zinc-400">60%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-4">
                                            <div className="h-full bg-brand-gold w-[60%] rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                                            <span className="flex items-center gap-1.5">
                                                <MonitorPlay size={12} />
                                                11/18 Lessons
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={12} />
                                                2 hrs ago
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Activity Log */}
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Recent Activity</h4>
                                <div className="space-y-5 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-white/5 ml-2">
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-6 h-6 -translate-x-1/2 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400">
                                            <CheckCircle size={12} />
                                        </div>
                                        <p className="text-sm text-zinc-300 font-medium">Completed: Finding Your Subject</p>
                                        <span className="text-xs text-zinc-500 font-medium mt-0.5 block">Today, 2:30 PM</span>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-6 h-6 -translate-x-1/2 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400">
                                            <Play size={10} className="ml-0.5" />
                                        </div>
                                        <p className="text-sm text-zinc-300 font-medium">Started: Finding Your Subject</p>
                                        <span className="text-xs text-zinc-500 font-medium mt-0.5 block">Today, 2:15 PM</span>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-6 h-6 -translate-x-1/2 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-brand-gold/80">
                                            <Star size={12} />
                                        </div>
                                        <p className="text-sm text-zinc-300 font-medium">Enrolled in Creative Portraiture</p>
                                        <span className="text-xs text-zinc-500 font-medium mt-0.5 block">Oct 12, 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
}
