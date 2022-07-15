import React from "react";

function ItemList (props) {
    console.log("Render ItemList", props.items)
    return(
        <>
        <h1>Catalogo</h1>
        {
            props.items.map(
                cadaItem => {
                return <div key={cadaItem.id} className="d-flex justify-content-evenly">
                    <div className="card " style={{width: 200}}>
                        <img src={cadaItem.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{cadaItem.lampara}</h5>
                            <p className="card-text">{cadaItem.precio}</p>
                            <a href="#" className="btn btn-primary">Ver detalle</a>
                        </div>
                    </div>
                </div>
                }
            )
        }
        </>
    );
}

export default ItemList