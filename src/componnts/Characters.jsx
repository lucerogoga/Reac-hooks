import React, { useState, useEffect } from "react";
import "../assets/Characters.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <section className="Characters">
      {characters.map((character) => (
        <div className="card-container">
          <h2 key={character.id}>{character.name}</h2>
        </div>
      ))}
    </section>
  );
};

export default Characters;
