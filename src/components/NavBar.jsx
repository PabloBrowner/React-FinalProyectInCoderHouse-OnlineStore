import imagenes from "../assets/imagenes";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={imagenes.logo} alt="" width="90" height="44"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Contacto</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <CartWidget/>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;