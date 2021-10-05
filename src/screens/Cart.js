import React from 'react';

import CartProdutosList from '../Componentes/Cart/CartProdutosList'

import Checkout from '../Componentes/Checkout/Checkout';

import { GlobalContext } from '../context/GlobalContext';

import {Button, Typography} from '@material-ui/core'

import {NavLink} from 'react-router-dom'

function Cart() {

  const { ProdutosCart } = React.useContext(GlobalContext)

  return (

    <div style={{ display: 'flex', justifyContent: 'center', width:'100%', flexWrap:'wrap' , margin: 'auto', gap: '5px', height: '100%' }} >

      {ProdutosCart.length > 0 ?

        <>

          <CartProdutosList />

          <Checkout />

        </>

        :

        <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>

          <Typography variant = 'h4'>Seu carrinho está vazio</Typography>

          <NavLink style = {{textDecoration:'none' }} link to = '/'>

            <Button  variant = 'contained' color = 'error'>Continuar Comprando</Button>

          </NavLink>  

        </div>

      }

    </div>

  );
}

export default Cart;