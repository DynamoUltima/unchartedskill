import re

file_path = "/Users/dynamo/Desktop/Dev/react/uncharted/src/app/admin/page.tsx"

with open(file_path, "r") as f:
    content = f.read()

# 1. Add settingsTab state and update activeTab
content = content.replace(
    'const [activeTab, setActiveTab] = useState<"dashboard" | "curriculum" | "earnings" | "students">("dashboard");',
    'const [activeTab, setActiveTab] = useState<"dashboard" | "curriculum" | "earnings" | "students" | "settings">("dashboard");\n    const [settingsTab, setSettingsTab] = useState<"profile" | "security" | "notifications">("profile");'
)

# 2. Update the Settings button
button_search = '''<button className="w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                            <Settings size={18} />
                            Settings
                        </button>'''

button_replace = '''<button 
                            onClick={() => setActiveTab("settings")}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${activeTab === "settings" ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Settings size={18} />
                            Settings
                        </button>'''

if button_search in content:
    content = content.replace(button_search, button_replace)
else:
    print("Could not find button search string")

# 3. Add Settings Tab JSX before closing tags
with open("/Users/dynamo/Desktop/Dev/react/uncharted/scratch_settings.jsx", "r") as f:
    settings_jsx = f.read()

closing_tags = """                </div>
            </div>
        </div>
    );
}"""

if closing_tags in content:
    content = content.replace(closing_tags, settings_jsx + "\n" + closing_tags)
else:
    print("Could not find closing tags")

with open(file_path, "w") as f:
    f.write(content)

print("Done")
