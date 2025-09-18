// {"id":"bitcoin",
// "symbol":"btc",
// "name":"Bitcoin",
// "image":"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
// "current_price":116124,
// "market_cap":2313375270432,
// "market_cap_rank":1,
// "fully_diluted_valuation":2313375270432,
// "total_volume":43535691254,
// "high_24h":117292,"low_24h":114866,"price_change_24h":931.66,"price_change_percentage_24h":0.80878,"market_cap_change_24h":16910104269,"market_cap_change_percentage_24h":0.73635,"circulating_supply":19922156.0,"total_supply":19922156.0,"max_supply":21000000.0,"ath":124128,"ath_change_percentage":-6.38771,"ath_date":"2025-08-14T00:37:02.582Z","atl":67.81,"atl_change_percentage":171262.36036,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2025-09-17T13:39:22.610Z"}

function Tablerow({ coin }) {
  return (
    <tr>
      <td>
        <img src={coin.image} alt={coin.name} />
        <p>{coin.name}</p>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price}</td>
      <td
        style={{
          color: `${coin.price_change_percentage_24h < 0 ? "red" : "green"}`,
        }}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>${coin.total_volume.toLocaleString("en-IN")}</td>
    </tr>
  );
}

export default Tablerow;
