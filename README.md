# 🧮 Image2LaTeX – Chrome Extension

**Image2LaTeX** is a lightweight Chrome extension that converts mathematical images into LaTeX code using a local backend server (e.g., `http://localhost:5000/api/convert`).  
Simply upload an image and the extension will return the LaTeX representation instantly.

---

## 🚀 Features

- 📤 Upload or paste math images directly from your clipboard.  
- 🔄 Sends images to a local OCR backend (`pix2tex` or similar).  
- 🧾 Displays the recognized LaTeX code right inside the popup.  
- ⚡ Works seamlessly — no popup closing during uploads.  
- 💻 100% offline-compatible with a local server.  

---

## 🧩 File Structure
```
Image2Latex/
│
├── index.html          # Main popup UI
├── manifest.json       # Chrome extension manifest (v3)
├── logo.png            # Extension icon
├── README.md           # GitHub documentation
│
└── src/
    ├── main.js         # Handles upload, API request, and display
    └── style.css       # Styles for popup
```

