
const PlanesDoogsk = (props) => {
    return (
        <div className="conten_planes-doogsk">
            <div className="conten_planes_full">
                <div className="planes-doogsk_full">
                    <div className={`conten_planes-doogsk_title ${props.background}`}>
                        <p className="planes-doogsk_full_title" > SERVICIOS </p>
                    </div>
                    <div className="conten_planes-doogsk_detalles gris_oscuro">
                        <p className="doogsk_full_detalles"> {props.detalles} </p>
                    </div>
                </div>

                <div className="planes-doogsk_full">
                    <div className={`conten_planes-doogsk_title ${props.background}`}>
                        <p className="planes-doogsk_full_title"> DURACIÓN </p>
                    </div>
                    <div className="conten_planes-doogsk_detalles gris_claro">
                        <p className="doogsk_full_detalles black_2"> {props.ano} </p>
                    </div>
                </div>

                <div className="planes-doogsk_full">
                    <div className={`conten_planes-doogsk_title ${props.background}`}>
                        <p className="planes-doogsk_full_title"> PRECIO </p>
                    </div>
                    <div className="conten_planes-doogsk_detalles gris_oscuro">
                        <p className="doogsk_full_detalles black"> {props.precio} </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default PlanesDoogsk;