import BottonBlanco from './ationbutton_blanco/index'
import Bajar from './bajar/index'

const SliderShow = ( props ) => { 
    return (
        <div className="conten_sli_home"> 
            <div className="conten_slider_show" >
                <h1 className="title_show"> Veterinaria </h1>
                <p className="descrip_show"> Alimentación y cuidado para mascotas </p>
                <BottonBlanco />
                <Bajar />
            </div>
        </div>
    )
}
export default SliderShow;