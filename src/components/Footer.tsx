import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-zinc-950 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="max-w-xs">
                        <a href="#" className="text-xl font-serif text-white tracking-tighter mb-6 block">UnchartedSkill</a>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Access the world's best minds. Learn from the greatest of all time.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter strokeWidth={1.5} className="w-5 h-5" /></a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram strokeWidth={1.5} className="w-5 h-5" /></a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook strokeWidth={1.5} className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
                        <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
                            <ul className="space-y-3 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Plans</a></li>
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Gift</a></li>
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Format</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
                            <ul className="space-y-3 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
                            <ul className="space-y-3 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>&copy; 2026 UnchartedSkill Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400">Terms of Service</a>
                        <a href="#" className="hover:text-zinc-400">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
