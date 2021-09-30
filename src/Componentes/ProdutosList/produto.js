import React from 'react';
import './produto.css'
import { Typography , Button} from '@material-ui/core'

function Produto({ data }) {

    const { id, name, price, score, image } = data;
    console.log(image)
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
                <Typography variant='caption'>
                    {score}
                </Typography>
            </div>
            <Button >Adicionar</Button>
        </div>
    </div>
}

export default Produto;