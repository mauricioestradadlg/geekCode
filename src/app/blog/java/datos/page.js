import Image from 'next/image';
import img1 from '../imagenes/dataJava.png';

import java3 from '../imagenes/javaBlogs.jpg';
import styles from '../page.module.css';

export const metadata = {
  title: "Datos de Entrada y Salida en Java - Geek Code",
  description: "Este es un blog acerca de los tipos de datos de entrada y salida que hay en Java",
  keywords: "datos de entrada java, datos de salida java, input output java, IO en java, manejo de datos java, lectura de datos java, escritura de datos java, flujos de datos java, streams en java, scanner java",
  author: "Geek Code",

  openGraph: {
    type: 'article',
    url: 'https://geekcode.blog/blog/java/datos',
    title: 'Datos de Entrada y Salida en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de condicionales que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Datos de Entrada y Salida en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de condicionales que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },
  canonical: 'https://geekcode.blog/blog/java/datos',
};

function Blog() {
  return (
    <>
      <h1 id={styles.h1Inicio}>DATOS DE ENTRADA Y SALIDA EN JAVA</h1>

      <Image src={img1} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />

      <h2 id={styles.h2Blog}>Introducción</h2>
      <p id={styles.pBlog}>En Java, los datos de entrada y salida (I/O) son fundamentales para interactuar con el usuario y manejar archivos. Este artículo explora los tipos de datos de entrada y salida, cómo funcionan y sus aplicaciones más comunes.</p>
      <br/>
      <Image src={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>Datos de Entrada</h2><br/>
      <p id={styles.pBlog}>Los datos de entrada se refieren a la información que el programa recibe del usuario o de otras fuentes, como archivos o bases de datos. En Java, existen varias formas de manejar los datos de entrada:</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h3 id={styles.h3Blog}>a. Entrada Estándar (Standard Input)</h3><br/>
      <p id={styles.pBlog}>La entrada estándar es el método más común para recibir datos del usuario en la consola. Java proporciona la clase Scanner en el paquete java.util para facilitar la lectura de diferentes tipos de datos, como enteros, cadenas y flotantes, desde la entrada estándar.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>
      <h3 id={styles.h3Blog}>b. Entrada desde Archivos</h3><br/>
      <p id={styles.pBlog}>Para leer datos de archivos, Java ofrece varias clases, como FileReader y BufferedReader, que permiten manejar grandes cantidades de datos de manera eficiente. Estas clases son parte del paquete java.io y son esenciales para aplicaciones que requieren leer información almacenada en discos.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>
      <h3 id={styles.h3Blog}>c. Entrada desde la Red</h3><br/>
      <p id={styles.pBlog}>Java también permite recibir datos a través de conexiones de red mediante el uso de Sockets. Esto es útil para aplicaciones de red, como clientes y servidores, que necesitan comunicarse entre sí.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>Datos de Salida</h2><br/>

      <p id={styles.pBlog}>Los datos de salida son la información que el programa devuelve al usuario o escribe en archivos. Java ofrece varias formas de manejar los datos de salida:</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} /><br/>

      <h3 id={styles.h3Blog}>a. Salida Estándar (Standard Output)</h3><br/>
      <p id={styles.pBlog}>La salida estándar es el método más directo para mostrar información en la consola. La clase System.out proporciona métodos como print y println para mostrar texto y otros datos al usuario.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} /><br/>
      <h3 id={styles.h3Blog}>b. Salida a Archivos</h3><br/>
      <p id={styles.pBlog}>Para escribir datos en archivos, Java ofrece clases como FileWriter y BufferedWriter en el paquete java.io. Estas clases permiten crear y escribir datos de manera eficiente en archivos de texto, lo que es útil para guardar registros o exportar información.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} /><br/>
      <h3 id={styles.h3Blog}>c. Salida a la Red</h3><br/>
      <p id={styles.pBlog}>Similar a la entrada desde la red, Java permite enviar datos a través de conexiones de red utilizando Sockets. Esto es crucial para aplicaciones que necesitan enviar datos a otros sistemas o servicios.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>3. Flujos de Datos (Streams)</h2><br/>

      <p id={styles.pBlog}>En Java, los flujos de datos o "streams" son secuencias de datos que se pueden leer o escribir. Existen dos tipos principales de flujos:</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} /><br/>

      <h3 id={styles.h3Blog}>a. Flujos de Bytes</h3><br/>

      <p id={styles.pBlog}>Los flujos de bytes (InputStream y OutputStream) manejan datos binarios, como imágenes y archivos de audio. Son adecuados para datos no textuales y son la base para la mayoría de las operaciones de I/O en Java.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} /><br/>

      <h3 id={styles.h3Blog}>b. Flujos de Caracteres</h3><br/>

      <p id={styles.pBlog}>Los flujos de caracteres (Reader y Writer) están diseñados para manejar datos de texto. Proporcionan una manera más conveniente de trabajar con caracteres, ya que tienen en cuenta la codificación de caracteres y son ideales para datos textuales.</p>
      <Image  className={styles.imgInicio} alt="Java Variables" width={900} height={500} /><br/><br/>

      <h2 id={styles.h2Blog}>Conclusión</h2><br/>

      <p id={styles.pBlog}>Entender los datos de entrada y salida en Java es esencial para desarrollar aplicaciones efectivas y eficientes. Ya sea interactuando con el usuario, manejando archivos o comunicándose a través de la red, las capacidades de I/O de Java son amplias y versátiles. Al dominar estos conceptos, puedes crear programas más robustos y funcionales.</p>
    </>
  );
}

export default Blog;
