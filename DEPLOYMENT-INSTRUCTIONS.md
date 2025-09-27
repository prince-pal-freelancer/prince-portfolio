# 🚀 Deploy Prince Pal's Portfolio to GitHub Pages

## Your Portfolio URL will be: `https://YOURUSERNAME.github.io/prince-portfolio`

## Step-by-Step Deployment Guide

### 1. Create GitHub Account
1. Go to [GitHub.com](https://github.com)
2. Click "Sign up"
3. Choose a username (suggestion: `prince-pal-engineer` or `princepal` or `prince-civil-engineer`)
4. Use your email: `palprince27112005@gmail.com`
5. Create a strong password
6. Verify your email

### 2. Create Repository
1. After logging in, click the "+" icon (top right)
2. Select "New repository"
3. Repository name: `prince-portfolio`
4. Description: "Professional Portfolio - Prince Pal | Civil Engineer & Entrepreneur"
5. Make it **Public** (required for free GitHub Pages)
6. ✅ Check "Add a README file"
7. Click "Create repository"

### 3. Upload Portfolio Files
You'll need to upload these files from your computer:

**Frontend Files to Upload:**
```
frontend/
├── public/
├── src/
├── package.json
├── craco.config.js
├── tailwind.config.js
└── README.md
```

**Two Options to Upload:**

**Option A: Web Interface (Easier)**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files from `/app/frontend/` folder
3. Write commit message: "Initial portfolio deployment"
4. Click "Commit changes"

**Option B: Git Commands (Advanced)**
```bash
git clone https://github.com/YOURUSERNAME/prince-portfolio.git
cd prince-portfolio
# Copy all files from /app/frontend/ to this folder
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

### 4. Configure GitHub Pages
1. Go to your repository settings
2. Scroll down to "Pages" section
3. Source: Select "Deploy from a branch"
4. Branch: Select "gh-pages" (will appear after first deployment)
5. Folder: Select "/ (root)"
6. Click "Save"

### 5. Deploy Your Portfolio
After uploading files, run deployment:

**If using Git locally:**
```bash
npm run deploy
```

**If using web interface:**
- GitHub Actions will automatically build and deploy
- Check "Actions" tab for deployment status

### 6. Access Your Live Portfolio
- URL: `https://YOURUSERNAME.github.io/prince-portfolio`
- Wait 5-10 minutes for first deployment
- Share this link with anyone!

## 🎯 Your Final Portfolio URL Examples:
- `https://prince-pal-engineer.github.io/prince-portfolio`
- `https://princepal.github.io/prince-portfolio`  
- `https://prince-civil-engineer.github.io/prince-portfolio`

## 📋 Quick Checklist:
- [ ] Create GitHub account with username containing "prince"
- [ ] Create repository named "prince-portfolio"
- [ ] Upload all portfolio files
- [ ] Enable GitHub Pages
- [ ] Wait for deployment (5-10 minutes)
- [ ] Test your live portfolio link
- [ ] Share with the world! 🌟

## 🛠️ Troubleshooting:
- **404 Error**: Wait 10 minutes, GitHub Pages takes time to activate
- **Broken Images**: Ensure all image URLs are absolute paths
- **Styling Issues**: Check if build completed successfully in Actions tab

## 📞 Need Help?
If you encounter any issues during deployment, you can:
1. Check the "Actions" tab in your repository for build logs
2. Ensure all files are properly uploaded
3. Verify GitHub Pages is enabled in repository settings

---
**Your portfolio showcases:**
✅ Professional experience at L&T and Feetinch Studio LLP  
✅ The Leaf Mall construction project  
✅ Railway bridge infrastructure work  
✅ E-commerce startup venture  
✅ Generative AI certification  
✅ Personal photos and contact information  

**Perfect for:**
- Job applications
- Client presentations  
- Professional networking
- Business development

Good luck with your deployment! 🚀