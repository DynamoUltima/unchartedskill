"use client";

import { ReactNode } from "react";

interface CategoryPillProps {
    label: string;
    icon?: ReactNode;
    active?: boolean;
}

export default function CategoryPill({ label, icon, active = false }: CategoryPillProps) {
    return (
        <button
            className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap
        ${active
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-[#b3b3b3] border-[#333] hover:border-white hover:text-white"
                }
      `}
        >
            {icon && <span className="text-lg">{icon}</span>}
            {label}
        </button>
    );
}
