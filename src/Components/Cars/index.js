import React, { Component } from 'react';

export default class Cars extends Component {
	componentWillMount(){
		this.props.getCars();
	}
	render() {
		const {cars, car_id, onChange, name} = this.props
		return (
	        <select onChange={onChange} name={name}>
	        	<option value="" disabled selected>Select your car</option>
	          	{cars.map((car) => {return(<option value={car.id} car_id={car.id}>{car.model}</option>)})}
	        </select>
		)
	};
};