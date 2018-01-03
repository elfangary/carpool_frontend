import React, { Component } from 'react';


export default class Checkout extends Component {

	constructor(props){
		super(props);
		this.state = {
			amount: null,
			card_number: null,
			exp_date: null,
			cvc: null
		};
		this.onSubmit = this.onSubmit.bind(this);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);

	}

	render(){
		const {amount, card_number, exp_date, cvc} = this.state;
		return (
			<div>
			<form onSubmit={this.onSubmit}>
                <legend>Payment</legend>
                    <label htmlFor="paymentAmountInput">Amount in EGP</label>
                    <input type="number" id="paymentAmountInput" name="amount" value={amount} onChange={this.handleChange}/>

                    <label htmlFor="cardNumberInput">Card Number</label>
                    <input type="text" id="cardNumberInput" placeholder="4242 4242 4242 4242" name="card_number" value={card_number} onChange={this.handleChange}/>

                    <label htmlFor="expInput">Expiration Date</label>
                    <input type="date" id="expInput" placeholder="12/2017" name="exp_date" value={exp_date} onChange={this.handleChange}/>

                    <label htmlFor="cvcInput">CVC</label>
                    <input type="number" id="cvcInput" placeholder="123" name="cvc" value={cvc} onChange={this.handleChange}/>

                <button type="submit">Recharge</button>
            </form>
        </div>

		)
	}
}