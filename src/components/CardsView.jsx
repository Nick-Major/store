const CardsView = ({cards}) => {
    return (
        <div className="cards-list">
            {cards.length === 0 ? (
                <p className="no-cards">Нет товаров для отображения</p>
            ) : (
                <div className="cards-container">
                    {cards.map((card, index) => (
                        <div key={`${card.name}-${index}`} className="card">
                            <h1 className="card-title">{card.name}</h1>
                            <h2 className="product-color">{card.color}</h2>
                            <img src={card.img} alt={card.name} className="card-img" />
                            <div className="card-footer">
                                <span className="price">`$${card.price}`</span>
                                <button className="add-btn">add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};