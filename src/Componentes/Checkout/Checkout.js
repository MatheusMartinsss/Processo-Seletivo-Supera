import React from 'react';

import {GlobalContext} from '../../context/GlobalContext'

import './Checkout.css'

import CheckoutContent from './CheckoutContent';

function Checkout() {

  const {Checkout} = React.useContext(GlobalContext)

  return (

    <div className = 'checkout-container'>

      <div className = 'checkout-content'>

        {Checkout?.map((item) =>(
          
          <CheckoutContent data = {item}/>
          
        ))}

      </div>

    </div>
  );
}

export default Checkout;