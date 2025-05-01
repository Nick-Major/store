import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
    return (
        <div className="items-list">
            {items.length === 0 ? (
                <p className="no-cards">Нет товаров для отображения</p>
            ) : (
                <div className="items-container">
                    {items.map((item, index) => (
                        <ShopItem
                            key={`${item.name}-${index}`}
                            name={item.name}
                            color={item.color}
                            img={item.img}
                            price={item.price}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListView;