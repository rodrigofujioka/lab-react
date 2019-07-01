import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <p>
          Aula 01 de react para disciplina de programação avançada com React.
          Vamos editar o arquivo <code>src/App.js</code>.
        </p>
        <a
          className="App-link"
          href="http://www.rodrigofujioka.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu Site
        </a>
      </header>
    </div>
  );
}

export default App;
