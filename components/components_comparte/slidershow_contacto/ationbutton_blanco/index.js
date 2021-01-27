import Link from 'next/link';
import React from 'react';

const BottonBlanco= ( props ) => { 
    return (
        <div className="conten_slider_show_botton_contact" >
            <Link href="/planes">
                <a> <span className="slider_show_span_1_contact"> CLICK PARA VER PLANES </span> </a>
            </Link>     
        </div>
    )
}
export default BottonBlanco;