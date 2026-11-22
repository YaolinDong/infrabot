#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0
"""Write the repository table from data/repos.json into both READMEs.

Run without arguments to update the files. With --check, report stale
tables and exit 1 without writing. Uses only the Python standard library.
"""
import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
START = "<!-- repos:start -->"
END = "<!-- repos:end -->"

TEXT = {
    "en": {
        "file": "README.md",
        "header": "| Repository | Contents | Status | Version | License |",
        "status": {"available": "Available", "preparing": "Preparing", "planned": "Planned"},
    },
    "zh": {
        "file": "README.zh-CN.md",
        "header": "| 仓库 | 内容 | 状态 | 版本 | 许可证 |",
        "status": {"available": "已发布", "preparing": "整理中", "planned": "计划中"},
    },
}


def table(data, lang):
    text = TEXT[lang]
    rows = [text["header"], "|---|---|---|---|---|"]
    for repo in data["repositories"]:
        name = repo["name"]
        if repo["status"] == "available":
            name = f"[{name}](https://github.com/{data['owner']}/{name})"
        else:
            name = f"`{name}`"
        status = text["status"][repo["status"]]
        rows.append(f"| {name} | {repo[lang]} | {status} | {repo['version'] or '—'} | {repo['license'] or '—'} |")
    return "\n".join(rows)


def render(source, block):
    head, sep, rest = source.partition(START)
    _, sep2, tail = rest.partition(END)
    if not sep or not sep2:
        raise ValueError(f"missing {START} / {END} markers")
    return f"{head}{START}\n{block}\n{END}{tail}"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="fail if a README table is stale")
    args = parser.parse_args()
    data = json.loads((ROOT / "data" / "repos.json").read_text(encoding="utf-8"))
    stale = []
    for lang, text in TEXT.items():
        path = ROOT / text["file"]
        current = path.read_text(encoding="utf-8")
        updated = render(current, table(data, lang))
        if updated != current:
            stale.append(text["file"])
            if not args.check:
                path.write_text(updated, encoding="utf-8")
    if args.check and stale:
        print("Stale repository table in " + ", ".join(stale) + ". Run python3 tools/render_tables.py.")
        return 1
    print("Repository tables " + ("are current." if args.check else "written."))
    return 0


if __name__ == "__main__":
    sys.exit(main())
