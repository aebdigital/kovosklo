import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path) => router.pathname === path;

  const serviceLinks = [
    { href: '/sluzba/ocelove-konstrukcie', label: 'Oceľové konštrukcie' },
    { href: '/sluzba/zamocnicke-vyrobky', label: 'Zámočnícke výrobky' },
    { href: '/sluzba/povrchova-uprava', label: 'Povrchová úprava' },
    { href: '/sluzba/oplastenie-konstrukcii', label: 'Opláštenie konštrukcií' },
    { href: '/sluzba/klampiarske-prace', label: 'Klampiarske práce' },
    { href: '/sluzba/predaj-hutnickeho-materialu', label: 'Predaj hutníckeho materiálu' },
  ];

  return (
    <>
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ height: `${scrollPercent}%` }} />
      </div>

      <nav className={`navbar navbar-transparent scrolled ${mobileOpen ? 'mobile-menu-open' : ''}`}>
        <div className="nav-container">
          <ul className="nav-menu nav-menu-left">
            <li>
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Domov</Link>
            </li>
            <li className="nav-dropdown">
              <a href="#" className="nav-link dropdown-trigger" onClick={(e) => e.preventDefault()}>Služby</a>
              <div className="dropdown-menu">
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} className="dropdown-link">{s.label}</Link>
                ))}
              </div>
            </li>
            <li>
              <Link href="/o-nas" className={`nav-link ${isActive('/o-nas') ? 'active' : ''}`}>O nás</Link>
            </li>
          </ul>
          <div className="nav-logo">
            <Link href="/" className="logo-link">
              <img src="/sources/logo.webp" alt="Stavomontáže, Kovo-Sklo s.r.o." className="logo-image" />
            </Link>
          </div>
          <ul className="nav-menu nav-menu-right">
            <li>
              <Link href="/referencie" className={`nav-link ${isActive('/referencie') ? 'active' : ''}`}>Referencie</Link>
            </li>
            <li>
              <Link href="/kontakt" className={`nav-link ${isActive('/kontakt') ? 'active' : ''}`}>Kontakt</Link>
            </li>
          </ul>
          <button
            type="button"
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setMobileOpen((v) => !v); }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{ background: 'none', border: 'none', padding: '10px', touchAction: 'manipulation' }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${mobileOpen ? 'active' : ''}`} onClick={closeMobile}></div>
      <div className={`mobile-sidebar ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-logo">
            <img src="/sources/logo.webp" alt="Stavomontáže, Kovo-Sklo" />
          </div>
          <button className="mobile-close-btn" onClick={closeMobile}>✕</button>
        </div>
        <ul className="mobile-nav-menu">
          <li>
            <Link href="/" className="mobile-nav-link" onClick={closeMobile}>Domov</Link>
          </li>
          <li className={`mobile-dropdown ${servicesOpen ? 'active' : ''}`}>
            <span className="mobile-dropdown-trigger" onClick={() => setServicesOpen(!servicesOpen)}>Služby</span>
            <ul className="mobile-dropdown-menu">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="mobile-nav-link" onClick={closeMobile}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/o-nas" className="mobile-nav-link" onClick={closeMobile}>O nás</Link>
          </li>
          <li>
            <Link href="/referencie" className="mobile-nav-link" onClick={closeMobile}>Referencie</Link>
          </li>
          <li>
            <Link href="/kontakt" className="mobile-nav-link" onClick={closeMobile}>Kontakt</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
