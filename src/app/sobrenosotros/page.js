import styles from "../page.module.css";
import Image from 'next/image';
import img from '../imagenes/AU.jpg';

function AboutUs(){

    return(
    <>
    <h1>SOBRE NOSOTROS</h1><br/>
    <Image src={img} className ={styles.imgInicio} alt ="logo"  width={900} height={500}/><br/><br/>
    <p>Somos un sitio web dedicado a crear blogs sobre programacion 
      en diferentes lenguajes (Java, C#, Python, JavaScript, etc.) para 
      aquellas personas que estan comenzando en el camino de covertirse
      en un desarrollador de software.
      </p><br/>

    <h2>MISION</h2>
    <p>Nuestra mision es ayudar a la gente a que comprenda
      mejor los conceptos que hay de Programacion y asi
      lo apliquen en sus projectos para que se desarrollen profesionalmente</p><br/>

    <h2>VISION</h2>
    <p>Nuestra vision es aportar valor a la comunidad de programadores
      y ser una marca confiable de aprendizaje para los que quieran
      convertirse en un desarrollador en diferentes campos</p><br/>

    <h2>VALORES</h2>
    <p>Confianza, Disciplina y Lealtad</p><br/>
    </>);
}

export default AboutUs