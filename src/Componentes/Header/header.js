import React from 'react';
import { Typography, IconButton, styled, Badge, TextField, Paper } from '@material-ui/core'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import SearchIcon from '@material-ui/icons/Search';

import './header.css'

import { GlobalContext } from '../../context/GlobalContext';

import { NavLink, useLocation } from 'react-router-dom'

const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        padding: '0 4px',
    },
}));

function Header() {

    const { ProdutosCart } = React.useContext(GlobalContext)

    const itenstotal = ProdutosCart.reduce((a, b) => a + b.qtd, 0)



    const location = useLocation();

    console.log(location.pathname)

    return (
        <div className='header-container'>

            <div className='header-content'>

                <Typography sx={{ width: '15%' }} color='white' variant='h4'>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/'>

                        Loja de Games

                    </NavLink>

                </Typography>
                
                {location.pathname != '/Carrinho' &&
                    <Paper
                        component="form"

                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '70%', minWidth: 150, height: 60, justifyContent: 'center' }}
                    >
                        <TextField hiddenLabel placeholder='Pesquisar...' fullWidth id="fullWidth" />

                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">

                            <SearchIcon />

                        </IconButton>

                    </Paper>
                }
                <NavLink to='/Carrinho'>

                    <IconButton sx={{ width: '15%' }} aria-label="cart">

                        <StyledBadge badgeContent={itenstotal} color="error">

                            <ShoppingCartIcon sx={{ color: '#FFF' }} />

                        </StyledBadge>

                    </IconButton>

                </NavLink>

            </div>

        </div>
    )
}

export default Header;