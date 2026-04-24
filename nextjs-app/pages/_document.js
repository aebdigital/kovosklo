import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="sk">
      <Head>
        <meta name="theme-color" content="#00a7ff" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" type="image/webp" href="/sources/logo.webp" />
        <link rel="apple-touch-icon" href="/sources/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
