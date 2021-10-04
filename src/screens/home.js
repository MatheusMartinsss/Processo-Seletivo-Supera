import ProdutosList from "../Componentes/ProdutosList/produtos";
import Header from "../Componentes/Header/header";
import Filters from "../Componentes/FilterBar/Filters";
import Footer from "../Componentes/Footer/Footer";
function Home() {
    return (
        <div >
            <div style={{ display: 'flex', width: "70%", margin: 'auto', gap: '10px' }}>
                <Filters />
                <ProdutosList />
            </div>
        </div>
    );
}

export default Home;