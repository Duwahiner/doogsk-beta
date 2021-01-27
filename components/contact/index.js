import Link from 'next/link';
import Layaut from '../layaut/index'
import SliderShow from '../components_comparte/slidershow_contacto/index'
import FormDoogsk from '../components_comparte/formulario_doogsk/index'

const SetionContact = ( props ) => { 
    return (
        <div>
            <Layaut
                sliderShow={<SliderShow />}
                actived='activated_doogsk'
                title='Contacto'
            >

                <div className="conten_data_1_contact color_cian">
                    <h2 className="title_data_1_contact"> Cuentanos, estamos en confianza </h2>
                </div>

                <FormDoogsk />

                <div className="conten_data9">
                    <div className="conten_prod_bott_data9"> 
                        <div className="conten_bott_data9">
                            <div className="conten_botton_blanco">
                                <Link href="/planes">
                                    <a> <span className="botton_blanco"> CLICK PARA VER PLANES </span> </a>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>

            </Layaut>
        </div>
    )
}

export default SetionContact;