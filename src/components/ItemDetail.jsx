import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({item}) => {
    const { setCartItems } = useContext(CartContext);
    const [amount, setAmount] = useState(0);
    const {lampara, precio, img, detalle, stock} = item;
    const onAdd = (amount) => {
        setAmount(amount);
        setCartItems((prevState) => [...prevState, item]);
      };
    
    return ( 
        <>
        <div className="card mb-3" style={{width: "50rem", height: "30rem"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" style={{width: "50rem", height: "30rem"}}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{lampara}</h3>
                    <p className="card-text">{detalle}</p>
                    <p className="card-text">{`${stock} unidades disponibles`}</p>
                    <p className="card-text"><small className="text-muted">{precio}</small></p>
                </div>
                </div>
            </div>
            {amount == 0 ? (
                <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            ) : (
                <h1>Cantidad de compra {amount}</h1>
            )}
            <div className="d-flex justify-content-center my-3">
                <Link to="/cart/">
                    <button className="btn btn-warning">Ir al carrito</button>
                </Link>
            </div>
        </div>
        </> 
    );
};
 
export default ItemDetail;
