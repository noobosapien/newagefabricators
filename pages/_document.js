import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <meta
          property="og:title"
          content="New Age Fabrication Ltd, Wellington"
        />
        <meta
          property="og:description"
          content="Pioneers in boat repairs, truck decks and toolbox fabrication, balustrades, rails and many more fabrication solutions, based in Wellington."
        />
        <meta
          property="og:image"
          content="https://newagefabrication.co.nz/marine.jpg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
