import React, { useEffect, useState } from 'react';
import Api from '../services/api';
export const GlobalContext = React.createContext(null)

function GlobalProvider({ children }) {

    const [Produtos, setProdutos] = useState({
        isLoad: false,
        Data: []
    })
    useEffect(() => {

        LoadProdutos();

    }, [])
    async function LoadProdutos() {

        await Api.get('/produtos')

            .then(result => {

                setProdutos({ isLoad: true, Data: result.data })

            })
            .catch(err => {

                console.log(err)
            })
    }
    function setProdutosFilter(filter) {

        const data = Produtos.Data;

        let filtered = []

        switch (filter) {
            case 'price':

                filtered = data.sort((a, b) => a.price - b.price)

                return setProdutos({ isLoad: true, Data: filtered })
       
            case 'score':

                filtered = data.sort((a, b) => b.score - a.score)

                return setProdutos({ isLoad: true, Data: filtered })

            case 'alfabetica':

                filtered = data.sort((a, b) => a.name.localeCompare(b.name))

                return setProdutos({ isLoad: true, Data: filtered })

            default:
                LoadProdutos(); 
                break;

        }
    }
    return (
        <GlobalContext.Provider value={{ Produtos, setProdutosFilter }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;