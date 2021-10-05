import ProdutosList from "../Componentes/ProdutosList/produtos";
function Home() {
    return (
        <div >
            <div style={{ display: 'flex', width: "100%" }}>
                <ProdutosList />
            </div>
        </div>
    );
}

export default Home;