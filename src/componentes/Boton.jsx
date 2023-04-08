import React from 'react';
import '../hojas-de-estilo/Boton.css'
// manejarClick es una función:
function Boton({ texto, esBotonDeClic, manejarClic }){
  return(
    <button 
    // if the class is click, the class is boton-clic, otherwise boton-reiniciar(llamado boton ternário)
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {texto}
    </button>
  )
}
export default Boton;

