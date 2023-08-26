import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
  const { name, age, hobbies } = props;

  let displayAgeInfo;
  if (age > 18) {
    displayAgeInfo = <h3>Please go vote!</h3>;
  } else {
    displayAgeInfo = <h3>You must be 18</h3>;
  }

  const truncatedName = name.length > 8 ? name.slice(0, 6) : name;

  return (
    <div>
      <p>Learn some information about {truncatedName}</p>
      {displayAgeInfo}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const persons = [
    {
      name: "Lizzy",
      age: 25,
      hobbies: ["Coding", "Horseback Riding", "Traveling"]
    },
    {
      name: "John",
      age: 16,
      hobbies: ["Gaming", "Reading"]
    },
    {
      name: "Emily",
      age: 30,
      hobbies: ["Cooking", "Hiking", "Photography"]
    }
  ];

  return (
    <div>
      <h1>Part 3</h1>
      {persons.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          hobbies={person.hobbies}
        />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));