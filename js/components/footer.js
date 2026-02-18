// Footer Component - Footer content and privacy functionality

export function initFooter() {
    loadFooter();
}

function ensureFooterCSSLoaded() {
    // Check if footer CSS is already loaded
    const existingLink = document.querySelector('link[href*="footer.css"]');
    if (existingLink) return;
    
    // Determine CSS path based on current location
    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/sluzba/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;
    
    let cssPath;
    if (isInServicePage) {
        cssPath = 'css/components/footer.css?v=14.0';
    } else if (isInPagesDir) {
        cssPath = '../css/components/footer.css?v=14.0';
    } else {
        cssPath = 'css/components/footer.css?v=14.0';
    }
    
    // Create and inject CSS link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);
}

function loadFooter() {
    // Ensure footer CSS is loaded
    ensureFooterCSSLoaded();
    
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
        // We're in /pages/ - stay in pages directory for other pages
        basePath = '../';     // To reach root for index.html
        pagesPath = '';       // Other pages are in same directory
    } else {
        // We're in root directory
        basePath = '';
        pagesPath = ''; // Use clean URLs without pages/ prefix
    }
    
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
                    <ul class="footer-nav-links">
                        <li><a href="/" class="footer-nav-link">DOMOV</a></li>
                        <li><a href="${basePath}o-nas" class="footer-nav-link">O NÁS</a></li>
                        <li><a href="${basePath}produkty-sluzby" class="footer-nav-link">SLUŽBY</a></li>
                        <li><a href="${basePath}kontakt" class="footer-nav-link">KONTAKT</a></li>
                        <li><a href="${basePath}referencie" class="footer-nav-link">PORTFÓLIO</a></li>
                    </ul>
                </div>
                
                <!-- Services Column -->
                <div class="footer-services">
                    <ul class="footer-services-links">
                        <li><a href="/sluzba/ocelove-konstrukcie" class="footer-service-link">OCEĽOVÉ KONŠTRUKCIE</a></li>
                        <li><a href="/sluzba/zamocnicke-vyrobky" class="footer-service-link">ZÁMOČNÍCKE VÝROBKY</a></li>
                        <li><a href="/sluzba/povrchova-uprava" class="footer-service-link">POVRCHOVÁ ÚPRAVA</a></li>
                        <li><a href="/sluzba/oplastenie-konstrukcii" class="footer-service-link">OPLÁŠTENIE KONŠTRUKCIÍ</a></li>
                        <li><a href="/sluzba/klampiarske-prace" class="footer-service-link">KLAMPIARSKE PRÁCE</a></li>
                        <li><a href="/sluzba/predaj-hutnickeho-materialu" class="footer-service-link">PREDAJ HUTNÍCKEHO MATERIÁLU</a></li>
                    </ul>
                </div>
                
                <!-- Contact Column -->
                <div class="footer-contact">
                    <div class="footer-contact-links">
                        <a href="mailto:kovo-sklo@kovo-sklo.sk" class="footer-email">KOVO-SKLO@KOVO-SKLO.SK</a>
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
                    <span class="cookie-icon">🍪</span>
                    <div class="cookie-message">
                        Táto webová stránka používa cookies na zlepšenie vášho zážitku. Súhlasíte s používaním všetkých cookies?
                    </div>
                </div>
                <div class="cookie-actions">
                    <button class="cookie-btn settings" onclick="openCookieSettings()">Nastavenia</button>
                    <button class="cookie-btn accept" onclick="acceptAllCookies()">Prijať všetky</button>
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
        // Initialize cookie consent after footer is loaded
        initCookieConsent();
        
        // Add modal close functionality
        document.addEventListener('click', function(e) {
            if (e.target.id === 'cookie-settings-modal') {
                window.closeCookieSettings();
            }
        });
    }
}

function initCookieConsent() {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        // Show cookie consent after 1 second
        setTimeout(() => {
            const consentPopup = document.getElementById('cookie-consent');
            if (consentPopup) {
                consentPopup.classList.add('show');
            }
        }, 1000);
    }
}

// Cookie consent functions
window.acceptAllCookies = function() {
    localStorage.setItem('cookieConsent', 'all');
    hideCookieConsent();
};

window.openCookieSettings = function() {
    // Load current settings
    const analyticsEnabled = localStorage.getItem('analytics-cookies') === 'true';
    const marketingEnabled = localStorage.getItem('marketing-cookies') === 'true';

    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const marketingCheckbox = document.getElementById('marketing-cookies');
    
    if (analyticsCheckbox) analyticsCheckbox.checked = analyticsEnabled;
    if (marketingCheckbox) marketingCheckbox.checked = marketingEnabled;

    // Close consent popup
    hideCookieConsent();
    
    // Open cookie settings modal
    const modal = document.getElementById('cookie-settings-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
};

window.closeCookieSettings = function() {
    const modal = document.getElementById('cookie-settings-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
};

window.saveCookieSettings = function() {
    const analyticsEnabled = document.getElementById('analytics-cookies').checked;
    const marketingEnabled = document.getElementById('marketing-cookies').checked;
    
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('analytics-cookies', analyticsEnabled.toString());
    localStorage.setItem('marketing-cookies', marketingEnabled.toString());
    
    hideCookieConsent();
    closeCookieSettings();
};

function hideCookieConsent() {
    const consentPopup = document.getElementById('cookie-consent');
    if (consentPopup) {
        consentPopup.classList.remove('show');
    }
}

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.loadFooter = loadFooter;
    window.initCookieConsent = initCookieConsent;
    window.ensureFooterCSSLoaded = ensureFooterCSSLoaded;
}