import React, {createContext, useState} from 'react';
import './App.css';
import Layout from "./components/Layout";
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import * as ROUTES from './consts/routes'
import { OrderContextProvider} from "./context";
import CheckoutPage from "./Pages/checkout";
import HomePage from "./Pages/home";


function App() {

    let Routes = (
        <Switch>
            <Route path={ROUTES.CHECKOUT} component={CheckoutPage}/>
            <Route path={ROUTES.LANDING} component={HomePage}/>
        </Switch>
    )

  return (
    <div className="App">
        <BrowserRouter>
        <OrderContextProvider>
            <Layout>
                {Routes}
            </Layout>
        </OrderContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
