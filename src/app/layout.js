// src/app/layout.js
import './globals.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Head from 'next/head'; // Importa el componente Head

export const metadata = {
  title: "Geek Code",
  description: "Página web oficial de Geek Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
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
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
