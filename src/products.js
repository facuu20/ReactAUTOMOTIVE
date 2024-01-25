import React from 'react'


const Products = ({title, img, description, price}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt='' width='400px' height='300px' />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default Products