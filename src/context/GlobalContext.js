import React, { useEffect, useState } from 'react';
import Api from '../services/api';
export const GlobalContext = React.createContext(null)

function GlobalProvider({ children }) {

    const [Produtos, setProdutos] = useState({

        isLoad: false,

        Data: []
    })

    const ValorFrete = 10.00;

    const [ProdutosCart, setProdutosCart] = useState([])

    const [Checkout, setCheckout] = useState([])

    useEffect(() => {

        LoadProdutos();

    }, [])

    useEffect(() => {

        CheckoutSum();

    }, [ProdutosCart])

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

        const data = { id, name, price, qtd, image, total: qtd * price };

        const index = ProdutosCart.findIndex((item) => (item.id === id))

        if (index == -1) {

            setProdutosCart([...ProdutosCart, data])

        } else {  // Caso já tenha um produto com o mesmo ID no carrinho

            let produto = ProdutosCart.find((item) => item.id == id); // Localiza o produto

            produto.qtd = produto.qtd + qtd; // Soma a qtd atual do produto 

            produto.total = produto.qtd * produto.price; // Atualiza o Preço total

            const UpdateProducts = ProdutosCart.map((item) => { //adiciona o produto formato 

                if (produto.id === item.id) return produto;

                return item;
            })

            setProdutosCart(UpdateProducts)

        }

    }

    function RemoveFromCart(id) {

        const filtered = ProdutosCart.filter((item) => item.id !== id)

        setProdutosCart(filtered)
    }

    function CheckoutSum() {

        const dataFormated = {

            subTotal: ProdutosCart.reduce((a, b) => a + b.total, 0), // Soma o total de todos produtos.

            Frete: ProdutosCart.reduce((a, b) => a + b.qtd * ValorFrete, 0), // Multiplica a quantidade de itens x Valor do frete

            Total: ProdutosCart.reduce((a, b) => a + b.total, 0) + ProdutosCart.reduce((a, b) => a + b.qtd * ValorFrete, 0) // Soma o valor do frete + subtotal
        }

        setCheckout([dataFormated])

        console.log(dataFormated)
    }

    return (

        <GlobalContext.Provider value={{ Produtos, ProdutosCart, Checkout, setProdutosFilter, addToCart, RemoveFromCart }}>

            {children}

        </GlobalContext.Provider>
        
    );
}

export default GlobalProvider;