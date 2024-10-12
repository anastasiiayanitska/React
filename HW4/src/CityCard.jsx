import React from "react";

export default function CityCard({ city }) {
  return (
    <div className="city_card">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} />
      <p id="city_description">{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
