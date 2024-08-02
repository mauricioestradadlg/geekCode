import Image from 'next/image';
import styles from '../page.module.css';
import ciclos from '../imagenes/ciclosJava.png';
import java3 from '../imagenes/javaBlogs.jpg';
import img1 from '../imagenes/img24.png';
import img2 from '../imagenes/img25.png';
import img3 from '../imagenes/img26.png';
import img4 from '../imagenes/img27.png';



export const metadata = {
  title: "Tipos de Ciclos en Java - Geek Code",
  description: "Este es un blog acerca de los tipos de ciclos que hay en Java",
  keywords: "tipos de ciclos en java, ciclos en java, java ciclos, tipos de ciclos java, java tipos de ciclos, ciclos java, ejemplos ciclos java, tutorial java ciclos, estructuras de control java, bucles java",
  author: "Geek Code",

  openGraph: {
    type: 'article',
    url: 'https://geekcode.blog/blog/java/ciclos',
    title: 'Datos de Entrada y Salida en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de datos de entrada y salida que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Datos de Entrada y Salida en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de datos de entrada y salida que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },
  canonical: 'https://geekcode.blog/blog/java/ciclos',
};

function Blog() {
  return (
    <>
      <h1 id={styles.h1Inicio}>TIPOS DE CICLOS EN JAVA</h1>

      <Image src ={ciclos} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <h2 id={styles.h2Blog}>Introducción</h2>
      <p id={styles.pBlog}>En la programación, los ciclos son fundamentales para realizar tareas repetitivas. Java, como lenguaje de programación, ofrece varios tipos de estructuras de control de flujo que permiten a los desarrolladores ejecutar bloques de código repetidamente, basándose en condiciones específicas. En este artículo, exploraremos los tipos de ciclos disponibles en Java y cómo se utilizan para mejorar la eficiencia y claridad del código.</p>
      <br/>
      <Image src ={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>Ciclo FOR</h2>
      <p id={styles.pBlog}>El ciclo for es una de las estructuras más utilizadas en Java. Se usa cuando se conoce el número exacto de iteraciones que se necesitan realizar. Su sintaxis es clara y compacta, ideal para recorrer arrays o listas.</p>
      <br/>
      <Image src ={img1} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>Ciclo WHILE</h2>
      <p id={styles.pBlog}>El ciclo while se utiliza cuando no se sabe cuántas veces se debe ejecutar el bloque de código, pero se tiene una condición que debe cumplirse para continuar las iteraciones. Se ejecuta mientras la condición especificada es verdadera.</p>
      <br/>
      <Image src ={img2} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>Ciclo DO-WHILE</h2>
      <p id={styles.pBlog}>El ciclo do-while es similar al while, pero con la diferencia de que siempre ejecuta el bloque de código al menos una vez, ya que la condición se evalúa después de la ejecución del bloque.</p>
      <br/>
      <Image src ={img3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>Ciclo FOR-EACH</h2>
      <p id={styles.pBlog}>El ciclo for-each es una forma simplificada de recorrer colecciones y arrays en Java. Es especialmente útil cuando no necesitas acceder al índice del elemento actual.</p>
      <br/>
      <Image src ={img4} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>CONCLUSION</h2>
      <p id={styles.pBlog}>Comprender y utilizar adecuadamente los diferentes tipos de ciclos en Java es crucial para escribir programas eficientes y claros. Desde el ciclo for para iteraciones conocidas hasta el while y do-while para condiciones más dinámicas, cada tipo de ciclo tiene su lugar y propósito. Al dominar estas estructuras, los programadores pueden desarrollar aplicaciones más robustas y adaptativas.</p>
      <br/>
      
    </>
  );
}

export default Blog;
