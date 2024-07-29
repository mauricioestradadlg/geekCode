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