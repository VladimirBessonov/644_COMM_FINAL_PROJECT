import React, {useContext, useEffect} from 'react'
import {ButtonGroup, Button, Form} from "react-bootstrap";
import {DOUGH, CHEESEOPTIONS, SIZE, TOPPINGS, SAUCE} from "../../data";

import { OrderContext } from "../../context";

const OrderForm = props =>  {
    const selectedContext = useContext(OrderContext)
    // Use Context
    const {
        selectedDough, selectedSize, selectedCheese, selectedSauce, selectedTopping, selectedOrder,
        setSelectedDough, setSelectedSize, setSelectedCheese, setSelectedSauce, setSelectedTopping,
        setSelectedOrder,
    } = selectedContext

    // Form handlers
    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedOrder([...selectedOrder, {selectedDough, selectedSize, selectedCheese, selectedSauce, selectedTopping}])
        console.log(selectedOrder)
    }

    const handleSelectSize = (e) => {
        setSelectedSize(e.target.value)
    }
    const handleSelectCheese = (e) => {
        setSelectedCheese(e.target.value)
    }
    const handleSelectSauce = (e) => {
        setSelectedSauce(e.target.value)
    }

    const handleToggle = (e) => {
        e.target.checked ? console.log('toggled on', e.target.value): console.log('toggled off', e)
        if (e.target.checked) {
            let index = selectedTopping.indexOf(e.target.value);
            if (index == -1) setSelectedTopping([...selectedTopping, e.target.value ]);
            console.log(selectedTopping)
        } else {
            let index = selectedTopping.indexOf(e.target.value);
            if (index !== -1) {
                selectedTopping.splice(index,1)
                setSelectedTopping([...selectedTopping])};
                console.log(selectedTopping)
        }
    }

    return (
        <div>
        <ButtonGroup aria-label="Basic example">
            {Object.entries(DOUGH).map( ([key, val]) => {
                if (selectedDough == key) {
                    return <Button variant="secondary active" value={key} onClick={ (e)=> {

                        setSelectedDough(e.target.value)
                    }}>{val}</Button>
                } else {
                    return <Button variant="secondary" value={key} onClick={ (e)=> {
                        setSelectedDough(e.target.value)
                    }}>{val}</Button>
                }
            })}
        </ButtonGroup>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="sizeSelect" onChange={handleSelectSize}>
                    <Form.Label> Size </Form.Label>
                    <Form.Control as="select" custom >
                        {Object.entries(SIZE[selectedDough])
                                .map( ([key, val]) => {
                            return <option value={key} >{ key} ${val}}</option>
                        })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="cheeseSelect" onChange={handleSelectCheese}>
                    <Form.Label> Cheese options </Form.Label>
                    <Form.Control as="select" custom>
                        {Object.entries(CHEESEOPTIONS)
                            .map( ([key, val]) => {
                                return <option  value={key}>{ key} ${val}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="sauceSelect" onChange={handleSelectSauce}>
                    <Form.Label> Sauce </Form.Label>
                    <Form.Control as="select" custom>
                        {Object.entries(SAUCE)
                            .map( ([key, val]) => {
                                return <option value={key}>{ key} ${val}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <div key={`inline-checkbox`} className="mb-3">
                    <p>Each topping +$0.99</p>
                    {Object.entries(TOPPINGS).map(([topping, price]) => (
                        <Form.Check inline label={topping} value={topping} type='checkbox' id={`inline-checkbox-1`} onChange={handleToggle}/>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">Add </button>
            </Form>
        </div>
    );
};
export default OrderForm

