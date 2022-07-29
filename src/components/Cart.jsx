import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.precio);
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <>
            <li>{item.lampara}</li>
            <li>{item.precio}</li>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`El total es: $${totalPrice}`}</h1>
    </>
  );
};

export default Cart;