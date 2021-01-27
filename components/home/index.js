import Link from 'next/link';
import Layaut from '../layaut/index'
import SliderShow from '../components_comparte/slidershow/index'

const SetionHome = ( props ) => { 
    return (
        <div>
            <Layaut
                sliderShow={<SliderShow />}
                actived='activated_home'
                title='Inicio'
            >
                <div className="conten_data_1">
                    <h2 className="title_data_1"> Alimentación de calidad </h2>
                </div>

                <div className="conten_data_2">
                    <div className="conten_prod_bott">
                        <div className="conten_prod">
                            <div className="produc_1"> <img src="/images/products/products-00.png" alt="prodruct" /> </div>
                            <div className="produc_1"> <img src="/images/products/products-01.png" alt="prodruct" /> </div>
                            <div className="produc_1"> <img src="/images/products/products-02.png" alt="prodruct" /> </div>
                            <div className="produc_1"> <img src="/images/products/products-03.png" alt="prodruct" /> </div>
                        </div>

                        <div className="conten_bot_cian" >
                            <div className="conten_slider_show_cian">
                                <Link href="/">
                                     <a> <span className="slider_show_span_1_cian"> VER MÁS </span>  </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="conten_data_3">
                    <h2 className="title_data_3"> Recreación en grande </h2>
                </div>

                <div className="conten_data_4">
                    <div className="conten_prod_bott">
                        <div className="conten_prod_data4" >
                            <h2 className="title_data_4"> Conoce los planes para tu mascota </h2>
                        </div>

                        <div className="conten_bott_naranja">
                            <div className="conten_slider_show_naranja" >
                                <Link href="/planes">
                                    <a> <span className="slider_show_span_1_naranja"> CLICK AQUÍ </span> </a>    
                                </Link>                                      
                            </div>
                        </div>

                    </div>
                </div>

                <div className="conten_data_1_data5">
                    <h2 className="title_data_1_data5"> Alimentación de calidad </h2>
                </div>

                <div className="conten_data_6">
                    <div className="conten_prod_bott_data6">
                        <div className="conten_prod_data6" >
                            <h2 className="title_data6"> Deseas saber de los servicios con mayor detalle</h2>
                        </div>

                        <div className="conten_bott_naranja">
                            <div className="conten_slider_show_naranja" >
                                <Link href="/servicios">
                                    <a> <span className="slider_show_span_1_naranja"> CLICK AQUÍ </span> </a>    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conten_data7">
                    <div className="conten_services_data7">
                        <div className="conten_image_data7">
                            <img src="/images/services/services-00.png" alt="services" />
                        </div>
                    
                        <div className="conten_title_services_data7">
                            <div className="conten_sevicses_title_data7">
                                <h2 className="title_services_data7"> Veterinaria </h2> 
                                <Link href="/servicios">
                                    <a> <p className="verMas_data7"> VER MÁS </p> </a>    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conten_data8">
                    <div className="conten_services_data8">
                        <div className="conten_title_services_data8">
                            <div className="conten_sevicses_title_data8">
                                <h2 className="title_services_data8"> Alimentación </h2> 
                                <Link href="/servicios">
                                    <a> <p className="verMas_data8"> VER MÁS </p> </a>    
                                </Link>  
                            </div>
                        </div>

                        <div className="conten_image_data8">
                            <img src="/images/services/services-01.png" alt="services" />
                        </div>
                    </div>
                </div>

                <div className="conten_data7">
                    <div className="conten_services_data7">
                        <div className="conten_image_data7">
                            <img src="/images/services/services-02.png" alt="services" />
                        </div>
                    
                        <div className="conten_title_services_data7">
                            <div className="conten_sevicses_title_data7">
                                <h2 className="title_services_data7"> Peluquería </h2> 
                                <Link href="/servicios">
                                    <a> <p className="verMas_data8"> VER MÁS </p> </a>     
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conten_data8">
                    <div className="conten_services_data8">
                        <div className="conten_title_services_data8">
                            <div className="conten_sevicses_title_data8">
                                <h2 className="title_services_data8">  Recreación </h2> 
                                <Link href="/servicios">
                                    <a> <p className="verMas_data8"> VER MÁS </p> </a>    
                                </Link>
                            </div>
                        </div>

                        <div className="conten_image_data8">
                            <img src="/images/services/services-03.png" alt="services" />
                        </div>
                    </div>
                </div>

                <div className="conten_data7">
                    <div className="conten_services_data7">
                        <div className="conten_image_data7">
                            <img src="/images/services/services-04.png" alt="services" />
                        </div>
                    
                        <div className="conten_title_services_data7">
                            <div className="conten_sevicses_title_data7">
                                <h2 className="title_services_data7"> Guardería </h2> 
                                <Link href="/servicios">
                                    <a> <p className="verMas_data8"> VER MÁS </p> </a>    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="conten_data_6">
                    <div className="conten_prod_bott_data6">
                        <div className="conten_prod_data6" >
                            <h2 className="title_data6"> Deseas saber de los servicios con mayor detalle</h2>
                        </div>

                        <div className="conten_bott_naranja">
                            <div className="conten_slider_show_naranja" >
                                <Link href="/servicios">
                                    <a> <span className="slider_show_span_1_naranja"> CLICK AQUÍ </span>  </a>    
                                </Link>          
                            </div>
                        </div>
                    </div>
                </div>

                <div className="conten_data9">
                    <div className="conten_prod_bott_data9">
                        <div className="conten_bott_data9" >
                            <div className="conten_botton_blanco" >
                                <Link href="/contacto">
                                    <a> <span className="botton_blanco"> ESCRIBENOS </span> </a>    
                                </Link>    
                            </div>
                        </div>
                    </div>
                </div>

            </Layaut>
        </div>
    )
}

export default SetionHome;