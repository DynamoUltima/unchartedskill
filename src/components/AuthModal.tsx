"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, UserPlus, Check, CheckCircle, ArrowLeft, CreditCard } from "lucide-react";

import { useAuth } from '@/context/AuthContext';
import { upsertUser } from '@dataconnect/generated';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialView?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, initialView = "login" }: AuthModalProps) {
    const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
    const [view, setView] = useState<"login" | "signup">(initialView);
    const [mounted, setMounted] = useState(false);
    const [signupStep, setSignupStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly">("annual");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const handleGoogleAuth = async () => {
        if (isGoogleLoading) return;
        setIsGoogleLoading(true);
        try {
            await signInWithGoogle();
            onClose();
        } catch (error) {
            setErrorMsg("Google sign in failed. Please try again.");
        } finally {
            setIsGoogleLoading(false);
        }
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            await signInWithEmail(email, password);
            onClose();
        } catch (error: any) {
            setErrorMsg(error.message || "Login failed");
        }
    };

    const handleSignupSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            // 1. Create user in Firebase Auth
            const fullName = `${firstName} ${lastName}`.trim();
            await signUpWithEmail(email, password, fullName);

            // 2. Insert User into Data Connect Database
            await upsertUser({ firstName, lastName, email });

            // 3. Move to next step
            setSignupStep(2);
        } catch (error: any) {
            setErrorMsg(error.message || "Signup failed");
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update view if initialView changes when opening
    useEffect(() => {
        if (isOpen) {
            setView(initialView);
            setSignupStep(1); // Reset step when opening
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, initialView]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Main Container */}
            {view === "login" ? (
                <div className="relative z-10 w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-in zoom-in-95 duration-300">

                    {/* Left Side: Image/Brand */}
                    <div className="hidden md:flex w-1/2 relative flex-col justify-between p-12 bg-zinc-800">
                        <img
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
                            alt="Background"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>

                        {/* Top: Logo */}
                        <div className="relative z-10">
                            <span className="text-2xl font-serif text-white tracking-tighter">MASTERY.</span>
                        </div>

                        {/* Bottom: Quote */}
                        <div className="relative z-10 max-w-sm">
                            <p className="text-2xl font-serif text-white leading-tight italic mb-6">"Creativity takes courage. It is the ability to see what others cannot."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-0.5 bg-brand-gold"></div>
                                <p className="text-xs font-medium uppercase tracking-widest text-zinc-300">Henri Matisse</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="w-full md:w-1/2 bg-zinc-950 p-8 md:p-12 flex flex-col justify-center relative">
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors group"
                        >
                            <X strokeWidth={1.5} className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <div className="mb-10 text-center">
                            <h2 className="text-3xl font-serif text-white mb-3">Welcome back</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed">Enter your details to access your learning journey.</p>
                            {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
                        </div>

                        <form className="space-y-6" onSubmit={handleLoginSubmit}>
                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">Password</label>
                                        <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Forgot?</a>
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center">
                                    <input type="checkbox" id="remember" className="peer w-4 h-4 appearance-none border border-white/20 rounded bg-transparent checked:bg-white checked:border-white transition-all cursor-pointer" />
                                    <Check className="w-3 h-3 text-black absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                                </div>
                                <label htmlFor="remember" className="text-sm text-zinc-400 select-none cursor-pointer">Remember me for 30 days</label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-zinc-950 font-semibold py-3.5 rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer"
                            >
                                <span>Sign In</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-800"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-medium">
                                <span className="bg-zinc-950 px-4 text-zinc-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleGoogleAuth}
                                disabled={isGoogleLoading}
                                className="flex items-center justify-center gap-2.5 px-4 py-3 border border-zinc-800 rounded bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm text-zinc-300 font-medium group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 4.6c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="group-hover:text-white transition-colors">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2.5 px-4 py-3 border border-zinc-800 rounded bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm text-zinc-300 font-medium group cursor-pointer">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.0729 1.9375C13.8021 1.02083 14.8646 0.354167 15.9375 0.3125C16.0312 1.25 15.6562 2.22917 14.9688 2.92708C14.3333 3.5625 13.3646 4.09375 12.3854 4.02083C12.2708 3.03125 12.7292 2.0625 13.0729 1.9375ZM11.1667 4.3125C7.94792 4.34375 6.09375 6.13542 6.09375 8.78125C6.09375 12.0833 9.0625 16.5 12.3021 16.5C13.8229 16.5 14.3958 15.6042 16.2083 15.6042C18.0208 15.6042 18.5104 16.5 20.125 16.5C21.7812 16.5 22.8438 15.0104 23.6354 13.8542C24.5104 12.5833 24.875 10.9375 24.8958 10.8542C24.8438 10.8333 20.9479 9.38542 20.9479 6.23958C20.9479 3.69792 23.0833 2.38542 23.2083 2.30208C21.3646 -0.322917 18.5208 0.09375 17.7083 0.458333C16.1458 1.11458 15.0417 1.09375 13.75 1.09375C12.3542 1.09375 10.1562 2.15625 11.1667 4.3125Z" />
                                </svg>
                                <span className="group-hover:text-white transition-colors">Apple</span>
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-zinc-500">
                            New to Uncharted?
                            <button
                                onClick={() => setView("signup")}
                                className="text-white hover:text-zinc-300 transition-colors font-medium ml-1 border-b border-white/20 hover:border-white pb-0.5 cursor-pointer"
                            >
                                Create an account
                            </button>
                        </p>
                    </div>
                </div>
            ) : (
                /* Signup Container (Multi-step) */
                <div className="relative z-10 w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-in zoom-in-95 duration-300">

                    {/* Left Side: Dynamic Visual */}
                    <div className="hidden md:flex w-5/12 relative flex-col justify-between p-10 bg-zinc-800">
                        <img
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
                            alt="Background"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>

                        <div className="relative z-10">
                            <span className="text-2xl font-serif text-white tracking-tighter">MASTERY.</span>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif text-white leading-tight mb-4">Unlock your potential today.</h3>
                            <ul className="space-y-3 text-sm text-zinc-300 font-light">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                                    Unlimited access to 180+ classes
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                                    Offline viewing on any device
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                                    New classes added every month
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Multi-Step Form */}
                    <div className="w-full md:w-7/12 bg-zinc-950 p-8 md:p-12 flex flex-col relative">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors group z-20 cursor-pointer"
                        >
                            <X strokeWidth={1.5} className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Steps Indicator */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${signupStep >= 1 ? 'bg-white text-zinc-950' : 'bg-zinc-800 text-zinc-500'}`}>1</div>
                                <span className={`text-xs font-medium uppercase tracking-wider transition-colors ${signupStep >= 1 ? 'text-white' : 'text-zinc-500'}`}>Account</span>
                            </div>
                            <div className="w-8 h-px bg-zinc-800"></div>
                            <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${signupStep >= 2 ? 'bg-white text-zinc-950' : 'bg-zinc-800 text-zinc-500'}`}>2</div>
                                <span className={`text-xs font-medium uppercase tracking-wider transition-colors ${signupStep >= 2 ? 'text-white' : 'text-zinc-500'}`}>Plan</span>
                            </div>
                        </div>

                        {/* STEP 1: Account Creation */}
                        {signupStep === 1 && (
                            <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-bottom-4 fade-in duration-300">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-serif text-white mb-2">Create your account</h2>
                                    <p className="text-zinc-400 text-sm">Join millions of learners around the world.</p>
                                    {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <button
                                        onClick={handleGoogleAuth}
                                        disabled={isGoogleLoading}
                                        className="flex items-center justify-center gap-2 px-4 py-3 border border-zinc-800 rounded bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm text-zinc-300 font-medium group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 4.6c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        <span className="group-hover:text-white transition-colors">Google</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-zinc-800 rounded bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm text-zinc-300 font-medium group cursor-pointer">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.0729 1.9375C13.8021 1.02083 14.8646 0.354167 15.9375 0.3125C16.0312 1.25 15.6562 2.22917 14.9688 2.92708C14.3333 3.5625 13.3646 4.09375 12.3854 4.02083C12.2708 3.03125 12.7292 2.0625 13.0729 1.9375ZM11.1667 4.3125C7.94792 4.34375 6.09375 6.13542 6.09375 8.78125C6.09375 12.0833 9.0625 16.5 12.3021 16.5C13.8229 16.5 14.3958 15.6042 16.2083 15.6042C18.0208 15.6042 18.5104 16.5 20.125 16.5C21.7812 16.5 22.8438 15.0104 23.6354 13.8542C24.5104 12.5833 24.875 10.9375 24.8958 10.8542C24.8438 10.8333 20.9479 9.38542 20.9479 6.23958C20.9479 3.69792 23.0833 2.38542 23.2083 2.30208C21.3646 -0.322917 18.5208 0.09375 17.7083 0.458333C16.1458 1.11458 15.0417 1.09375 13.75 1.09375C12.3542 1.09375 10.1562 2.15625 11.1667 4.3125Z" />
                                        </svg>
                                        <span className="group-hover:text-white transition-colors">Apple</span>
                                    </button>
                                </div>

                                <div className="relative mb-6">
                                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
                                    <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-medium"><span className="bg-zinc-950 px-4 text-zinc-500">Or with email</span></div>
                                </div>

                                <form onSubmit={handleSignupSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">First Name</label>
                                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all" placeholder="Jane" required />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">Last Name</label>
                                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all" placeholder="Doe" required />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all" placeholder="name@example.com" required />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all" placeholder="Create a password" required />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-white text-zinc-950 font-semibold py-3.5 rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer"
                                    >
                                        <span>Continue</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </form>
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-zinc-500">
                                        Already a member?
                                        <button
                                            onClick={() => setView("login")}
                                            className="text-white hover:text-zinc-300 transition-colors font-medium ml-1 cursor-pointer"
                                        >
                                            Log In
                                        </button>
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Plan Selection */}
                        {signupStep === 2 && (
                            <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-right-4 fade-in duration-300">
                                <div className="mb-8">
                                    <button
                                        onClick={() => setSignupStep(1)}
                                        className="text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-medium uppercase tracking-wider mb-4 cursor-pointer"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Back
                                    </button>
                                    <h2 className="text-3xl font-serif text-white mb-2">Choose your plan</h2>
                                    <p className="text-zinc-400 text-sm">Cancel anytime. No hidden fees.</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {/* Annual Plan */}
                                    <div
                                        onClick={() => setSelectedPlan("annual")}
                                        className={`relative p-5 rounded-lg border cursor-pointer transition-all ${selectedPlan === "annual"
                                            ? "bg-zinc-800/50 border-brand-gold ring-1 ring-brand-gold"
                                            : "bg-zinc-800/50 border-zinc-800 hover:border-zinc-700"
                                            }`}
                                    >
                                        <div className="absolute -top-3 right-4 bg-brand-gold text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">Best Value</div>
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-white font-semibold">Annual Membership</h3>
                                            <div className="text-right">
                                                <span className="block text-lg font-serif text-white">$15<span className="text-xs font-sans text-zinc-400 font-normal">/mo</span></span>
                                            </div>
                                        </div>
                                        <p className="text-zinc-400 text-xs mb-3">Billed annually at $180</p>
                                        <ul className="text-xs text-zinc-300 space-y-2">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold" /> Access to all classes</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold" /> Offline viewing</li>
                                        </ul>
                                    </div>

                                    {/* Monthly Plan */}
                                    <div
                                        onClick={() => setSelectedPlan("monthly")}
                                        className={`relative p-5 rounded-lg border cursor-pointer transition-all ${selectedPlan === "monthly"
                                            ? "bg-zinc-900 border-brand-gold ring-1 ring-brand-gold"
                                            : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-white font-semibold">Monthly Membership</h3>
                                            <div className="text-right">
                                                <span className="block text-lg font-serif text-white">$23<span className="text-xs font-sans text-zinc-400 font-normal">/mo</span></span>
                                            </div>
                                        </div>
                                        <p className="text-zinc-400 text-xs mb-3">Billed monthly</p>
                                        <ul className="text-xs text-zinc-300 space-y-2">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Access to all classes</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-brand-gold text-zinc-950 font-semibold py-3.5 rounded hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        <span>Start Membership</span>
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-zinc-800 text-white font-semibold py-3.5 rounded hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Skip for now</span>
                                    </button>
                                </div>
                                <p className="text-center text-[10px] text-zinc-600 mt-4 leading-relaxed">
                                    By confirming, you agree to our Terms of Service. Your subscription will renew automatically. You can cancel at any time.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>,
        document.body
    );
}
