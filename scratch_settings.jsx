                    {/* SETTINGS TAB */}
                    {activeTab === "settings" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-serif text-white tracking-tight">
                                        Account Settings
                                    </h2>
                                    <p className="text-zinc-500 text-sm mt-1">
                                        Manage your public profile, notification preferences, and security.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-white text-zinc-950 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Settings Navigation */}
                            <div className="flex items-center gap-6 border-b border-white/5 px-2">
                                <button
                                    onClick={() => setSettingsTab("profile")}
                                    className={`py-3 text-sm font-medium transition-colors relative ${settingsTab === "profile" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                                >
                                    Public Profile
                                    {settingsTab === "profile" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-full"></div>
                                    )}
                                </button>
                                <button
                                    onClick={() => setSettingsTab("security")}
                                    className={`py-3 text-sm font-medium transition-colors relative ${settingsTab === "security" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                                >
                                    Security
                                    {settingsTab === "security" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-full"></div>
                                    )}
                                </button>
                                <button
                                    onClick={() => setSettingsTab("notifications")}
                                    className={`py-3 text-sm font-medium transition-colors relative ${settingsTab === "notifications" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                                >
                                    Notifications
                                    {settingsTab === "notifications" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-full"></div>
                                    )}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main Settings Content */}
                                <div className="lg:col-span-2 space-y-6">
                                    {settingsTab === "profile" && (
                                        <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-6 animate-in fade-in duration-300">
                                            <div>
                                                <h3 className="text-white font-medium text-sm mb-4">Profile Picture</h3>
                                                <div className="flex items-center gap-6">
                                                    <img
                                                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                                                        alt="Profile"
                                                        className="w-20 h-20 rounded-full object-cover ring-4 ring-white/5"
                                                    />
                                                    <div className="flex gap-3">
                                                        <button className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors">
                                                            Upload New
                                                        </button>
                                                        <button className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-white/5 transition-colors">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/5 space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            defaultValue="Annie"
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            defaultValue="Vance"
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Professional Headline
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue="Award-winning Portrait Photographer"
                                                        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Bio
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        defaultValue="I've been shooting portraits for over 10 years, focusing on storytelling and emotion."
                                                        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50 resize-none"
                                                    />
                                                    <div className="flex justify-between items-center mt-2">
                                                        <p className="text-zinc-500 text-xs">Brief description for your profile. URLs are hyperlinked.</p>
                                                        <span className="text-xs text-zinc-500 font-medium">93 / 160</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Personal Website
                                                    </label>
                                                    <div className="flex bg-zinc-950 border border-white/10 rounded overflow-hidden focus-within:border-brand-gold/50">
                                                        <span className="flex items-center px-3 bg-white/5 border-r border-white/10 text-zinc-500 text-sm">https://</span>
                                                        <input
                                                            type="text"
                                                            placeholder="yourwebsite.com"
                                                            className="w-full bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-6">
                                                    <div>
                                                        <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                                            Twitter / X
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="@username"
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                                            Instagram
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="@username"
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                                            LinkedIn
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="linkedin.com/in/username"
                                                            className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {settingsTab === "security" && (
                                        <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-6 animate-in fade-in duration-300">
                                            <div>
                                                <h3 className="text-white font-medium text-sm mb-4">Email Address</h3>
                                                <div className="flex items-center gap-4">
                                                    <input
                                                        type="email"
                                                        defaultValue="annie@mastery.com"
                                                        disabled
                                                        className="flex-1 bg-zinc-950 border border-white/5 rounded px-3 py-2 text-sm text-zinc-500 cursor-not-allowed"
                                                    />
                                                    <button className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-colors">
                                                        Change
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/5 space-y-4">
                                                <h3 className="text-white font-medium text-sm mb-2">Change Password</h3>
                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        Current Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                                                        New Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full bg-zinc-950 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                                                    />
                                                </div>
                                                <button className="px-4 py-2 mt-2 rounded text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-colors">
                                                    Update Password
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {settingsTab === "notifications" && (
                                        <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30 space-y-6 animate-in fade-in duration-300">
                                            <h3 className="text-white font-medium text-sm mb-2">Email Notifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">Course Enrollments</p>
                                                        <p className="text-xs text-zinc-500 mt-0.5">Get notified when a new student enrolls in your courses.</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200">
                                                        <input type="checkbox" id="n1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500" defaultChecked />
                                                        <label htmlFor="n1" className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"></label>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between pt-4 border-t border-white/5">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">Student Questions</p>
                                                        <p className="text-xs text-zinc-500 mt-0.5">Receive emails when students ask questions in the Q&A.</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200">
                                                        <input type="checkbox" id="n2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500" defaultChecked />
                                                        <label htmlFor="n2" className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"></label>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between pt-4 border-t border-white/5">
                                                    <div>
                                                        <p className="text-sm font-medium text-white">Marketing & Updates</p>
                                                        <p className="text-xs text-zinc-500 mt-0.5">Receive news about product updates and creator tips.</p>
                                                    </div>
                                                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200">
                                                        <input type="checkbox" id="n3" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-brand-gold transition-all duration-300 right-5 border-zinc-500" />
                                                        <label htmlFor="n3" className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar Info */}
                                <div className="lg:col-span-1 space-y-6">
                                    <div className="p-6 rounded-xl border border-white/5 bg-zinc-900/30">
                                        <h3 className="text-white font-medium text-sm mb-3">Your Account</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Plan</span>
                                                <span className="text-white font-medium">Creator Pro</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-zinc-500">Joined</span>
                                                <span className="text-white">Mar 15, 2023</span>
                                            </div>
                                            <div className="pt-4 mt-4 border-t border-white/5">
                                                <button className="text-xs text-brand-gold hover:text-white transition-colors font-medium">
                                                    Upgrade Plan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-xl border border-red-500/10 bg-red-500/5">
                                        <h3 className="text-red-400 font-medium text-sm mb-2">Danger Zone</h3>
                                        <p className="text-xs text-zinc-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                                        <button className="px-4 py-2 w-full rounded border border-red-500/20 text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-500/10 transition-colors">
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
