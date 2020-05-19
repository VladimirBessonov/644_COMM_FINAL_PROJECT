import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {CHEESEOPTIONS, DOUGH, SAUCE, SIZE} from "../data";

export const Context = createContext({});

export const Provider = props => {
    // Initial values are obtained from the props
    const {
        selectedDough: initDough,
        selectedSize: initSize,
        selectedCheese: initCheese,
        selectedSauce: initSauce,
        selectedTopping: initTopping,
        selectedOrder: initOrder,
        total: initTotal,
        children
    } = props;


    // Use State to keep the values
    const [selectedDough, setSelectedDough] = useState(initDough);
    const [selectedSize, setSelectedSize] = useState(initSize);
    const [selectedCheese, setSelectedCheese] = useState(initCheese);
    const [selectedSauce, setSelectedSauce] = useState(initSauce);
    const [selectedTopping, setSelectedTopping] = useState(initTopping);
    const [selectedOrder, setSelectedOrder] = useState(initOrder);
    const [total, setTotal] = useState(initTotal)

    const calcTotal = (order) => {
        let total = 0;
        order.map( item => {
            total += parseFloat(SIZE[item.selectedDough][item.selectedSize]) + parseFloat(CHEESEOPTIONS[item.selectedCheese]) + parseFloat(SAUCE[item.selectedSauce]) + 0.99 * parseFloat(item.selectedTopping.length)
        })
        return total.toFixed(2)
    }


    // Make the context object:
    const selectedContext = {
        selectedDough,
        selectedSize,
        selectedCheese,
        selectedSauce,
        selectedTopping,
        selectedOrder,
        total,
        setSelectedDough,
        setSelectedSize,
        setSelectedCheese,
        setSelectedSauce,
        setSelectedTopping,
        setSelectedOrder,
        setTotal,
        calcTotal,
        children
    }

    // pass the value in provider and return
    return <Context.Provider value={selectedContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
    selectedDough : PropTypes.string,
    selectedSize : PropTypes.string,
    selectedCheese : PropTypes.string,
    selectedSauce : PropTypes.string,
    selectedTopping: PropTypes.array,
    selectedOrder : PropTypes.number,
    total : PropTypes.number
};

Provider.defaultProps = {
    selectedDough : Object.keys(DOUGH)[0],
    selectedSize : Object.keys(SIZE[Object.keys(DOUGH)[0]])[0],
    selectedCheese : Object.keys(CHEESEOPTIONS)[0],
    selectedSauce : Object.keys(SAUCE)[0],
    selectedTopping: [],
    selectedOrder : [],
    total : 0
};
