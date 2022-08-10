import React, { createContext, useState } from "react";
import { addDoc, collection, getFirestore, writeBatch, query, where, getDocs, documentId} from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };

    const batch = writeBatch(db);
    const idList = cartItems.map((product) => product.item.id);
    const withoutStock = [];
    const collectionRef = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = cartItems.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });

    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Tu numero de orden es: ${addResponse.id}`);
    } else {
      alert(
        "La compra no fue completada. No hay suficientes productos en stock"
      );
    }
  }; 

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;