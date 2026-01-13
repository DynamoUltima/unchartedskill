export default function CategoryRail() {
    return (
        <div className="w-full border-b border-white/5 bg-zinc-950 sticky top-20 z-40 py-4 shadow-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-8 min-w-max">
                    <button className="text-sm font-medium text-white border-b border-white pb-1">All Categories</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Business & Leadership</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Writing</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Acting & Cinema</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Music & Audio</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Culinary Arts</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Design & Style</button>
                    <button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 transition-colors">Sports & Games</button>
                </div>
            </div>
        </div>
    );
}
