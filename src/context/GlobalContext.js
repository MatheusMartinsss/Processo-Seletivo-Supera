import React, { useEffect, useState } from 'react';
import Api from '../services/api';
export const GlobalContext = React.createContext(null)

const prods = [{
    "id": 312,
    "name": "Super Mario Odyssey",
    "price": 197.88,
    "score": 120,
    "image": "super-mario-odyssey.png"
},
{
    "id": 201,
    "name": "Call Of Duty Infinite Warfare",
    "price": 49.99,
    "score": 150,
    "image": "call-of-duty-infinite-warfare.png"
},
{
    "id": 102,
    "name": "The Witcher III Wild Hunt",
    "price": 119.5,
    "score": 250,
    "image": "the-witcher-iii-wild-hunt.png"
},
{
    "id": 99,
    "name": "Call Of Duty WWII",
    "price": 249.99,
    "score": 205,
    "image": "call-of-duty-wwii.png"
},
{
    "id": 12,
    "name": "Mortal Kombat XL",
    "price": 69.99,
    "score": 150,
    "image": "mortal-kombat-xl.png"
},
{
    "id": 74,
    "name": "Shards of Darkness",
    "price": 71.94,
    "score": 400,
    "image": "shards-of-darkness.png"
},
{
    "id": 31,
    "name": "Terra Média: Sombras de Mordor",
    "price": 79.99,
    "score": 100,
    "image": "terra-media-sombras-de-mordor.png"
},
{
    "id": 420,
    "name": "FIFA 18",
    "price": 195.39,
    "score": 325,
    "image": "fifa-18.png"
},
{
    "id": 501,
    "name": "Horizon Zero Dawn",
    "price": 115.8,
    "score": 290,
    "image": "horizon-zero-dawn.png"
}

]

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

    useEffect(() => { // Chama o CheckoutSum toda vez que a ProdutosCart for atualizada

        CheckoutSum();

    }, [ProdutosCart])

    async function LoadProdutos() {

        /*  await Api.get('/produtos')
  
              .then(result => {
  
                  const filter = result.data.sort((a, b) => b.id - a.id) // Organiza os produtos pelo ID mais recente ao mais antigo.
  
                  setProdutos({ isLoad: true, Data: filter })
  
              })
  
              .catch(err => {
  
                  console.log(err)
  
              }) */

        const filter = prods.sort((a, b) => b.id - a.id) // Organiza os produtos pelo ID mais recente ao mais antigo.  
        setProdutos({ isLoad: true, Data: filter })

    }
    function setProdutosFilter({filter, search}) {

        console.log(filter, search)

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

            case 'input':

                filtered = data.filter(item => item.name.toLowerCase().includes(search)) 
                
                console.log('teste', filtered)

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

            produto.total = produto.qtd * produto.price;

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

            Desconto: 0.00, // Variavel desconto para futuras funções como promoções, etc ... 

            Total: (ProdutosCart.reduce((a, b) => a + b.total, 0) + ProdutosCart.reduce((a, b) => a + b.qtd * ValorFrete, 0))// Soma o valor do frete + subtotal
        }

        if (dataFormated.Total > 250) {

            console.log('Desconto')

            dataFormated.Desconto = dataFormated.Frete

            dataFormated.Total = dataFormated.Total - dataFormated.Desconto;
        }
        // Formata os valores para a moeda Brasileira.
        dataFormated.subTotal = dataFormated.subTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        dataFormated.Frete = dataFormated.Frete.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        dataFormated.Desconto = dataFormated.Desconto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        dataFormated.Total = dataFormated.Total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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