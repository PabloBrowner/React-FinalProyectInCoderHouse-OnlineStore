import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import data from "./utils/data.json"

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const promise = new Promise ( (resolve) => {
        setTimeout( () => resolve(data), 2000); //Esto se hace para simular el retraso
    });

    useEffect(() => {
        promise.then((res) => setItems(data)); //Esto se hace para simular el retraso
    },[]);

    return ( 
        <>
        <div className="mt-5">
            <ItemList items={items}/>
        </div>
        </>
     );
}
 
export default ItemListContainer;