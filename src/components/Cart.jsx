import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total += Number(item.subtotal);
    });
    setTotalPrice(total);
  }, [cartItems]);
  console.log(totalPrice);
  return (
    <>
      <ul>
        {cartItems.map((item,index) => (
          <div key={index} >
            <li>{item.lampara}</li>
            <li>{item.precio}</li>
          </div>
        ))}
      </ul>
      <h1 className="bg-primary">{`El total es: $${totalPrice}`}</h1>
    </>
  );
};

export default Cart;