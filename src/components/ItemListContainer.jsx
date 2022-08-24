import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import data from "./utils/data.json"
import { useParams } from "react-router-dom";
import Spinner from "./ExampleComponents/Spinner";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(data);
        setLoading(false);
      });
    }, [name]);

    if(name){

      setItems(data.filter(item=> item.categoria.toLowerCase() == name.toLowerCase()))
      
      setLoading(false)
      
      }
  
    if (loading) {
      return <Spinner />;
      }
  
    return (
      <>
        <div className="mt-5">
          <ItemList items={items} />
        </div>
      </>
      );
    };
    
    export default ItemListContainer;