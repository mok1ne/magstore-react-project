import './InfoCards.scss'

const InfoCards = (info) => {
    return (
        <div className="info__card" key={info.id}>
            <div className='info__card-wrapper'>
                <h3>{info.title}</h3>
                <p>{info.desc}</p>
                <div className='info__card-btn'>
                    <button className={info.infoBtn}>Learn more</button>
                    <button className={info.buyBtn}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default InfoCards;