import re

with open("scratch_settings.jsx", "r") as f:
    settings_code = f.read()

with open("src/app/admin/page.tsx", "r") as f:
    content = f.read()

# 1. Remove the settings code from the bottom
if settings_code in content:
    content = content.replace(settings_code, "")
    print("Removed loose settings code from the bottom.")
else:
    print("Warning: Couldn't find settings_code at the bottom.")

# 2. Inject before </main>
target = """                </div>
            </main>

            {/* Student Details Drawer */}"""

if target in content:
    replacement = settings_code + "\n" + target
    content = content.replace(target, replacement)
    print("Injected settings code inside main container.")
else:
    print("Warning: Couldn't find target </main> injection point.")

with open("src/app/admin/page.tsx", "w") as f:
    f.write(content)

print("Done")
