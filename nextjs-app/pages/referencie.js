import Head from 'next/head';
import Link from 'next/link';
import { projectsData, referencieOrder } from '../lib/projects';

export default function Referencie() {
  return (
    <>
      <Head>
        <title>Referencie - Stavomontáže, Kovo-Sklo s.r.o. | Portfolio oceľových konštrukcií</title>
        <meta name="description" content="Pozrite si naše referencie a realizované projekty v oblasti oceľových konštrukcií a zámočníctva." />
      </Head>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <span className="about-accent-line"></span>
            <h1>Naše realizované projekty</h1>
            <p>Viac ako 40 rokov skúseností v oblasti výroby oceľových konštrukcií a zámočníckych výrobkov. Pozrite si ukážky našich realizovaných projektov.</p>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {referencieOrder.map((slug) => {
              const p = projectsData[slug];
              if (!p) return null;
              const cover = slug === 'KFC-Banska-Bystrica' ? '5.webp' : p.images[0];
              return (
                <div key={slug} className="project-card">
                  <Link href={`/projekt-detail/${slug}`} className="project-link">
                    <div
                      className="project-card-background"
                      style={{ backgroundImage: `url('/sources/referencie/${slug}/${cover}')` }}
                    >
                      <div className="project-content-overlay">
                        <div className="project-category">{p.category}</div>
                        <h3 className="project-card-title">{p.name}</h3>
                        <div className="project-arrow">↗</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
