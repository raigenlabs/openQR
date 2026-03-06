# Contributing to openQR

First off — thank you for taking the time to contribute. Every bug report, suggestion, and pull request makes openQR better for everyone.

This document explains how to get involved, what the expectations are, and how to make the process smooth for everyone.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Making Changes](#making-changes)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Code Style](#code-style)
- [Commit Message Format](#commit-message-format)

---

## Code of Conduct

This project follows a simple rule: **be respectful**. Constructive criticism is welcome. Harassment, discrimination, or toxic behaviour is not. Anyone who violates this will be removed from the project.

---

## Ways to Contribute

You don't have to write code to contribute. Here are all the ways you can help:

| Type | Examples |
|---|---|
| 🐛 Bug reports | Something broken? File an issue |
| 💡 Feature ideas | Have an idea? Open a discussion |
| 🎨 Design improvements | Better UI, animations, or UX flows |
| 📝 Documentation | Improve README, add comments, fix typos |
| 🌐 Translations | Help localize the UI |
| ⭐ Spread the word | Star the repo, share it, write about it |

---

## Getting Started

**1. Fork the repository**

Click the **Fork** button on the top right of the GitHub page.

**2. Clone your fork**

```bash
git clone https://github.com/raigenlabs/openqr.git
cd openqr
```

**3. Create a new branch**

Always work on a new branch — never directly on `main`.

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

**4. Open the project**

```bash
# open index.html directly in your browser
# or use a local server:
python3 -m http.server 3000
```

Visit `http://localhost:3000` — no build step needed.

---

## Making Changes

- **No frameworks.** openQR uses Vanilla JS intentionally. Don't introduce React, Vue, jQuery, or any other framework.
- **No new CDN dependencies** without prior discussion in an issue.
- **Test on multiple screen sizes** — especially below 400px width.
- **Test in Chrome, Firefox, and Safari** before submitting.

---

## Pull Request Guidelines

Before opening a PR, make sure:

- [ ] Your branch is up to date with `main`
- [ ] The feature or fix is working and tested
- [ ] You haven't introduced any console errors
- [ ] The UI still looks correct on mobile (≤382px) and desktop
- [ ] Your code follows the existing style (see [Code Style](#code-style))
- [ ] Your commit messages are clear (see [Commit Message Format](#commit-message-format))

**When opening the PR:**

1. Use a clear, descriptive title
2. Describe *what* you changed and *why*
3. Add screenshots or a short screen recording if it's a UI change
4. Reference any related issue: `Closes #42`

PRs without a description or screenshots for UI changes will be asked to update before review.

---

## Reporting Bugs

A good bug report saves a lot of back-and-forth. Please include:

- **What you expected to happen**
- **What actually happened**
- **Steps to reproduce** (step by step)
- **Browser and OS** (e.g. Chrome 122 on macOS Sonoma)
- **Screenshot or screen recording** if relevant

Open a bug report here → [GitHub Issues](../../issues/new)

---

## Suggesting Features

Before opening a feature request, check if it already exists in [open issues](../../issues).

If not, open a new issue and include:

- **Problem it solves** — what frustration does this fix?
- **Proposed solution** — how should it work?
- **Alternatives considered** — any other approaches you thought about?
- **Mockup or example** — even a rough sketch helps

---

## Code Style

**CSS**
- CSS variables for all colors — use `var(--bg)`, `var(--text)`, etc.
- Keep selectors flat and readable
- Group related styles together with a `/* ─── LABEL ─── */` comment

**JavaScript**
- Vanilla JS only — no transpiling, no modules
- `const` and `let` only — never `var`
- Keep functions small and clearly named
- Comment non-obvious logic

**HTML**
- Semantic elements where appropriate (`header`, `main`, `section`, `footer`)
- `aria-label` on all icon-only buttons

---

## Commit Message Format

Use clear, lowercase commit messages in this format:

```
type: short description

Optional longer explanation if needed.
```

**Types:**

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `style` | CSS or visual changes only |
| `refactor` | Code cleanup with no behaviour change |
| `docs` | README, comments, or documentation |
| `chore` | Tooling, config, misc |

**Examples:**
```
feat: add svg export option
fix: color popover clipping on mobile
style: tighten info section spacing
docs: update contributing guide
```

---

## Questions?

If you're unsure about anything — open an issue and ask. There are no stupid questions.

---

*Thank you for helping make openQR better.* 🙌