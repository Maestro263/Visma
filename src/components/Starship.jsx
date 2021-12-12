import React, { useState, useEffect } from "react";

const Starship = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((res) => res.json())
      .then((res) => {
        setStarships(res.results);
      });
  }, []);

  return (
    <div>
      <h1>Starships from Star Wars</h1>

      <div className="gcse-searchbox"></div>
      <div
        className="gcse-searchresults"
        data-defaultToImageSearch="true"
      ></div>

      <ul>
        {starships.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Starship;
