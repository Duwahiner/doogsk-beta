import React from 'react';
import LogoFoot from './svg/log-foo.svg';

const Footer = ( props ) => { 
    return (
        <div className="conten_footer" >
            <div className="conten_footer_element">
                <div className="conten_logo_footer ">
                    <div className="log_foo">
                        <LogoFoot />
                    </div>
                </div>
                <div className="conten_empresa_footer" >
                    <div className="conten_empresa">
                        <div className="conten_title_empresa">
                            <h2 className="title_empresa"> Contactanos - Empresa Doogsk </h2>
                        </div>
                        <div className="conten_contac">
                            <span className="info_conta"> Doogsk una empresa de Toribar </span>
                            <span className="info_conta"> Correo electronico: info@doogsk.com </span>
                            <span className="info_conta"> Teléfono: +57 311 300 5678 </span>
                            <span className="info_conta"> Dirección: Cra. 56 # 56 - 78 </span>
                            <span className="info_conta"> Siguenos en las redes sociales: Doogsk </span>
                            <div className="conte_redes">
                                <span className="info_redes"> Facebook </span>
                                <span className="info_redes"> Twitter </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conten_servicios_footer" >
                    <div className="conten_servicios_decrip">
                        <div className="conten_title_servicios">
                            <h2 className="title_servicios"> Acerca de los Servicios </h2>
                        </div>
                        <div className="conten_servicios">
                            <span className="info_servicios"> Veterinaria </span>
                            <span className="info_servicios"> Alimentación </span>
                            <span className="info_servicios"> Guardería </span>
                            <span className="info_servicios"> Peluquería </span>
                            <span className="info_servicios"> Recreacción </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contes_desing"> <span> Copyright © 2019 - Doogsk | Desesarro web y Diseño gráfico >> Ghobbit. </span> </div>
        </div>
    )
}

export default Footer;
