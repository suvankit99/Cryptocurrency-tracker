import Coin from "./Coin";
export default function CoinList(props) {
  return (
    <div className="coin-list">
      {props.coinsArray.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume = {coin.total_volume}
            marketCap = {coin.market_cap}
            symbol = {coin.symbol}
          />
        );
      })}
    </div>
  );
}
