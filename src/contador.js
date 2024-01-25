import { useState } from "react"



const Contador = () => {
    const [contador, setContador]= useState(0) 
    const sumar=() =>{
        setContador(contador + 1);
    }
    const restar=() =>{
        setContador(contador - 1);
    }
  return (
    <div>
        <h4>Articulos agregados {contador}</h4>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      
    </div>
  )
}

export default Contador
