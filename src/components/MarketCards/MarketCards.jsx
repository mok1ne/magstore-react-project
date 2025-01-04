import './MarketCards.scss'

const MarketCards = (market) => {
  return (
    <div className="market__card" key={market.id}>
      <div className = {`market__card-wrapper ${market.flex} ${market.textColor}`}>
        <h3>{market.title}</h3>
        <p>{market.desc}</p>
        <div className='market__card-btn'>
          <button className={market.infoBtn}>Learn more</button>
          <button className={market.buyBtn}>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default MarketCards
