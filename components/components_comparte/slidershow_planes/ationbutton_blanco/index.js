import Link from 'next/link';
import React from 'react';

const BottonBlanco= ( props ) => { 
    return (
        <div className="conten_slider_show_botton_planes" >
            <Link href="/contacto">
                <a> <span className="slider_show_span_1_planes"> ESCRIBENOS </span> </a>
            </Link> 
        </div>
    )
}
export default BottonBlanco;