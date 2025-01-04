import './Header.scss'
import { NavLink } from 'react-router-dom'
import { IoBag } from "react-icons/io5";
import { useSelector } from 'react-redux';



import logo from '../../assets/logo/logo-image-white.png'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
    const { items } = useSelector(state => state.cart)

    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <header className='header'>
            <div className='header__inner'>
                <nav className='header__nav'>
                    <ul className='header__ul'>

                        <div className='header__logo'>
                            <NavLink to='/'>
                                <img src={logo} alt="Header Logo" />
                            </NavLink>
                        </div>
                        <div className='header__info'>
                            <ul>
                                <li className='header__list'><NavLink to='/'>Главная</NavLink></li>
                                <li className='header__list'><NavLink to='/Products'>Товары</NavLink></li>
                                <li className='header__list'><NavLink to='/Phones'>Смартфоны</NavLink></li>
                                <li className='header__list'><NavLink to='/Laptops'>Ноутбуки</NavLink></li>
                                <li className='header__list'><NavLink to='/Headphones'>Наушники</NavLink></li>
                            </ul>
                        </div>

                        <div className="header__left">


                            <NavLink to='/bag'>
                                <div className="header__bag" style={{ color: '#ffffffcc' }}>
                                    <IoBag size={24} />
                                    {totalCount == 0 ? '' : <div className='bag__info'>{totalCount}</div>}


                                </div>
                            </NavLink>
                            <BurgerMenu />
                        </div>


                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

