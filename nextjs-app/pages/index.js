import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const heroImages = [
  { src: '/sources/referencie/Technicko-hygienicka-udrzba-zeleznicnych-kolajovych-vozidiel-Humenne/4.webp', alt: 'Technicko-hygienická údržba železničných koľajových vozidiel Humenné' },
  { src: '/sources/referencie/Plosina-DOKA-DREVO/2.webp', alt: 'Plošina DOKA DREVO' },
  { src: '/sources/referencie/IKEA-Bratislava-pilon/2.webp', alt: 'IKEA Bratislava - Pilon' },
  { src: '/sources/referencie/Dunajska-Streda-Ocelova-konstrukcia-pre-vzduchotechniku/1.webp', alt: 'Dunajská Streda - Oceľová konštrukcia pre vzduchotechniku' },
];

const services = [
  { href: '/sluzba/ocelove-konstrukcie', img: '/sources/referencie/IKEA-Bratislava-pilon/2.webp', title: 'Oceľové konštrukcie', desc: 'Zaisťujeme návrh a výrobu oceľových konštrukcií všetkých typov pre priemyselné aj nevýrobné odvetvia.' },
  { href: '/sluzba/zamocnicke-vyrobky', img: '/sources/referencie/Zabradlie-rodinny-dom/1.webp', title: 'Zámočnícke výrobky', desc: 'Zámočnícke výrobky tvoria významnú časť výrobného programu firmy Stavomontáže, Kovo-Sklo s.r.o.' },
  { href: '/sluzba/povrchova-uprava', img: '/sources/povrch.webp', title: 'Povrchová úprava', desc: 'Zabezpečujeme komplexnú povrchovú úpravu oceľových konštrukcií pre zvýšenie odolnosti a estetiky.' },
  { href: '/sluzba/oplastenie-konstrukcii', img: '/sources/referencie/Trolejbusove-DEPO-Zilina/17.webp', title: 'Opláštenie oceľových konštrukcií', desc: 'Najčastejším využitím oceľových konštrukcií v priemyselnom stavebníctve sú oceľové haly.' },
  { href: '/sluzba/klampiarske-prace', img: '/sources/klamp.webp', title: 'Klampiarske práce', desc: 'Klampiarske prvky používame ako ochranný, funkčný a estetický doplnok pre opláštenie oceľových konštrukcií.' },
  { href: '/sluzba/predaj-hutnickeho-materialu', img: '/sources/steel.webp', title: 'Predaj hutníckeho materiálu', desc: 'Predaj hutníckeho materiálu a plechov. Ponúkame široký sortiment oceľových profilov.' },
];

const galleryProjects = [
  { href: '/projekt-detail/Trolejbusove-DEPO-Zilina', img: '/sources/referencie/Trolejbusove-DEPO-Zilina/11.webp', category: 'Oceľové konštrukcie', title: 'Trolejbusové DEPO Žilina' },
  { href: '/projekt-detail/KFC-Banska-Bystrica', img: '/sources/referencie/KFC-Banska-Bystrica/5.webp', category: 'Komerčné stavby', title: 'KFC Banská Bystrica' },
  { href: '/projekt-detail/Teplaren-Stefe-Banska-Bystrica', img: '/sources/referencie/Teplaren-Stefe-Banska-Bystrica/3.webp', category: 'Priemyselné stavby', title: 'Tepláreň Stefe Banská Bystrica' },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentHero((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Head>
        <title>Stavomontáže, Kovo-Sklo s.r.o. - Oceľové konštrukcie a zámočnícke výrobky | Banská Bystrica</title>
        <meta name="description" content="Stavomontáže, Kovo-Sklo s.r.o. - Firma s dlhoročnými skúsenosťami v oblasti výroby a montáže oceľových konštrukcií všetkých typov. Zámočnícke výrobky, povrchová úprava, predaj hutníckeho materiálu." />
        <meta name="keywords" content="oceľové konštrukcie, zámočnícke výrobky, povrchová úprava, hutnícky materiál, klampiarske práce, Banská Bystrica, Stavomontáže" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kovo-sklo.sk/" />
        <meta property="og:title" content="Stavomontáže, Kovo-Sklo s.r.o. - Oceľové konštrukcie a zámočnícke výrobky" />
        <meta property="og:description" content="Kvalitné riešenia v oblasti výroby a montáže oceľových konštrukcií a zámočníckych výrobkov s viac ako 40-ročnými skúsenosťami." />
        <meta property="og:image" content="https://kovo-sklo.sk/sources/logo.webp" />
      </Head>

      <section id="home" className="hero">
        <div className="hero-background">
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              className={`hero-bg-image ${i === currentHero ? 'active' : ''}`}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Výrobca oceľových konštrukcií a zámočníckych výrobkov</h1>
            <div className="hero-subtitle-content">
              <p className="hero-subtitle">
                Firma s dlhoročnými skúsenosťami v oblasti výroby oceľových konštrukcií, dopravných a priemyselných stavieb. Zámočnícke výrobky, povrchová úprava a predaj hutníckeho materiálu.
              </p>
            </div>
            <div className="hero-actions">
              <Link href="/referencie" className="cta-btn primary">REFERENCIE</Link>
              <Link href="/sluzba/ocelove-konstrukcie" className="cta-btn secondary">SLUŽBY</Link>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500<span className="stat-plus">+</span></div>
                <div className="stat-label">dokončených projektov</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40<span className="stat-plus">+</span></div>
                <div className="stat-label">rokov skúseností</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-products">
        <div className="container">
          <span className="about-accent-line"></span>
          <h2 className="section-title">Naše služby</h2>
          <div className="products-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="product-box">
                <div className="product-image">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{s.title}</h3>
                  <p className="product-description">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-background"></div>
        <div className="about-overlay"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-header">
                <span className="about-accent-line"></span>
                <h2 className="about-title">O našej spoločnosti</h2>
              </div>
              <div className="about-description">
                <p>Stavomontáže, Kovo-Sklo s.r.o. je firma s dlhoročnými skúsenosťami v oblasti výroby a montáže oceľových konštrukcií všetkých typov. Od jednoduchých zámočníckych výrobkov až po oceľové konštrukcie veľkých priemyselných objektov.</p>
                <p>Oceľové konštrukcie sa v priestoroch firmy v Banskej Bystrici vyrábajú už viac ako 40 rokov.</p>
                <p>Vďaka vlastnej výrobe je firma schopná flexibilne reagovať na požiadavky zákazníkov a pružne prispôsobiť termíny spracovania zákaziek.</p>
                <p>Náš cieľ je prvotriedna kvalita spracovania oceľových konštrukcií a tiež povrchovej úpravy.</p>
                <p>Každý z našich zákazníkov má možnosť konzultovať všetky svoje dotazy s kvalifikovanými technikmi, ktorí Vám radi poradia s návrhom a realizáciou vášho projektu.</p>
              </div>
            </div>

            <div className="about-right">
              <div className="about-services">
                <p>Vďaka našim skúsenostiam v oblasti oceľových a zámočníckych konštrukcií Vám ponúkneme optimálne riešenie s ohľadom na cenu, pri zachovaní vysokej kvality.</p>
                <p>Priaznivé hospodárske výsledky, záruka kvality vlastnej produkcie, dodržania termínov realizácií a plná záruka za vykonané práce a diela ju predurčujú ako správnu voľbu pre realizáciu Vašich stavebných zámerov a projektov.</p>
                <p>Ku každému projektu pristupujeme osobne a individuálne, každé zadanie je pre nás výzvou, ktorá nás posúva vpred.</p>

                <h3>Výrobné priestory</h3>
                <p>Výrobný areál firmy Stavomontáže, Kovo-Sklo s.r.o. zaberá viac ako 9000 m². Najväčšia je hlavná výrobná hala, kde prebieha proces výroby oceľových konštrukcií. V klampiarskej dielni sa prevádza strihanie, ohraňovanie, ohýbanie a zakružovanie plechov všetkých rozmerov a hrúbok.</p>

                <p><strong>Budeme radi, ak sa našim obchodným partnerom stanete aj Vy.</strong></p>
              </div>

              <div className="about-cta">
                <Link href="/sluzba/ocelove-konstrukcie" className="about-cta-btn">NAŠE SLUŽBY</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <span className="about-accent-line"></span>
          <h2 className="section-title">Referencie</h2>
          <div className="gallery-grid">
            {galleryProjects.map((p) => (
              <div key={p.href} className="project-card">
                <Link href={p.href} className="project-link">
                  <div className="project-card-background" style={{ backgroundImage: `url('${p.img}')` }}>
                    <div className="project-content-overlay">
                      <div className="project-category">{p.category}</div>
                      <h3 className="project-card-title">{p.title}</h3>
                      <div className="project-arrow">↗</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="project-card">
              <Link href="/referencie" className="project-link">
                <div
                  className="project-card-background"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))' }}
                >
                  <div className="project-content-overlay">
                    <div className="project-category">Všetky projekty</div>
                    <h3 className="project-card-title">Viac referencií</h3>
                    <div className="project-arrow">↗</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
