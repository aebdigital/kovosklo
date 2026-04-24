import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { projectsData } from '../../lib/projects';

export async function getStaticPaths() {
  return {
    paths: Object.keys(projectsData).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectsData[params.slug] || null;
  return { props: { slug: params.slug, project } };
}

export default function ProjectDetail({ slug, project }) {
  const [lightbox, setLightbox] = useState(null);

  if (!project) {
    return (
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h1>Projekt nenájdený</h1>
            <p><Link href="/referencie">Späť na referencie</Link></p>
          </div>
        </div>
      </section>
    );
  }

  const heroImg = `/sources/referencie/${slug}/${project.images[0]}`;

  return (
    <>
      <Head>
        <title>{project.name} - Stavomontáže, Kovo-Sklo s.r.o.</title>
        <meta name="description" content={project.description} />
      </Head>

      <section
        className="project-detail-hero contact-hero"
        style={{ height: '50vh', position: 'relative', overflow: 'hidden' }}
      >
        <div className="contact-hero-bg">
          <img src={heroImg} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="contact-hero-content" style={{ position: 'relative', zIndex: 2, color: 'white', width: '100%' }}>
          <div className="container">
            <h1 className="project-detail-title">{project.name}</h1>
          </div>
        </div>
      </section>

      <section className="project-gallery" style={{ padding: '60px 0' }}>
        <div className="container">
          <div
            className="gallery-header"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}
          >
            <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 300, color: 'var(--primary-color)' }}>
              Fotogaléria projektu
            </h3>
            <Link
              href="/referencie"
              className="back-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 300 }}
            >
              ← Späť na referencie
            </Link>
          </div>
          <div
            className="gallery-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}
          >
            {project.images.map((img, idx) => (
              <div
                key={img}
                className="gallery-item"
                style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 8, cursor: 'pointer' }}
                onClick={() => setLightbox(`/sources/referencie/${slug}/${img}`)}
              >
                <img
                  src={`/sources/referencie/${slug}/${img}`}
                  alt={`${project.name} - ${idx + 1}`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox active" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox-content">
            <img src={lightbox} alt="Preview" className="lightbox-image loaded" />
          </div>
        </div>
      )}
    </>
  );
}
