# Contributing

English · [简体中文](#参与贡献)

This repository holds the project homepage and the documentation website. Code, hardware and models live in the [component repositories](README.md#repositories). Open issues and pull requests there when they concern a single component.

## Documentation website

The site uses [Docusaurus](https://docusaurus.io/). English pages are under `website/docs/`, and Chinese translations are under `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/`, with the same file names. When you change an English page, update the Chinese page in the same pull request or mark it as untranslated.

Requires Node.js 20 or later:

```bash
cd website
npm ci
npm run start            # English preview
npm run start:zh         # Chinese preview
npm run build            # both languages, fails on broken links
```

## Repository table

The repository table in both READMEs is generated from `data/repos.json`:

```bash
python3 tools/render_tables.py           # update both READMEs
python3 tools/render_tables.py --check   # used in CI
```

## Commits

Write commit subjects in English using the form `type(scope): description`, for example `docs(website): add the SDK quick start`.

---

## 参与贡献

本仓库存放项目主页和文档网站。代码、硬件和模型在各[组件仓库](README.zh-CN.md#仓库列表)里，只涉及单个组件的 issue 和 PR 请提交到对应仓库。

网站使用 Docusaurus。英文页面在 `website/docs/`，中文翻译在 `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/`，文件名相同。修改英文页面时，请在同一个 PR 里更新中文页面，或者标注“尚未翻译”。本地预览需要 Node.js 20 或更高版本，命令见上方英文部分。

两份 README 中的仓库表由 `data/repos.json` 生成，修改后运行 `python3 tools/render_tables.py`。提交信息用英文，格式为 `type(scope): description`。
