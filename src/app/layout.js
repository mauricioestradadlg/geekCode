
import "./globals.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";




export const metadata = {
  title: "Geek Code",
  description: "Pagina web oficial de Geek Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
