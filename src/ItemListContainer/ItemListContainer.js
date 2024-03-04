import React, { useEffect, useState } from 'react';
import ItemList from '../itemList';
import { pedirProductos} from '../../products';  

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  
  useEffect(() => {
    pedirProductos()
    .then((res) => {
      setProductos(res)
    })
    .catch((err) => console.log(err) )
    .finally(()=> console.log('termino'))
  }, [])
  console.log(products);
    

  return (
    <div>
<ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;

