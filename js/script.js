// ========================================
// Legion Roleplay - JavaScript
// ========================================

// ========================================
// LOAD HEADER & FOOTER
// ========================================

// Get base path for loading components
function getBasePath() {
    const path = window.location.pathname;
    const lastSlash = path.lastIndexOf('/');
    return path.substring(0, lastSlash + 1);
}

async function loadComponent(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element med id "${elementId}" blev ikke fundet`);
        return false;
    }
    
    try {
        const basePath = getBasePath();
        const fullPath = basePath + filePath;
        console.log(`Indlæser: ${fullPath}`);
        
        const response = await fetch(fullPath);
        if (response.ok) {
            const html = await response.text();
            element.innerHTML = html;
            console.log(`✓ ${filePath} indlæst succesfuldt`);
            return true;
        } else {
            console.error(`Fejl ved indlæsning af ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Kunne ikke indlæse ${filePath}:`, error);
    }
    return false;
}

async function initComponents() {
    console.log('Indlæser header og footer...');
    
    // Load header and footer
    const [headerLoaded, footerLoaded] = await Promise.all([
        loadComponent('header-placeholder', 'header.html'),
        loadComponent('footer-placeholder', 'footer.html')
    ]);
    
    if (!headerLoaded || !footerLoaded) {
        console.warn('BEMÆRK: Header eller footer kunne ikke indlæses.');
        console.warn('Sørg for at du kører siden via http://localhost/ og ikke åbner HTML filen direkte.');
    }
    
    // After loading, initialize all functionality
    initNavigation();
    initScrollAnimations();
    initFAQ();
    setActiveNavLink();
}

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!navbar) {
        console.log('Navbar ikke fundet endnu');
        return;
    }
    
    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ========================================
// SET ACTIVE NAV LINK
// ========================================

function setActiveNavLink() {
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .card, .faq-item, .job-card, .feature-card, .rule-list li').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// FAQ ACCORDION
// ========================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// LOGO HOVER EFFECT
// ========================================

function initLogoEffect() {
    const heroLogo = document.querySelector('.hero-logo');
    
    if (heroLogo) {
        heroLogo.addEventListener('mouseenter', function() {
            this.style.animation = 'logoSpin 0.8s ease-in-out';
        });
        
        heroLogo.addEventListener('animationend', function() {
            this.style.animation = 'logoFloat 4s ease-in-out infinite, logoGlow 3s ease-in-out infinite';
        });
    }
}

// ========================================
// COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// ========================================
// COPY TO CLIPBOARD
// ========================================

function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.dataset.copy;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Kopieret!';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('copied');
                }, 2000);
            });
        });
    });
}

// ========================================
// FORM VALIDATION
// ========================================

function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Udfyld venligst alle påkrævede felter.');
            }
        });
    });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

function initScrollTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ========================================
// INITIALIZE EVERYTHING
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer, then initialize everything
    initComponents().then(() => {
        initLogoEffect();
        initCounters();
        initCopyButtons();
        initForms();
        initScrollTop();
        
        console.log('%c Legion Roleplay ', 'background: linear-gradient(135deg, #ff8c00, #ff4444); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
        console.log('%c Velkommen til Legion Roleplay! 🎮', 'color: #ff8c00; font-size: 14px;');
    });
});
