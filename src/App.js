import ProdutosList from "./Componentes/ProdutosList/produtos";
import Header from "./Componentes/Header/header";
import Filters from "./Componentes/FilterBar/Filters";
import GlobalProvider from "./context/GlobalContext";
import './globalstyle.css'
import Footer from "./Componentes/Footer/Footer";
function App() {
  return (
    <GlobalProvider>
      <div className='app-container'>
        <Header />
        <div style = {{display: 'flex', width:"70%", margin:'auto', gap:'10px'}}>
          <Filters />
          <ProdutosList />
        </div>

        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
