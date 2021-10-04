import React from 'react';

import CartProdutosList from '../Componentes/Cart/CartProdutosList'
import Checkout from '../Componentes/Checkout/Checkout';

function Cart() {
  return (
    <div style = {{display:'flex', justifyContent:'center', maxWidth: '1200px', margin:'auto', gap:'5px'}} >

      <CartProdutosList  />

      <Checkout/>
      
    </div>
  );
}

export default Cart;