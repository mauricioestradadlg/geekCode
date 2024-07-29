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
      
      <h1>TIPOS DE VARIABLES EN JAVA</h1>
      <Image src={java3} className={styles.imgInicio} alt="Java Variables" width={900} height={500} />

      <h2>Introducción</h2>
      <p>Java es un lenguaje de programación robusto y ampliamente utilizado en el desarrollo de aplicaciones de escritorio, web y móviles. Una de las características esenciales de cualquier lenguaje de programación son las variables, y Java no es la excepción. En este artículo, exploraremos los diferentes tipos de variables en Java, sus usos y características.</p>

      <h2>1. Variables Primitivas</h2>
      <p>Java soporta ocho tipos de datos primitivos. Estos tipos de variables contienen valores simples y se dividen en cuatro categorías principales: enteros, punto flotante, caracteres y booleanos.</p>

      <h2>a. Enteros</h2>
      <p><b>Byte:</b> Representa un valor de 8 bits con signo. Rango: -128 a 127.</p>
      <p><b>Short:</b> Representa un valor de 16 bits con signo. Rango: -32,768 a 32,767.</p>
      <p><b>Int:</b> Representa un valor de 32 bits con signo. Rango: -2^31 a 2^31-1.</p>
      <p><b>Long:</b> Representa un valor de 64 bits con signo. Rango: -2^63 a 2^63-1.</p>

      <h2>b. Punto Flotante</h2>
      <p><b>Float:</b> Representa un valor de punto flotante de 32 bits. Adecuado para ahorrar memoria en grandes arrays de números decimales.</p>
      <p><b>Double:</b> Representa un valor de punto flotante de 64 bits. Es el tipo de dato para decimales más utilizado.</p>

      <h2>c. Caracteres</h2>
      <p><b>Char:</b> Representa un solo carácter de 16 bits. Utiliza comillas simples, por ejemplo, &apos;a&apos;.</p>

      <h2>d. Booleanos</h2>
      <p><b>Boolean:</b> Representa un valor verdadero o falso. Solo puede tomar los valores <i>true</i> o <i>false</i>.</p>

      <h2>2. Variables de Referencia</h2>
      <p>Las variables de referencia son usadas para referenciar objetos. A diferencia de las variables primitivas que contienen datos reales, las variables de referencia almacenan la dirección en memoria donde se encuentran los objetos. Algunos ejemplos de variables de referencia son:</p>
      <p><b>Strings:</b> Secuencias de caracteres. Java proporciona la clase <code>String</code> para trabajar con cadenas de texto.</p>
      <p><b>Arrays:</b> Colecciones de elementos del mismo tipo. Los arrays en Java son objetos que pueden almacenar múltiples valores.</p>
      <p><b>Clases:</b> Instancias de cualquier clase que crees en Java. Por ejemplo, si tienes una clase <code>Persona</code>, puedes crear una variable de referencia a una instancia de <code>Persona</code>.</p>

      <h2>3. Variables Locales</h2>
      <p>Las variables locales son declaradas dentro de un método y solo son accesibles dentro de ese método. No tienen valores predeterminados y deben ser inicializadas antes de ser usadas.</p>

      <h2>4. Variables de Instancia</h2>
      <p>Las variables de instancia son variables no estáticas que pertenecen a una instancia específica de una clase. Cada objeto de la clase tiene su propia copia de la variable de instancia.</p>

      <h2>5. Variables de Clase</h2>
      <p>Las variables de clase (también conocidas como variables estáticas) son declaradas con la palabra clave <code>static</code> dentro de una clase, pero fuera de cualquier método. Solo hay una copia de la variable de clase, independientemente de cuántos objetos se creen de la clase.</p>
   
    </>);
}

export default Blog