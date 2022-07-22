import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import details from "./utils/details.json"
import { useParams } from "react-router-dom";
import Spinner from "./ExampleComponents/Spinner";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const [loading, setLoading] = useState(false);
    const params = useParams();

    const promise = new Promise((res, rej) => {
        setTimeout(() => res(details), 2000);
      });

      useEffect(() => {
        setLoading(true);
        promise.then((response) => {
          const foundItem = response.filter((item) => item.id == params.id);
          setItem(foundItem[0]);
          setLoading(false);
        });
      }, []);
      return loading ? <Spinner /> : <ItemDetail item={item} />;
    };
    
    export default ItemDetailContainer;