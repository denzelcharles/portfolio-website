# 🚀 Deploy Your Portfolio to Vercel

Your portfolio is on GitHub! Now let's make it live on the internet for FREE!

## Step-by-Step Deployment Guide

### Step 1: Sign Up / Sign In to Vercel

1. **Go to Vercel**: [https://vercel.com](https://vercel.com)
2. **Click "Sign Up"** (or "Log In" if you already have an account)
3. **Choose "Continue with GitHub"**
   - This connects your GitHub account to Vercel
   - Click "Authorize Vercel" when prompted

### Step 2: Import Your Repository

1. **After signing in**, you'll see the Vercel dashboard
2. **Click "Add New..."** button (or "New Project" button)
3. **You'll see a list of your GitHub repositories**
4. **Find and select**: `denzelcharles/portfolio-website`
5. **Click "Import"**

### Step 3: Configure Your Project

Vercel will automatically detect it's a Next.js project. You'll see:

- **Framework Preset**: Next.js (auto-detected) ✅
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected) ✅
- **Output Directory**: `.next` (auto-detected) ✅
- **Install Command**: `npm install` (auto-detected) ✅

**You don't need to change anything!** Just click **"Deploy"**

### Step 4: Wait for Deployment

1. Vercel will:
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy it to a live URL

2. **This takes 2-3 minutes** - you'll see the progress in real-time!

3. **When it's done**, you'll see:
   - ✅ "Congratulations! Your project has been deployed"
   - A live URL like: `https://portfolio-website-xyz.vercel.app`

### Step 5: Visit Your Live Website! 🎉

1. **Click the URL** or copy it
2. **Your portfolio is now LIVE on the internet!**
3. **Share it with anyone** - they can visit your portfolio!

## What You Get

✅ **Free HTTPS** (secure connection)  
✅ **Custom Domain** (you can add your own domain later)  
✅ **Automatic Deployments** (every time you push to GitHub)  
✅ **Global CDN** (fast loading worldwide)  
✅ **Analytics** (see how many people visit)

## Automatic Deployments

**The best part**: Every time you:
1. Make changes to your code
2. Push to GitHub (`git push`)
3. Vercel automatically redeploys your site!

You don't need to do anything - it just works! 🎊

## Custom Domain (Optional)

Later, you can add your own domain:
1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your domain (e.g., `denzelcharles.com`)
4. Follow the DNS setup instructions

## Troubleshooting

### If deployment fails:
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify `next.config.js` is correct

### If images don't load:
- Make sure image files are in `public/images/` folder
- Check that image paths in code match the file names

### If styles don't work:
- Tailwind CSS should work automatically
- Check that `tailwind.config.ts` is correct

## Next Steps After Deployment

1. ✅ **Share your portfolio URL** with friends, family, employers
2. ✅ **Add it to your resume** and LinkedIn profile
3. ✅ **Keep updating it** - push changes to GitHub and Vercel auto-deploys!
4. ✅ **Add your logo images** to `public/images/` folder

---

**Your portfolio will be live in minutes!** 🚀

Visit: [https://vercel.com](https://vercel.com) to get started!

