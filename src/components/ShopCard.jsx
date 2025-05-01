const ShopCard = ({ name, color, img, price }) => {
    return (
        <div className="card">
            <h1 className="card-title">{name}</h1>
            <h2 className="product-color">{color}</h2>
            <img src={img} alt={name} className="card-img" />
            <div className="card-footer">
                <span className="price">${price}</span>
                <button className="add-btn">ADD TO CART</button>
            </div>
        </div>
    );
};

export default ShopCard;