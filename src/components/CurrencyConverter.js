import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const [selectedPrimaryCurrency, setSelectedPrimaryCurrency] = useState("BTC");
  const [selectedSecondaryCurrency, setSelectedSecondaryCurrency] =
    useState("BTC");

  console.log(selectedPrimaryCurrency);

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
                <input type="number" name="currency-amount-1" value={""} />
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
                <input type="number" name="currency-amount-2" value={""} />
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
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
