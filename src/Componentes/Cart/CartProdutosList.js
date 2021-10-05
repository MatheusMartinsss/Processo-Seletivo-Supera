import React from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import './Cart.css'
import CartProduto from './CartProduto';

function CartProdutosList() {

  const { ProdutosCart } = React.useContext(GlobalContext)

  return (
    <div className='cart-container'>

      <div className='cart-items-flex'>
        
        {ProdutosCart.map((item) => (

          <CartProduto data = {item} />

        ))}

      </div>

    </div>
  );
}

export default CartProdutosList;