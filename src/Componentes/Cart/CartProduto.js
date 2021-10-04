import React, { useState } from 'react';

import './CartProduto.css'

import { Divider, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'

import InputNumber from './InputNumber'

import { GlobalContext } from '../../context/GlobalContext'

function CartProduto({ data }) {

    const { RemoveFromCart } = React.useContext(GlobalContext)

    const { id, price, name, qtd, image } = data;

    const [Qtd, setQtd] = useState(qtd);

    const [Open, setOpen] = useState(false)

    const HandleOpen = () =>{
        setOpen(!Open)
    }


    const RemoverProduto = (id) => {

        RemoveFromCart(id);
    }

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

                <div style={{ width: '50%', display: 'flex', justifyContent: "space-between" }} >

                    <div style={{ width: "60px", display: 'flex', flexDirection: "column" }}>

                        <InputNumber value={Qtd} minimalValue={1} onInputChange={(e) => setQtd(e)}> </InputNumber>

                        <Button size='small' color='error' variant='text' onClick={() => HandleOpen()}>Remover</Button>

                    </div>

                    <Typography variant='h6'>

                        {price}

                    </Typography>

                </div>

            </div>
            <Divider />

            <Dialog
                open={Open}

                onClose={() => HandleOpen()}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Remover produto"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Você realmente deseja remover esse produto do carrinho?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> HandleOpen()}>Cancelar</Button>
                    <Button onClick={() => RemoverProduto(id)} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CartProduto;