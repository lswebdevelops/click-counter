import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
// creating a hook: useState
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
  setNumClics(numClics + 1);
  }
const reiniciarContador =()=>{
  setNumClics(0)
}

  return (
    <div className="App">
      <div className='frecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
