import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const ItemsDatabase = [{
        id: 1,
        lampara: "Colgante Aro",
        precio: "$30.000",
        img: "/img/foto1.jpg"
    }, {
        id: 2,
        lampara: "Araña Vintage",
        precio: "$56.000",
        img: "/img/foto2.jpg"
    }, {
        id: 3,
        lampara: "Colgante Rob",
        precio: "$26.000",
        img: "/img/foto3.jpg"
    }, {
        id: 4,
        lampara: "Colgante Duo",
        precio: "$31.000",
        img: "/img/foto4.jpg"
    }, {
        id: 5,
        lampara: "Velador Aro",
        precio: "$29.000",
        img: "/img/foto5.jpg"
    }, {
        id: 6,
        lampara: "Leia",
        precio: "$27.000",
        img: "/img/foto6.jpg"
    }];

    const [items, setItems] = useState([]);

    console.log("Render itemlistcontainer");
    console.log(items);

    useEffect(
        () => {
                //Promesa
                let promiseItems = new Promise( (resolve, reject) => {
                    setTimeout(
                        () => {
                            resolve(ItemsDatabase);
                        }, 
                    2000);
                });

                //Cuando se cumpla la promesa
                promiseItems.then(
                    (respuesta) => {
                        setItems(ItemsDatabase);
                    }
                );
        },
        []
    );



    return ( 
        <ItemList items={items}/>
     );
}
 
export default ItemListContainer;