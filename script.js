/* =====================
   SMOOTH SCROLL ACTIVE NAV
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

/* =====================
   MOBILE MENU TOGGLE
   ===================== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

/* =====================
   PORTFOLIO FILTER
   ===================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter gallery items
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || filterValue === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

/* =====================
   CONTACT FORM HANDLING
   ===================== */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        try {
            // In a real application, you would send this to a backend
            // For now, we'll simulate a successful submission
            console.log({
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString()
            });

            // Simulate API call
            await simulateFormSubmission({ name, email, subject, message });

            showMessage('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();

            // Optional: Send via email through a service
            // sendViaEmail(email, subject, message);
            
            // Optional: Send WhatsApp notification
            // sendWhatsAppNotification(name, message);

        } catch (error) {
            showMessage('Error sending message. Please try again.', 'error');
            console.error('Form submission error:', error);
        }
    });
}

/**
 * Show form message
 */
function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

/**
 * Simulate form submission (replace with actual backend API call)
 */
async function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            // In production, save to database here
            console.log('Form data saved:', data);
            resolve();
        }, 1000);
    });
}

/**
 * Alternative: Send via Resend email service
 * Uncomment and configure with your Resend API key
 */
/*
async function sendViaEmail(email, subject, message) {
    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_RESEND_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'noreply@yourdomain.com',
                to: email,
                subject: subject,
                html: `<p>${message}</p>`
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Email send error:', error);
    }
}
*/

/**
 * Alternative: Send WhatsApp notification
 * Uncomment and configure with your WhatsApp Business API
 */
/*
async function sendWhatsAppNotification(name, message) {
    try {
        const response = await fetch('YOUR_WHATSAPP_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_WHATSAPP_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: '62812345678',
                type: 'text',
                text: {
                    body: `New message from ${name}: ${message}`
                }
            })
        });
        return await response.json();
    } catch (error) {
        console.error('WhatsApp notification error:', error);
    }
}
*/

/* =====================
   SCROLL ANIMATIONS
   ===================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.gallery-item, .skill-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

/* =====================
   COUNTER ANIMATION FOR STATS
   ===================== */
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const stats = document.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

/* =====================
   DARK MODE TOGGLE (Optional)
   ===================== */
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (!darkModeToggle) return;

    const isDarkMode = localStorage.getItem('darkMode') !== 'false';
    
    if (!isDarkMode) {
        document.body.classList.add('light-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = localStorage.getItem('darkMode') !== 'false';
        localStorage.setItem('darkMode', !isCurrentlyDark);
        document.body.classList.toggle('light-mode');
    });
}

initDarkMode();

/* =====================
   SMOOTH SCROLL BEHAVIOR
   ===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* =====================
   LOAD MORE PORTFOLIO (Optional)
   ===================== */
function enablePortfolioLoadMore() {
    // Implementation for load more functionality
    // Add a "Load More" button in the portfolio section if needed
}

/* =====================
   LAZY LOAD IMAGES (Optional)
   ===================== */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

lazyLoadImages();

/* =====================
   UTILITY FUNCTIONS
   ===================== */

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(() => {
        console.error('Failed to copy');
    });
}

/**
 * Validate email
 */
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

/**
 * Format date
 */
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/* =====================
   ANALYTICS (Optional)
   ===================== */
function trackEvent(eventName, eventData) {
    // Implement Google Analytics or your preferred analytics platform
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Track portfolio filters
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('portfolio_filter', {
            filter: button.getAttribute('data-filter')
        });
    });
});

// Track contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('contact_form_submit', {
            timestamp: new Date().toISOString()
        });
    });
}

console.log('Portfolio site loaded successfully');
