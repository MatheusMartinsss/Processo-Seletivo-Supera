import React from 'react';
import './filter.css'
import { Divider, Typography } from '@material-ui/core'

function Filters() {
    return (
        <div className='filter-container'>
            <div className='filter-content'>
                <Typography variant='h6'>Filtros</Typography>
            </div>
        </div>
    );
}

export default Filters;