export default function ComingSoon() {
    return (
        <div className="mt-24">
            <h3 className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-8">Coming Next Month</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Upcoming 1 */}
                <div className="flex gap-4 items-start group cursor-pointer p-4 rounded hover:bg-white/5 transition-colors">
                    <div className="w-24 h-32 shrink-0 bg-zinc-800 overflow-hidden rounded">
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                        <span className="text-[10px] font-medium tracking-widest uppercase text-zinc-500 block mb-1">Technology</span>
                        <h4 className="text-lg font-serif text-white mb-1">The Future of AI</h4>
                        <p className="text-sm text-zinc-400 mb-2">With Sam Altman</p>
                        <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">Notify Me</span>
                    </div>
                </div>

                {/* Upcoming 2 */}
                <div className="flex gap-4 items-start group cursor-pointer p-4 rounded hover:bg-white/5 transition-colors">
                    <div className="w-24 h-32 shrink-0 bg-zinc-800 overflow-hidden rounded">
                        <img src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1931&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                        <span className="text-[10px] font-medium tracking-widest uppercase text-zinc-500 block mb-1">Sports</span>
                        <h4 className="text-lg font-serif text-white mb-1">Tennis Fundamentals</h4>
                        <p className="text-sm text-zinc-400 mb-2">With Roger Federer</p>
                        <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">Notify Me</span>
                    </div>
                </div>

                {/* Upcoming 3 */}
                <div className="flex gap-4 items-start group cursor-pointer p-4 rounded hover:bg-white/5 transition-colors">
                    <div className="w-24 h-32 shrink-0 bg-zinc-800 overflow-hidden rounded">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                        <span className="text-[10px] font-medium tracking-widest uppercase text-zinc-500 block mb-1">Fashion</span>
                        <h4 className="text-lg font-serif text-white mb-1">Sustainable Style</h4>
                        <p className="text-sm text-zinc-400 mb-2">With Stella McCartney</p>
                        <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">Notify Me</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
