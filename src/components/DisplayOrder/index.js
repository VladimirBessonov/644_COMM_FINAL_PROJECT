import React, {useContext, useEffect} from 'react'
import {Button} from "react-bootstrap";
import { OrderContext } from "../../context";

const DisplayOrder = props =>  {
    const selectedContext = useContext(OrderContext)
    const {
        selectedOrder,
        total,
        setSelectedOrder,
        calcTotal
    } = selectedContext

    useEffect( () => {
        calcTotal(selectedOrder)
    })

    const handleDeleteItem = (e) => {
        if (e.target.name == "deleteBtn" ) {
            let index = e.target.getAttribute('value')
            selectedOrder.splice(index, 1)
            setSelectedOrder([...selectedOrder])
        }
    }

    return (
            <div> Total: {total} <br/>
                {selectedOrder.map( (item, index) => {
                    return <div style={{ border : 'solid'}}  onClick={ handleDeleteItem}>
                        {index + 1}:
                        {item.selectedDough}, {item.selectedSize}, {item.selectedCheese}, {item.selectedSauce},
                        toppings: {item.selectedTopping.length > 0 ? item.selectedTopping.map( val => { return <span>{val } </span> }) : 'no toppings ' }
                        <button value={index} name="deleteBtn">DELETE</button>
                    </div>
                })}
                {selectedOrder.length > 0 ? <Button variant="success">Checkout</Button> : <p>Nothing selected yet</p> }
            </div>
    );

};
export default DisplayOrder

