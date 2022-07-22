import { Link } from "react-router-dom";

const Item = ({item}) => {
    const{lampara, precio, img, id} = item;
    return(
        <div className="card" style={{width:"15rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{lampara}</h5>
                <p className="card-text">{precio}</p>
                <Link to={`item/${id}`}>
                    <button className="btn btn-primary">Ver detalle de producto</button>
                </Link>
            </div>
        </div>
    );
};

export default Item; 