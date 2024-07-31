// src/app/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // Asegúrate de importar los estilos globales

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      {/* Google Adsense */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8550953934652718"
     crossorigin="anonymous"></script>


        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YYD70KBY3L"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YYD70KBY3L');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
