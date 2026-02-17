// Main JavaScript file - Initialize all components
import { initHeader } from './components/header.js?v=16.0';
import { initFooter } from './components/footer.js?v=16.0';
import { initSliders } from './components/slider.js?v=16.0';
import { initLightbox } from './components/lightbox.js?v=16.0';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Main.js ES6 modules loaded successfully');

    // Check if fallback components already loaded
    if (document.querySelector('.navbar-transparent')) {
        console.log('Fallback components already loaded, replacing with ES6 modules');
        // Force reload header and footer with ES6 modules
        initHeader();
        initFooter();
        initEnhancements();
        return;
    }

    console.log('Available functions:', { initHeader, initFooter });

    try {
        // Core components with error handling
        initHeader();
        console.log('Header initialized successfully');
    } catch (error) {
        console.error('Failed to initialize header:', error);
    }

    try {
        initFooter();
        console.log('Footer initialized successfully');
    } catch (error) {
        console.error('Failed to initialize footer:', error);
    }

    try {
        // Feature components
        initSliders();
        console.log('Sliders initialized successfully');
    } catch (error) {
        console.error('Failed to initialize sliders:', error);
    }

    try {
        initLightbox();
        console.log('Lightbox initialized successfully');
    } catch (error) {
        console.error('Failed to initialize lightbox:', error);
    }

    // Additional functionality
    initUtilities();

    console.log('All components initialized');
});

// Enhancement function when fallback components are already loaded
function initEnhancements() {
    try {
        initSliders();
        console.log('Sliders enhanced successfully');
    } catch (error) {
        console.error('Failed to enhance sliders:', error);
    }

    try {
        initLightbox();
        console.log('Lightbox enhanced successfully');
    } catch (error) {
        console.error('Failed to enhance lightbox:', error);
    }

    // Additional functionality
    initUtilities();

    console.log('All enhancements initialized');
}


// Utility functions
function initUtilities() {
    // External link handling
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[target="_blank"]');
        if (link) {
            link.rel = 'noopener noreferrer';
        }
    });

    // Image lazy loading fallback
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
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
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}
