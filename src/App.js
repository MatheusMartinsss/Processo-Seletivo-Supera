import ProdutosList from "./Componentes/ProdutosList/produtos";
import GlobalProvider from "./context/GlobalContext";
function App() {
  return (
    <GlobalProvider>
        <ProdutosList />
    </GlobalProvider>
  );
}

export default App;
