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
      <br/><br/>

      <h3 id={styles.h3Blog}>a. Entrada Estándar (Standard Input)</h3><br/>
      <p id={styles.pBlog}>La entrada estándar es el método más común para recibir datos del usuario en la consola. Java proporciona la clase Scanner en el paquete java.util para facilitar la lectura de diferentes tipos de datos, como enteros, cadenas y flotantes, desde la entrada estándar.</p>
      <br/>
      <h3 id={styles.h3Blog}>b. Entrada desde Archivos</h3><br/>
      <p id={styles.pBlog}>Para leer datos de archivos, Java ofrece varias clases, como FileReader y BufferedReader, que permiten manejar grandes cantidades de datos de manera eficiente. Estas clases son parte del paquete java.io y son esenciales para aplicaciones que requieren leer información almacenada en discos.</p>
      <br/>
      <h3 id={styles.h3Blog}>c. Entrada desde la Red</h3><br/>
      <p id={styles.pBlog}>En aplicaciones de red, los datos de entrada pueden provenir de otros dispositivos conectados. Java proporciona el paquete java.net, que incluye clases como Socket para establecer conexiones de red y recibir datos desde otros sistemas.</p>
      <br/>

      <h2 id={styles.h2Blog}>Datos de Salida</h2><br/>
      <p id={styles.pBlog}>Los datos de salida son la información que el programa genera y presenta al usuario o guarda en archivos. Java ofrece diversas formas de manejar los datos de salida:</p>
      <br/><br/>

      <h3 id={styles.h3Blog}>a. Salida Estándar (Standard Output)</h3><br/>
      <p id={styles.pBlog}>La salida estándar se refiere a mostrar datos en la consola. En Java, la clase System proporciona el método out para imprimir datos en la consola. Este método es ampliamente utilizado para depurar programas y mostrar resultados al usuario.</p>
      <br/>
      <h3 id={styles.h3Blog}>b. Salida hacia Archivos</h3><br/>
      <p id={styles.pBlog}>Para guardar datos en archivos, Java proporciona clases como FileWriter y BufferedWriter, que permiten escribir grandes volúmenes de datos de manera eficiente. Estas clases son parte del paquete java.io y son esenciales para aplicaciones que requieren almacenar información en discos.</p>
      <br/>
      <h3 id={styles.h3Blog}>c. Salida hacia la Red</h3><br/>
      <p id={styles.pBlog}>En aplicaciones de red, los datos de salida pueden enviarse a otros dispositivos conectados. Java proporciona el paquete java.net, que incluye clases como Socket para establecer conexiones de red y enviar datos a otros sistemas.</p>
      <br/>

      <h2 id={styles.h2Blog}>Conclusión</h2><br/>
      <p id={styles.pBlog}>En resumen, los datos de entrada y salida en Java son fundamentales para el desarrollo de aplicaciones interactivas. Ya sea a través de la consola, archivos o la red, la capacidad de recibir y generar información es esencial para crear programas dinámicos y útiles. Con el conocimiento adecuado de las clases y métodos disponibles en Java, los desarrolladores pueden diseñar aplicaciones que interactúen eficazmente con los usuarios y otros sistemas.</p>
    </>
  );
}

export default Blog;
