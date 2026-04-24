export const SITE_URL = 'https://kovo-sklo.sk';
export const SITE_NAME = 'Stavomontáže, Kovo-Sklo s.r.o.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/sources/logo.webp`;

export const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: 'Kovo-Sklo',
  description:
    'Firma s dlhoročnými skúsenosťami v oblasti výroby a montáže oceľových konštrukcií všetkých typov. Zámočnícke výrobky, povrchová úprava a predaj hutníckeho materiálu.',
  url: SITE_URL,
  logo: `${SITE_URL}/sources/logo.webp`,
  image: `${SITE_URL}/sources/logo.webp`,
  telephone: '+421484141504',
  email: 'kovo-sklo@kovo-sklo.sk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Stavebná 23',
    postalCode: '974 01',
    addressLocality: 'Banská Bystrica',
    addressCountry: 'SK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7369,
    longitude: 19.1461,
  },
  areaServed: 'SK',
  foundingDate: '1984',
  sameAs: [],
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '15:30',
    },
  ],
};

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'Country', name: 'Slovakia' },
  };
}
