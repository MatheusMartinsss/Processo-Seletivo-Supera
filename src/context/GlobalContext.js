import React, { useEffect, useState } from 'react';
import Api from '../services/api';
const GlobalContext = React.createContext(null)

function Context({ children }) {

    const [Produtos, setProdutos] = useState([])

    useEffect(async () =>{
        const result = await Api.get('/produtos')
            .then(result =>{
                setProdutos(result)
                console.log(result)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    return (
        <GlobalContext.Provider value={Produtos}>
            {children}
        </GlobalContext.Provider>
    );
}

export default Context;