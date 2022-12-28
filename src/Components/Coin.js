import React from "react";
import "./Coin.css";

export default function Coin(props) {
  const coinName = props.name;
  const coinImageURL = props.image;
  const coinID = props.key;
  const coinPrice = props.price;
  const priceChange = props.priceChange.toFixed(2);
  const marketCap = props.marketCap;
  const volume = props.volume;
  const coinSymbol = props.symbol;

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coinImageURL} alt={coinID}></img>

          <h1>{coinName}</h1>
          <p className="coin-symbol">{coinSymbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">${coinPrice}</p>
          <p className={`coin-percent ${priceChange < 0 ? "red" : "green"}`}>
            {priceChange}%
          </p>
          <p className="coin-volume"> Vol : ${volume}</p>
          <p className="coin-marketcap">Mkt cap : ${marketCap}</p>
        </div>
      </div>
    </div>
  );
}
