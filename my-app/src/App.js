
import './App.css';
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ProductScreen from "./components/ProductScreen.js"
import CartScreen from "./components/CartScreen.js"
import Store from "./components/Store.js"
import Offices from "./components/Offices.js"
import Warehouses from "./components/Warehouses.js"
import Support from "./components/Support.js"
import Team from "./components/Team.js"
import Founders from "./components/Founders.js"
import Company from "./components/Company.js"


function App() {

  return (
    <Router>
   

<Switch>

      <main>


      <Nav />


    

          <Route  exact path="/">
         
      <Main />
      </Route>


      <Route exact path="/product/:id" component={ProductScreen} />
      <Route exact path="/cart" component={CartScreen} />

      <Route exact path="/store" component={Store} />
      <Route exact path="/offices" component={Offices} />
      
      <Route exact path="/warehouses" component={Warehouses} />


      <Route exact path="/support" component={Support} />

      <Route exact path="/team" component={Team} />
      <Route exact path="/founders" component={Founders} />
      <Route exact path="/company" component={Company} />


      </main>



   
      
          



      
      
      </Switch>

    
   
  
    </Router>
  );
}

export default App;
