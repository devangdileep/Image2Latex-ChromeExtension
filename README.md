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

## ⚙️ How to Run the Extension Locally

Follow these simple steps to load and test the extension in Chrome

### 🧩 1. Clone or Download the Project

```
bash
git clone https://github.com/devangdileep/Image2Latex.git
cd Image2Latex
Or download it as a ZIP and extract it.
```

### 🛠️ 2. Set Up Your Backend
```
Make sure your local API (Flask + pix2tex or similar) is running at:
bash
Copy code
http://localhost:5000/api/convert
Example expected request:

Method: POST

Body: image file (FormData)

Response: json
```
### 🌐 3. Load the Extension in Chrome
```
Open Google Chrome and go to: chrome://extensions/
Turn Developer mode ON (top-right corner).

Click Load unpacked.

Select the project folder (Image2Latex).

Chrome will now load your extension.
```
### ▶️ 4. Use the Extension
```
Click the Image2LaTeX icon in your browser toolbar.

In the popup:
Click Choose File and select a math image.

Click Convert.

The LaTeX output will appear instantly in the result box.
```