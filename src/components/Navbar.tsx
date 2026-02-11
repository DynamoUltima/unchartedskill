"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import CategoriesMenu from "./CategoriesMenu";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialAuthView, setInitialAuthView] = useState<"login" | "signup">("login");
  const categoryButtonRef = useRef<HTMLButtonElement>(null);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <>
      <nav className="fixed w-full h-20 z-50 transition-all duration-300 bg-gradient-to-b from-zinc-950/90 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between z-50">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <Link href="#" className="text-2xl font-serif text-white tracking-tighter hover:opacity-80 transition-opacity">
              UnchartedSkill
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-400">
              <button
                ref={categoryButtonRef}
                onClick={toggleCategories}
                className="flex items-center gap-1.5 hover:text-white transition-colors py-6 focus:outline-none group"
              >
                Categories
                <ChevronDown
                  strokeWidth={1.5}
                  className={`w-3 h-3 opacity-50 transition-transform duration-300 ${isCategoriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <Link href="#" className="hover:text-white transition-colors">New & Popular</Link>
              <Link href="#" className="hover:text-white transition-colors">Gifts</Link>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Search strokeWidth={1.5} className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setInitialAuthView("login");
                setIsAuthModalOpen(true);
              }}
              className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Log in
            </button>
            <button
              onClick={() => {
                setInitialAuthView("signup");
                setIsAuthModalOpen(true);
              }}
              className="text-xs font-medium bg-white text-zinc-950 px-5 py-2.5 rounded hover:bg-zinc-200 transition-colors tracking-wide uppercase"
            >
              Sign Up
            </button>
          </div>
        </div>

        <CategoriesMenu
          isOpen={isCategoriesOpen}
          onClose={() => setIsCategoriesOpen(false)}
          triggerRef={categoryButtonRef}
        />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialView={initialAuthView}
        />
      </nav>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
