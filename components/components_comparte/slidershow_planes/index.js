import BottonBlanco from './ationbutton_blanco/index'
import Bajar from './bajar/index'

const SliderShow = ( props ) => { 
    return (
        <div className="conten_sli_planes">
            <div className="conten_slider_show_planes" >
                <div className="slider_show_planes">
                    <h1 className="title_show_planes"> Tenemos los mejores planes para tu mascota </h1>
                    <BottonBlanco />
                    <Bajar /> 
                </div>
            </div>
        </div>
    )
}
export default SliderShow;