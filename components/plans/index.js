import Link from 'next/link';
import Layaut from '../layaut/index'
import SliderShow from '../components_comparte/slidershow_planes/index'
import Planes from '../components_comparte/planes_doogsk/inden'

const SetionPlanes = ( props ) => { 
    return (
        <div>
            <Layaut
                sliderShow={<SliderShow />}
                actived='activated_doogsk'
                title='Planes'
            >

                <div className="conten_data_1_planes doogsk_naranja">
                    <h2 className="title_data_1_planes"> Plan doogsk plus </h2>
                </div>
                <Planes 
                    background="doogsk_naranja"
                    detalles="Alimentación balenceada, salud, entretenimiento, reviciones y consultas veterinaria ilimitadas"
                    ano="1 Año"
                    precio="$ 200.000"
                />

                <div className="conten_data_1_planes doogsk_verde">
                    <h2 className="title_data_1_planes"> Plan doogsk alfa </h2>
                </div>
                <Planes 
                    background="doogsk_verde"
                    detalles="Alimentación balenceada, salud y esparcimiennto"
                    ano="10 Meses"
                    precio="$ 120.000"
                />

                <div className="conten_data_1_planes doogsk_fucsia">
                    <h2 className="title_data_1_planes"> Plan doogsk junior </h2>
                </div>
                <Planes 
                    background="doogsk_fucsia"
                    detalles="Alimentación balenceada y 2 consultas veterinarias"
                    ano="5 Meses"
                    precio="$ 60.000"
                />

                <div className="conten_data_1_planes doogsk_cian">
                    <h2 className="title_data_1_planes"> Plan doogsk basico </h2>
                </div>
                <Planes 
                    background="doogsk_cian"
                    detalles="Alimentación balenceada y 1 consulta veterinaria"
                    ano="3 Meses"
                    precio="$ 40.000"
                />

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

                <div className="conten_data9">
                    <div className="conten_prod_bott_data9"> 
                        <div className="conten_bott_data9">
                            <div className="conten_botton_blanco">
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

export default SetionPlanes;