import React, {useContext, useState, useEffect} from 'react'
import {ButtonGroup, Button, Form} from "react-bootstrap";
import {DOUGH, CHEESEOPTIONS, SIZE, TOPPINGS, SAUCE} from "../../data";

import { OrderContext } from "../../context";

const OrderForm = props =>  {
    const selectedContext = useContext(OrderContext)
    const {dough, cheeseOptions, size, toppings, selected, sauce } = selectedContext

    // initial state
    const [selectedDough, setSelectedDough] = useState(Object.keys(DOUGH)[0]);
    const [selectedSize, setSelectedSize] = useState(Object.keys(SIZE[Object.keys(DOUGH)[0]])[0]);
    const [selectedCheese, setSelectedCheese] = useState(Object.keys(CHEESEOPTIONS)[0]);
    const [selectedSauce, setSelectedSauce] = useState(Object.keys(SAUCE)[0]);
    const [selectedTopping, setSelectedTopping] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect( () => {
        let total = calcTotal(selectedOrder)
        setTotal(total)
    })

    console.log(Object.keys(DOUGH)[0])
    console.log(Object.keys(SIZE[Object.keys(DOUGH)[0]])[0])
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

    const handleDeleteItem = (e) => {
        if (e.target.name == "deleteBtn" ) {
            let index = e.target.getAttribute('value')
            selectedOrder.splice(index, 1)
            setSelectedOrder([...selectedOrder])
        }
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
    // Selection input
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }

    const calcTotal = (order) => {
        let total = 0;
        order.map ( item => {
            total += SIZE[item.selectedDough][item.selectedSize] + CHEESEOPTIONS[item.selectedCheese] + SAUCE[item.selectedSauce] + 0.99 * item.selectedTopping.length
        })
        console.log(total)
        return total.toFixed(2)
    }

    return (
        <div>
        <ButtonGroup aria-label="Basic example">
            {Object.entries(dough).map( ([key, val]) => {
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
                        {Object.entries(size[selectedDough])
                                .map( ([key, val]) => {
                            return <option value={key} >{ key} ${val}}</option>
                        })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="cheeseSelect" onChange={handleSelectCheese}>
                    <Form.Label> Cheese options </Form.Label>
                    <Form.Control as="select" custom>
                        {Object.entries(cheeseOptions)
                            .map( ([key, val]) => {
                                return <option  value={key}>{ key} ${val}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="sauceSelect" onChange={handleSelectSauce}>
                    <Form.Label> Sauce </Form.Label>
                    <Form.Control as="select" custom>
                        {Object.entries(sauce)
                            .map( ([key, val]) => {
                                return <option value={key}>{ key} ${val}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <div key={`inline-checkbox`} className="mb-3">
                    <p>Each topping +$0.99</p>
                    {Object.entries(toppings).map(([topping, price]) => (
                        <Form.Check inline label={topping} value={topping} type='checkbox' id={`inline-checkbox-1`} onChange={handleToggle}/>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">Add </button>
            </Form>

            <div> Total: {total} <br/>
                {selectedOrder.map( (item, index) => {
                    let html = '';
                    // for (const key in item) {
                    //     html += <p> ${item[key]}</p>
                    // }
                    return <div style={{ border : 'solid'}}  onClick={ handleDeleteItem}>
                        {index + 1}:
                    {item.selectedDough}, {item.selectedSize}, {item.selectedCheese}, {item.selectedSauce},
                    toppings: {item.selectedTopping.length > 0 ? item.selectedTopping.map( val => { return <span>{val } </span> }) : 'no toppings ' }
                    <button value={index} name="deleteBtn">DELETE</button>
                    </div>
                })}

            </div>
        </div>


    );

};
export default OrderForm

