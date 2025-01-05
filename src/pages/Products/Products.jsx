import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import './Products.scss'

const Products = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="products">
                <div className="products__inner">
                    <div className="products__info">
                        <h2>Все товары:</h2>
                        <ProductsItem />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;