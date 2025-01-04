import './ProductsItem.scss'
import { NavLink } from 'react-router-dom';

import productsItemData from '../../data/productsItemData'

const ProductsItem = () => {
    return (
        <div className="products__cards">
            {
                productsItemData.map((item) => {
                    return (
                        <div className="products__card" key={item.id}>
                            <NavLink to={item.link}>
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </NavLink>
                        </div>

                    )
                })
            }

        </div>

    );
}

export default ProductsItem;


