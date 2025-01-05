import { moveItemsToDelivery } from '../../redux/slices/cartSlice';
import { useDispatch } from "react-redux";


import { IoMdClose } from "react-icons/io";
import './DeliveryModal.scss'

const DeliveryModal = ({ totalPrice, closeModal, isModalOpen, selectedProduct, totalCount }) => {
    if (!isModalOpen || !selectedProduct) return null;
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        e.preventDefault();
        dispatch(moveItemsToDelivery()); 
        closeModal(); 
    };

    return (
        <div className='delivery'>
            <div className="delivery__content">
                <button className='close-btn' onClick={closeModal}><IoMdClose size='20' /></button>
                <form onSubmit={handleOrder}>
                    <input placeholder='Введите свой адрес' type="adress" />
                    <input placeholder='Введите свой email' type="email" />
                    <p>Будет доставлен: завтра - послезавтра</p>
                    <p>Сумма заказа: {totalPrice} ₽</p>
                    <p>Количество: {totalCount}</p>
                    <button className="order-btn" type="submit">Заказать</button>
                </form>
            </div>
        </div>
    )
}

export default DeliveryModal
