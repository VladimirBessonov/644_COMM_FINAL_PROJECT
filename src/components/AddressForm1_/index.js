import React from 'react'
import * as ROUTES from "../../consts/routes";
import {NavLink} from "react-router-dom";

const AddressForm1 = props =>  {

    const { } =  props;
    const handleSubmit = (e) => {
        e.preventDefault(
            console.log(e)
        );
    }
    return (
        <div className="col-lg-4">
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="Name">First Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Your name"/>
                        <label htmlFor="Surname">Last Name</label>
                        <input type="text" className="form-control" id="Surname" placeholder="Your name"/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Apartment</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="105"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>

            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Zip Code</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="92120"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-warning"><NavLink to={ROUTES.LANDING} style={{color:'black'}}>RETURN</NavLink></button>
        </form>
        </div>

    );

};
export default AddressForm1

