import React from 'react'


const item = ({product}) => {
  return (
    <div>
      {product.name}

      {product.description}
      
      {product.price}
      
      {product.stock}




    </div>
  )
}

export default item