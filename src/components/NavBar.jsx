import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return ( 
      <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <img src={imagenes.logo} alt="" width="90" height="44"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" to={"/"}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={"categoria/Colgante"}>Colgante</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={"categoria/Velador"}>Velador</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <CartWidget />
                </ul>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default NavBar;