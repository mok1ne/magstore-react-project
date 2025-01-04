import { useState } from 'react';
import './Phones.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShopCards from '../../components/ShopCards/ShopCards';

import phonesData from '../../data/productsData/phonesData';

const Phones = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="phones">
                <div className="phones__title">
                    <h2>Смартфоны</h2>
                </div>
                <div className="phones__info">
                    <ShopCards data={phonesData} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Phones;
