import React, { Component } from 'react'

class FormDoogsk extends Component {

    render() {
        return (
            <form className="mi_form">
                <div className="conten_miform_doogsk">
                    <div className="conten_miform_doogsk_element">
                        
                        <div className="conten_doogsk_element">
                            <div className="conten_doogsk_element_label_input">
                                <label htmlFor="textDoogsk" className="element_label"> Nombre </label>
                            </div>
                            <div className="conten_doogsk_element_label_input">
                                <input className="element_imput" type="text" id="textDoogsk" name="textDoogsk" placeholder="Escribe aquí tu nombre." />
                            </div>
                        </div>

                        <div className="conten_doogsk_element">
                            <div className="conten_doogsk_element_label_input">
                                <label htmlFor="text2Doogsk" className="element_label"> Apellidos </label>
                            </div>
                            <div className="conten_doogsk_element_label_input">
                                <input className="element_imput" type="text" id="text2Doogsk" name="text2Doogsk" placeholder="Escribe aquí tus apellidos." />
                            </div>
                        </div>

                        <div className="conten_doogsk_element">
                            <div className="conten_doogsk_element_label_input">
                                <label htmlFor="emailDoogsk" className="element_label"> Correo electrónico </label>
                            </div>
                            <div className="conten_doogsk_element_label_input">
                                <input className="element_imput" type="email" id="temailDoogsk" name="emailDoogsk" placeholder="Escribe aquí tu correo electrónico." />
                            </div>
                        </div>
                            
                        <div className="conten_doogsk_element">
                            <div className="conten_doogsk_element_label_input">
                                <label htmlFor="telDoogsk" className="element_label"> Teléfono o Celular </label>
                            </div>
                            <div className="conten_doogsk_element_label_input">
                                <input className="element_imput" type="tel" id="telDoogsk" name="telDoogsk" placeholder="Escribe aquí tu teléfono o celular." />
                            </div>
                        </div>
                            
                        <div className="conten_doogsk_element">
                            <div className="conten_doogsk_element_label_input">
                                <label htmlFor="text3Doogsk" className="element_label"> Que plan te interesa </label>
                            </div>
                            <div className="conten_doogsk_element_label_input">
                                <input className="element_imput" type="text" id="text3Doogsk" name="text3Doogsk" placeholder="Escribe aquí separado por comas los planes que te interesan." />
                             </div>
                        </div>
                            
                        <div className="conten_doogsk_element">
                            <div className="conten_doogsk_element_label_input">
                                <label htmlFor="textareaDoogsk" className="element_label"> Algo más que quieras contarnos </label>
                            </div>
                            <div className="conten_doogsk_element_label_input">
                                <textarea className="element_imput"  id="textareaDoogsk" name="textareaDoogsk" placeholder="Escribe aquí los detalles." />
                            </div>
                        </div>

                        <div className="conten_doogsk_element_botton-submit">
                            <input className="element_imput-botton-submit" type="submit" id="text3Doogsk" name="text3Doogsk" value="ENVIAR DATOS" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default FormDoogsk;