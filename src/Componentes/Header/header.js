import React from 'react';
import { Typography, IconButton, styled, Badge, TextField, Paper } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

import './header.css'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        padding: '0 4px',
    },
}));

function Header() {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <Typography sx = {{width: '15%'}} color='white' variant='h4'>Loja de Games</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '70%', height: 60, justifyContent:'center'}}
                >
                    <TextField  hiddenLabel placeholder = 'Pesquisar...' fullWidth   id="fullWidth" />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <IconButton sx = {{width: '15%'}}  aria-label="cart">
                    <StyledBadge badgeContent={4} color="error">
                        <ShoppingCartIcon sx={{ color: '#FFF' }} />
                    </StyledBadge>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;