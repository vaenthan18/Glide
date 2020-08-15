import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBox from './TaskBox'

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    <TaskBox name={'Anoush'} className={'x'} dueDate={'Aug 17th, 2020'} classColour={'Blue'}/>
  );
}

export default App;
