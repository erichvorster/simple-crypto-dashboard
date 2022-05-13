import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const [selectedPrimaryCurrency, setSelectedPrimaryCurrency] = useState("BTC");
  const [selectedSecondaryCurrency, setSelectedSecondaryCurrency] =
    useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  console.log(selectedPrimaryCurrency);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: selectedSecondaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: selectedPrimaryCurrency,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": 
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const currencies = ["BTC", "ETH"];

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </td>
              <td>
                <select
                  value={selectedPrimaryCurrency}
                  onChange={(e) => {
                    setSelectedPrimaryCurrency(e.target.value);
                  }}
                  name="currency-option-1"
                  className="currency-options"
                >
                  {currencies.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={selectedSecondaryCurrency}
                  onChange={(e) => setSelectedSecondaryCurrency(e.target.value)}
                  name="currency-option-2"
                  className="currency-options"
                >
                  {currencies.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRate
        exchangeRate={exchangeRate}
        selectedPrimaryCurrency={selectedPrimaryCurrency}
        selectedSecondaryCurrency={selectedSecondaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
