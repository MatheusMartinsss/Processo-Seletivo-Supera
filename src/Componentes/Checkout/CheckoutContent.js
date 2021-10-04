import React from 'react';

import {Divider, Typography} from '@material-ui/core'

import './CheckoutContent.css'

function CheckoutContent({data}) {

    const {subTotal, Frete, Total} = data;

    return (
    
        <div>

            <div className = 'checkout-content-flex'>

                <Typography variant = 'subtitle1'>Sub total</Typography>

                <Typography variant = 'subtitle1'>{subTotal}</Typography>

            </div>

            <div className = 'checkout-content-flex'>

                <Typography variant = 'subtitle1'>Frete</Typography>

                <Typography variant = 'subtitle1'>{Frete}</Typography>

            </div>

            <Divider/>

            <div className = 'checkout-content-flex'>

                <Typography variant = 'subtitle1'>Total</Typography>

                <Typography variant = 'subtitle1'>{Total}</Typography>

            </div>
            
        </div>

    );
}

export default CheckoutContent;