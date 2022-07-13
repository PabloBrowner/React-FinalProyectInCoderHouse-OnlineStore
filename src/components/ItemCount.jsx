import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const registrarClick = (operacion) => {
        if (operacion + count >= initial && operacion + count <= stock) {
            setCount(count + operacion)
        }
    }
    return ( 
        <>
        <div className="card text-center" style={{width: 200}}>
            <div className="card-body">
                <h5 className="card-title">Lampara</h5>
                <button type="button" className="btn btn-primary" onClick={() => registrarClick(-1)}>-</button>
                {count}
                <button type="button" className="btn btn-primary" onClick={() => registrarClick(1)}>+</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
        </>
     );
}
 
export default ItemCount;