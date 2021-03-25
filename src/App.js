import {useContext} from 'react';

import logo from './logo.svg';
import './App.css';
import { StringContext } from './AppContext/StringContext';


function App() {
  const [name, setName] = useContext(StringContext);


  return (
    <div className="App">
      <h1>{name}</h1>
      <input onChange={(e) => {setName(e.target.value)}} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
