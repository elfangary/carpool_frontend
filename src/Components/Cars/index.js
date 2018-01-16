import React, { Component } from 'react';
import './index.css';

export default class Cars extends Component {
	componentWillMount(){
		this.props.getCars();
	}
	componentWillReciveProps(nextProps){
		nextProps = this.props.deleted;
	}
	render() {
		const {cars, onChange, name, deleted, inputs} = this.props;
		return (
	        <select className="cars select-options capital" onChange={onChange} name={name}>
	        	<option value="" disabled selected>Select your car</option>
	          	{cars.map((car) => {return(<option value={car.id} car_id={car.id} deleted={deleted}>{car.model} </option>)})}
	        </select>
		)
	};
};