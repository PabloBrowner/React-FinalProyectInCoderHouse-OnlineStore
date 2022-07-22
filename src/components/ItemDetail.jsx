

const ItemDetail = ({item}) => {
    const {lampara, precio, img, detalle} = item;
    
    return ( 
        <>
        <div className="card mb-3" style={{width: "50rem", height: "30rem"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" style={{width: "50rem", height: "30rem"}}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{lampara}</h3>
                    <p className="card-text">{detalle}</p>
                    <p className="card-text"><small className="text-muted">{precio}</small></p>
                    <button className="btn btn-primary">Comprar</button>
                </div>
                </div>
            </div>
        </div>
        </> 
    );
}
 
export default ItemDetail;
