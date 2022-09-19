import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Register from "./Register";
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51LidQnAHXIkEQ0eT8nzxJECIkC2JUKRwjDtiUZb1v13FPqnHwVau9f7K7mnuwW6J4x9NUrzVRMjI2d6Cg9nGpmRa00w7d7S5VL');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //WILL ONLY RUN ONCE THE APP COMPONENT LOADS...
    auth.onAuthStateChanged(authUser => {
      // console.log("The User is >>> ", authUser);

      if (authUser) {
        //User is looged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //USer is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
