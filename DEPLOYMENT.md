# Deployment Guide - Social Media Mastery Training App

This guide provides step-by-step instructions for deploying the Social Media Mastery training application to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] All files downloaded to a local directory
- [ ] Tested the application locally in a web browser
- [ ] Verified all links and functionality work correctly
- [ ] Customized branding and content as needed
- [ ] Reviewed and updated any placeholder content

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free & Recommended)

Perfect for: Open-source projects, personal use, team training

**Steps:**

1. **Create GitHub Repository**
   ```bash
   # Create new repository on GitHub
   # Clone repository locally
   git clone https://github.com/yourusername/social-media-training.git
   cd social-media-training
   ```

2. **Add Files**
   ```bash
   # Copy all application files to repository
   cp /path/to/your/files/* .
   
   # Add files to git
   git add .
   git commit -m "Initial deployment of Social Media Training App"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/social-media-training`
   - Initial deployment takes 5-10 minutes

**Custom Domain (Optional):**
- Add CNAME file with your domain
- Configure DNS settings
- Enable HTTPS in repository settings

### Option 2: Netlify (Recommended for Teams)

Perfect for: Professional deployments, team collaboration, custom domains

**Method A: Drag & Drop (Easiest)**

1. **Visit Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free account

2. **Deploy**
   - Create ZIP file of all application files
   - Drag ZIP to Netlify deploy area
   - Wait for deployment (usually 1-2 minutes)

3. **Configure**
   - Custom domain: Add in Domain settings
   - HTTPS: Automatically enabled
   - Environment: Configure if needed

**Method B: Git Integration**

1. **Connect Repository**
   - Link GitHub/GitLab repository
   - Configure build settings (none needed for this app)
   - Set publish directory to root

2. **Auto-Deploy**
   - Automatic deployments on git push
   - Branch previews available
   - Rollback capability

### Option 3: Vercel

Perfect for: Performance-critical deployments, global CDN

**Steps:**

1. **Install Vercel CLI** (Optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Web**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings
   - Deploy automatically

3. **Deploy via CLI**
   ```bash
   # From your project directory
   vercel
   # Follow prompts
   ```

### Option 4: Firebase Hosting

Perfect for: Google ecosystem integration, advanced features

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Project**
   ```bash
   firebase init hosting
   # Select options:
   # - Use existing project or create new
   # - Public directory: . (current directory)
   # - Single-page app: No
   # - Overwrite index.html: No
   ```

3. **Deploy**
   ```bash
   firebase deploy
   ```

### Option 5: Traditional Web Hosting

Perfect for: Existing web hosting accounts, corporate environments

**Steps:**

1. **Prepare Files**
   - Ensure all files are in a single folder
   - Test locally before upload

2. **Upload via FTP**
   ```bash
   # Using FTP client (FileZilla, etc.)
   # Upload all files to public_html or www directory
   # Maintain file structure
   ```

3. **Verify Deployment**
   - Visit your domain
   - Test all functionality
   - Check console for any errors

## 🔧 Configuration Options

### Environment Customization

**Branding Updates:**
```css
/* In styles.css - Update CSS variables */
:root {
    --primary-color: #your-brand-color;
    --secondary-color: #your-secondary-color;
}
```

**Content Customization:**
```javascript
// In app.js - Update company information
const companyInfo = {
    name: "Your Company Name",
    logo: "path/to/your/logo.png",
    supportEmail: "support@yourcompany.com"
};
```

**Week Content:**
```javascript
// In week-content.js - Modify or add weeks
// Update training modules, assessments, resources
```

### Domain Configuration

**Custom Domain Setup:**

1. **DNS Configuration**
   ```
   Type: CNAME
   Name: training (or subdomain of choice)
   Value: your-site.netlify.app (or hosting provider URL)
   ```

2. **SSL Certificate**
   - Most modern hosting platforms provide automatic SSL
   - Verify HTTPS is working after domain setup

### Performance Optimization

**Service Worker Configuration:**
```javascript
// In sw.js - Update cache version and files
const CACHE_NAME = 'smt-app-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    // Add any additional assets
];
```

**CDN Integration:**
```html
<!-- Update external resource URLs if needed -->
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

## 🔒 Security Considerations

### Content Security Policy

Add to HTML head for enhanced security:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com; 
               script-src 'self' https://cdn.tailwindcss.com; 
               font-src 'self' https://cdnjs.cloudflare.com;">
```

### HTTPS Enforcement

Ensure all deployments use HTTPS:
```javascript
// Add to app.js if needed
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

## 📊 Analytics Integration

### Google Analytics (Optional)

Add to HTML head:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Custom Event Tracking

```javascript
// Add to app.js for progress tracking
function trackProgress(eventName, progress) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'custom_parameter': progress
        });
    }
}
```

## 🧪 Testing & Validation

### Pre-Deployment Testing

1. **Functionality Test**
   ```bash
   # Test all features locally
   # - Navigation between pages
   # - Quiz functionality
   # - Progress tracking
   # - Admin features
   # - Responsive design
   ```

2. **Browser Compatibility**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)
   - Mobile browsers

3. **Accessibility Testing**
   ```bash
   # Use browser dev tools
   # - Lighthouse accessibility audit
   # - Screen reader testing
   # - Keyboard navigation
   # - Color contrast verification
   ```

### Post-Deployment Validation

1. **Performance Check**
   - Run Lighthouse audit
   - Verify load times < 3 seconds
   - Check mobile performance
   - Test offline functionality

2. **Functionality Verification**
   - Complete user journey testing
   - Admin panel access
   - Data persistence
   - Cross-device synchronization

## 🔄 Maintenance & Updates

### Version Control

```bash
# Tag releases for easier management
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# Create update branches
git checkout -b feature/new-content
# Make changes
git commit -m "Add new week content"
git push origin feature/new-content
```

### Content Updates

1. **Weekly Content**
   - Update `week-content.js`
   - Test new modules
   - Deploy changes

2. **Assessment Updates**
   - Modify `quiz-system.js`
   - Validate question format
   - Test scoring system

3. **Resource Library**
   - Update resource links
   - Add new materials
   - Verify accessibility

### Backup Strategy

```bash
# Regular backups
git push origin main
# Export user data periodically
# Backup deployment configurations
```

## 🚨 Troubleshooting

### Common Deployment Issues

**1. Files Not Loading**
```
Issue: 404 errors for CSS/JS files
Solution: Verify file paths and case sensitivity
Check: Server configuration for static files
```

**2. Service Worker Issues**
```
Issue: App not working offline
Solution: Update service worker cache URLs
Check: Browser dev tools Application tab
```

**3. Mobile Display Problems**
```
Issue: Layout broken on mobile
Solution: Test viewport meta tag
Check: CSS media queries
```

**4. Permission Errors**
```
Issue: Local storage not working
Solution: Check browser privacy settings
Check: HTTPS deployment
```

### Debug Mode

Enable debug logging:
```javascript
// Add to app.js
const DEBUG_MODE = true;
if (DEBUG_MODE) {
    console.log('Debug mode enabled');
    // Additional logging
}
```

## 📞 Support Resources

### Hosting Platform Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

### Browser Developer Tools
- Chrome DevTools: F12 or Cmd+Opt+I
- Firefox Developer Tools: F12 or Cmd+Opt+I
- Safari Web Inspector: Cmd+Opt+I
- Edge DevTools: F12

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [WAVE Accessibility](https://wave.webaim.org/)
- [Can I Use](https://caniuse.com/)

---

## 🎯 Deployment Success Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Quizzes function and save scores
- [ ] Progress tracking persists
- [ ] Admin panel accessible (if needed)
- [ ] Mobile responsive design
- [ ] HTTPS enabled
- [ ] Service worker functioning
- [ ] Search functionality works
- [ ] All external resources load
- [ ] Font sizes adjustable
- [ ] Dark/light mode toggle works
- [ ] Accessibility features function
- [ ] Cross-browser compatibility confirmed

**Congratulations! Your Social Media Mastery training app is now live! 🚀**