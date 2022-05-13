import axios from "axios";
import { useState, useEffect } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
        "X-RapidAPI-Key": 
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // We make use of slice to only include the first 7 articles
  const first7Articles = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first7Articles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
