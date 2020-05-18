import React, {createContext, useState} from 'react';
import './App.css';
import Layout from "./components/Layout";
import {Route, Switch, Redirect} from 'react-router-dom';
import { OrderContextProvider} from "./context";

function App() {

  return (
    <div className="App">
        <OrderContextProvider>
            <Layout>

            </Layout>
        </OrderContextProvider>
    </div>
  );
}

export default App;
