import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cars from '../../Containers/CarsContainer';
import './carDetails_style.css';

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
		this.setState({
			car_id: parseInt(event.target.value)
		});
	};

	handelChangeForm(event){
		const {car} = this.state;
		car[event.target.name] = event.target.value
		this.setState({
			car
		})
	}
	render() {
		const {car_id, errors} = this.state;
		const { cars, loading, error} = this.props;
		var displayed_car = null;

		if(car_id){
			for (var i = 0; i < cars.length; i++) {
				displayed_car =  (cars[i].id === car_id )? cars[i] : displayed_car
			}
		}

		return (
			<div className="car-details-component">
				<div className="car-details-content">
					<Cars car_id={car_id} deleted={this.state.deleted} onChange={this.handleChange.bind(this)}/>
					<div className="car-details">
						<h1>Details</h1>
						{
							displayed_car?
						<div className="clearfix">
							<p>model: <span>{displayed_car.model}</span></p>
							<p>color: <span>{displayed_car.color}</span></p>
							<p>number: <span>{displayed_car.number}</span></p>
							<button type="button" onClick={ ()=> { this.setState({deleted: true}); this.props.deleteCar(displayed_car.id) } } >Delete Car</button>
						</div>
						:
						<div>
							<p>model</p>
							<p>color</p>
							<p>number</p>
						</div>
						}
					</div>
					<div className="add-car">
						<h1>Add Car</h1>
						<div className="clearfix">
							<form>
							<input type="text" className={(this.state.car.model.length === 0)? "error": ""}  name="model" placeholder="model" onChange={this.handelChangeForm.bind(this)} />
							<input type="text" className={(this.state.car.number.length === 0)? "error": ""} name="number" placeholder="number" onChange={this.handelChangeForm.bind(this)} />
							<input type="text" className={(this.state.car.color.length === 0)? "error": ""} name="color" placeholder="color" onChange={this.handelChangeForm.bind(this)} />
							<button type="button" onClick={ ()=>{this.props.createCar(this.state.car)} }>Create Car</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	};
};