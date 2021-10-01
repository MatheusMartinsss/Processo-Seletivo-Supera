import React from 'react';
import { GlobalContext } from '../../context/GlobalContext'
import './produtos.css'
import Produto from './produto';
import Filters from '../FilterBar/Filters';


function ProdutosList() {
    const { Produtos } = React.useContext(GlobalContext)
    return (
        <div>
            <Filters/>
            {Produtos.isLoad ?
                <div className='produtos-list-container'>
                    <div className='produtos-list-flex'>
                        {Produtos.Data.map((item, idx) => (

                            <Produto key={idx} data={item} />

                        ))}
                    </div>

                </div>

                : // Caso os Produtos ainda não tenham sido carregados...

                <h1>Carregando os Produtos </h1>

            }
        </div>
    );
}

export default ProdutosList;