import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Delivery.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { removeDeliveryItem } from '../../redux/slices/cartSlice';

import { IoMdClose } from "react-icons/io";

const Delivery = () => {
    const deliveryItems = useSelector((state) => state.cart.deliveryItems);
    const dispatch = useDispatch()

    const onClickRemove = (id, color, rom, index, type ) => {
        dispatch(
            removeDeliveryItem({
                id,
                color,
                rom,
                index,
            })
        );
    };




    return (

        <div className='wrapper'>
            <Header />
            <div className="delivery-page">
                <h2>Товары в доставке</h2>
                {deliveryItems.length === 0 ? (
                    <p className='length0'>Пока нет заказов на доставку.</p>
                ) : (
                    deliveryItems.map((delivery, index) => (
                        <div key={index} className="delivery-order">
                            <h3>Заказ №{index + 1}</h3>
                            <ul className="delivery-list">
                                {delivery.items.map((item) => (
                                    <li key={`${item.id}-${item.color}`} className="delivery-item">
                                        <img src={item.image} alt={item.title} />
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.color}</p>
                                            {item.rom == null ? '' : <p>{item.rom >= 1 && item.rom <= 10 ? `${item.rom}TB` : `${item.rom}GB`}</p>}
                                            <p>Количество: {item.count}</p>
                                            {item.type == null ? '' : <p>{item.type}</p>}
                                            <p>Цена: {item.price * item.count} ₽</p>
                                            <button onClick={() => onClickRemove(item.id, item.color, item.rom, index)}><IoMdClose /></button>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="delivery-total">Итоговая сумма заказа: {delivery.totalPrice} ₽</p>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Delivery;
