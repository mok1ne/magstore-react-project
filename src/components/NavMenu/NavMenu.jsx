import { useState } from 'react';
import './NavMenu.scss';

const NavMenu = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleInputChange = (setter) => (e) => {
        const value = e.target.value;
        if (value.length <= 6 && /^\d*$/.test(value)) {
            setter(value);
        }
    };

    const handleFilter = (e) => {
        e.preventDefault();
        const min = parseInt(minPrice, 10) || 0;
        const max = parseInt(maxPrice, 10) || Infinity;

        onFilter(min, max);
    };

    return (
        <div className="nav">
            <ul>
                <li>Цена:</li>
                <form onSubmit={handleFilter}>
                    <input
                        placeholder="От: 0"
                        type="number"
                        value={minPrice}
                        onChange={handleInputChange(setMinPrice)}
                    />
                    <input
                        placeholder="До: Максимума"
                        type="number"
                        value={maxPrice}
                        onChange={handleInputChange(setMaxPrice)}
                    />
                    <button type="submit">Применить</button>
                </form>
            </ul>
        </div>
    );
};

export default NavMenu;
