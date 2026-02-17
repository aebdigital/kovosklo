// Lightbox Component - Universal image gallery with smooth animations
export function initLightbox() {
    createLightboxHTML();
    initLightboxFunctionality();
}

function createLightboxHTML() {
    // Only create if lightbox doesn't exist
    if (document.getElementById('lightbox')) return;
    
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

function initLightboxFunctionality() {
    // Initialize global variables
    window.currentImageIndex = 0;
    window.visibleImages = [];
    
    // Update visible images function
    window.updateVisibleImages = function() {
        // Get all clickable images that should open in lightbox
        const allImages = document.querySelectorAll('img[onclick*="openLightbox"], .gallery img, .project-gallery img, .gallery1 img, .gallery2 img');
        window.visibleImages = Array.from(allImages).filter(img => {
            const rect = img.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
        });
    };

    // Open lightbox with smooth animation
    window.openLightbox = function(img) {
        updateVisibleImages();
        window.currentImageIndex = window.visibleImages.indexOf(img);

        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');

        // Reset image opacity for transition
        lightboxImage.classList.remove('loaded');

        // Show lightbox
        lightbox.style.display = 'flex';
        lightbox.classList.add('active');

        // Load image
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;

        // Fade in image once loaded
        lightboxImage.onload = function() {
            setTimeout(() => {
                lightboxImage.classList.add('loaded');
            }, 50);
        };

        document.body.style.overflow = 'hidden';
    };

    // Open lightbox by index (for existing onclick handlers)
    window.openLightboxByIndex = function(index) {
        updateVisibleImages();
        if (window.visibleImages[index]) {
            openLightbox(window.visibleImages[index]);
        }
    };

    // Close lightbox with smooth animation
    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');

        // Fade out
        lightbox.classList.remove('active');
        lightboxImage.classList.remove('loaded');

        // Hide after transition
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 600);

        document.body.style.overflow = 'auto';
    };

    // Next image with smooth transition
    window.nextImage = function() {
        if (window.visibleImages.length === 0) return;
        const lightboxImage = document.getElementById('lightbox-image');

        // Fade out current image
        lightboxImage.classList.remove('loaded');

        // Change to next image after fade
        setTimeout(() => {
            window.currentImageIndex = (window.currentImageIndex + 1) % window.visibleImages.length;
            const nextImg = window.visibleImages[window.currentImageIndex];
            lightboxImage.src = nextImg.src;
            lightboxImage.alt = nextImg.alt;

            // Fade in new image
            lightboxImage.onload = function() {
                lightboxImage.classList.add('loaded');
            };
        }, 300);
    };

    // Previous image with smooth transition
    window.prevImage = function() {
        if (window.visibleImages.length === 0) return;
        const lightboxImage = document.getElementById('lightbox-image');

        // Fade out current image
        lightboxImage.classList.remove('loaded');

        // Change to previous image after fade
        setTimeout(() => {
            window.currentImageIndex = (window.currentImageIndex - 1 + window.visibleImages.length) % window.visibleImages.length;
            const prevImg = window.visibleImages[window.currentImageIndex];
            lightboxImage.src = prevImg.src;
            lightboxImage.alt = prevImg.alt;

            // Fade in new image
            lightboxImage.onload = function() {
                lightboxImage.classList.add('loaded');
            };
        }, 300);
    };

    // Event listeners
    document.addEventListener('click', function(e) {
        // Close button
        if (e.target.id === 'lightbox-close') {
            closeLightbox();
        }
        
        // Navigation buttons
        if (e.target.id === 'lightbox-prev') {
            prevImage();
        }
        
        if (e.target.id === 'lightbox-next') {
            nextImage();
        }
        
        // Click outside image to close
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
        
        // Auto-bind gallery images
        if (e.target.matches('.gallery img, .project-gallery img, .gallery1 img, .gallery2 img')) {
            e.preventDefault();
            openLightbox(e.target);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
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

// Make functions globally available for fallback and existing code
if (typeof window !== 'undefined') {
    window.initLightbox = initLightbox;
    window.createLightboxHTML = createLightboxHTML;
    window.initLightboxFunctionality = initLightboxFunctionality;
}