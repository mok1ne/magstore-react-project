import { useState } from 'react';
import { moveItemsToDelivery } from '../../redux/slices/cartSlice';
import { useDispatch } from "react-redux";

import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo/logo-image-black.png';
import './DeliveryModal.scss';

const DeliveryModal = ({ totalPrice, closeModal, isModalOpen, selectedProduct, totalCount, onOrderComplete }) => {
    if (!isModalOpen || !selectedProduct) return null;

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        address: '',
        name: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = '';

        if (!value.trim()) {
            error = `This field is required.`;
        } else {
            switch (name) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) error = 'Please enter a valid email address.';
                    break;
                case 'phone':
                    const phoneRegex = /^\+?\d{10,15}$/;
                    if (!phoneRegex.test(value)) error = 'Please enter a valid phone number.';
                    break;
                default:
                    break;
            }
        }

        return error;
    };

    const validateFormOnSubmit = (data) => {
        const validationErrors = {};
        Object.keys(data).forEach((field) => {
            const error = validateField(field, data[field]);
            if (error) validationErrors[field] = error;
        });

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', 
        }));
    };

    const handleOrder = (e) => {
        e.preventDefault();
        const isValid = validateFormOnSubmit(formData);
        if (!isValid) return;

        dispatch(moveItemsToDelivery());
        onOrderComplete();
        closeModal(true);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains ('delivery')) {
            closeModal()
        }
    }

    return (
        <div className='delivery' onClick={handleOverlayClick}>
            <div className="delivery__content">
                <button className='close-btn' onClick={closeModal}><IoMdClose size='20' /></button>
                <img className='logo-img' src={logo} alt="" />
                <form onSubmit={handleOrder}>
                    <div className='form-group'>
                        <input
                            placeholder='Введите адрес доставки'
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        {errors.address && <p className="error-message">{errors.address}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='Введите имя'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='Email'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='Номер телефона'
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>
                    <p>Будет доставлен: завтра - послезавтра</p>
                    <p>Сумма заказа: {totalPrice} ₽</p>
                    <p>Количество товаров: {totalCount}</p>

                    <button className="order-btn" type="submit">
                        Заказать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryModal;
