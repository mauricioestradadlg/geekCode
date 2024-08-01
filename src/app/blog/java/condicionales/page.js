import Image from 'next/image';
import img1 from '../imagenes/condicionales.png';
import img2 from '../imagenes/img11.png';
import img3 from '../imagenes/img12.png';
import img4 from '../imagenes/img13.png';
import img5 from '../imagenes/img14.png';
import img6 from '../imagenes/img15.png';
import java3 from '../imagenes/javaBlogs.jpg';
import styles from '../page.module.css';

export const metadata = {
  title: "Tipos de Condicionales en Java - Geek Code",
  description: "Este es un blog acerca de los tipos de condicionales que hay en Java",
  keywords: "tipos de condicionales java, condicionales java, java condicionales, tipos condicionales java, condicionales en java, tipos de condicionales java, tipos de condicionales en java, cuales condicionales hay en java , que condicionales hay en java",
  author: "Geek Code",

  openGraph: {
    type: 'article',
    url: 'https://geekcode.blog/blog/java/condicionales',
    title: 'Tipos de Condicionales en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de condicionales que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Tipos de Condicionales en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de condicionales que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },
  canonical: 'https://geekcode.blog/blog/java/condicionales',
};

function Blog() {
  return (
    <>
      <h1 id={styles.h1Inicio}>TIPOS DE CONDICIONALES EN JAVA</h1>

      <Image src={img1} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />

      <h2 id={styles.h2Blog}>Introducción</h2>
      <p id={styles.pBlog}>En el desarrollo de software, la capacidad de tomar decisiones basadas en condiciones es fundamental. Java, como lenguaje de programación orientado a objetos, ofrece una variedad de estructuras condicionales que permiten a los desarrolladores controlar el flujo de ejecución de sus programas. En este artículo, exploraremos los diferentes tipos de condicionales en Java y cómo se utilizan.</p>
      <br/>
      <Image src={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>1. Condición &apos;IF&apos;</h2>
      <p id={styles.pBlog}>El condicional <code>if</code> es la estructura básica de control de flujo en Java. Se utiliza para ejecutar un bloque de código solo si una condición especificada es <code>true</code>.</p>
      <Image src={img2} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>2. Condición &apos;ELSE&apos;</h2>
      <p id={styles.pBlog}>La declaración <code>else</code> se utiliza junto con <code>if</code> para ejecutar un bloque de código alternativo si la condición en el <code>if</code> es <code>false</code>.</p>
      <Image src={img3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>3. Condición &apos;ELSE-IF&apos;</h2>
      <p id={styles.pBlog}>Cuando se tienen múltiples condiciones que deben evaluarse, se puede usar la declaración <code>else-if</code>. Esta estructura permite manejar múltiples alternativas de manera ordenada.</p>
      <Image src={img4} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>4. Condición &apos;SWITCH&apos;</h2>
      <p id={styles.pBlog}>La declaración <code>switch</code> es una alternativa al uso de múltiples <code>if-else-if</code> cuando se trabaja con valores que pueden tomar un número limitado de opciones. Es especialmente útil cuando se necesita comparar una variable con varios valores específicos.</p>
      <Image src={img5} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>5. Operador Ternario</h2>
      <p id={styles.pBlog}>El operador ternario es una forma compacta de escribir una condición <code>if-else</code>. Es ideal para situaciones donde se necesita asignar un valor basado en una condición en una sola línea.</p>
      <Image src={img6} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>Conclusión</h2><br/>
      <p id={styles.pBlog}>En conclusión, comprender y utilizar adecuadamente los diferentes tipos de estructuras condicionales en Java es fundamental para escribir programas que respondan de manera efectiva a diferentes escenarios. Desde el uso básico de <code>if</code> y <code>else</code> hasta la implementación de <code>switch</code> y operadores ternarios, estas herramientas permiten a los desarrolladores tomar decisiones lógicas y eficientes en sus aplicaciones. Al dominar estos condicionales, los programadores pueden crear aplicaciones más robustas y dinámicas que respondan correctamente a las necesidades de los usuarios.</p>
    </>
  );
}

export default Blog;
