
import GlobalProvider from "./context/GlobalContext";
import './globalstyle.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/home'
import Cart from './screens/Cart'
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/header";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='app-container' >
          <Header />
          <div className='app-body'>
            <Switch>
              <Route  exact path='/' component={Home} />
              <Route  path='/Carrinho' component={Cart} />
            </Switch>
          </div>
            <Footer />
        </div>
      </Router>

    </GlobalProvider>
  );
}

export default App;
