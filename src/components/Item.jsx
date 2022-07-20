const Item = ({item}) => {
    const{lampara, precio, img} = item;
    return(
        <div className="card" style={{width:"15rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{lampara}</h5>
                <p className="card-text">{precio}</p>
                <a href="google.com" className="btn btn-primary">
                    Ver producto
                </a>
            </div>
        </div>
    );
};

export default Item; 