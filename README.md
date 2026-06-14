# Professional Portfolio Website - Ismi Anjar Farida

A modern, dark-themed professional portfolio website for Information Science professionals with BNSP certification in Office Administration.

## 🎨 Features

### Design
- **Dark Professional Theme**: Modern minimalist dark design with cyan accent colors
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Modern UI**: Smooth animations, gradients, and interactive elements
- **Glass Morphism**: Subtle backdrop blur effects for depth

### Sections

#### 1. **Hero Section**
- Eye-catching introduction with profile image
- Call-to-action buttons
- CV download functionality
- Social media links

#### 2. **About Section**
- Professional profile overview
- Key competencies grid
- Statistics (years of experience, projects completed, etc.)
- Skill items with icons

#### 3. **Portfolio Gallery**
- **Categories**:
  - Project Management
  - Documentation
  - Training & Development
  - Digital Solutions
- **Interactive Filters**: Filter gallery by category
- **Image Hover Effects**: Smooth zoom and overlay transitions
- **Responsive Grid**: Adapts to screen size

#### 4. **Contact Section**
- **Contact Form**: Name, email, subject, message fields
- **Contact Information**: Email, phone, location
- **Quick Contact Options**:
  - WhatsApp integration
  - Direct email
  - LinkedIn profile link
- **Form Validation**: Client-side validation with user feedback

#### 5. **Navigation**
- Sticky navigation bar
- Smooth scroll to sections
- Mobile hamburger menu
- Active link highlighting

#### 6. **Footer**
- Footer sections with links
- Social media links
- Copyright information

## 📁 File Structure

```
portfolio/
├── index.html           # Main HTML file
├── styles.css          # CSS stylesheets with design system
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── cv.pdf             # CV file (to be added)
```

## 🚀 Getting Started

### Installation
1. Clone the repository
2. Place all files in your web server directory
3. Update placeholder content with your actual information

### Configuration

#### Personal Information
Edit these in `index.html`:
- Name and title
- Profile image URL
- About description
- Contact information (email, phone, location)
- Social media links

#### Portfolio Items
Add or edit portfolio items in the gallery section of `index.html`:
```html
<div class="gallery-item" data-category="project-management">
    <div class="gallery-image">
        <img src="YOUR_IMAGE_URL" alt="Project Name">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>Project Name</h3>
                <p>Category | Description</p>
            </div>
        </div>
    </div>
</div>
```

#### Contact Form
Configure contact form handling in `script.js`:

**Option 1: Save to Database**
```javascript
// Replace simulateFormSubmission with your backend API call
await fetch('YOUR_BACKEND_API', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

**Option 2: Send via Resend Email Service**
Uncomment and configure the `sendViaEmail` function in `script.js`:
```javascript
// Get your API key from https://resend.com
const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_RESEND_API_KEY'
    }
});
```

**Option 3: WhatsApp Integration**
Uncomment and configure the `sendWhatsAppNotification` function in `script.js`

## 🎯 Portfolio Categories

The portfolio uses the following categories:
1. **Project Management** - Organizational optimization, strategic planning
2. **Documentation** - Process documentation, SOPs
3. **Training & Development** - Staff training, leadership workshops
4. **Digital Solutions** - Digital transformation, business intelligence

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Design System

### Colors
- **Primary Background**: `#0f0f0f`
- **Secondary Background**: `#1a1a1a`
- **Accent Primary**: `#00d4ff` (Cyan)
- **Accent Secondary**: `#00a8cc`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b0b0b0`

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Primary Font Weight**: 400-700
- **Heading Size**: 1.5rem - 3.5rem

### Spacing
- **xs**: 0.5rem
- **sm**: 1rem
- **md**: 1.5rem
- **lg**: 2rem
- **xl**: 3rem
- **xxl**: 4rem

## ✨ Features

### JavaScript Functionality
- ✅ Smooth scroll navigation
- ✅ Active nav link highlighting
- ✅ Portfolio filtering system
- ✅ Contact form validation
- ✅ Scroll animations
- ✅ Counter animations for statistics
- ✅ Mobile menu toggle
- ✅ Lazy image loading
- ✅ Analytics tracking (optional)

## 🔧 Customization

### Change Accent Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-accent-primary: #00d4ff;
    --color-accent-secondary: #00a8cc;
}
```

### Modify Animations
Adjust animation speeds:
```css
--transition-fast: 0.2s ease-in-out;
--transition-normal: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

### Add Custom Fonts
Link custom fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

## 🔐 Security Considerations

1. **Form Validation**: Always validate on both client and server side
2. **CSRF Protection**: Implement CSRF tokens if using a backend
3. **Rate Limiting**: Limit contact form submissions per IP
4. **Data Privacy**: Ensure GDPR/privacy compliance for contact data
5. **HTTPS**: Always serve over HTTPS
6. **Environment Variables**: Store API keys in environment variables, never in frontend code

## 📈 Performance Optimization

- Minify CSS and JavaScript in production
- Optimize images (use WebP format)
- Implement lazy loading for images
- Use CSS Grid/Flexbox for responsive layouts
- Cache static assets

## 🌐 Deployment

### GitHub Pages
1. Push repository to GitHub
2. Enable GitHub Pages in repository settings
3. Select branch to deploy (main)

### Netlify
1. Connect GitHub repository
2. Set build command: (leave empty for static sites)
3. Set publish directory: `./`

### Vercel
1. Import project from GitHub
2. Deploy automatically

## 📞 Contact Options

### WhatsApp Integration
Update the WhatsApp link in `index.html`:
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER">WhatsApp</a>
```

### Email Configuration
Update email addresses throughout the site:
- Email link: `mailto:your-email@example.com`
- Contact form receiver email

## 🔗 External Resources

- **Unsplash Images**: https://unsplash.com
- **FontAwesome Icons**: https://fontawesome.com
- **Google Fonts**: https://fonts.google.com
- **Resend Email**: https://resend.com

## 📝 Version History

- **v1.0** (2026-06-14): Initial release
  - Complete HTML structure
  - Dark professional theme
  - Portfolio gallery with filters
  - Contact form
  - Responsive design

## 📄 License

This project is personal portfolio and can be modified for your use.

## 👤 Author

**Ismi Anjar Farida**
- Information Science Professional
- BNSP Certified Office Administrator
- Email: ismi@example.com
- Location: Jakarta, Indonesia

---

**Last Updated**: June 14, 2026
