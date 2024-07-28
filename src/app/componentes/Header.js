import Image from 'next/image';
import Link from 'next/link';
import Logo from '../imagenes/logo.png'  


function Header(){

    return(
    <>
        <header>
            <div id ="header">
                <Image src={Logo} alt ="logo" width ={200} height ={200}/><h1 id='h1Header'>GEEK CODE</h1>
            </div><br/>
            <div id ="nav">
                <nav>
                    <ul>
                        <li><Link href ='/'><p>Inicio</p></Link></li>
                        <li><Link href ='/sobrenosotros'><p>Sobre Nosotros</p></Link></li>
                        <li><Link href ='/blog'><p>Blog</p></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>);

}

export default Header