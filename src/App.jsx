import { useState, useEffect } from "react";
import Tablerow from "./components/Tablerow";
import "./App.css";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const data = await res.json();
        setCoinsData(data);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Price Change %</th>
          <th>Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {coinsData &&
          coinsData.map((coin) => (
            <Tablerow key={coin.id} coin={coin}></Tablerow>
          ))}
      </tbody>
    </table>
  );
}

export default App;
