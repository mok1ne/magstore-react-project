import { useSelector } from 'react-redux';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Bag.scss';
import BagItem from "../../components/BagItem/BagItem";

const Bag = () => {
    const { totalPrice } = useSelector((state) => state.cart);
    const items = useSelector((state) => state.cart.items);

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
                                <button className='order-btn'>Заказать</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Bag;
