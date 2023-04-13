import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';
import React from 'react';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
// to adapt to class components, we don't use hooks here : 
//import { useState } from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClics: 0,      
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
}
manejarClic(){
  this.setState(({ numClics })=> ({ numClics: numClics + 1 }));
}
reiniciarContador(){
  this.setState({ numClics: 0 });
}

  render(){
    return (
      <div className="App">
        <div className='frecodecamp-logo-contenedor'>
          <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={this.manejarClic} />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  
  }

}


 

export default App;
