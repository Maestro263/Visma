import React, { useState, useEffect } from "react";

const Person = () => {
  const [Persons, fetchPersons] = useState([]);

  const getData = () => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchPersons(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Persons from Star Wars</h1>

      <ul>
        {Persons.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Person;
