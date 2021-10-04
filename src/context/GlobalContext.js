import React, { useEffect, useState } from 'react';
import Api from '../services/api';
export const GlobalContext = React.createContext(null)

function GlobalProvider({ children }) {

    const [Produtos, setProdutos] = useState({

        isLoad: false,

        Data: []
    })

    const [ProdutosCart, setProdutosCart] = useState([])

    useEffect(() => {

        LoadProdutos();

    }, [])
    async function LoadProdutos() {

        await Api.get('/produtos')

            .then(result => {

                const filter = result.data.sort((a, b) => b.id - a.id) // Organiza os produtos pelo ID mais recente ao mais antigo.

                setProdutos({ isLoad: true, Data: filter })

            })
            .catch(err => {

                console.log(err)
            })
    }
    function setProdutosFilter(filter) {

        const data = Produtos.Data;

        setProdutos({ isLoad: false }) // Seta o load dos produtos como falso, para caso de muitos produtos, irá exibir a tela de carregamento.

        let filtered = []

        switch (filter) {
            case 'price':   // Organiza os produtos do menor preço ao maior.

                filtered = data.sort((a, b) => a.price - b.price)

                setProdutos({ isLoad: true, Data: filtered })

                break;

            case 'score':  // Organiza os produtos do menor score ao maior.

                filtered = data.sort((a, b) => b.score - a.score)

                setProdutos({ isLoad: true, Data: filtered })

                break;

            case 'alfabetica': // Organiza os produtos por ordem alfabetica.

                filtered = data.sort((a, b) => a.name.localeCompare(b.name))

                setProdutos({ isLoad: true, Data: filtered })

                break;

            default:   // Organiza os produtos do mais recente ao mais antigo.

                filtered = data.sort((a, b) => b.id - a.id)

                setProdutos({ isLoad: true, Data: filtered })

                break;

        }
    }

    function addToCart({ id, name, price, qtd, image }) {

        console.log('Frist', ProdutosCart)

        const data = { id, name, price, qtd, image };

        const index = ProdutosCart.findIndex((item) => (item.id == id))

        console.log(index)

        if (index == -1) {

            setProdutosCart([...ProdutosCart, data])
            
        } else {
          
            
        }

    }

    function RemoveFromCart(id){

        const filtered = ProdutosCart.filter((item) => item.id !== id)
        
        setProdutosCart(filtered)
    }

    return (
        <GlobalContext.Provider value={{ Produtos, ProdutosCart, setProdutosFilter, addToCart, RemoveFromCart }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;