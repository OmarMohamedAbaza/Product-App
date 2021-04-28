import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// Navbar
import Navbarcomponent from './NavbarComponent/Navbarcomponent';
import Home from './Home/Home';
import About from './About/About';
import Shop from './Shop/Shop';
// Drop down list
import Product from './Shop/Product/Product';
import BestProducts from './NavbarComponent/BestProducts/BestProducts';
import Men from './NavbarComponent/Men/Men';
import Women from './NavbarComponent/Women/Women';
import Kids from './NavbarComponent/Kids/Kids'
// search
import Cart from './NavbarComponent/Cart/Cart';
import Favorits from './NavbarComponent/Favorits/Favorits';
// Carosel
import "react-alice-carousel/lib/alice-carousel.css";


function App() {
  return (
    <Router>
      <Navbarcomponent />
      <Switch>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Product} />
          <Route path="/kids" component={Kids} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
          <Route path="/best" component={BestProducts} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorits" component={Favorits} />
        </div>
      </Switch>
    </Router>
    
    );
  
}

export default App;
