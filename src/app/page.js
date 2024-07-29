import styles from "./page.module.css";
import Image from 'next/image';
import img from './imagenes/coding.jpg';
import img2 from './imagenes/python.jpg';
import img3 from './imagenes/lenguajes.jpg';

export default function Home() {
  return (
    <>
      <h1>INICIO</h1><br/>
      <h2>BIENVENIDO A NUESTRA PAGINA WEB</h2><br/>
      <Image src={img} className ={styles.imgInicio} alt ="logo"  width={900} height={500}/><br/><br/>


      <h2>APRENDE DE PROGRAMACION CON NUESTROS BLOGS!!</h2><br/>
      <Image src={img2} className ={styles.imgInicio} alt ="logo"  width={900} height={500}/><br/><br/>


      <h2>PYTHON, C#, JAVA, JAVASCRIPT Y MAS...</h2><br/>
      <Image src={img3} className ={styles.imgInicio} alt ="logo"  width={900} height={500}/><br/><br/>

    </>
  );
}
