import item from '../../data/productsData/phonesData'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { IoMdClose } from "react-icons/io";

const BagItem = ({ id, title, price, image, rom, color, noice, count }) => {
    const dispatch = useDispatch()

    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
                rom,
                color,
                
            }))
    }
    const onClickMinus = () => {
        dispatch(
            minusItem({
                id,
                rom,
                color,
            })
        )
    }
    const onClickRemove = () => {
        dispatch(
            removeItem({
                id,
                rom,
                color,
            })
        );
    };
    return (
        <div className="bag__card" key={item.id}>
            <div className="bag__info">
                <div className="bag__image">
                    <img src={image} alt={title} />
                </div>
                <div className="bag__middle">
                    <h3>{title}</h3>
                    <div className="bag__middle-info">
                        {rom == null ? '' : <p>Память: {rom >= 1 && rom <= 10 ? `${rom}TB` : `${rom}GB`}</p>}
                        {noice == null ? '' : <p>Шумоподавление: {noice}</p>}
                        <p>Цвет: {color}</p>
                        <p>Количество: {count}</p>
                        <div className="bag__text">
                            <p>Цена: {price * count} ₽</p>
                            <p>Доставка: Завтра - послезавтра</p>
                        </div>
                        <div className="bag__button">
                            <button onClick={onClickPlus}>+</button>
                            <button onClick={onClickMinus}>-</button>
                            <button onClick={onClickRemove}><IoMdClose /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BagItem
