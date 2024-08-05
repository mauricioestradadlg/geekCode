import Image from 'next/image';
import styles from '../page.module.css';
import operadores from '../imagenes/operadoresJava.png';
import java3 from '../imagenes/javaBlogs.jpg';
import img1 from '../imagenes/img28.png';
import img2 from '../imagenes/img29.png';
import img3 from '../imagenes/img30.png';
import img4 from '../imagenes/img31.png';






export const metadata = {
  title: "Tipos de Operadores Logicos en Java - Geek Code",
  description: "Este es un blog acerca de los tipos de operadores logicos que hay en Java",
  keywords: "tipos de operadores logicos java, tipos de operadores logicos en java, operadores logicos en java, java operadores logicos, operadores logicos java, java operadores logicos, ejemplos operadores lógicos java",
  author: "Geek Code",

  openGraph: {
    type: 'article',
    url: 'https://geekcode.blog/blog/java/operadoresLogicos',
    title: 'Tipos de Operadores Logicos en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de operadores logicos que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Tipos de Operadores Logicos en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de operadores logicos que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },
  canonical: 'https://geekcode.blog/blog/java/operadoresLogicos',
};

function Blog() {
  return (
    <>
      <h1 id={styles.h1Inicio}>TIPOS DE OPERADORES LOGICOS EN JAVA</h1>

      <Image src ={operadores} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <h2 id={styles.h2Blog}>Introducción</h2>
      <p id={styles.pBlog}>En Java, los operadores lógicos son fundamentales para el control del flujo de los programas. Se utilizan para combinar expresiones booleanas y devolver un valor de verdadero o falso, dependiendo de las condiciones especificadas. Estos operadores son esenciales en estructuras de control como if, while, y for. En este artículo, exploraremos los operadores lógicos disponibles en Java y su uso.</p>
      <br/>
      <Image src ={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>1. Operador Lógico AND (&&)</h2>
      <p id={styles.pBlog}>El operador lógico AND se utiliza para evaluar dos expresiones booleanas. La operación devuelve true si y solo si ambas expresiones son verdaderas.</p>
      <Image src={img1} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>2. Operador Lógico OR (||)</h2>
      <p id={styles.pBlog}>El operador lógico OR evalúa dos expresiones booleanas y devuelve true si al menos una de las expresiones es verdadera.</p>
      <Image src={img2} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>3. Operador Lógico NOT (!)</h2>
      <p id={styles.pBlog}>El operador NOT se utiliza para invertir el valor de una expresión booleana. Si la expresión es true, devuelve false y viceversa.</p>
      <Image src={img3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>4. Operador Lógico XOR (^)</h2>
      <p id={styles.pBlog}>El operador XOR, o OR exclusivo, devuelve true si exactamente una de las expresiones es verdadera. Si ambas son verdaderas o falsas, devuelve false.</p>
      <Image src={img4} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>


      <h2 id={styles.h2Blog}>CONCLUSION</h2>
      <p id={styles.pBlog}>Entender y utilizar adecuadamente los operadores lógicos en Java es crucial para escribir código efectivo y eficiente. Estos operadores son esenciales para manejar múltiples condiciones y controlar el flujo de los programas de manera precisa.</p>
      <br/>
      
    </>
  );
}

export default Blog;
