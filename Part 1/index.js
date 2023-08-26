import React from 'react';
import ReactDOM from 'react-dom';

// FirstComponent
function FirstComponent() {
  return <h1>My very first component</h1>;
}

// NamedComponent
function NamedComponent(props) {
  return <p>My name is {props.name}</p>;
}

// App
function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Lizzy" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));