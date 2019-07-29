import React from 'react';
import logo from './logo.svg';
import NavBar from './components/layout/NavBar';
import './App.css';
import UsuarioApp from './Component/Usuario/UsuarioApp';
import './css/bootstrap'

function App() {
  return (
    
    <div className="App">
      <div> 
        <NavBar/>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
        <p>
          Aula 03 Adicionando bootStrap ao projeto <code>src/App.js</code>.
        </p>
        
        <a
          className="App-link"
          href="https://www.wscom.com.br/docente-de-ti-do-unipe-ministra-palestra-na-expotec-2017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pioneiro do Docker na PB
        </a>    

       <div>
         <div class="container">
             <button type="button" className="btn btn-danger" target="_blank" >Danger</button>
         </div>

         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://portaltailandia.com/wp-content/uploads/2018/02/destaque-488760-jaspionn.jpg" 
                   className="d-block w-100" 
                   alt="Jaspion" 
                   width="200" height="300" />
            </div>
            <div className="carousel-item">
              <img src="https://i.ytimg.com/vi/YvIgK3uJ0dQ/0.jpg" className="d-block w-100" alt="Jiraya" width="200" height="300" />
            </div>
            <div className="carousel-item">
              <img src="https://www.wscom.com.br/wp-content/uploads/201707181106450000002253.jpg" className="d-block w-100" alt="Pós Graduações" width="200" height="300" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        
      </div>
      </header>
  
    </div>
  );
}

export default App;
