import Link from 'next/link';

const NavBar = ( props ) => { 
    return (
        <div className="conten_navbar">
            <nav className="conten_nav">
                <Link href="/">
                    <a className={`nav_a ${props.actived}`} > Inicio </a>
                </Link>
                <Link href="/doogsk">
                    <a className={`nav_a ${props.actived}`}> Doogsk </a>
                </Link>
                <Link href="/servicios">
                    <a className={`nav_a ${props.actived}`}> Servicios </a> 
                </Link>
                <Link href="/planes">
                    <a className={`nav_a ${props.actived}`}> Planes </a>
                </Link>
                <Link href="/contacto">
                    <a className={`nav_a ${props.actived}`}> Contacto </a>
                </Link>
            </nav>
            <div className="conten_info">
                <div className="info"> <span className="info_span"> +57 311 556 7899 </span> </div>
                <div className="info"> <span className="info_span"> info@googsk.com </span> </div>
            </div>
        </div>
    )
}
export default NavBar;