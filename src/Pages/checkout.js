import React, {Component, useContext} from 'react';
import AddressForm from "../components/AddressForm";
import AddressForm1 from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import DisplayOrder from "../components/DisplayOrder";
import {OrderContext} from "../context";


class CheckoutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentWillMount() {
        const that = this;
        let sqPaymentScript = document.createElement("script");
        sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
        sqPaymentScript.type = "text/javascript";
        sqPaymentScript.async = false;
        sqPaymentScript.onload = () => {
            that.setState({
                loaded: true
            });
        };
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
    }

        render() {


              return (
                  <>
                      <AddressForm/>
                      {(this.context.total > 0) ? this.state.loaded && <PaymentForm paymentForm={window.SqPaymentForm}/> : <></>}
                      <DisplayOrder/>

                  </>
              )
        }
}

CheckoutPage.contextType = OrderContext

export default CheckoutPage