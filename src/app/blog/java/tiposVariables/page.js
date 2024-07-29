import Image from 'next/image';
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
   
   
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Tipos de Variables en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de variables que hay en Java',
  
  },
  canonical: 'https://geekcode.blog/blog/java/tiposVariables',
  
};

function Blog(){

    return(
    <>
      <main>
      <h1>TIPOS DE VARIABLES EN JAVA</h1>
      <Image src={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />

      <article>
      <p>Java es un lenguaje de programación robusto y ampliamente 
        utilizado en el desarrollo de aplicaciones de escritorio, web 
        y móviles. Una de las características esenciales de cualquier l
        enguaje de programación son las variables, y Java no es la excepción.
         En este artículo, exploraremos los diferentes tipos de variables en Java, 
         sus usos y características.</p>
      <br />

      <h2>1. Variables Primitivas</h2>
        <p>Java soporta ocho tipos de datos primitivos. Estos tipos de variables contienen valores simples y se dividen en cuatro categorías principales: enteros, punto flotante, caracteres y booleanos.</p>
        <br /><br />

        <h3>a. Enteros</h3>
        <p><b>Byte:</b> Representa un valor de 8 bits con signo. Rango: -128 a 127.</p>
        <p><b>Short:</b> Representa un valor de 16 bits con signo. Rango: -32,768 a 32,767.</p>
        <p><b>Int:</b> Representa un valor de 32 bits con signo. Rango: -2^31 a 2^31-1.</p>
        <p><b>Long:</b> Representa un valor de 64 bits con signo. Rango: -2^63 a 2^63-1.</p>
        <br /><br />


      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      </article>
      </main>
    </>);
}

export default Blog