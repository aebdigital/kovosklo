import SEO from '../components/SEO';
import { ORG_JSONLD, breadcrumbJsonLd } from '../lib/seo';

const contacts = [
  { name: 'Mgr. Tomáš Frim', role: 'riaditeľ spoločnosti', tel: '+421915812764', telDisplay: '+421 915 812 764', email: 'frim@kovo-sklo.sk' },
  { name: 'Ing. Michal Boguský', role: 'konštruktér', tel: '+421905599092', telDisplay: '+421 905 599 092', email: 'priprava@kovo-sklo.sk' },
  { name: 'Juraj Štulajter', role: 'projektový manažér', tel: '+421905735777', telDisplay: '+421 905 735 777', email: 'stulajter@kovo-sklo.sk' },
  { name: 'Bc. Adriána Fabiánová', role: 'projektový manažér', tel: '+421905804557', telDisplay: '+421 905 804 557', email: 'stavomontaze@kovo-sklo.sk' },
  { name: 'Milan Lietava', role: 'majster výroby', tel: '+421902059507', telDisplay: '+421 902 059 507', email: 'vyroba@kovo-sklo.sk' },
  { name: 'Tomáš Brštiak', role: 'zásobovanie', tel: '+421905803540', telDisplay: '+421 905 803 540', email: 'zasobovanie@kovo-sklo.sk' },
  { name: 'Ing. Štefan Kráľ', role: 'statik', tel: '+421905599092', telDisplay: '+421 905 599 092', email: 'statika@kovo-sklo.sk' },
  { name: 'Emília Koscová', role: 'ekonomické oddelenie', tel: '+421907398482', telDisplay: '+421 907 398 482', email: 'kovo-sklo@kovo-sklo.sk', extra: { label: 'Fakturácia:', email: 'faktury@kovo-sklo.sk' } },
];

export default function Kontakt() {
  return (
    <>
      <SEO
        title="Kontakt - Banská Bystrica"
        description="Kontaktujte Stavomontáže, Kovo-Sklo s.r.o. v Banskej Bystrici. Odborníci na oceľové konštrukcie a zámočnícke výrobky. Tel: 048/ 414 15 04, e-mail: kovo-sklo@kovo-sklo.sk."
        keywords="kontakt, Stavomontáže, Kovo-Sklo, Banská Bystrica, oceľové konštrukcie, zámočníctvo, telefón"
        jsonLd={[
          ORG_JSONLD,
          breadcrumbJsonLd([
            { name: 'Domov', path: '/' },
            { name: 'Kontakt', path: '/kontakt' },
          ]),
        ]}
      />

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <span className="about-accent-line"></span>
            <h1>Kontaktujte nás</h1>
            <p>Sme tu pre vás. Kontaktujte nás pre konzultáciu vašich projektov oceľových konštrukcií a zámočníckych výrobkov. Radi vám poradíme a pripravíme cenové kalkulácie.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="main-contact-container">
              <div className="main-heading-container">
                <span className="main-accent-line"></span>
                <div className="heading-with-address">
                  <h2 className="location-main-heading">Stavomontáže, Kovo-Sklo s.r.o.</h2>
                  <div className="company-address">
                    <p>Stavebná 23<br />974 01 Banská Bystrica<br />Slovensko</p>
                    <p><strong>Tel:</strong> <a href="tel:048414504">048/ 414 15 04</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-persons-grid">
                {contacts.map((c) => (
                  <div key={c.email + c.name} className="contact-person">
                    <p><strong>{c.name}</strong></p>
                    <p>{c.role}</p>
                    <p><a href={`tel:${c.tel}`}>{c.telDisplay}</a></p>
                    <p><a href={`mailto:${c.email}`}>{c.email}</a></p>
                    {c.extra && (
                      <p><strong>{c.extra.label}</strong> <a href={`mailto:${c.extra.email}`}>{c.extra.email}</a></p>
                    )}
                  </div>
                ))}
              </div>

              <div className="location-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.8!2d19.1461!3d48.7369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471515f991931865%3A0x5ed109ef47c6e76a!2sStavebn%C3%A1%2023%2C%20974%2001%20Bansk%C3%A1%20Bystrica%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1640995200000!5m2!1sen!2ssk"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stavomontáže, Kovo-Sklo s.r.o. - Stavebná 23, Banská Bystrica"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
