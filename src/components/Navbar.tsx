"use client";

import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[var(--nav-height)] bg-black/80 backdrop-blur-md z-[1000] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tighter whitespace-nowrap">
            UnchartedSkill
          </Link>
          <button className="hidden md:flex items-center gap-2 text-[#b3b3b3] font-medium hover:text-white transition-colors">
            Browse <ChevronDown size={16} />
          </button>
        </div>

        <div className="flex-1 flex justify-center max-w-[500px] px-8 hidden md:flex">
          <div className="w-full relative text-[#b3b3b3]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full bg-[#333] border border-transparent rounded-full py-3 px-4 pl-[2.8rem] text-white text-sm transition-all focus:outline-none focus:bg-[#444] focus:border-white/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-white hover:opacity-80 transition-opacity hidden md:block">
            Log In
          </Link>
          <Link href="/signup" className="hidden md:block bg-accent text-white px-5 py-2.5 rounded font-semibold text-sm hover:scale-105 transition-transform">
            Sign Up
          </Link>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
