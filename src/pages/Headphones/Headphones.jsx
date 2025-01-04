
import './Headphones.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShopCards from '../../components/ShopCards/ShopCards';

import headphonesData from '../../data/productsData/headphonesData';




const Headphones = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="headphones">
                <div className="headphones__title">
                    <h2>Наушники</h2>
                </div>
                <div className="headphones__info">
                    <ShopCards data={headphonesData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Headphones;



