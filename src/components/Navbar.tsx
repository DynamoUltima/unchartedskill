"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-20 z-50 transition-all duration-300 bg-gradient-to-b from-zinc-950/90 to-transparent backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Link href="#" className="text-2xl font-serif text-white tracking-tighter hover:opacity-80 transition-opacity">
            UnchartedSkill
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-zinc-400">
            <Link href="#" className="hover:text-white transition-colors">Categories</Link>
            <Link href="#" className="hover:text-white transition-colors">New & Popular</Link>
            <Link href="#" className="hover:text-white transition-colors">Gifts</Link>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Search strokeWidth={1.5} className="w-5 h-5" />
          </button>
          <Link href="#" className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">Log in</Link>
          <Link href="#" className="text-xs font-medium bg-white text-zinc-950 px-5 py-2.5 rounded hover:bg-zinc-200 transition-colors tracking-wide uppercase">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
