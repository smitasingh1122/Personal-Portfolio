# Personal Portfolio Website - Smita Singh

A complete, premium, dark-mode-first developer portfolio website designed for **Smita Singh**, an aspiring software developer and B.Tech student. This site is fully responsive, lightweight, built with semantic HTML5, clean CSS3 layouts, and vanilla JavaScript.

## 📁 Project Structure

```text
portfolio-website/
├── assets/
│   └── profile.png    # High-quality AI-generated profile avatar
├── index.html         # Main semantic markup structure (SEO Optimized)
├── style.css          # Design system, layouts, custom transitions & responsive media queries
├── script.js          # Dynamic typing, scroll spy, intersection observers & form controls
└── README.md          # Setup and deployment documentation
```

---

## 🚀 Getting Started

### 💻 Local Development

1. Clone or copy the `portfolio-website` folder to your computer.
2. Open `index.html` directly in any web browser to view the portfolio.
3. For the best experience (e.g., proper routing, absolute resources), open the folder in an editor like VS Code and launch it via **Live Server** or run a simple local server:
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   
   # Or using Node:
   npx serve .
   ```
4. Access the site in your browser at `http://localhost:8000` or `http://localhost:3000`.

---

## 🖼️ How to Replace the Profile Photo

The portfolio comes pre-packaged with a custom developer avatar illustration at `assets/profile.png`. To replace it with your actual photo:

1. Crop your photo into a **square aspect ratio (1:1)** for best results.
2. Save your photo in the **PNG** or **JPG** format.
3. Rename your image file to `profile.png` (or `profile.jpg`).
4. Copy your file and overwrite the existing file at `portfolio-website/assets/profile.png`.
5. If your file extension is different (e.g. `profile.jpg`), open `index.html` and update line **97**:
   ```html
   <!-- Before -->
   <img src="assets/profile.png" alt="Smita Singh Profile Picture">
   
   <!-- After -->
   <img src="assets/profile.jpg" alt="Smita Singh Profile Picture">
   ```

---

## 🌐 Deployment Guide

This website is statically constructed, which makes it perfect for fast, free hosting services. Here are two detailed guides:

### 1. GitHub Pages (Recommended)

GitHub Pages compiles directly from a GitHub repository.

#### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New** (or "+" in the top-right corner) to create a new repository.
3. Set the repository name (e.g., `portfolio` or `smita-singh`).
4. Keep the repository **Public**. Do not add a README, `.gitignore`, or License if you have these ready.
5. Click **Create repository**.

#### Step 2: Push your Code to GitHub
Open your terminal inside the `portfolio-website` folder and run:
```bash
git init
git add .
git commit -m "Initial commit - Personal Portfolio Website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and created repository name).*

#### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **Settings** tab (gear icon at the top).
3. Scroll down the left sidebar and click on **Pages** (under the "Code and automation" section).
4. Under the **Build and deployment** section, select **Deploy from a branch**.
5. Under **Branch**, select `main` (or `master`) and specify the folder as `/ (root)`.
6. Click **Save**.
7. Wait 1-2 minutes. GitHub will display a notification with your live site URL (e.g., `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`).

---

### 2. Netlify (Drag & Drop - Easiest)

Netlify allows you to deploy in seconds without writing command lines.

#### Option A: Drag & Drop (No Git required)
1. Go to the [Netlify Drop Page](https://app.netlify.com/drop).
2. Drag the entire `portfolio-website` folder from your file manager and drop it into the designated upload area on the browser page.
3. Netlify will deploy it instantly and provide a random URL (e.g., `https://random-words-1234.netlify.app`).
4. You can log in, go to **Site Settings**, and change the site name to a custom slug like `smita-singh.netlify.app`.

#### Option B: GitHub Integration (Continuous Deployment)
1. Log in to [Netlify](https://www.netlify.com).
2. Click **Add new site** -> **Import an existing project**.
3. Select **GitHub** and authorize Netlify.
4. Select your portfolio repository.
5. Leave the build settings blank (as it is static HTML/CSS/JS, no build command is required).
6. Click **Deploy site**. Any future changes you push to GitHub will automatically rebuild and deploy on Netlify.

---

## ✨ Future Enhancements Suggestions

To take this portfolio website to the next level:

1. **Light / Dark Mode Toggle**: Add a button in the navigation bar to toggle between the current neon-dark theme and a clean light theme using CSS variables and local storage.
2. **GitHub API Integration**: Write an asynchronous function in `script.js` to fetch your actual live repositories from GitHub and display them dynamically in the Projects section.
3. **Blog / Notes Section**: Implement a simple static Markdown reader to share your insights on Competitive Programming or technical studies.
4. **Custom Domain**: Bind a custom domain (like `smitasingh.dev`) using Netlify or GitHub Pages custom domain routing.
5. **Interactive Skill Quiz or Chat Bubble**: Add an actual mini chatbot simulation using simple JS responses in the featured AI Chatbot card so visitors can chat directly with your bot inside the portfolio.
