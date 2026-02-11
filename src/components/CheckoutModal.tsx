"use client";

import { X, Lock, CheckCircle, CreditCard, HelpCircle, ChevronDown, Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const [mounted, setMounted] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

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

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        // Simulate processing
        setTimeout(() => {
            setSuccess(true);

            // Success state
            setTimeout(() => {
                setProcessing(false);
                setSuccess(false);
                onClose();
            }, 1000);
        }, 1500);
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative z-10 w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:h-auto animate-in zoom-in-95 duration-300">

                {/* Left: Order Summary */}
                <div className="w-full md:w-5/12 bg-zinc-900/50 p-8 border-b md:border-b-0 md:border-r border-white/5 flex flex-col">
                    <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6">Order Summary</h3>

                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 aspect-3/4 rounded bg-zinc-800 shrink-0 overflow-hidden border border-white/10">
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                className="w-full h-full object-cover"
                                alt="Course Cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg leading-tight mb-1">Creative Portraiture</h4>
                            <p className="text-sm text-zinc-400 mb-2">by Annie Vance</p>
                            <span className="px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-wider border border-brand-gold/20">Monthly Subscription</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-zinc-500" />
                            <span>Unlimited Access to All Classes</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-zinc-500" />
                            <span>18 Video Lessons in this Class</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-zinc-500" />
                            <span>Community Access</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-zinc-500" />
                            <span>Cancel Anytime</span>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 space-y-2">
                        <div className="flex justify-between text-sm text-zinc-400">
                            <span>Monthly Plan</span>
                            <span>$19.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-zinc-400">
                            <span>Tax</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between items-end pt-2">
                            <span className="text-white font-medium">Total due today</span>
                            <span className="text-2xl font-serif text-white">$19.00</span>
                        </div>
                    </div>
                </div>

                {/* Right: Payment Details */}
                <div className="flex-1 p-8 bg-zinc-950 overflow-y-auto relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-1"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <h3 className="text-xl font-serif text-white mb-6">Secure Checkout</h3>

                    {/* Payment Methods */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded bg-white text-zinc-950 font-medium text-sm transition-colors ring-1 ring-white shadow-lg shadow-white/5">
                            <CreditCard className="w-5 h-5" />
                            Card
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded bg-zinc-900 text-zinc-400 font-medium text-sm hover:text-white hover:bg-zinc-800 transition-colors ring-1 ring-white/10">
                            <span className="font-bold italic">PayPal</span>
                        </button>
                    </div>

                    <form className="space-y-4" onSubmit={handlePayment}>
                        <div>
                            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">Name on Card</label>
                            <input
                                type="text"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="e.g. Michael Scott"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">Card Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="0000 0000 0000 0000"
                                    required
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 opacity-50 grayscale pointer-events-none">
                                    <div className="w-8 h-5 bg-zinc-700 rounded"></div>
                                    <div className="w-8 h-5 bg-zinc-700 rounded"></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">Expiration</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="MM / YY"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">CVC</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder="123"
                                        required
                                    />
                                    <HelpCircle className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">Billing Country</label>
                            <div className="relative">
                                <select className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer">
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>Japan</option>
                                </select>
                                <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full font-bold uppercase tracking-wider text-sm py-4 rounded transition-all flex items-center justify-center gap-2 group ${success
                                    ? "bg-green-500 text-white hover:bg-green-600"
                                    : "bg-white text-zinc-950 hover:bg-zinc-200"
                                    }`}
                            >
                                {processing && !success && (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Processing...</span>
                                    </>
                                )}
                                {success && (
                                    <>
                                        <Check className="w-5 h-5" />
                                        <span>Success</span>
                                    </>
                                )}
                                {!processing && !success && (
                                    <>
                                        <span>Subscribe - $19.00</span>
                                        <CreditCard className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 uppercase tracking-widest mt-2">
                            <Lock className="w-3.5 h-3.5" />
                            <span>256-Bit SSL Encrypted Payment</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
}
