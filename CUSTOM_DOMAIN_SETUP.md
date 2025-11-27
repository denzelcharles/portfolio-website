# 🌐 Add a Custom Domain to Your Portfolio

Make your portfolio even more professional with a custom domain like `dcservices.com` or `denzelcharles.com`!

## Prerequisites

✅ You need to **own a domain name** first
- Purchase from: [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), [Google Domains](https://domains.google), or any domain registrar
- Popular options: `.com`, `.net`, `.dev`, `.io`

## Step-by-Step: Add Custom Domain to Vercel

### Step 1: Access Your Vercel Project

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. **Click on your project**: `portfolio-website`
3. Go to **Settings** tab (top navigation)
4. Click on **Domains** in the left sidebar

### Step 2: Add Your Domain

1. In the **Domains** section, you'll see an input field
2. **Enter your domain**: 
   - For example: `dcservices.com` or `denzelcharles.com`
   - Or a subdomain: `www.dcservices.com` or `portfolio.dcservices.com`
3. Click **Add** or **Add Domain**

### Step 3: Configure DNS Records

Vercel will show you the DNS records you need to add. You'll typically need:

#### Option A: Root Domain (e.g., `dcservices.com`)
Add these DNS records at your domain registrar:

**Type A Record:**
- **Name/Host**: `@` or leave blank
- **Value**: `76.76.21.21`
- **TTL**: 3600 (or default)

**OR**

**Type CNAME Record:**
- **Name/Host**: `@` or leave blank  
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600 (or default)

#### Option B: Subdomain (e.g., `www.dcservices.com`)
Add this DNS record:

**Type CNAME Record:**
- **Name/Host**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600 (or default)

### Step 4: Add DNS Records at Your Domain Registrar

1. **Log in** to your domain registrar (where you bought the domain)
2. Go to **DNS Management** or **Domain Settings**
3. Find **DNS Records** or **Advanced DNS**
4. **Add the records** Vercel provided (from Step 3)
5. **Save** the changes

### Step 5: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Usually takes **1-2 hours** on average
- Vercel will show the status: ✅ "Valid Configuration" when ready

### Step 6: SSL Certificate (Automatic!)

- Vercel **automatically** provides free SSL certificates
- Your site will be available at `https://yourdomain.com`
- No additional configuration needed!

## Example: Adding `dcservices.com`

If you own `dcservices.com`:

1. **In Vercel**: Add `dcservices.com` and `www.dcservices.com`
2. **At your domain registrar**, add:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
3. **Wait** for DNS propagation
4. **Visit** `https://dcservices.com` - your portfolio is live!

## Popular Domain Registrars

### Where to Buy Domains:

1. **Namecheap** - [namecheap.com](https://www.namecheap.com)
   - Affordable, easy to use
   - ~$10-15/year for .com domains

2. **GoDaddy** - [godaddy.com](https://www.godaddy.com)
   - Popular, widely used
   - ~$12-20/year for .com domains

3. **Google Domains** - [domains.google](https://domains.google)
   - Simple interface
   - ~$12/year for .com domains

4. **Cloudflare** - [cloudflare.com](https://www.cloudflare.com/products/registrar)
   - At-cost pricing (no markup)
   - ~$8-10/year for .com domains

## Domain Name Ideas

For your portfolio, consider:
- `denzelcharles.com`
- `denzelcharles.dev`
- `dcservices.com` (for D.C. Security Services)
- `denzelportfolio.com`
- `denzelcharles.tech`

## Benefits of Custom Domain

✅ **More Professional**: `denzelcharles.com` looks better than `portfolio-website-xyz.vercel.app`  
✅ **Branding**: Builds your personal brand  
✅ **Memorable**: Easier for people to remember  
✅ **SEO**: Better for search engines  
✅ **Email**: Can set up professional email (optional)

## Troubleshooting

### Domain Not Working?
1. **Check DNS propagation**: Use [whatsmydns.net](https://www.whatsmydns.net)
2. **Verify records**: Make sure DNS records match Vercel's instructions exactly
3. **Wait longer**: DNS can take up to 48 hours
4. **Check Vercel dashboard**: Look for any error messages

### SSL Certificate Issues?
- Vercel handles SSL automatically
- If there's an issue, it usually resolves within 24 hours
- Check Vercel dashboard for SSL status

### Multiple Domains?
- You can add multiple domains to the same project
- Add both `dcservices.com` and `www.dcservices.com`
- Both will point to your portfolio

## Current Status

Your portfolio is currently live at:
- **Vercel URL**: `https://portfolio-website-opal-three-55.vercel.app`

After adding a custom domain, it will also be available at:
- **Custom Domain**: `https://yourdomain.com`

Both URLs will work! 🎉

---

**Note**: Custom domains are optional but highly recommended for a professional portfolio!

