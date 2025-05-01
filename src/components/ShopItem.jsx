const ShopItem = ({ name, color, img, price }) => {
    return (
        <div className="item">
            <img src={img} alt={name} className="item-img"/>
            <h1 className="product-title">{name}</h1>
            <h2 className="item-color">{color}</h2>
            <span className="item-price">${price}</span>
            <button className="add-btn">ADD TO CART</button>
        </div>
    );
};

export default ShopItem;