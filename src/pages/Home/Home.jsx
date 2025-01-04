import { NavLink } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import InfoCards from '../../components/InfoCards/InfoCards';
import MarketCards from '../../components/MarketCards/MarketCards';

import './Home.scss'

const Home = () => {
    return (
        <>
            <div className='wrapper'>
                <Header />
                <main className='main'>
                    <section className='info'>
                        <div className='info__cards'>
                            <NavLink to="/Phones"><InfoCards id="1" title="iPhone 16 Pro" desc='Hello, Apple Intelligence.' infoBtn='info-btn info-btn-blue ' buyBtn='buy-btn buy-btn-blue' /></NavLink>
                            <NavLink to="/Phones"><InfoCards id='2' title='iPhone 16' desc='Hello, Apple Intelligence.' infoBtn='info-btn info-btn-white ' buyBtn='buy-btn buy-btn-white' /></NavLink>
                        </div>
                    </section>
                    <section className='market'>
                        <div className="market__cards">
                            <NavLink to="/Headphones"><MarketCards id="1" title="AirPods 2 Pro" desc="How with a Hearing Aid Feature." infoBtn='info-btn info-btn-blue ' buyBtn='buy-btn buy-btn-blue' flex="flex-end" textColor='' /></NavLink>
                            <NavLink to="/Laptops"><MarketCards id="2" title="MacBook Air" desc="Lean. Mean. M3 machine." infoBtn='info-btn info-btn-blue ' buyBtn='buy-btn buy-btn-blue' flex="" textColor="black-text" /></NavLink>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Home;