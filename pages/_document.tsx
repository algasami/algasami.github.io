import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const portlink = "https://algasami.github.io/";
  return (
    <Html lang="en">
      <Head>
        <Script src="/initTheme.js" strategy="beforeInteractive" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="title" content="Algasami" />
        <meta
          name="description"
          content="Hello there. I'm Algasami, a programmer, game developer and web developer"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={portlink} />
        <meta property="og:title" content="Algasami" />
        <meta
          property="og:description"
          content="Hello there. I'm Algasami, a programmer, game developer and web developer"
        />
        {/* <meta property="og:image" content={pfplink} /> */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={portlink} />
        <meta property="twitter:title" content="Algasami" />
        <meta
          property="twitter:description"
          content="Hello there. I'm Algasami, a programmer, game developer and web developer"
        />
        {/* <meta property="twitter:image" content={pfplink} /> */}
      </Head>
      <body className="overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
