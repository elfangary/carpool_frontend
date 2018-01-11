import React, { Component } from 'react';
import Cars from '../../Containers/CarsContainer';

export default class CarDetails extends Component {

	constructor(props){
		super(props);
		this.state = {
			car_id: null
		};
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: parseInt(event.target.value)
		});
	};


	render() {
		const {car_id} = this.state;
		return (
			<div>
				<Cars car_id={car_id} onChange={this.handleChange.bind(this)}/>
			</div>
		)
	};
};