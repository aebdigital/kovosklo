import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Animations() {
  const router = useRouter();

  useEffect(() => {
    let lenis;
    let rafId;
    let cleanups = [];
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // Hero title
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.2 }
        );
      }

      // Hero subtitle
      const heroSubtitle = document.querySelector('.hero-subtitle');
      if (heroSubtitle) {
        gsap.fromTo(
          heroSubtitle,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.6 }
        );
      }

      // Hero stats scale-in
      const statItems = document.querySelectorAll('.stat-item');
      if (statItems.length) {
        gsap.fromTo(
          statItems,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.2,
            delay: 0.8,
          }
        );
      }

      // Generic fade-in-up for every section
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Counter animation on .stat-number
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((counter) => {
        const textNode = counter.childNodes[0];
        if (textNode && textNode.textContent) {
          const target = parseInt(textNode.textContent, 10) || 100;
          const obj = { value: 0 };
          textNode.textContent = '0';
          gsap.to(obj, {
            value: target,
            duration: 2,
            delay: 0.5,
            ease: 'power2.out',
            onUpdate: () => {
              textNode.textContent = Math.round(obj.value);
            },
          });
        }
      });

      // CTA hover scale
      const ctaButtons = document.querySelectorAll('.cta-btn');
      ctaButtons.forEach((button) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        const onEnter = () => tl.play();
        const onLeave = () => tl.reverse();
        button.addEventListener('mouseenter', onEnter);
        button.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          button.removeEventListener('mouseenter', onEnter);
          button.removeEventListener('mouseleave', onLeave);
        });
      });

      // Hero background parallax — tied to Lenis scroll for smoothness
      const heroSection = document.querySelector('.hero');
      const heroImages = document.querySelectorAll('.hero-bg-image');
      if (heroSection && heroImages.length) {
        const onLenisScroll = ({ scroll }) => {
          if (scroll > heroSection.offsetHeight + window.innerHeight) return;
          const y = scroll * 0.35;
          heroImages.forEach((img) => {
            img.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
          });
        };
        lenis.on('scroll', onLenisScroll);
        // Initial call
        onLenisScroll({ scroll: window.scrollY || 0 });
        cleanups.push(() => lenis.off && lenis.off('scroll', onLenisScroll));
      }

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      cleanups.push(() => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
      if (lenis) lenis.destroy();
    };
  }, [router.asPath]);

  return null;
}
