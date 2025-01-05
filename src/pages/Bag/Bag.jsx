import { useSelector } from 'react-redux';
import React, { useState } from 'react'

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BagItem from "../../components/BagItem/BagItem";
import DeliveryModal from '../../components/DeliveryModal/DeliveryModal';


import './Bag.scss';

const Bag = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { totalPrice } = useSelector((state) => state.cart);
    const items = useSelector((state) => state.cart.items);
    const totalCount = items.reduce((acc, item) => acc + item.count, 0); 

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToDeliverty = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };
    return (
        <>
            <Header />
            <div className="bag">
                <div className="bag__inner">
                    <h2>Корзина</h2>
                    {items.length === 0 ? (
                        <div className="bag__empty">
                            <p>В корзине ничего нет</p>
                        </div>
                    ) : (
                        <>
                            <div className='bag__cards'>
                                {items.map((item) => (
                                    <BagItem key={item.id} {...item} />
                                ))}
                            </div>
                            <div className='bag__bottom'>
                                <h6>Полная стоимость: {totalPrice} ₽</h6>
                                <button onClick={handleAddToDeliverty} className='order-btn'>Заказать</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <DeliveryModal
                totalPrice={totalPrice}
                totalCount={totalCount}
                selectedProduct={selectedProduct}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
            <Footer />
        </>
    );
};

export default Bag;
