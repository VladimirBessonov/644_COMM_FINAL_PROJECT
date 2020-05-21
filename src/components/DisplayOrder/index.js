import React, {useContext, useEffect} from 'react'
import {Button} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import { OrderContext } from "../../context";
import * as ROUTES from '../../consts/routes'

const DisplayOrder = props =>  {
    const selectedContext = useContext(OrderContext)
    const {
        selectedOrder,
        total,
        setSelectedOrder,
        calcTotal, setTotal
    } = selectedContext
    const location = useLocation();
    let orderSummary;
    //
    useEffect( () => {
        let orderTotal = calcTotal(selectedOrder)
        setTotal(orderTotal)

    })

    const handleDeleteItem = (e) => {
        if (e.target.name == "deleteBtn" ) {
            let index = e.target.getAttribute('value')
            selectedOrder.splice(index, 1)
            setSelectedOrder([...selectedOrder])
        }
    }
       if (selectedOrder.length > 0 && location.pathname == "/" ) {
           orderSummary = <Button variant="primary"><NavLink to={ROUTES.CHECKOUT} style={{color:'black'}}>CHECKOUT</NavLink></Button>
       }
       if (selectedOrder.length == 0 && location.pathname == "/" ) {
           orderSummary = <p>Nothing ordered yet</p>
       }
       if (selectedOrder.length == 0 && location.pathname != "/" ) {
           orderSummary = <p>Nothing ordered yet, return to name page</p>
       }

    return (
        <div className="col-lg-4">
            Total: {total} <br/>
                {selectedOrder.map( (item, index) => {
                    return <div style={{ border : 'solid'}}  onClick={ handleDeleteItem}>
                        {index + 1}:
                        {item.selectedDough}, {item.selectedSize}, {item.selectedCheese}, {item.selectedSauce},
                        toppings: {item.selectedTopping.length > 0 ? item.selectedTopping.map( val => { return <span>{val } </span> }) : 'no toppings ' }
                        <button value={index} name="deleteBtn">DELETE</button>
                    </div>
                })}
            {orderSummary}
        </div>
    );

};
export default DisplayOrder

