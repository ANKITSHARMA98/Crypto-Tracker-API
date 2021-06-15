import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Crypto from './Crypto';




function App() {
  const [crypto, setcryptos] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setcryptos(res.data);
      
    })
    .catch(error => console.log(error));

  }, []);
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const filteredCoins = crypto.filter(crypto => 
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );





  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search Crypto Coin</h1>
        <form>
        <input type="text" placeholder="Search Coin"  className="crypto-input" onChange={handleChange}/>
        </form>

      </div>
      {filteredCoins.map(crypto => {
        return (
          <Crypto
           key={crypto.id}
           name={crypto.name}
           price={crypto.current_price}
           symbol={crypto.symbol}
           marketcap={crypto.total_volume}
           volume={crypto.market_cap}
           image={crypto.image}
           priceChange={crypto.price_change_percentage_24h}/>
           
        );
      })}
      
    </div>
    

  );
}

export default App;
