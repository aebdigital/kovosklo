import Link from 'next/link';
import { useState } from 'react';
import { services, serviceLinks } from '../../lib/services';
import SEO from '../../components/SEO';
import { breadcrumbJsonLd, serviceJsonLd } from '../../lib/seo';

export async function getStaticPaths() {
  return {
    paths: Object.keys(services).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const svc = services[params.slug];
  return { props: { slug: params.slug, svc } };
}

function Block({ b }) {
  if (b.type === 'h2') return <h2>{b.text}</h2>;
  if (b.type === 'p') return <p>{b.text}</p>;
  if (b.type === 'ul') {
    return (
      <ul className="service-list">
        {b.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (b.type === 'twoColumns') {
    return (
      <div className="two-column-lists">
        <div className="column-left">
          <h2>{b.left.title}</h2>
          <ul className="service-list">
            {b.left.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="column-right">
          <h2>{b.right.title}</h2>
          <ul className="service-list">
            {b.right.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </div>
    );
  }
  return null;
}

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <SEO
        title={svc.title}
        description={svc.lead}
        keywords={`${svc.title.toLowerCase()}, Stavomontáže, Kovo-Sklo, Banská Bystrica, oceľové konštrukcie`}
        image={svc.heroImg}
        jsonLd={[
          serviceJsonLd({ name: svc.title, description: svc.lead, path: `/sluzba/${slug}` }),
          breadcrumbJsonLd([
            { name: 'Domov', path: '/' },
            { name: 'Služby', path: '/sluzba/ocelove-konstrukcie' },
            { name: svc.title, path: `/sluzba/${slug}` },
          ]),
        ]}
      />

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <span className="about-accent-line"></span>
            <h1>{svc.title}</h1>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="service-layout">
            <div className="services-sidebar">
              <h3 className="sidebar-title" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Všetky služby
                <span className={`dropdown-arrow ${isMenuOpen ? 'open' : ''}`}>▼</span>
              </h3>
              <div className={`services-list ${isMenuOpen ? 'menu-open' : ''}`}>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/sluzba/${s.slug}`}
                    className={`service-item ${s.slug === slug ? 'active' : ''} ${s.slug !== slug && !isMenuOpen ? 'hidden-on-mobile' : ''}`}
                    style={{ backgroundImage: `url('${s.bg}')` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="service-name">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="service-detail">
              <div className="service-content-with-image">
                <div className="service-text-left">
                  <p className="service-lead">{svc.lead}</p>
                  {svc.leadBlocks.map((b, i) => <Block key={i} b={b} />)}
                </div>
                <div className="service-image-right">
                  <img src={svc.heroImg} alt={svc.imgAlt} />
                </div>
              </div>

              {svc.fullBlocks.length > 0 && (
                <div className="service-content-full">
                  {svc.fullBlocks.map((b, i) => <Block key={i} b={b} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{svc.cta}</h2>
            <p>Kontaktujte nás a dohodneme si stretnutie pre konzultáciu Vašich potrieb.</p>
            <Link href="/kontakt" className="cta-btn">Kontaktovať nás</Link>
          </div>
        </div>
      </section>
    </>
  );
}
