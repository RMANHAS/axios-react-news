import axios from "axios";
import React, { useState } from "react";

function FetchApi() {
  const [news, SetNews] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://api.tvmaze.com/search/shows?q=all"
      )
      .then(({ data }) => {
        console.log(data);
        SetNews(data);
        localStorage.setItem('key', JSON.stringify(data));

      });
  };
  return (
    <>
      <div ClassName="container my-3">
        <div ClassName="row">
          <div ClassName="col-4">
            <button ClassName="btn btn-primary" onClick={fetchapi}>
              Click Here For news
            </button>
          </div>
        </div>
      </div>
      <div ClassName="container">
        <div ClassName="row">
          {news.map(({ show }, i) => {
            return (
              <div ClassName="col-4">
                <div ClassName="card" style={{ width: "18rem;" }}>
                  <img
                    src={show.image.medium}
                    ClassName="card-img-top"
                    alt="..."
                  />
                  <div ClassName="card-body">
                    <h5 ClassName="card-title">{show.name
                    }</h5>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchApi;
