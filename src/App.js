import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { Products } from "./components/Pages/Products/Products";
import { Contact } from "./components/Pages/Contact/Contact";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import Cart from './components/Pages/cart/cart'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Products} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
