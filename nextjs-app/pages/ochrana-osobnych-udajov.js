import SEO from '../components/SEO';
import { breadcrumbJsonLd } from '../lib/seo';

export default function OchranaOsobnychUdajov() {
  return (
    <>
      <SEO
        title="Ochrana osobných údajov"
        description="Zásady ochrany osobných údajov spoločnosti Stavomontáže, Kovo-Sklo s.r.o. - informácie o spracúvaní osobných údajov, cookies a právach dotknutých osôb."
        keywords="ochrana osobných údajov, GDPR, súkromie, cookies, Stavomontáže, Kovo-Sklo"
        noindex
        jsonLd={breadcrumbJsonLd([
          { name: 'Domov', path: '/' },
          { name: 'Ochrana osobných údajov', path: '/ochrana-osobnych-udajov' },
        ])}
      />

      <style jsx>{`
        .privacy-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }
        .privacy-content :global(.company-info) {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 4px;
          margin-bottom: 30px;
          font-size: 14px;
          line-height: 1.8;
          color: #333;
        }
        .privacy-content :global(.company-info strong) {
          font-weight: 500;
        }
        .privacy-content :global(.company-info a) {
          text-decoration: underline;
          color: #00a7ff;
        }
        .privacy-content p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: #555;
          margin: 0 0 15px 0;
        }
        .privacy-content h2 {
          font-size: 20px;
          font-weight: 400;
          color: #333;
          margin: 35px 0 15px 0;
        }
        .privacy-content strong {
          font-weight: 500;
          color: #333;
        }
        .privacy-content p:last-child {
          margin-top: 30px;
        }
      `}</style>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <span className="about-accent-line"></span>
            <h1>Ochrana osobných údajov</h1>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="company-info">
          <strong>Stavomontáže, Kovo-Sklo s.r.o.</strong><br />
          <a href="https://maps.google.com/?q=Stavebn%C3%A1+23,+974+01+Bansk%C3%A1+Bystrica" target="_blank" rel="noopener noreferrer">Stavebná 23, 974 01 Banská Bystrica</a><br />
          Slovenská republika<br />
          IČO: 36 322 229<br />
          DIČ: 2020072906<br />
          IČ DPH: SK2020072906<br />
          E-mail: kovo-sklo@kovo-sklo.sk<br />
          Tel.: 048/ 414 15 04
        </div>

        <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky.</p>

        <h2>I. Súbory cookies</h2>
        <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>

        <p>
          Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).<br />
          Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).
        </p>

        <p>
          <strong>Správa súhlasov:</strong><br />
          Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
        </p>

        <h2>II. Práva dotknutej osoby</h2>
        <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>

        <p>
          Prístup k osobným údajom, ktoré spracúvame<br />
          Oprava nepresných alebo neúplných údajov<br />
          Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ<br />
          Obmedzenie spracovania<br />
          Prenosnosť údajov<br />
          Odvolanie súhlasu – stane sa účinným dňom odvolania<br />
          Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)
        </p>

        <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na kovo-sklo@kovo-sklo.sk alebo telefónnom čísle 048/ 414 15 04.</p>

        <p><strong>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</strong></p>
      </section>
    </>
  );
}
