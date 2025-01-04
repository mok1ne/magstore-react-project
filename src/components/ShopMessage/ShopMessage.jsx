import React from "react";
import "./ShopMessage.scss";

const ShopMessage = ({ selectedProduct, currentImage, selectedRom, noice, selectedColor, price }) => {
    return (
        <div className="shop-message">
            <div className="shop-message__info">
                <h2>Товар добавлен в корзину!</h2>
                <div className="shop-message__content">
                    <div className="shop-message__image">
                        <img src={currentImage} alt={selectedProduct} /></div>
                    <div className="shop-message__item">
                        <h3>{selectedProduct}</h3>
                        {selectedRom == null ? '' : <p>Память: {selectedRom === 1 ? "1TB" : `${selectedRom}GB`}</p>}
                        {noice == null ? '' : <p>Шумоподавление: {noice}</p>}
                        <p>Цвет: {selectedColor}</p>
                        <p>Цена: {price} ₽</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopMessage;
