import React, {useContext, useEffect} from 'react'
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { OrderContext } from "../../context";
import * as ROUTES from '../../consts/routes'

const DisplayOrder = props =>  {
    const selectedContext = useContext(OrderContext)
    const {
        selectedOrder,
        total,
        setSelectedOrder,
        calcTotal
    } = selectedContext
    //
    // useEffect( () => {
    //     calcTotal(selectedOrder)
    // })

    const handleDeleteItem = (e) => {
        if (e.target.name == "deleteBtn" ) {
            let index = e.target.getAttribute('value')
            selectedOrder.splice(index, 1)
            setSelectedOrder([...selectedOrder])
        }
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
                {selectedOrder.length > 0 ? <Button variant="success"><NavLink to={ROUTES.CHECKOUT} style={{color:'black'}}>CHECKOUT</NavLink></Button> : <p>Nothing selected yet</p> }
        </div>
    );

};
export default DisplayOrder

