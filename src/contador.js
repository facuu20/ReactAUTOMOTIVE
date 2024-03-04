<<<<<<< HEAD
import React from "react"

const Contador = ({contador, sumar, restar, agregarCarrito})=>{
  
  return (
    <div>
      <div>
        <h4>Articulos agregados {contador}</h4>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>


      </div>
      <button onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  )
}
  
export default Contador
=======
import React from "react"

const Contador = ({contador, sumar, restar, agregarCarrito})=>{
  
  return (
    <div>
      <div>
        <h4>Articulos agregados {contador}</h4>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>


      </div>
      <button onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
  )
}
  
export default Contador
>>>>>>> ff8d35986d69c839e8cf4a146d3c2d110d05507c
