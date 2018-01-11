import React, { Component } from 'react';

export default class Cars extends Component {
	componentWillMount(){
		this.props.getCars();
	}
	componentWillReciveProps(nextProps){
		nextProps = this.props.deleted;
	}
	render() {
		const {cars, car_id, onChange, name, deleted} = this.props;
		console.log(this.props.deleted);
		return (
	        <select onChange={onChange} name={name}>
	        	<option value="" disabled selected>Select your car</option>
	          	{cars.map((car) => {return(<option value={car.id} car_id={car.id} deleted={deleted}>{car.model} </option>)})}
	        </select>
		)
	};
};