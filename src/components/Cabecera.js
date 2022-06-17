import React from 'react'
import {Header, Header_h1, Cart, Count} from '../styles/styles'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correspondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({contador}) {
  
  return (
  
    <Header>
      <Header_h1>
        Carrito de Compras
      </Header_h1>
      <Cart>
        <p>Cantidad de productos
          <Count>
               {contador}
          </Count>
        </p>
      </Cart>
    </Header>
    
  )
}
