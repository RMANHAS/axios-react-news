import axios from "axios";
import React, { useState } from "react";

function FetchApi() {
  /* const fetchapi = () => {
    console.log("click");
  };*/

  const [news, SetNews] = useState([]);

  const fetchapi = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=81de9a8c1ec34c58bb679395b8b295d9"
      )
      .then((response) => {
        console.log(response);
        SetNews(response.data.articles);
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
          {news.map((value) => {
            return (
              <div ClassName="col-4">
                <div ClassName="card" style={{ width: "18rem;" }}>
                  <img
                    src={value.urlToImage}
                    ClassName="card-img-top"
                    alt="..."
                  />
                  <div ClassName="card-body">
                    <h5 ClassName="card-title">{value.title}</h5>
                    <p ClassName="card-text">{value.description}</p>
                    <a href="#" ClassName="btn btn-primary">
                      {value.url}
                    </a>
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
/*news.map((value) => {
  return (
    <div>
      <h1>{value.title}</h1>
    </div>
  );
});*/
export default FetchApi;
