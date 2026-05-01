import re

with open("scratch_settings.jsx", "r") as f:
    settings_code = f.read()

with open("src/app/admin/page.tsx", "r") as f:
    content = f.read()

# Replace ending
old_ending = """            </div>
        </div>
    );
}"""

if old_ending in content:
    content = content.replace(old_ending, settings_code + "\n" + old_ending)
else:
    print("Could not find old ending")

with open("src/app/admin/page.tsx", "w") as f:
    f.write(content)

print("Merged successfully")
