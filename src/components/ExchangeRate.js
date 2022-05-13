const ExchangeRate = ({
  exchangeRate,
  selectedPrimaryCurrency,
  selectedSecondaryCurrency,
}) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{exchangeRate}</h1>
      <p>
        {selectedPrimaryCurrency} to {selectedSecondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
