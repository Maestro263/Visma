import React, { useState, useEffect } from "react";

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles")
      .then((res) => res.json())
      .then((res) => {
        setVehicles(res.results);
      });
  }, []);

  return (
    <div>
      <h1>Vehicles from Star Wars</h1>

      <ul>
        {vehicles.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Vehicle;
