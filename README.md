# Shashikant Singh | Portfolio Website

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No build step, no installs.

## Folder structure

```
index.html        page structure
css/style.css     all styling (light and dark themes)
js/data.js        YOUR CONTENT: edit this file to change text, projects and links
js/script.js      behaviour (theme toggle, animations, contact form)
assets/photo.jpg  your photo
.nojekyll         tells GitHub Pages to serve the files as they are
```

## 1. Add your details

Open `js/data.js` and replace the placeholders: projects, email, GitHub / LinkedIn / LeetCode links, and education.
To enable the resume button, put your PDF in `assets/` and set `resume:"assets/resume.pdf"`.

Preview locally by double-clicking `index.html`.

## 2. Put it on GitHub (no command line)

1. Sign in at github.com and click **New repository**.
2. Name it `YOUR-USERNAME.github.io` to get the address `https://YOUR-USERNAME.github.io`.
   Any other name (e.g. `portfolio`) also works and gives `https://YOUR-USERNAME.github.io/portfolio/`.
3. Keep it **Public** and click **Create repository**.
4. Click **uploading an existing file**, drag in everything from this folder (including the `css`, `js` and `assets` folders), then click **Commit changes**.

## 3. Turn on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/ (root)**, then click **Save**.
4. Wait 1 to 2 minutes and refresh. Your live link appears at the top of the Pages screen.

## Using Git instead

```bash
cd portfolio
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Updating later

Edit `js/data.js` (or any file) on GitHub with the pencil icon, or push again from your computer. The site refreshes within a minute or two.
