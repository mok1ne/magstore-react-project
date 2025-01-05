import React from 'react';
import { useSelector } from 'react-redux';

import './Delivery.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Delivery = () => {
    const deliveryItems = useSelector((state) => state.cart.deliveryItems);

    return (

        <div className='wrapper'>
            <Header />
            <div className="delivery-page">
            <h2>Товары в доставке</h2>
            {deliveryItems.length === 0 ? (
                <p>Пока нет заказов на доставку.</p>
            ) : (
                deliveryItems.map((delivery, index) => (
                    <div key={index} className="delivery-order">
                        <h3>Заказ #{index + 1}</h3>
                        <ul className="delivery-list">
                            {delivery.items.map((item) => (
                                <li key={`${item.id}-${item.color}`} className="delivery-item">
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>Количество: {item.count}</p>
                                        <p>Цена: {item.price * item.count} ₽</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="delivery-total">Итоговая сумма: {delivery.totalPrice} ₽</p>
                    </div>
                ))
            )}
        </div>
                <Footer/>
        </div>
    );
};

export default Delivery;
