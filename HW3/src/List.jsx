import { useState } from "react";

export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },

    { id: 2, name: "Мария", age: 22 },

    { id: 3, name: "Алексей", age: 21 },

    { id: 4, name: "Марина", age: 19 },

    { id: 5, name: "Даша", age: 23 },

    { id: 6, name: "Глеб", age: 24 },

    { id: 7, name: "Дима", age: 18 },

    { id: 8, name: "Гриша", age: 20 },

    { id: 9, name: "Серафим", age: 21 },
  ]);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const styleBtn = {
    padding: "10px 15px",
    border: "none",
    margin: "10px",
  };
  const styleList = {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      <h2>People list</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id} style={styleList}>
            {person.name} - {person.age}
            <button onClick={() => removePerson(person.id)} style={styleBtn}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
