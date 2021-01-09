import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Header/>
        <Switch>
        <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>  
    </>
  );
}

export default App;
