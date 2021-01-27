import Link from 'next/link';
import React from 'react';

const BottonBlanco= ( props ) => { 
    return (
        <div className="conten_slider_show_botton" >
            <Link href="/contacto">
                <a> <span className="slider_show_span_1"> ESCRIBENOS </span> </a>
            </Link>  
        </div>
    )
}
export default BottonBlanco;