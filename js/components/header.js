// Header Component - Navigation functionality

export function initHeader() {
    loadNavigation();
    initMobileNavigation();
    initScrollEffects();
    initNavigationListeners();
}

// Make functions globally available for fallback - after function declarations

function loadNavigation() {
    // Determine current location and set appropriate paths
    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/sluzba/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;
    
    // Set navigation paths based on current location
    let basePath, pagesPath;
    
    if (isInServicePage) {
        // We're in /sluzba/ (which maps to /pages/service-page/)
        basePath = '../';  // To reach root from /sluzba/
        pagesPath = '../';    // Use basePath for clean URLs
    } else if (isInPagesDir) {
        // We're in /pages/
        basePath = '../';     // To reach root for index        pagesPath = '';       // Other pages are in same directory (just filename.html)
    } else {
        // We're in root directory
        basePath = '';        // index.html is in same directory
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
                    <li><a href="${basePath}o-nas" class="nav-link">O nás</a></li>
                </ul>
                <div class="nav-logo">
                    <a href="/" class="logo-link">
                        <img src="${basePath}sources/logo.webp" alt="Stavomontáže, Kovo-Sklo s.r.o." class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu nav-menu-right">
                    <li><a href="${basePath}referencie" class="nav-link">Referencie</a></li>
                    <li><a href="${basePath}kontakt" class="nav-link">Kontakt</a></li>
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
                <li><a href="${basePath}o-nas" class="mobile-nav-link">O nás</a></li>
                <li><a href="${basePath}referencie" class="mobile-nav-link">Referencie</a></li>
                <li><a href="${basePath}kontakt" class="mobile-nav-link">Kontakt</a></li>
            </ul>
        </div>
    `;
    
    const navigationContainer = document.getElementById('navigation-container');
    if (navigationContainer) {
        navigationContainer.innerHTML = navigationHTML;
        setActiveNavLink();
        
        // Logo should load immediately from the HTML template
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    [...navLinks, ...mobileNavLinks].forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPage === '/' || currentPage.includes('index.html')) {
            if (href.includes('index.html')) {
                link.classList.add('active');
            }
        } else if (currentPage.includes(href.split('/').pop())) {
            link.classList.add('active');
        }
    });
}

function initMobileNavigation() {
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
            
            mobileSidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.classList.remove('mobile-menu-open');
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
                mobileOverlay.classList.remove('active');
                hamburger.classList.remove('active');
                navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    });
}

function initScrollEffects() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const transparentNavbar = document.querySelector('.navbar-transparent');
    
    // Set initial navbar state on page load
    updateNavbarBackground();
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = `${scrollPercentage}%`;
        }
        
        // Update navbar background
        updateNavbarBackground();
    });
}

function updateNavbarBackground() {
    const scrollPosition = window.scrollY;
    const transparentNavbar = document.querySelector('.navbar-transparent');

    if (!transparentNavbar) return;

    // Always keep the navbar with white background
    transparentNavbar.classList.add('scrolled');
}

function initNavigationListeners() {
    // Smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.loadNavigation = loadNavigation;
    window.initMobileNavigation = initMobileNavigation;
    window.initScrollEffects = initScrollEffects;
    window.initNavigationListeners = initNavigationListeners;
    window.updateNavbarBackground = updateNavbarBackground;
}