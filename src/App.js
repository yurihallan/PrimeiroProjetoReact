import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Conversor from './Components/Conversor';
function App() {
  return (
    <div className="App">
    <h1>Conversor de Moeda</h1>
     
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div >  
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        </div>  
      </div>  


    
  );
}

export default App;
