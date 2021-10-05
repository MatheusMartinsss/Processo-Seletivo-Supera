import React from 'react';

import { Divider, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import './produtosHeader.css'
import { GlobalContext } from '../../context/GlobalContext';

function ProdutosHeader() {
    const {setProdutosFilter} = React.useContext(GlobalContext)
    const updateFilter = (target) =>{
        setProdutosFilter({filter: target})
    }
    return (
        <div className='produtos-header-container'>
            <FormControl sx={{ m: 1, width: 200}}>
                <InputLabel id="demo-simple-select-autowidth-label">Ordenar</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    label="Ordenar Por"
                    onChange = {(e) => updateFilter(e.target.value)}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='price'>Preço</MenuItem>
                    <MenuItem value='score'>Avaliação</MenuItem>
                    <MenuItem value='alfabetica'>Ordem alfabetica</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}

export default ProdutosHeader;