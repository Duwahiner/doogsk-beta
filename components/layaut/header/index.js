import Logo from '../logo/index';
import NavBar from '../navbar/index';

const Header = ( props ) => {
    return (
        <div className="conten_header">
            <div className="conten_cabecera">
                <div className="conten_logo_nav">
                    <div className="conten_cabecera">
                        <div className="conten_logo_nav">
                            <Logo />
                            <NavBar actived={props.actived} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Header;
