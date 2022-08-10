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
          <div key={item.id} className="card" style={{ width: "20rem" }}>

            <img className="card-img-top" src={item.img} alt="Card image cap"/>

            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{item.lampara}</h5>
                <p className="card-text">{`${item.stock} units available!`}</p>
                <p className="card-text">{`$${item.precio} `}</p>
            </div>
          </div>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`El total es: $${totalPrice}`}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
        <button type="submit" className="btn btn-info">Enviar orden</button>
      </form>
    </>
  );
};

export default Cart;