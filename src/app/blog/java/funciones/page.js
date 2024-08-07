import Image from 'next/image';
import styles from '../page.module.css';
import java3 from '../imagenes/javaBlogs.jpg';
import funciones from '../imagenes/funcionesJava.png'
import img1 from '../imagenes/img32.png';
import img2 from '../imagenes/img33.png';
import img3 from '../imagenes/img34.png';
import img4 from '../imagenes/img35.png';






export const metadata = {
  title: "Tipos de Funciones en Java - Geek Code",
  description: "Este es un blog acerca de los tipos de funciones que hay en Java",
  keywords: "tipos de funciones java, tipos de funciones en java, funciones java, funciones en java, que es una funcion en java, que funciones hay en java, funciones de java, ejemplos funciones java, ejemplos de funciones java, ejemplos de funciones en java",
  author: "Geek Code",

  openGraph: {
    type: 'article',
    url: 'https://geekcode.blog/blog/java/funciones',
    title: 'Tipos de Funciones en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de funciones que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Tipos de Funciones en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de funciones que hay en Java',
    image: 'https://geekcode.blog/imagenes/openGraph.png'
  },
  canonical: 'https://geekcode.blog/blog/java/funciones',
};

function Blog() {
  return (
    <>
      <h1 id={styles.h1Inicio}>TIPOS DE FUNCIONES EN JAVA</h1>

      <Image src={funciones} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <h2 id={styles.h2Blog}>Introducción</h2>
      <p id={styles.pBlog}>En Java, las funciones, también conocidas como métodos, son bloques de código que realizan tareas específicas. Estos métodos permiten organizar el código de manera modular, facilitando la reutilización y la legibilidad. Java ofrece diversos tipos de funciones, cada una con sus características y usos específicos. Este artículo examina los diferentes tipos de funciones que puedes utilizar en Java y sus aplicaciones prácticas.</p>
      <br/>

      <Image src ={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/><br/>


      
      <h2 id={styles.h2Blog}>1- Funciones con Retorno</h2>
      <p id={styles.pBlog}>Las funciones con retorno devuelven un valor del tipo especificado al ser llamadas. Estas funciones son útiles cuando necesitas que una operación produzca un resultado que pueda ser usado posteriormente.</p>
      <Image src={img1} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>2- Funciones Void</h2>
      <p id={styles.pBlog}>Las funciones que no devuelven ningún valor utilizan el tipo de retorno void. Estas son útiles cuando el objetivo de la función es realizar una acción sin la necesidad de retornar un valor.</p>
      <Image src={img2} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>3- Funciones Estaticas</h2>
      <p id={styles.pBlog}>Las funciones estáticas pertenecen a la clase en la que se definen y pueden ser llamadas sin crear una instancia de la clase. Se utilizan principalmente para operaciones que no requieren datos de instancia.</p>
      <Image src={img3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>

      <h2 id={styles.h2Blog}>4- Funciones Recursivas</h2>
      <p id={styles.pBlog}>Las funciones recursivas son aquellas que se llaman a sí mismas. Son útiles para resolver problemas que pueden ser descompuestos en subproblemas más pequeños del mismo tipo.</p>
      <Image src={img4} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />
      <br/>


      <h2 id={styles.h2Blog}>CONCLUSION</h2>
      <p id={styles.pBlog}>Java ofrece una variedad de funciones que puedes utilizar para mejorar la organización y eficiencia de tu código. Comprender los diferentes tipos de funciones disponibles y sus aplicaciones puede ayudarte a escribir código más limpio, modular y reutilizable.</p>
      <br/>
      
    </>
  );
}

export default Blog;
