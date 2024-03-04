<<<<<<< HEAD
import React from 'react';
import Item from './item';

const ItemList = ( {products, titulo }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className='listCards'>

      {products.map((product) => <Item key={product.id} product={product}/>)}
      </div>
    </div>
  );
};

export default ItemList;
=======
import React from 'react';
import Item from './item';

const ItemList = ( {products, titulo }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className='listCards'>

      {products.map((product) => <Item key={product.id} product={product}/>)}
      </div>
    </div>
  );
};

export default ItemList;
>>>>>>> ff8d35986d69c839e8cf4a146d3c2d110d05507c
