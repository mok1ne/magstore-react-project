import React, { useState, useEffect, lazy } from 'react';

import NavMenu from '../NavMenu/NavMenu';
const ModalWindow = lazy(() => import('../ModalWindow/ModalWindow'));

import './ShopCards.scss';


const ShopCards = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('rating');
    let defaultConfig = data
    useEffect(() => {
        const sortedData = [...data].sort((a, b) => b.rating - a.rating);
        setFilteredData(sortedData);
    }, [data]);
    const filterByPrice = (min, max) => {
        const filtered = data.filter((item) => {
            const defaultConfig = item.configure[0];
            let price
            { item.prices[defaultConfig.ROM] === undefined ? price = item.price : price = item.prices[defaultConfig.ROM]; }
            return price >= min && price <= max;

        });
        setFilteredData(filtered);


    };
    const ratingSort = () => {
        const sorterArr = [...filteredData];
        sorterArr.sort((a, b) => b.rating - a.rating);
        setFilteredData(sorterArr);
    };
    const priceSortLowest = () => {
        const sorterArr = [...filteredData];
        sorterArr.sort((a, b) => {
            
            
            let priceA = a.prices[a.configure[0].ROM];
            let priceB = b.prices[b.configure[0].ROM];
            {priceA === undefined ? priceA = a.price : ''}
            {priceB === undefined ? priceB = b.price : ''}
            return priceA - priceB;
        });
        setFilteredData(sorterArr);
    };
    const priceSortHigh = () => {
        const sorterArr = [...filteredData];
        sorterArr.sort((a, b) => {
            let priceA = a.prices[a.configure[0].ROM];
            let priceB = b.prices[b.configure[0].ROM];
            {priceA === undefined ? priceA = a.price : ''}
            {priceB === undefined ? priceB = b.price : ''}
            return priceB - priceA;
        });
        setFilteredData(sorterArr);
    };
    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="shop">
            <div className="shop__cards">
                <div className="shop__sort">
                    <div className="shop__navmenu">
                        <NavMenu onFilter={filterByPrice} />
                    </div>
                    <div className="shop__btn">
                        <p
                            onClick={() => { setSelectedFilter('rating'); ratingSort(); }}
                            className={selectedFilter === 'rating' ? 'selected' : ''}
                        >
                            По рейтингу
                        </p>
                        <p
                            onClick={() => { setSelectedFilter('lowest'); priceSortLowest(); }}
                            className={selectedFilter === 'lowest' ? 'selected' : ''}
                        >
                            Дешевле
                        </p>
                        <p
                            onClick={() => { setSelectedFilter('highest'); priceSortHigh(); }}
                            className={selectedFilter === 'highest' ? 'selected' : ''}
                        >
                            Дороже
                        </p>
                    </div>
                </div>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        defaultConfig = item.configure[0],
                        <div className="shop__card" key={item.id}>
                            <div className="shop__info">
                                <div className="shop__image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="shop__middle">
                                    <h3>{item.title}</h3>
                                    {item.configure.map((config, index) => (
                                        <div className="shop__middle" key={index}>
                                            {config.type == null ? '' : <p>Тип: {config.type}</p>}
                                            {config.screen == null ? '' : <p>Экран: {config.screen}</p>}
                                            {config.ROM == null ? '' : <p>Память: {config.ROM >= 1 && config.ROM <= 10 ? `${config.ROM}TB` : `${config.ROM}GB`} ROM / {config.RAM} ГБ RAM</p>}
                                            {config.camera == null ? '' : <p>Камера: {config.camera}</p>}
                                            {config.batery == null ? '' : <p>Батарея: {config.batery}</p>}
                                            {config.videocard == null ? '' : <p>Видеокарта: {config.videocard}</p>}
                                            {config.processor == null ? '' : <p>Процессор: {config.processor}</p>}
                                            {config.colors == null ? '' : <p>Цвета: {config.colors}</p>}
                                            {config.weight == null ? '' : <p>Вес: {config.weight}</p>}
                                            {config.noice == null ? '' : <p>Шумоподавление: {config.noice}</p>}
                                            {config.construction == null ? '' : <p>Конструкция: {config.construction}</p>}
                                            <h6>Рейтинг: {item.rating}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="shop__bottom">
                                <div className="shop__bottom-text">
                                    <p>Цена: {item.prices[defaultConfig.ROM] == null ? `${item.price}` : `${item.prices[defaultConfig.ROM]}`} ₽</p>
                                    <p>Доставка: Завтра - послезавтра</p>
                                </div>
                                <button onClick={() => handleAddToCart(item)}>В корзину</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="shop__no-results">Ничего не найдено</div>
                )}
            </div>
            <ModalWindow
                isModalOpen={isModalOpen}
                selectedProduct={selectedProduct}
                closeModal={closeModal}
            />
        </div >
    );
};

export default ShopCards;
