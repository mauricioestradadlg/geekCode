import Link from 'next/link';
import Image from 'next/image';
import java2 from '../imagenes/javaBlogs.jpg';
import img1 from '../imagenes/img1.png';
import img2 from '../imagenes/condicionales.png';
import img3 from '../imagenes/dataJava.png';
import img4 from './imagenes/ciclosJava.png';
import img5 from './imagenes/operadoresJava.png';
import img6 from '../imagenes/funcionesJava.png'
import img7 from '../imagenes/mathJava.png'
import img8 from '../imagenes/arregloMatriz.png'
import styles from '../page.module.css'

function Blog(){

    return(
    
    <>
    <h1>JAVA</h1><br/><br/>

    <Image src={java2} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/><br/>

    <Link href='/blog/java/tiposVariables'><h2>Tipos de Variables en Java</h2></Link>
    <Image src={img1} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/condicionales'><h2>Tipos de Condicionales en Java</h2></Link>
    <Image src={img2} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/datos'><h2>Datos de Entrada y Salida en Java</h2></Link>
    <Image src={img3} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/ciclos'><h2>Tipos de Ciclos en Java</h2></Link>
    <Image src={img4} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/operadoresLogicos'><h2>Tipos de Operadores Logicos en Java</h2></Link>
    <Image src={img5} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/funciones'><h2>Funciones en Java</h2></Link>
    <Image src={img6} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/math'><h2>Funciones Matematicas en Java</h2></Link>
    <Image src={img7} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    <Link href='/blog/java/arregloMatriz'><h2>Arreglos y Matrices en Java</h2></Link>
    <Image src={img8} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>

    
    </>);

}

export default Blog