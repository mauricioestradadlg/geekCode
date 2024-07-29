
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
    image: 'https://dungeonofbits.com/images/java-logo.png',
   
  },

  twitter: {
    card: 'summary_large_image',
    site: '@GeekCode',
    creator: '@GeekCode',
    title: 'Tipos de Variables en Java - Geek Code',
    description: 'Este es un blog acerca de los tipos de variables que hay en Java',
    image: 'https://dungeonofbits.com/images/java-logo.png', 
  },
  canonical: 'https://geekcode.blog/blog/java/tiposVariables',
  
};

function Blog(){

    return(
    <>
    <h1>TIPOS DE VARIABLES EN JAVA</h1>
   
    <article>
        <p>Java es un lenguaje de programación robusto y ampliamente utilizado en el desarrollo de aplicaciones de escritorio, web y móviles. Una de las características esenciales de cualquier lenguaje de programación son las variables, y Java no es la excepción. En este artículo, exploraremos los diferentes tipos de variables en Java, sus usos y características.</p>
        
        <h2>1. Variables Primitivas</h2>
        <p>Java soporta ocho tipos de datos primitivos. Estos tipos de variables contienen valores simples y se dividen en cuatro categorías principales: enteros, punto flotante, caracteres y booleanos.</p>
        
        <h3>a. Enteros</h3>
        <p>Los enteros incluyen los siguientes tipos de datos: <b>byte</b> (representa un valor de 8 bits con signo, rango: -128 a 127), <b>short</b> (representa un valor de 16 bits con signo, rango: -32,768 a 32,767), <b>int</b> (representa un valor de 32 bits con signo, rango: -2<sup>31</sup> a 2<sup>31</sup>-1) y <b>long</b> (representa un valor de 64 bits con signo, rango: -2<sup>63</sup> a 2<sup>63</sup>-1).</p>

        <h3>b. Punto Flotante</h3>
        <p>Los tipos de datos de punto flotante incluyen <b>float</b> (representa un valor de punto flotante de 32 bits, adecuado para ahorrar memoria en grandes arrays de números decimales) y <b>double</b> (representa un valor de punto flotante de 64 bits, es el tipo de dato para decimales más utilizado).</p>

        <h3>c. Caracteres</h3>
        <p>El tipo de dato carácter es <b>char</b>, que representa un solo carácter de 16 bits y utiliza comillas simples, por ejemplo, 'a'.</p>

        <h3>d. Booleanos</h3>
        <p>El tipo de dato booleano es <b>boolean</b>, que representa un valor verdadero o falso y solo puede tomar los valores <i>true</i> o <i>false</i>.</p>

        <h2>2. Variables de Referencia</h2>
        <p>Las variables de referencia son usadas para referenciar objetos. A diferencia de las variables primitivas que contienen datos reales, las variables de referencia almacenan la dirección en memoria donde se encuentran los objetos. Algunos ejemplos de variables de referencia son: <b>Strings</b> (secuencias de caracteres, Java proporciona la clase <code>String</code> para trabajar con cadenas de texto), <b>Arrays</b> (colecciones de elementos del mismo tipo, los arrays en Java son objetos que pueden almacenar múltiples valores) y <b>Clases</b> (instancias de cualquier clase que crees en Java, por ejemplo, si tienes una clase <code>Persona</code>, puedes crear una variable de referencia a una instancia de <code>Persona</code>).</p>

        <h2>3. Variables Locales</h2>
        <p>Las variables locales son declaradas dentro de un método y solo son accesibles dentro de ese método. No tienen valores predeterminados y deben ser inicializadas antes de ser usadas.</p>

        <h2>4. Variables de Instancia</h2>
        <p>Las variables de instancia son variables no estáticas que pertenecen a una instancia específica de una clase. Cada objeto de la clase tiene su propia copia de la variable de instancia.</p>

        <h2>5. Variables de Clase</h2>
        <p>Las variables de clase (también conocidas como variables estáticas) son declaradas con la palabra clave <code>static</code> dentro de una clase, pero fuera de cualquier método. Solo hay una copia de la variable de clase, independientemente de cuántos objetos se creen de la clase.</p>
        
      </article>
    </>);
}

export default Blog