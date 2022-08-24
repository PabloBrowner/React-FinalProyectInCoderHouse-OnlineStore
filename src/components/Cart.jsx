import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder } = useContext(CartContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] })
  };
  
  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ item, quantity }) => {
      total += parseInt(item.precio) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <>
      <ul>
        {cartItems.map(({item, quantity}) => (
          <>
          <div key={item.id} className="card" style={{ width: "20rem", marginTop: "2rem" }}>
            <img className="card-img-top" src={item.img} alt="Card image cap"/>
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{item.lampara}</h5>
                <p className="card-text">{`${item.stock} unidades disponibles`}</p>
                <p className="card-text">{`$${item.precio} `}</p>
            </div>
          </div>
          </>
        ))}
      </ul>
      <h1 className="bg-primary" style={{ width: "20rem", marginLeft: "2rem" }}>{`El total es: $${totalPrice}`}</h1>

      <div class="card" style={{ width: "20rem", marginLeft: "2rem" }}>
        <div className="card-body d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre y Apellido</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Telefono</label>
              <input type="text" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Enviar orden</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;