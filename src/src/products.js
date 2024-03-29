import data from './data/data.json'
import { reject } from 'react';


export const pedirProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)

    }, 500);
  })
}

export const pedirProductosCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.filter ((prod => prod.categoria ===categoria)))

    }, 500);
  })
}
export const pedirProductosId = (id) =>{
  return new Promise((resolve, reject ) =>{
   const item = data.find((prod) => prod.id ===id);
   if (item){
    resolve(item)
  }else{
    reject({
      error:"No se encontro el producto  "
    })
  }
  }
  )
}

