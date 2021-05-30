//Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create React component

const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Take React Componenet and show on screen

ReactDOM.render(<App />, document.querySelector('#root'));
