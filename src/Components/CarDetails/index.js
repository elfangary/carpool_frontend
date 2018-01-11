import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cars from '../../Containers/CarsContainer';

export default class CarDetails extends Component {

	constructor(props){
		super(props);
		this.state = {
			car_id: null,
			car:{
				color: '',
				model: '',
				number: ''
			},
			deleted: false
		};
	};

	handleChange = (event) => {
		console.log("in option");
		console.log(event.target.name);
		this.setState({
			car_id: parseInt(event.target.value)
		});
	};

	handelChangeForm( event ){
		const {car} = this.state;
		car[event.target.name] = event.target.value
		console.log("in carDetails ")
		console.log(car);
		this.setState({
			car
		})
	}
	render() {
		const {car_id} = this.state;
		const { cars, loading, error} = this.props;
		var displayed_car = cars[0];

		if(car_id){
			for (var i = 0; i < cars.length; i++) {
				displayed_car =  (cars[i].id === car_id )? cars[i] : displayed_car
			}
		}

		console.log('hamaaadaaaaaaaaaaaaaaaaaaaaa', this.state )
		return (
			<div>
				<Cars car_id={car_id} deleted={this.state.deleted} onChange={this.handleChange.bind(this)}/>
				{
					displayed_car? 
				<div>
					<p>model: {displayed_car.model}</p>
					<p>color: {displayed_car.color}</p>
					<p>number: {displayed_car.number}</p>
					<button type="button" onClick={ ()=> { this.setState({deleted: true}); this.props.deleteCar(displayed_car.id) } } >Delete Car</button>
				</div> : null
				}
				<div>
					<form>
					<input type="text" name="model" placeholder="model" onChange={this.handelChangeForm.bind(this)} />
					<input type="text" name="number" placeholder="number" onChange={this.handelChangeForm.bind(this)} />
					<input type="text" name="color" placeholder="colr" onChange={this.handelChangeForm.bind(this)} />
					<button type="button" onClick={ ()=>{this.props.createCar(this.state.car)} }>Create Car</button>
					</form>
				</div>
			</div>
		)
	};
};