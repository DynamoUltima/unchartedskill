import { Zap, ArrowRight, Play } from "lucide-react";

export default function FeaturedLargeBlock() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 rounded-lg overflow-hidden bg-zinc-900/50">
            <div className="p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-6">
                    <Zap strokeWidth={1.5} className="w-4 h-4 text-white" />
                    <span className="text-xs font-medium tracking-widest uppercase text-white">UnchartedSkill Original</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">The Science of Better Sleep</h2>
                <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
                    Neuroscientist Dr. James Walker reveals the biological mechanisms of sleep and provides a step-by-step protocol to optimize your rest, energy, and longevity.
                </p>

                <div className="flex items-center gap-4 text-sm text-zinc-300 mb-8">
                    <div className="flex items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-white/10" alt="Avatar" />
                        <span className="font-medium">Dr. James Walker</span>
                    </div>
                    <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                    <span>12 Lessons</span>
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors group">
                    <span className="text-sm font-medium border-b border-white/30 pb-0.5 group-hover:border-white transition-all">View Class Plan</span>
                    <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="relative h-[400px] lg:h-auto order-1 lg:order-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Sleep Science" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-transparent lg:bg-gradient-to-l lg:from-zinc-900/50"></div>

                <button className="absolute inset-0 w-full h-full flex items-center justify-center group">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Play strokeWidth={1.5} className="w-6 h-6 text-white ml-1" />
                    </div>
                </button>
            </div>
        </div>
    );
}
