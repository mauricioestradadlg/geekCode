import Image from 'next/image';
import img1 from '../imagenes/img1.png';
import img2 from '../imagenes/img2.png';
import img3 from '../imagenes/img3.png';
import img4 from '../imagenes/img4.png';
import img5 from '../imagenes/img5.png';
import img6 from '../imagenes/img6.png';
import img7 from '../imagenes/img7.png';
import img8 from '../imagenes/img8.png';
import img9 from '../imagenes/img9.png';
import img10 from '../imagenes/img10.png';
import java3 from '../imagenes/javaBlogs.jpg';
import styles from '../page.module.css';

export const metadata = {
  title: "Tipos de Variables en Java - Geek Code",
  description: "Este es un blog acerca de los tipos de variables que hay en Java",
  keywords: "tipos de variables java, variables java, java variables, tipos variables java, variables en java, tipos de datos java, tipos de variables en java, tipos de datos en java, cuales variables hay en java , que variables hay en java ",
  author: "Geek Code",

  openGraph: {
    type: 'article',
    url: 'https://geekcode.blog/blog/java/tiposVariables',
    title: 'Tipos de Variables en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de variables que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Tipos de Variables en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de variables que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },
  canonical: 'https://geekcode.blog/blog/java/tiposVariables',
};

function Blog(){
  return (
    <>
      <h1 id={styles.h1Inicio}>TIPOS DE VARIABLES EN JAVA</h1>

      <Image src={img1} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />


      <h2 id={styles.h2Blog}>Introducción</h2>
      <p id={styles.pBlog}>Java es un lenguaje de programación robusto y ampliamente utilizado en el desarrollo de aplicaciones de escritorio, web y móviles. Una de las características esenciales de cualquier lenguaje de programación son las variables, y Java no es la excepción. En este artículo, exploraremos los diferentes tipos de variables en Java, sus usos y características.</p>
      <br/>
      <Image src={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>
      

      <h2 id={styles.h2Blog}>1. Variables Primitivas</h2>
      <p id={styles.pBlog}>Java soporta ocho tipos de datos primitivos. Estos tipos de variables contienen valores simples y se dividen en cuatro categorías principales: enteros, punto flotante, caracteres y booleanos.</p>
      <Image src={img2} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>a. Enteros</h2>
      <p id={styles.pBlog}><b>Byte:</b> Representa un valor de 8 bits con signo. Rango: -128 a 127.</p>
      <p id={styles.pBlog}><b>Short:</b> Representa un valor de 16 bits con signo. Rango: -32,768 a 32,767.</p>
      <p id={styles.pBlog}><b>Int:</b> Representa un valor de 32 bits con signo. Rango: -2^31 a 2^31-1.</p>
      <p id={styles.pBlog}><b>Long:</b> Representa un valor de 64 bits con signo. Rango: -2^63 a 2^63-1.</p>
      <Image src={img3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>b. Punto Flotante</h2>
      <p id={styles.pBlog}><b>Float:</b> Representa un valor de punto flotante de 32 bits. Adecuado para ahorrar memoria en grandes arrays de números decimales.</p>
      <p id={styles.pBlog}><b>Double:</b> Representa un valor de punto flotante de 64 bits. Es el tipo de dato para decimales más utilizado.</p>
      <Image src={img4} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>c. Caracteres</h2>
      <p id={styles.pBlog}><b>Char:</b> Representa un solo carácter de 16 bits. Utiliza comillas simples, por ejemplo, &apos;a&apos;.</p>
      <Image src={img5} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>d. Booleanos</h2>
      <p id={styles.pBlog}><b>Boolean:</b> Representa un valor verdadero o falso. Solo puede tomar los valores <i>true</i> o <i>false</i>.</p>
      <Image src={img6} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>2. Variables de Referencia</h2>
      <p id={styles.pBlog}>Las variables de referencia son usadas para referenciar objetos. A diferencia de las variables primitivas que contienen datos reales, las variables de referencia almacenan la dirección en memoria donde se encuentran los objetos. Algunos ejemplos de variables de referencia son:</p>
      <p id={styles.pBlog}><b>Strings:</b> Secuencias de caracteres. Java proporciona la clase <code>String</code> para trabajar con cadenas de texto.</p>
      <p id={styles.pBlog}><b>Arrays:</b> Colecciones de elementos del mismo tipo. Los arrays en Java son objetos que pueden almacenar múltiples valores.</p>
      <p id={styles.pBlog}><b>Clases:</b> Instancias de cualquier clase que crees en Java. Por ejemplo, si tienes una clase <code>Persona</code>, puedes crear una variable de referencia a una instancia de <code>Persona</code>.</p>
      <Image src={img7} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>3. Variables Locales</h2>
      <p id={styles.pBlog}>Las variables locales son declaradas dentro de un método y solo son accesibles dentro de ese método. No tienen valores predeterminados y deben ser inicializadas antes de ser usadas.</p>
      <Image src={img8} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>


      <h2 id={styles.h2Blog}>4. Variables de Instancia</h2>
      <p id={styles.pBlog}>Las variables de instancia son variables no estáticas que pertenecen a una instancia específica de una clase. Cada objeto de la clase tiene su propia copia de la variable de instancia.</p>
      <Image src={img9} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>5. Variables de Clase</h2>
      <p id={styles.pBlog}>Las variables de clase (también conocidas como variables estáticas) son declaradas con la palabra clave <code>static</code> dentro de una clase, pero fuera de cualquier método. Solo hay una copia de la variable de clase, independientemente de cuántos objetos se creen de la clase.</p>
      <Image src={img10} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>

      <h2 id={styles.h2Blog}>Conclusion</h2><br/>
      <p id={styles.pBlog}>En resumen, las variables son la piedra angular de cualquier lenguaje de programación, y Java ofrece una amplia variedad de tipos de variables que se adaptan a diferentes necesidades de programación. Desde variables primitivas que almacenan valores simples hasta variables de referencia que apuntan a objetos complejos, cada tipo de variable tiene su propósito y uso específico. Entender la diferencia entre variables locales, de instancia y de clase es crucial para manejar el estado y el comportamiento de los objetos en Java. Al utilizar correctamente los tipos de variables, los desarrolladores pueden mejorar la eficiencia y la claridad de su código, asegurando aplicaciones más efectivas y mantenibles.</p>
    </>
  );
}

export default Blog;
