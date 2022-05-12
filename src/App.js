import React from "react";
import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
};

export default App;
