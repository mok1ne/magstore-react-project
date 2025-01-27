import './ModalWindow.scss';
import { IoMdClose } from "react-icons/io";


import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice'
import ShopMessage from "../ShopMessage/ShopMessage";


const ModalWindow = ({ isModalOpen, selectedProduct, closeModal }) => {
    if (!isModalOpen || !selectedProduct) return null;

    const dispatch = useDispatch()
    const [currentImage, setcurrentImage] = useState(selectedProduct.image)
    const [selectedColorName, setSelectedColorName] = useState(selectedProduct.colorShop[0].colors[0].name);
    const [selectedRom, setSelectedRom] = useState(selectedProduct.configure[0].ROM);
    const [showMessage, setShowMessage] = useState(false);
    const [messageData, setMessageData] = useState(null);
    const noice = selectedProduct.configure[0].noice
    const type = selectedProduct.configure[0].type
    const construction = selectedProduct.configure[0].construction
    let currentPrice = selectedProduct.prices[selectedRom];
    { selectedProduct.prices[selectedRom] == null ? currentPrice = selectedProduct.price : '' }


    const onClickAdd = () => {
        const item = {
            id: selectedProduct.id,
            title: selectedProduct.title,
            price: currentPrice,
            image: currentImage,
            type: type,
            rom: selectedRom,
            noice: noice,
            construction: construction,
            color: selectedColorName
        };
        dispatch(addItem(item))
        setMessageData({ ...item, currentImage });
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    }
    const handleColorChange = (color) => {
        setcurrentImage(color.image);
        setSelectedColorName(color.name);

    };

    const handleRomChange = (rom) => {
        setSelectedRom(rom);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains ('modal')) {
            closeModal()
        }
    }



    return (
        <div className="modal" onClick={handleOverlayClick}>
            <div className="modal__content">

                <button className='close-btn' onClick={closeModal}><IoMdClose size='20' />
                </button>
                <div className='modal__item'>
                    <div className='modal__image'>
                        <img src={currentImage} alt="" />
                    </div>
                    <div className='modal__info'>
                        <h2>{selectedProduct.title}</h2>
                        <p>Выберите конфигурацию:</p>
                        {selectedProduct.configure.map((id) => (
                            <div className='modal__info' key={id}>
                                {
                                    selectedRom == null ? '' : <>
                                        <p>Память: {selectedRom === 1 ? '1TB' : `${selectedRom}GB`}</p>
                                        <div className='rom-btn-modal'>
                                            {selectedProduct.romShop.map((shopItem) => {
                                                return shopItem.roms.map((rom, buttonIndex) => (
                                                    <button key={buttonIndex} className={`rom-btn ${selectedRom === rom ? 'selected' : ''}`}
                                                        onClick={() => handleRomChange(rom)}>{rom >= 1 && rom <= 10 ? `${rom}TB` : `${rom}GB`}</button>
                                                ));
                                            })}

                                        </div></>
                                }
                                {type == null ? '' : <p>Тип: {type}</p>}
                                {noice == null ? '' : <p>Шумоподавление: {noice}</p>}
                                {construction == null ? '' : <p>Конструкция: {construction}</p>}

                                <p>Цвет: {selectedColorName}</p>
                                <div className='color-btn-modal'>
                                    {selectedProduct.colorShop.map((shopItem) => {
                                        return shopItem.colors.map((color, colorIndex) => (
                                            <button onClick={() => handleColorChange(color)} className={` ${selectedColorName === color.name ? 'selected' : ''}`} key={colorIndex}>
                                                <img src={color.image} alt={color.name} />
                                            </button>
                                        ));
                                    })}
                                </div>
                                <p>Цена: {currentPrice} ₽</p>
                            </div>
                        ))
                        }
                    </div >
                </div >
                <button onClick={onClickAdd} className='add-btn'>Добавить</button>
            </div >
            {showMessage && (
                <ShopMessage
                    selectedProduct={messageData.title}
                    currentImage={messageData.currentImage}
                    selectedRom={messageData.rom}
                    selectedColor={messageData.color}
                    noice={messageData.noice}
                    price={currentPrice}
                />
            )}
        </div >

    );
};

export default ModalWindow;
