import "./globals.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Script from 'next/script';

export const metadata = {
  title: "Geek Code",
  description: "Pagina web oficial de Geek Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YYD70KBY3L"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYD70KBY3L');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
