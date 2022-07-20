import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import details from "./utils/details.json"

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    const promise = new Promise ( (resolve) => {
        setTimeout( () => resolve(details), 2000); 
    });

    useEffect(() => {
        promise.then((res) => setItems(details)); 
    },[]);

    return ( 
        <>
        <div>
        {items.map((item) => (
                    <div key={item.id} className="col-sm">
                        <ItemDetail items={items}/>
                    </div>
                ))}
            
        </div>
        </>
     );
}
 
export default ItemDetailContainer;