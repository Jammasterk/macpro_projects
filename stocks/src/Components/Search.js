import React, { useState } from "react";
import axios from "axios";
import SearchMap from "./SearchMap";
function Search() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  const getSearch = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts",
      params: { symbol: search, interval: "5m", range: "1d", region: "US" },
      headers: {
        "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(search)
    
  }
  return (
    <div>
      <div onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={getSearch}>Search</button>
      </div>
      <main>
        {results.map((result) => {


          return <SearchMap
            key={result.result}
            symbol={result.symbol}
            regularMarketPrice={result.regularMarketTime}
            previousClose={result.previousClose}
            instrumentType={result.instrumentType}
            currency={result.currency}
            exchangeName={result.exchangeName}
            chartPreviousClose={result.chartPreviousClose}
            validRanges={result.validRanges}
          />})
        }
      </main>
    </div>
  );
}

export default Search;


