import Link from 'next/link';
import Image from 'next/image';
import img5 from '../imagenes/blogs.jpg';
import java from '../imagenes/javaLogo.png';
import js from '../imagenes/jsLogo.png';
import styles from "../page.module.css";

function Blog(){

    return(
    <>
    <h1>BLOG</h1><br/><br/>

    <Image src={img5} className ={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/><br/>

    <Link href='/blog/java'><h2>Articulos de Java</h2></Link>
    <Image src={java} className ={styles.imgInicio} alt ="logo" width={900} height={500}/><br/>

    <h2>Articulos de JavaScript</h2>
    <Image src={js} className ={styles.imgInicio} alt ="logo" width={900} height={500}/><br/>
    
    </>);
}

export default Blog