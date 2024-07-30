import Link from 'next/link';
import Image from 'next/image';
import java2 from '../imagenes/javaBlogs.jpg';
import img1 from '../imagenes/img1.png';
import styles from '../page.module.css'

function Blog(){

    return(
    
    <>
    <h1>JAVA</h1><br/><br/>

    <Image src={java2} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/><br/>

    <Link href='/blog/java/tiposVariables'><h2>Tipos de Variables de Java</h2></Link>
    <Image src={img1} className={styles.imgInicio} alt ="logo"  width={900} height={500}/>
    <br/>
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
    </>);

}

export default Blog