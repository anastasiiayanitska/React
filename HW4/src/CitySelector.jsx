import React, { useState } from "react";

export default function CitySelector({ cities, onCitySelect }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectChange = (e) => {
    const cityName = e.target.value;
    const city = cities.find((city) => city.name === cityName);
    setSelectedCity(cityName);
    onCitySelect(city);
  };

  return (
    <div className="city_selector">
      <label htmlFor="city">Выберете город</label>
      <select id="city" value={selectedCity} onChange={handleSelectChange}>
        <option value="">----</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
