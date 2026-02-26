"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Search, ChevronDown, MonitorPlay } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import CategoriesMenu from "./CategoriesMenu";
import AuthModal from "./AuthModal";
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialAuthView, setInitialAuthView] = useState<"login" | "signup">("login");
  const categoryButtonRef = useRef<HTMLButtonElement>(null);

  console.log("Navbar Rendering with User:", user);

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
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/admin"
                  className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand-gold hover:text-white transition-colors mr-2"
                >
                  <MonitorPlay size={18} />
                  TEACH
                </Link>
                <div className="relative group cursor-pointer">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
                    <img
                      src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'User')}&background=random`}
                      alt="User Profile"
                      className="w-full h-full object-cover bg-zinc-800"
                    />
                  </div>
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                    <div className="px-4 py-3 border-b border-zinc-800">
                      <p className="text-sm font-medium text-white truncate">{user.displayName || "User"}</p>
                      <p className="text-xs text-zinc-400 truncate mt-0.5">{user.email}</p>
                    </div>
                    <button
                      onClick={signOut}
                      className="w-full text-left px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
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
                  className="hidden sm:inline-flex items-center justify-center text-xs font-medium bg-white text-zinc-950 px-5 py-2.5 rounded hover:bg-zinc-200 transition-colors tracking-wide uppercase"
                >
                  Sign Up
                </button>
              </>
            )}
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
