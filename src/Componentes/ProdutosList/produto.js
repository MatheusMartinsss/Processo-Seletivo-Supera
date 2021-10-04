import React from 'react';
import './produto.css'
import { Typography , Button, Rating} from '@material-ui/core'
import { GlobalContext } from '../../context/GlobalContext';

function Produto({ data }) {

    const {addToCart} = React.useContext(GlobalContext)

    const { id, name, price, score, image } = data;

    const addCart = () =>{
        
        addToCart({id, name, price, qtd: 1, image});
    }
    return <div className='produto-card-container' key={id}>

        <div className='produto-card-flex'>

            <div className='produto-card-image'>

                <img alt={image} src={require(`../../Assets/${image}`).default} />

            </div>

            <div className = 'produto-card-item-container'>

                <Typography variant='h6' gutterBottom style = {{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}} >

                    {name}

                </Typography >

                <Typography color = '#32CD32' variant='caption'>

                    {price}

                </Typography>

                <Rating readOnly max = {5} defaultValue = {1} precision = {0.5} value = {score/100}></Rating>

            </div>

            <Button onClick = {() => addCart()} >Adicionar</Button>

        </div>
    </div>
}

export default Produto;