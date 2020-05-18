import React, {createContext, useState} from 'react';
import './App.css';
import Layout from "./components/Layout";
import {DOUGH, CHEESEOPTIONS, SIZE, TOPPINGS, SAUCE} from "./data";
import { OrderContextProvider} from "./context";

function App() {
    const dough = DOUGH
    const cheeseOptions = CHEESEOPTIONS
    const size = SIZE
    const toppings = TOPPINGS
    const sauce = SAUCE
    const selected = {
        dough: "HANDTOSSED",
        cheeseOptions: "",
        size: "",
        toppings: ""
    }
  return (
    <div className="App">
        <OrderContextProvider dough={dough} cheeseOptions={cheeseOptions} size={size} toppings={toppings} selected={selected} sauce={sauce} >
            <Layout/>
        </OrderContextProvider>
    </div>
  );
}

export default App;
