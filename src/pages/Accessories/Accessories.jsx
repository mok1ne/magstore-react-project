import './Accessories.scss'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShopCards from '../../components/ShopCards/ShopCards';
import accessoriesData from '../../data/productsData/accessoriesData';

const Accessories = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="accessories">
                <div className="accessories__title">
                    <h2>Аксессуары</h2>
                </div>
                <div className="accessories__info">
                    <ShopCards data={accessoriesData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Accessories;



