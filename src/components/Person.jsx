import React, { useState, useEffect } from "react";

const Person = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((res) => {
        setPersons(res.results);
      });
  }, []);

  return (
    <div>
      <h1>Persons from Star Wars</h1>
      <ul>
        {persons.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Person;
