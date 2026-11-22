#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0
"""Check that every English docs page has a Simplified Chinese page.

Also reports Chinese pages whose English source no longer exists. Uses only
the Python standard library.
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "website"
EN = ROOT / "docs"
ZH = ROOT / "i18n" / "zh-Hans" / "docusaurus-plugin-content-docs" / "current"


def pages(base):
    return {p.relative_to(base) for p in base.rglob("*") if p.suffix in {".md", ".mdx"}}


def main():
    en, zh = pages(EN), pages(ZH)
    missing = sorted(en - zh)
    orphaned = sorted(zh - en)
    for path in missing:
        print(f"missing Chinese page: {path}")
    for path in orphaned:
        print(f"Chinese page without English source: {path}")
    if missing or orphaned:
        return 1
    print(f"{len(en)} pages have English and Chinese versions.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
