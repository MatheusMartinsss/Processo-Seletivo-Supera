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
            .then(result =>{
                setProdutos({ isLoad: true, Data: result.data })
            })
            .catch(err =>{
                console.log(err)
            })
    }
    return (
        <GlobalContext.Provider value={{Produtos}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;