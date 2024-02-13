import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../products';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
  
  pedirProductos()
    .then((res) => {
      setProductos(res);

  })
  }, [])



  return (
    <div>

    </div>
  )
}

export default ItemListContainer
