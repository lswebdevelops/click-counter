import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='frecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        
      </div>
    </div>
  );
}

export default App;
