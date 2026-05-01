import sys

with open("src/app/admin/page.tsx", "r") as f:
    text = f.read()

marker = "{/* SETTINGS TAB */}"
target = "                </div>\n            </main>"

if marker not in text:
    print("Marker not found")
    sys.exit(1)

start_idx = text.find("                    " + marker)
if start_idx == -1:
    start_idx = text.find(marker)

# Find end of settings block
end_idx = text.find("\n                </div>\n            </div>\n        </div>\n    );\n}", start_idx)
if end_idx == -1:
    print("End of block not found")
    sys.exit(1)

settings_block = text[start_idx:end_idx]

# Remove settings block from the text
text = text[:start_idx] + text[end_idx:]

# Insert settings block before target
insert_idx = text.find(target)
if insert_idx == -1:
    print("Target not found")
    sys.exit(1)

new_text = text[:insert_idx] + settings_block + "\n" + text[insert_idx:]

with open("src/app/admin/page.tsx", "w") as f:
    f.write(new_text)

print("Settings block moved successfully!")
