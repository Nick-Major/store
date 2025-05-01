import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
    return (
        <div className="cards-list">
            {cards.length === 0 ? (
                <p className="no-cards">Нет товаров для отображения</p>
            ) : (
                <div className="cards-container">
                    {cards.map((card, index) => (
                        <ShopCard
                            key={`${card.name}-${index}`}
                            name={card.name}
                            color={card.color}
                            img={card.img}
                            price={card.price}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardsView;