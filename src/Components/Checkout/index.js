import React, { Component } from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {chargeApi} from '../../apiConfig';


export default class Checkout extends Component {

	fromCentsToPound = (amount)  => amount * 100;

	successPayment = (data) => {
  		alert('Payment Successful');
  		this.props.addCharge(data.data);
  		console.log('hello')
  		console.log(data.data)
	};

	errorPayment = (data) => {
  		alert('Payment Error');
	};

	onToken = (amount, description) => token =>
	  axios.post(chargeApi,
	    {
	      description,
	      stripeToken: token.id,
	      currency: 'EGP',
	      amount: this.fromCentsToPound(amount)
	    })
	    .then(this.successPayment)
	    .catch(this.errorPayment);

	 render() {
	 	const {name, description, amount, email} = this.props;
	 	return (
	 		<StripeCheckout
    			name={name}
    			email={email}
    			description={description}
    			amount={this.fromCentsToPound(amount)}
    			token={this.onToken(amount, description)}
    			currency={'EGP'}
    			stripeKey={'pk_test_Gb9ajdE1zHAzQBLlK4w0tjJU'}
    			allowRememberMe={false}
  			>
  			<button>Pay With Card</button>
  			</StripeCheckout>
	 	)
	 }
};