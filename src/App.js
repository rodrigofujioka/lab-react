import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsuarioApp from './Component/Usuario/UsuarioApp';
import './css/bootstrap'

function App() {
  return (
    
    <div >
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <p>
          Aula 02 de react - Estamos adicionando um formulário simples
        </p>
                   
         <p>
             <UsuarioApp/>
         </p>
      </header>
   

    </div>
  );
}

export default App;
