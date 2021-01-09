import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  
  const [ {basket}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser 
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null 
        })
      }
    } )
  }, [])

  return (
    <>
    <Router>
     
        <Switch>
          <Route path="/sign-in">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </Router>  
    </>
  );
}

export default App;
