<div align="center">

# openQR

**Ad-Free · Login-Free · Watermark-Free**

A fast, modern, and privacy-first QR code generator that runs entirely in your browser.

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Vanilla JS](https://img.shields.io/badge/Built%20with-Vanilla%20JS-yellow.svg)]()
[![No Backend](https://img.shields.io/badge/Backend-None-lightgrey.svg)]()

[Live Demo](https://raigenlabs.github.io/openQR) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## What is openQR?

Most QR generators force you through ads, account signups, and paywalls just to download a clean image. openQR eliminates all of that.

Type a URL or text → get a QR code → customize it → download it. No account. No ads. No watermarks. Everything happens locally in your browser — your data never touches a server.

---

## Features

| Feature | Details |
|---|---|
| ⚡ Instant generation | QR renders in real-time as you type |
| 🎨 Color picker | Choose from presets or any custom hex color |
| 🔵 Dot styles | 6 styles — Rounded, Square, Dots, Classy, Classy+, Extra-Rounded |
| 🖼 Logo embedding | Upload any image and embed it in the center of the QR |
| 📥 PNG download | Export a clean, high-quality PNG — watermark-free |
| 🔒 100% client-side | Zero server, zero database, zero data collection |
| 📱 Responsive | Works on all screen sizes down to 320px |

---


## Tech Stack

- **HTML5** — structure
- **CSS3** — styling, animations, responsive layout
- **Vanilla JavaScript** — zero frameworks, zero build tools
- **[qr-code-styling](https://github.com/kozakdenys/qr-code-styling)** *(MIT)* — QR generation with gradient, dot style, and logo support
- **[Lucide Icons](https://lucide.dev)** — clean, consistent iconography

---

## Getting Started

No install. No build step. No dependencies to manage.

**Option 1 — Just open it:**
```bash
git clone https://github.com/raigenlabs/openqr.git
cd openqr
# open index.html in any browser
```

**Option 2 — Use a local server (recommended for file uploads):**
```bash
# with Python
python3 -m http.server 3000

# with Node
npx serve .
```

Then visit `http://localhost:3000` in your browser.

---

## How It Works

```
User types URL / text
        ↓
JavaScript captures input
        ↓
qr-code-styling generates QR in canvas
        ↓
Customizations (color, dot style, logo) applied in real-time
        ↓
User downloads PNG — locally, no upload needed
```

---

## Project Structure

```
openQR
├── .gitignore
├── LICENSE
├── README.md
├── favicon.ico
├── index.html
├── script.js
├── styles.css
└── wireframe.tldr
```

The entire project intentionally lives in a single `index.html` to keep it lightweight, portable, and dependency-free.

---

## Connect to Your GitHub Stars

To show live star count in the header badge, find this line in `index.html`:

```js
<span id="starCount">0</span>
```

And add this fetch call right after `lucide.createIcons();` in the script:

```js
fetch('https://api.github.com/repos/YOUR_USERNAME/openqr')
  .then(res => res.json())
  .then(data => {
    document.getElementById('starCount').textContent =
      data.stargazers_count >= 1000
        ? (data.stargazers_count / 1000).toFixed(1) + 'k'
        : data.stargazers_count;
  })
  .catch(() => {
    document.getElementById('starCount').textContent = '0';
  });
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Roadmap

- [ ] SVG export support
- [ ] Gradient QR color options
- [ ] QR code scanning / reader mode
- [ ] Share via URL (encode data in query string)
- [ ] Dark / light theme toggle
- [ ] PWA support (offline-first)

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## Author

**Raghvendra Sahu**

> *Built with care — simple, clean, and free.*