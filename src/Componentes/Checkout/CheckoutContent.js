import React from 'react';

import {Divider, Typography} from '@material-ui/core'

import './CheckoutContent.css'

function CheckoutContent({data}) {

    const {subTotal, Frete, Total, Desconto} = data;

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

            <div className = 'checkout-content-flex'>

                <Typography variant = 'subtitle1'>Desconto</Typography>

                <Typography variant = 'subtitle1'>{Desconto}</Typography>

            </div>

            <div className = 'checkout-content-flex'>

                <Typography variant = 'caption' color = '#FF4500'>(Frete gratis em compras acima de R$250,00)</Typography>

               

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