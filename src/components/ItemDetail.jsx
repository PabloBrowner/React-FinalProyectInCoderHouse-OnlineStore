import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const { lampara, precio, img, detalle, stock } = item;
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, { item, quantity: amount }]);
  };

  return (
<div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{lampara}</h5>
        <p className="card-text">{detalle}</p>
        <p className="card-text">{`${stock} unidades disponibles!`}</p>
        <p className="card-text">{`$${precio}`}</p>
      </div>
      {amount == 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd} />}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Terminar mi compra</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
