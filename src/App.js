import logo from "./logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import CoinList from "./Components/CoinList";
import SearchBar from "./Components/SearchBar";
import "./App.css";
function App() {
  const [coins , setCoins] = useState([]) ;
  const [searchValue , setSearchValue] = useState("");
  const handleChange = (value) => {
    setSearchValue(value) ;
  }
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data) ;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filteredCoins = ( coins.filter(coin => {
    return coin.name.toLowerCase().includes(searchValue.toLowerCase()) ;
  }))
  return (
    <div className="App">
      <h1 className="title"> Cryptocurrency Tracker</h1>
      <SearchBar onChange = {handleChange} searchVal = {searchValue} />
      <CoinList coinsArray = {filteredCoins} />
    </div>
  );
}

export default App;
