import React, { Component } from 'react';


export default class Cars extends Component {
	componentWillMount(){
		this.props.getCars(2);
	}


	render() {
		const {cars, car_id, onChange} = this.props
		return (
	        <select onChange={onChange} name="car_id">
	          	<option value="" disabled selected>Select your car</option>
	          	{cars.map((car) => {return(<option value={car.id} car_id={car.id}>{car.model}</option>)})}
	        </select>
		)
	};
};