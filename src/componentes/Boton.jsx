import React from 'react';
import '../hojas-de-estilo/Boton.css'
// manejarClick es una función:

class Boton extends React.Component{
  render(){
  return(
    <button 
    // if the class is click, the class is boton-clic, otherwise boton-reiniciar(llamado boton ternário)
    className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={this.props.manejarClic}>
      {this.props.texto}
    </button>
  )
}
}

export default Boton;

