import ProdutosList from "./Componentes/ProdutosList/produtos";
import Header from "./Componentes/Header/header";
import GlobalProvider from "./context/GlobalContext";
import './globalstyle.css'
import Footer from "./Componentes/Footer/Footer";
function App() {
  return (
    <GlobalProvider>
      <div className = 'app-container'>
        <Header />
        <ProdutosList />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
