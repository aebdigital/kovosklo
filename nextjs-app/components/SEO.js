import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../lib/seo';

export default function SEO({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  keywords,
  jsonLd,
  type = 'website',
  noindex = false,
}) {
  const router = useRouter();
  const path = router.asPath.split('?')[0].split('#')[0];
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const resolvedImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
      )}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="sk_SK" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {jsonLdArray &&
        jsonLdArray.map((obj, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
          />
        ))}
    </Head>
  );
}
