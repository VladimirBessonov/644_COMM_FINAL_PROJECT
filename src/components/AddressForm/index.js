import "antd/dist/antd.css";
import React from "react";
import { Input, Typography, Row, Col, Button } from "antd";
import useForm from "./useForm";
import {NavLink} from "react-router-dom";
import * as ROUTES from "../../consts/routes";
// import "./styles.css";

const { Title } = Typography;

function AddressForm() {
    // Define your state schema
    const stateSchema = {
        first_name: { value: "", error: "" },
        last_name: { value: "", error: "" },
        email: {value:"", error: ""},
        tags: { value: "", error: "" }
    };

    // Create your own validationStateSchema
    // stateSchema property should be the same in validationStateSchema
    // in-order a validation to works in your input.
    const stateValidatorSchema = {
        first_name: {
            required: true,
            validator: {
                func: value => /^[a-zA-Z]+$/.test(value),
                error: "Invalid first name format."
            }
        },
        last_name: {
            required: true,
            validator: {
                func: value => /^[a-zA-Z]+$/.test(value),
                error: "Invalid last name format."
            }
        },
        email: {
            required: true,
            validator: {
                func: value => /[\w-]+@([\w-]+\.)+[\w-]+/.test(value),
                error: "Invalid email format."
            }
        },
        address: {
            required: true,
            validator: {
                func: value => /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/.test(value),
                error: "Invalid address format."
            }
        },
        state: {
            required: true,
            validator: {
                func: value => /^((AL)|(AK)|(AS)|(AZ)|(AR)|(CA)|(CO)|(CT)|(DE)|(DC)|(FM)|(FL)|(GA)|(GU)|(HI)|(ID)|(IL)|(IN)|(IA)|(KS)|(KY)|(LA)|(ME)|(MH)|(MD)|(MA)|(MI)|(MN)|(MS)|(MO)|(MT)|(NE)|(NV)|(NH)|(NJ)|(NM)|(NY)|(NC)|(ND)|(MP)|(OH)|(OK)|(OR)|(PW)|(PA)|(PR)|(RI)|(SC)|(SD)|(TN)|(TX)|(UT)|(VT)|(VI)|(VA)|(WA)|(WV)|(WI)|(WY))$/.test(value),
                error: "Invalid state format."
            }
        },
        zip: {
            required: true,
            validator: {
                func: value => /^\d{5}(-\d{4})?$/.test(value),
                error: "Invalid state format."
            }
        },


    };

    function onSubmitForm(state) {
        alert(JSON.stringify(state, null, 2));
    }

    const {
        values,
        errors,
        dirty,
        handleOnChange,
        handleOnSubmit,
        disable
    } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

    const { first_name, last_name,  email, address, state, zip } = values;

    return (
        <form className="my-form" onSubmit={handleOnSubmit}>
            <Title level={3}>Delivery info</Title>
            <Row>
                <Col span={4}>First Name</Col>
                <Col span={18}>
                    <Input
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={handleOnChange}
                    />
                    {errors.first_name && dirty.first_name && (
                        <p className="error">{errors.first_name}</p>
                    )}
                </Col>
            </Row>
            <Row>
                <Col span={4}>Last Name</Col>
                <Col span={18}>
                    <Input
                        type="text"
                        name="last_name"
                        value={last_name}
                        onChange={handleOnChange}
                    />
                    {errors.last_name && dirty.last_name && (
                        <p className="error">{errors.last_name}</p>
                    )}
                </Col>
            </Row>

            <Row>
                <Col span={4}>Email</Col>
                <Col span={18}>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                    />
                    {errors.email && dirty.email && (
                        <p className="error">{errors.email}</p>
                    )}
                </Col>
            </Row>

            <Row>
                <Col span={4}>Address</Col>
                <Col span={18}>
                    <Input
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleOnChange}
                    />
                    {errors.address && dirty.address && (
                        <p className="error">{errors.address}</p>
                    )}
                </Col>
            </Row>
            <Row>
                <Col span={4}>State</Col>
                <Col span={18}>
                    <Input
                        type="text"
                        name="state"
                        value={state}
                        onChange={handleOnChange}
                    />
                    {errors.state && dirty.state && (
                        <p className="error">{errors.state}</p>
                    )}
                </Col>
            </Row>
            <Row>
                <Col span={4}>ZIP</Col>
                <Col span={18}>
                    <Input
                        type="text"
                        name="state"
                        value={zip}
                        onChange={handleOnChange}
                    />
                    {errors.zip && dirty.zip && (
                        <p className="error">{errors.zip}</p>
                    )}
                </Col>
            </Row>
            <Row>
                <Col span={18} push={4}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="btn btn-warning"><NavLink to={ROUTES.LANDING} style={{color:'black'}}>RETURN</NavLink></button>
                </Col>
            </Row>
        </form>
    );
}

export default AddressForm;
