import Head from 'next/head';
import Link from 'next/link';
import { services, serviceLinks } from '../../lib/services';

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

export default function ServicePage({ slug, svc }) {
  return (
    <>
      <Head>
        <title>{svc.title} - Stavomontáže, Kovo-Sklo s.r.o.</title>
        <meta name="description" content={svc.lead} />
      </Head>

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
              <h3>Všetky služby</h3>
              <div className="services-list">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/sluzba/${s.slug}`}
                    className={`service-item ${s.slug === slug ? 'active' : ''}`}
                    style={{ backgroundImage: `url('${s.bg}')` }}
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
