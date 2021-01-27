import BottonBlanco from './ationbutton_blanco/index'
import Bajar from './bajar/index'

const SliderShow = ( props ) => { 
    return (
        <div className="conten_sli_services">
            <div className="conten_slider_show_services" >
                <div className="slider_show_services">
                    <h1 className="title_show_services">Disfrutamos de la compañía de tu mascota </h1>
                    <BottonBlanco />
                    <Bajar />
                </div>
            </div>
        </div>
    )
}
export default SliderShow;