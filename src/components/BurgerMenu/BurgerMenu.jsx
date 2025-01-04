import { useState } from 'react';
import { NavLink } from 'react-router-dom'

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo/logo-image-black.png'

import './BurgerMenu.scss'


const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(!isActive); // Переключаем состояние
    };
    return (
        <>
            <button onClick={toggleMenu} className='header__menu'>
                <IoIosMenu style={{ color: '#ffffffcc' }} size={30} />
            </button>

            <div className={`burger__menu-style ${isActive ? 'active' : ''}`}>
                <button onClick={toggleMenu}>
                    <IoMdClose size='24' />
                </button>
                <img src={logo} alt="" className="logo" />
                <ul>
                    <li className='header__list'><NavLink to='/'>Главная</NavLink></li>
                    <li className='header__list'><NavLink to='/Products'>Товары</NavLink></li>
                    <li className='header__list'><NavLink to='/Phones'>Смартфоны</NavLink></li>
                    <li className='header__list'><NavLink to='/Laptops'>Ноутбуки</NavLink></li>
                    <li className='header__list'><NavLink to='/Headphones'>Наушники</NavLink></li>
                    <li className='header__list'><NavLink to='/Accessories'>Аксессуары</NavLink></li>
                </ul>
            </div>

        </>
    );
}

export default BurgerMenu;