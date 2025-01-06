import { moveItemsToDelivery } from '../../redux/slices/cartSlice';
import { useDispatch } from "react-redux";
import { useState } from 'react';

import DeliveryConfirm from '../DeliveryConfirm/DeliveryConfirm'

import { IoMdClose } from "react-icons/io";
import './DeliveryModal.scss'

const DeliveryModal = ({ totalPrice, closeModal, isModalOpen, selectedProduct, totalCount }) => {
    if (!isModalOpen || !selectedProduct) return null;
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        e.preventDefault();
        dispatch(moveItemsToDelivery());
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
        setTimeout(()=> closeModal(true), 3200)
    };

    return (
        <div className='delivery'>
            <div className="delivery__content">
                <button className='close-btn' onClick={closeModal}><IoMdClose size='20' /></button>
                <form onSubmit={handleOrder}>
                    <input placeholder='Введите свой адрес' type="adress" />
                    <input placeholder='Email' type="email" />
                    <input placeholder='Номер телефона' type="tel" />
                    <p>Будет доставлен: завтра - послезавтра</p>
                    <p>Сумма заказа: {totalPrice} ₽</p>
                    <p>Количество: {totalCount}</p>

                    <button className="order-btn" type="submit">Заказать</button>
                </form>
            </div>
            {showMessage && (
                <DeliveryConfirm />
            )}
        </div>
    )
}

export default DeliveryModal
