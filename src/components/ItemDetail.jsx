import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const {lampara, precio, img, detalle, stock} = item;
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, { item, quantity: amount }]);
    console.log(item.img)
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"> 
      <div className="card mb-3" style={{ width: "80rem", height: "30rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid rounded-start" src={img} alt="Card image cap" style={{ width: "50rem", height: "30rem" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{lampara}</h5>
              <p className="card-text">{detalle}</p>
              <p className="card-text">{`${stock} unidades disponibles!`}</p>
              <p className="card-text">{`$${precio}`}</p>
            </div>
            {amount == 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd} />}
            <div className="d-flex justify-content-center my-3">
              <Link to="/cart/">
                <button className="btn btn-success">Terminar mi compra</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
