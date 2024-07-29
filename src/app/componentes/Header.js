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
                        <li><Link href ='/'><p id='pLI'>Inicio</p></Link></li>
                        <li><Link href ='/sobrenosotros'><p id='pLI'>Sobre Nosotros</p></Link></li>
                        <li><Link href ='/blog'><p id='pLI'>Blog</p ></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>);

}

export default Header