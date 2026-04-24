import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-main">
          <div className="footer-logo-section">
            <img src="/sources/logo.webp" alt="Stavomontáže, Kovo-Sklo" className="footer-logo-image" />
          </div>

          <div className="footer-navigation">
            <ul className="footer-nav-links">
              <li><Link href="/" className="footer-nav-link">DOMOV</Link></li>
              <li><Link href="/o-nas" className="footer-nav-link">O NÁS</Link></li>
              <li><Link href="/sluzba/ocelove-konstrukcie" className="footer-nav-link">SLUŽBY</Link></li>
              <li><Link href="/kontakt" className="footer-nav-link">KONTAKT</Link></li>
              <li><Link href="/referencie" className="footer-nav-link">PORTFÓLIO</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <ul className="footer-services-links">
              <li><Link href="/sluzba/ocelove-konstrukcie" className="footer-service-link">OCEĽOVÉ KONŠTRUKCIE</Link></li>
              <li><Link href="/sluzba/zamocnicke-vyrobky" className="footer-service-link">ZÁMOČNÍCKE VÝROBKY</Link></li>
              <li><Link href="/sluzba/povrchova-uprava" className="footer-service-link">POVRCHOVÁ ÚPRAVA</Link></li>
              <li><Link href="/sluzba/oplastenie-konstrukcii" className="footer-service-link">OPLÁŠTENIE KONŠTRUKCIÍ</Link></li>
              <li><Link href="/sluzba/klampiarske-prace" className="footer-service-link">KLAMPIARSKE PRÁCE</Link></li>
              <li><Link href="/sluzba/predaj-hutnickeho-materialu" className="footer-service-link">PREDAJ HUTNÍCKEHO MATERIÁLU</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-links">
              <a href="mailto:kovo-sklo@kovo-sklo.sk" className="footer-email">KOVO-SKLO@KOVO-SKLO.SK</a>
              <a href="tel:+421484141504" className="footer-phone">048/ 414 15 04</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span className="footer-legal-text">© 2025 Stavomontáže, Kovo-Sklo s.r.o.</span>
            <a href="https://aebdigital.sk" target="_blank" rel="noreferrer" className="footer-legal-link">Tvorba stránky - AEB Digital</a>
            <Link href="/ochrana-osobnych-udajov" className="footer-legal-link">Ochrana osobných údajov</Link>
          </div>
        </div>
      </footer>

      <div className={`privacy-popup ${privacyOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && setPrivacyOpen(false)}>
        <div className="privacy-popup-content">
          <div className="privacy-popup-header">
            <h2>Ochrana osobných údajov</h2>
            <button className="privacy-popup-close" onClick={() => setPrivacyOpen(false)}>&times;</button>
          </div>
          <div className="privacy-popup-body">
            <div className="company-info">
              <strong>Stavomontáže, Kovo-Sklo s.r.o.</strong><br />
              Stavebná 23, 974 01 Banská Bystrica<br />
              Slovenská republika<br />
              IČO: 36 322 229<br />
              DIČ: 2020072906<br />
              IČ DPH: SK2020072906<br />
              E-mail: kovo-sklo@kovo-sklo.sk<br />
              Tel.: 048/ 414 15 04
            </div>
            <p>Tieto Zásady ochrany osobných údajov popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

            <h3>I. Kontaktný formulár</h3>
            <p>Na stránke www.kovo-sklo.sk prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám položiť otázku k našim produktom a službám alebo požiadať o cenovú ponuku.</p>
            <p><strong>Rozsah spracúvaných údajov:</strong> Meno a priezvisko, E-mailová adresa, Telefónne číslo, Správu</p>
            <p><strong>Účel spracovania:</strong> Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
            <p><strong>Právny základ:</strong> Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
            <p><strong>Doba uchovávania:</strong> Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt.</p>

            <h3>II. Súbory cookies</h3>
            <p>Na našej webovej stránke používame cookies výlučne na nevyhnutné a štatistické účely so súhlasom používateľa.</p>

            <h3>III. Práva dotknutej osoby</h3>
            <p>Podľa nariadenia GDPR máte právo na prístup k osobným údajom, opravu, vymazanie, obmedzenie spracovania, prenosnosť, odvolanie súhlasu a podanie sťažnosti.</p>
            <p>V prípade otázok nás môžete kontaktovať na kovo-sklo@kovo-sklo.sk alebo na 048/ 414 15 04.</p>
            <p><strong>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</strong></p>
          </div>
        </div>
      </div>
    </>
  );
}
