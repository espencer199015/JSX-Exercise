import React from 'react';
import ReactDOM from 'react-dom';

function Tweet(props) {
  return (
    <div>
      <h2>{props.username} ({props.name})</h2>
      <p>{props.date}</p>
      <p>{props.message}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Part 2</h1>
      <Tweet
        username="user1"
        name="User One"
        date="August 25, 2023"
        message="Hello, this is my first tweet!"
      />
      <Tweet
        username="user2"
        name="User Two"
        date="August 26, 2023"
        message="Excited to start using React!"
      />
      <Tweet
        username="user3"
        name="User Three"
        date="August 27, 2023"
        message="Having a great day learning programming."
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));