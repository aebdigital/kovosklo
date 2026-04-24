import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom404() {
  return (
    <>
      <SEO
        title="Stránka nenájdená - 404"
        description="Požadovaná stránka neexistuje alebo bola presunutá."
        noindex
      />
      <section className="intro-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="intro-content" style={{ textAlign: 'center' }}>
            <span className="about-accent-line"></span>
            <h1>404 — Stránka nenájdená</h1>
            <p>Požadovaná stránka neexistuje alebo bola presunutá. Skúste sa vrátiť na domovskú stránku.</p>
            <div style={{ marginTop: 30, display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="cta-btn primary" style={{ background: 'var(--primary-color)', color: '#fff' }}>
                Domov
              </Link>
              <Link href="/referencie" className="cta-btn secondary" style={{ border: '2px solid var(--primary-color)', color: 'var(--primary-color)' }}>
                Referencie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
