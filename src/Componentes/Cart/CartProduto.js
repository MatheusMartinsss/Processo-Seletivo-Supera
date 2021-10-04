import React, { useState } from 'react';

import './CartProduto.css'

import { Divider, Typography,Button } from '@material-ui/core'

import InputNumber from './InputNumber'

function CartProduto({ data }) {
    const { id, price, name, qtd, image } = data;
    const [Qtd, setQtd] = useState(qtd);
    return (
        <div className='cart-item-card'>
            <Divider />
            <div className='cart-item-card-content'>


                <div style={{ width: '25%', display: 'flex' }}>
                    <div>

                        <img alt={image} src={require(`../../Assets/${image}`).default} />

                    </div>

                    <Typography varian='h6'>

                        {name}

                    </Typography>

                </div>

                <div style={{ width: '50%', display: 'flex', justifyContent:"space-between"}} >

                    <div style = {{ display:'flex', flexDirection:"column"}}>
                        <InputNumber value = {Qtd} minimalValue = {1} onInputChange = {(e) => setQtd(e)}> </InputNumber>
                       
                    </div>

                    <Typography  variant='h6'>
                        {price}
                    </Typography>
                </div>

            </div>
            <Divider />
        </div>
    );
}

export default CartProduto;