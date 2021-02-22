import React from "react";

export default function SearchMap({
  symbol,
  regularMarketPrice,
  previousClose,
  instrumentType,
  currency,
  exchangeName,
  chartPreviousClose,
  validRanges,
}) {
  return (
    <div>
      <h1>{symbol}</h1>
      <p>{regularMarketPrice}</p>
      <p>{previousClose}</p>
      <p>{instrumentType}</p>
      <p>{currency}</p>
      <p>{exchangeName}</p>
      <p>{chartPreviousClose}</p>
      <p>{validRanges[0]}</p>
    </div>
  );
}
