import './Laptops.scss'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShopCards from '../../components/ShopCards/ShopCards';
import laptopsData from '../../data/productsData/laptopsData';

const Laptops = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="laptops">
                <div className="laptops__title">
                    <h2>Ноутбуки</h2>
                </div>
                <div className="laptops__info">
                    <ShopCards data={laptopsData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Laptops;



