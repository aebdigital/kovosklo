// Fallback components script - loads without ES6 modules
console.log('Loading fallback components...');

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFallbackComponents);
} else {
    initFallbackComponents();
}

function initFallbackComponents() {
    console.log('Initializing fallback components...');
    
    // Load header and footer
    loadHeaderFallback();
    loadFooterFallback();
    
    // Initialize mobile navigation
    initMobileNavigationFallback();
    
    // Initialize scroll effects
    initScrollEffectsFallback();
    
    // Initialize map scroll fix
    initMapScrollFix();
    
    // Initialize product carousel (mobile-only)
    initProductCarousel();
    
    // Initialize lightbox
    initLightboxFallback();
    
    console.log('Fallback components initialized');
}

function loadHeaderFallback() {
    console.log('Loading header fallback...');
    
    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/sluzba/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;
    
    let basePath, pagesPath;
    
    if (isInServicePage) {
        // We're in /pages/sluzba/
        basePath = '../../';  // To reach root for index
        pagesPath = '../';    // To reach /pages/ directory
    } else if (isInPagesDir) {
        // We're in /pages/
        basePath = '../';     // To reach root for index
        pagesPath = '';       // Other pages are in same directory (just filename)
    } else {
        // We're in root directory
        basePath = '';        // index is in same directory
        pagesPath = ''; // Use clean URLs without pages/ prefix
    }
    
    const navigationHTML = `
        <!-- Scroll Progress Indicator -->
        <div class="scroll-progress">
            <div class="scroll-progress-bar"></div>
        </div>

        <!-- Transparent Navigation -->
        <nav class="navbar navbar-transparent">
            <div class="nav-container">
                <ul class="nav-menu nav-menu-left">
                    <li><a href="/" class="nav-link">Domov</a></li>
                    <li class="nav-dropdown">
                        <a href="#" class="nav-link dropdown-trigger">Služby</a>
                        <div class="dropdown-menu">
                            <a href="/sluzba/ocelove-konstrukcie" class="dropdown-link">Oceľové konštrukcie</a>
                            <a href="/sluzba/zamocnicke-vyrobky" class="dropdown-link">Zámočnícke výrobky</a>
                            <a href="/sluzba/povrchova-uprava" class="dropdown-link">Povrchová úprava</a>
                            <a href="/sluzba/oplastenie-konstrukcii" class="dropdown-link">Oplášenie konštrukcií</a>
                            <a href="/sluzba/klampiarske-prace" class="dropdown-link">Klampiarske práce</a>
                            <a href="/sluzba/predaj-hutnickeho-materialu" class="dropdown-link">Predaj hutníckeho materiálu</a>
                        </div>
                    </li>
                    <li><a href="${pagesPath}o-nas" class="nav-link">O nás</a></li>
                </ul>
                <div class="nav-logo">
                    <a href="/" class="logo-link">
                        <img src="${basePath}sources/logo.webp" alt="Stavomontáže, Kovo-Sklo s.r.o." class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu nav-menu-right">
                    <li><a href="${pagesPath}referencie" class="nav-link">Referencie</a></li>
                    <li><a href="${pagesPath}kontakt" class="nav-link">Kontakt</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <!-- Mobile Sidebar -->
        <div class="mobile-overlay"></div>
        <div class="mobile-sidebar">
            <div class="mobile-sidebar-header">
                <div class="mobile-sidebar-logo">
                    <img src="${basePath}sources/logo.webp" alt="Stavomontáže, Kovo-Sklo">
                </div>
                <button class="mobile-close-btn">✕</button>
            </div>
            <ul class="mobile-nav-menu">
                <li><a href="/" class="mobile-nav-link">Domov</a></li>
                <li class="mobile-dropdown">
                    <span class="mobile-dropdown-trigger">Služby</span>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="/sluzba/ocelove-konstrukcie" class="mobile-nav-link">Oceľové konštrukcie</a></li>
                        <li><a href="/sluzba/zamocnicke-vyrobky" class="mobile-nav-link">Zámočnícke výrobky</a></li>
                        <li><a href="/sluzba/povrchova-uprava" class="mobile-nav-link">Povrchová úprava</a></li>
                        <li><a href="/sluzba/oplastenie-konstrukcii" class="mobile-nav-link">Oplášenie konštrukcií</a></li>
                        <li><a href="/sluzba/klampiarske-prace" class="mobile-nav-link">Klampiarske práce</a></li>
                        <li><a href="/sluzba/predaj-hutnickeho-materialu" class="mobile-nav-link">Predaj hutníckeho materiálu</a></li>
                    </ul>
                </li>
                <li><a href="${pagesPath}o-nas" class="mobile-nav-link">O nás</a></li>
                <li><a href="${pagesPath}referencie" class="mobile-nav-link">Referencie</a></li>
                <li><a href="${pagesPath}kontakt" class="mobile-nav-link">Kontakt</a></li>
            </ul>
        </div>
    `;
    
    const navigationContainer = document.getElementById('navigation-container');
    if (navigationContainer) {
        navigationContainer.innerHTML = navigationHTML;
        setActiveNavLink();
        
        // Logo should load immediately from the HTML template
        
        console.log('Header loaded successfully');
    } else {
        console.error('Navigation container not found');
    }
}

function loadFooterFallback() {
    console.log('Loading footer fallback...');

    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/sluzba/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;
    const isKontaktPage = currentPath.includes('kontakt');

    let basePath, pagesPath;
    
    if (isInServicePage) {
        // We're in /pages/sluzba/
        basePath = '../../';  // To reach root for index
        pagesPath = '../';    // To reach /pages/ directory
    } else if (isInPagesDir) {
        basePath = '../';
        pagesPath = '';
    } else {
        basePath = '';
        pagesPath = ''; // Use clean URLs without pages/ prefix
    }

    // No additional map sections needed - only show on contact page
    const mapSection = '';

    const footerHTML = `
        <footer id="footer" class="footer">
            <!-- Top Section -->
            <div class="footer-main">
                <!-- Logo Section -->
                <div class="footer-logo-section">
                    <img src="${basePath}sources/logo.webp" alt="Stavomontáže, Kovo-Sklo" class="footer-logo-image">
                </div>
                
                <!-- Navigation Column -->
                <div class="footer-navigation">
                    <h3 class="footer-column-title">Navigácia</h3>
                    <ul class="footer-nav-links">
                        <li><a href="/" class="footer-nav-link">Domov</a></li>
                        <li><a href="${pagesPath}o-nas" class="footer-nav-link">O nás</a></li>
                        <li><a href="${pagesPath}produkty-sluzby" class="footer-nav-link">Služby</a></li>
                        <li><a href="${pagesPath}kontakt" class="footer-nav-link">Kontakt</a></li>
                        <li><a href="${pagesPath}referencie" class="footer-nav-link">Portfólio</a></li>
                    </ul>
                </div>
                
                <!-- Services Column -->
                <div class="footer-services">
                    <h3 class="footer-column-title">Služby</h3>
                    <ul class="footer-services-links">
                        <li><a href="${pagesPath}sluzba/ocelove-konstrukcie" class="footer-service-link">Oceľové konštrukcie</a></li>
                        <li><a href="${pagesPath}sluzba/zamocnicke-vyrobky" class="footer-service-link">Zámočnícke výrobky</a></li>
                        <li><a href="${pagesPath}sluzba/povrchova-uprava" class="footer-service-link">Povrchová úprava</a></li>
                        <li><a href="${pagesPath}sluzba/oplastenie-konstrukcii" class="footer-service-link">Opláštenie konštrukcií</a></li>
                        <li><a href="${pagesPath}sluzba/klampiarske-prace" class="footer-service-link">Klampiarske práce</a></li>
                        <li><a href="${pagesPath}sluzba/predaj-hutnickeho-materialu" class="footer-service-link">Predaj hutníckeho materiálu</a></li>
                    </ul>
                </div>
                
                <!-- Contact Column -->
                <div class="footer-contact">
                    <h3 class="footer-column-title">Kontakt</h3>
                    <div class="footer-contact-links">
                        <a href="mailto:kovo-sklo@kovo-sklo.sk" class="footer-email">kovo-sklo@kovo-sklo.sk</a>
                        <a href="tel:+421484141504" class="footer-phone">048/ 414 15 04</a>
                    </div>
                </div>
            </div>
            
            <!-- Bottom Section -->
            <div class="footer-bottom">
                
                
                
                <!-- Legal Links -->
                <div class="footer-legal">
                    <span class="footer-legal-text">© 2025 Stavomontáže, Kovo-Sklo s.r.o.</span>
                    <a href="https://aebdigital.sk" target="_blank" class="footer-legal-link">Tvorba stránky - AEB Digital</a>
                    <a href="${basePath}ochrana-osobnych-udajov" class="footer-legal-link">Ochrana osobných údajov</a>
                    <a href="#" onclick="openCookieSettings(); return false;" class="footer-legal-link">Cookies</a>
                </div>
            </div>
        </footer>
        
        <!-- Cookie Consent Popup -->
        <div id="cookie-consent" class="cookie-consent">
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <div class="cookie-icon">🍪</div>
                    <div class="cookie-message">
                        Používame cookies na zlepšenie vašej používateľskej skúsenosti a na analýzu návštevnosti. Kliknutím na "Súhlasím" súhlasíte s používaním všetkých cookies.
                    </div>
                </div>
                <div class="cookie-actions">
                    <button class="cookie-btn settings" onclick="openCookieSettings()">Nastavenia</button>
                    <button class="cookie-btn accept" onclick="acceptAllCookies()">Súhlasím</button>
                </div>
            </div>
        </div>
        
        <!-- Cookie Settings Modal -->
        <div id="cookie-settings-modal" class="cookie-settings-modal">
            <div class="cookie-settings-content">
                <div class="cookie-settings-header">
                    <h2 class="cookie-settings-title">Nastavenia cookies</h2>
                    <button class="cookie-settings-close" onclick="closeCookieSettings()">&times;</button>
                </div>
                <div class="cookie-settings-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Nevyhnutné cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="necessary-cookies" checked disabled>
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Tieto cookies sú potrebné pre základnú funkčnosť stránky a nemožno ich vypnúť.
                        </p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Analytické cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="analytics-cookies">
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli zlepšiť.
                        </p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Marketingové cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="marketing-cookies">
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Používajú sa na personalizáciu reklám a meranie ich účinnosti.
                        </p>
                    </div>
                </div>
                <div class="cookie-settings-footer">
                    <button class="cookie-settings-btn save" onclick="saveCookieSettings()">Uložiť nastavenia</button>
                    <button class="cookie-settings-btn accept-all" onclick="acceptAllCookies()">Súhlasím so všetkými</button>
                </div>
            </div>
        </div>
        
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        console.log('Footer loaded successfully');
    } else {
        console.error('Footer container not found');
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    [...navLinks, ...mobileNavLinks].forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPage === '/' || currentPage.includes('index')) {
            if (href.includes('index')) {
                link.classList.add('active');
            }
        } else if (currentPage.includes(href.split('/').pop())) {
            link.classList.add('active');
        }
    });
}

function initMobileNavigationFallback() {
    document.addEventListener('click', function(e) {
        // Toggle mobile sidebar
        if (e.target.closest('.hamburger')) {
            const hamburger = e.target.closest('.hamburger');
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const navbar = document.querySelector('.navbar-transparent');
            
            hamburger.classList.toggle('active');
            mobileSidebar.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            
            if (hamburger.classList.contains('active')) {
                navbar.classList.add('mobile-menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
        
        // Handle mobile dropdown toggle
        if (e.target.classList.contains('mobile-dropdown-trigger')) {
            e.preventDefault();
            const dropdown = e.target.closest('.mobile-dropdown');
            dropdown.classList.toggle('active');
        }
        
        // Prevent dropdown trigger from navigating
        if (e.target.classList.contains('dropdown-trigger')) {
            e.preventDefault();
        }
        
        // Close mobile sidebar when clicking overlay, mobile link, or close button
        if (e.target.classList.contains('mobile-overlay') || e.target.classList.contains('mobile-nav-link') || e.target.classList.contains('mobile-close-btn')) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            if (mobileSidebar) mobileSidebar.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            if (navbar) navbar.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        }
    });
    
    // Close sidebar on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            if (mobileSidebar && mobileSidebar.classList.contains('active')) {
                mobileSidebar.classList.remove('active');
                if (mobileOverlay) mobileOverlay.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                if (navbar) navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    });
}

function initScrollEffectsFallback() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    
    // Set initial navbar state on page load
    updateNavbarBackgroundFallback();
    
    // Minimal scroll listener like template
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress (minimal calculation)
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = scrollPercentage + '%';
        }
        
        // Update navbar background (lightweight)
        updateNavbarBackgroundFallback();
    });
}

function updateNavbarBackgroundFallback() {
    const scrollPosition = window.scrollY;
    const transparentNavbar = document.querySelector('.navbar-transparent');
    const logoImage = document.querySelector('.logo-image');

    if (!transparentNavbar) return;
    
    // Logo should load immediately from the HTML template

    // 8vh trigger point for all pages
    const triggerPoint = window.innerHeight * 0.08;

    // Determine logo path based on current location
    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/sluzba/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;

    let basePath;
    if (isInServicePage) {
        basePath = '../../';
    } else if (isInPagesDir) {
        basePath = '../';
    } else {
        basePath = '';
    }

    if (scrollPosition > triggerPoint) {
        transparentNavbar.classList.add('scrolled');
    } else {
        transparentNavbar.classList.remove('scrolled');
    }
}

// Mobile-only product tabs carousel
function initProductCarousel() {
    // Only initialize on mobile
    if (window.innerWidth > 768) return;
    
    const container = document.querySelector('.product-tabs-container');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    
    if (!container || !leftArrow || !rightArrow) return;
    
    let currentIndex = 0;
    const totalTabs = 6;
    
    // Tab data for redirects
    const tabData = [
        { tab: 'dvere', text: 'Dvere' },
        { tab: 'zarubne', text: 'Zárubne' },
        { tab: 'drevo-schody', text: 'Drevené schody' },
        { tab: 'nabytok', text: 'Nábytok na mieru' },
        { tab: 'celoskla', text: 'Celosklá' },
        { tab: 'obklady', text: 'Obklady' }
    ];
    
    function updateCarousel() {
        const translateX = -(currentIndex * 16.666); // Move by 1/6 of container width
        container.style.transform = `translateX(${translateX}%)`;
        
        // Update active tab
        const tabs = document.querySelectorAll('.product-tab-hero');
        tabs.forEach((tab, index) => {
            tab.classList.toggle('active', index === currentIndex);
        });
    }
    
    function redirectToTab(index) {
        const currentPath = window.location.pathname;
        const isInPagesDir = currentPath.includes('/pages/');
        const basePath = isInPagesDir ? '' : 'pages/';
        
        window.location.href = `${basePath}produkty-sluzby?tab=${tabData[index].tab}`;
    }
    
    leftArrow.addEventListener('click', () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : totalTabs - 1;
        redirectToTab(newIndex);
    });
    
    rightArrow.addEventListener('click', () => {
        const newIndex = currentIndex < totalTabs - 1 ? currentIndex + 1 : 0;
        redirectToTab(newIndex);
    });
    
    // Initialize
    updateCarousel();
}

// Fix Google Maps scroll interference
function initMapScrollFix() {
    const mapContainers = document.querySelectorAll('.location-map-container');
    
    mapContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.add('active');
        });
        
        // Deactivate when clicking outside
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                container.classList.remove('active');
            }
        });
    });
}

// Cookie Consent Functions
function showCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        document.getElementById('cookie-consent').classList.add('show');
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('analytics-cookies', 'true');
    localStorage.setItem('marketing-cookies', 'true');
    document.getElementById('cookie-consent').classList.remove('show');
    closeCookieSettings();
}

let cookieScrollPosition = 0;

function openCookieSettings() {
    // Load current settings
    const analyticsEnabled = localStorage.getItem('analytics-cookies') === 'true';
    const marketingEnabled = localStorage.getItem('marketing-cookies') === 'true';

    document.getElementById('analytics-cookies').checked = analyticsEnabled;
    document.getElementById('marketing-cookies').checked = marketingEnabled;

    document.getElementById('cookie-settings-modal').classList.add('show');
    // Save scroll position and prevent scrolling
    cookieScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.top = `-${cookieScrollPosition}px`;
    document.body.classList.add('no-scroll');
}

function closeCookieSettings() {
    document.getElementById('cookie-settings-modal').classList.remove('show');
    // Restore scrolling and scroll position
    document.body.classList.remove('no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, cookieScrollPosition);
}

function saveCookieSettings() {
    const analyticsEnabled = document.getElementById('analytics-cookies').checked;
    const marketingEnabled = document.getElementById('marketing-cookies').checked;
    
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('analytics-cookies', analyticsEnabled.toString());
    localStorage.setItem('marketing-cookies', marketingEnabled.toString());
    
    document.getElementById('cookie-consent').classList.remove('show');
    closeCookieSettings();
}

// Close modal when clicking on backdrop
document.addEventListener('click', function(e) {
    if (e.target.id === 'cookie-settings-modal') {
        closeCookieSettings();
    }
});

// Show cookie consent on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showCookieConsent, 1000); // Show after 1 second
});

// Lightbox functionality fallback
function initLightboxFallback() {
    // Create lightbox HTML if it doesn't exist
    if (!document.getElementById('lightbox')) {
        const lightboxHTML = `
            <div class="lightbox" id="lightbox">
                <div class="lightbox-content">
                    <button class="lightbox-close" id="lightbox-close">&times;</button>
                    <button class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</button>
                    <img class="lightbox-image" id="lightbox-image" alt="">
                    <button class="lightbox-nav lightbox-next" id="lightbox-next">›</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }

    // Initialize global variables
    window.currentImageIndex = 0;
    window.visibleImages = [];
    
    // Update visible images function
    window.updateVisibleImages = function() {
        const allImages = document.querySelectorAll('img[onclick*="openLightbox"], .gallery img, .project-gallery img, .gallery1 img, .gallery2 img');
        window.visibleImages = Array.from(allImages).filter(img => {
            const rect = img.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
        });
    };

    // Open lightbox with smooth animation
    window.openLightbox = function(img) {
        window.updateVisibleImages();
        window.currentImageIndex = window.visibleImages.indexOf(img);

        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');

        lightboxImage.classList.remove('loaded');
        lightbox.style.display = 'flex';
        lightbox.classList.add('active');

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;

        lightboxImage.onload = function() {
            setTimeout(() => {
                lightboxImage.classList.add('loaded');
            }, 50);
        };

        document.body.style.overflow = 'hidden';
    };

    // Open lightbox by index
    window.openLightboxByIndex = function(index) {
        window.updateVisibleImages();
        if (window.visibleImages[index]) {
            window.openLightbox(window.visibleImages[index]);
        }
    };

    // Close lightbox
    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');

        lightbox.classList.remove('active');
        lightboxImage.classList.remove('loaded');

        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 600);

        document.body.style.overflow = 'auto';
    };

    // Next image
    window.nextImage = function() {
        if (window.visibleImages.length === 0) return;
        const lightboxImage = document.getElementById('lightbox-image');

        lightboxImage.classList.remove('loaded');

        setTimeout(() => {
            window.currentImageIndex = (window.currentImageIndex + 1) % window.visibleImages.length;
            const nextImg = window.visibleImages[window.currentImageIndex];
            lightboxImage.src = nextImg.src;
            lightboxImage.alt = nextImg.alt;

            lightboxImage.onload = function() {
                lightboxImage.classList.add('loaded');
            };
        }, 300);
    };

    // Previous image
    window.prevImage = function() {
        if (window.visibleImages.length === 0) return;
        const lightboxImage = document.getElementById('lightbox-image');

        lightboxImage.classList.remove('loaded');

        setTimeout(() => {
            window.currentImageIndex = (window.currentImageIndex - 1 + window.visibleImages.length) % window.visibleImages.length;
            const prevImg = window.visibleImages[window.currentImageIndex];
            lightboxImage.src = prevImg.src;
            lightboxImage.alt = prevImg.alt;

            lightboxImage.onload = function() {
                lightboxImage.classList.add('loaded');
            };
        }, 300);
    };

    // Event listeners
    document.addEventListener('click', function(e) {
        if (e.target.id === 'lightbox-close') {
            window.closeLightbox();
        }
        
        if (e.target.id === 'lightbox-prev') {
            window.prevImage();
        }
        
        if (e.target.id === 'lightbox-next') {
            window.nextImage();
        }
        
        if (e.target.id === 'lightbox') {
            window.closeLightbox();
        }
        
        if (e.target.matches('.gallery img, .project-gallery img, .gallery1 img, .gallery2 img')) {
            e.preventDefault();
            window.openLightbox(e.target);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            window.closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            window.prevImage();
        } else if (e.key === 'ArrowRight') {
            window.nextImage();
        }
    });

    // Auto-initialize gallery images
    setTimeout(() => {
        const galleryImages = document.querySelectorAll('.gallery img, .project-gallery img, .gallery1 img, .gallery2 img');
        galleryImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.title = 'Kliknite pre zväčšenie';
        });
    }, 100);
}

// Minimal fallback - no complex animations that could conflict
console.log('Fallback: Using minimal approach like template');