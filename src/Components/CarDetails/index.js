import React, { Component } from 'react';
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
		const {car_id} = this.state;
		const { cars,loading, error} = this.props;
		var displayed_car = null;

		if(loading){
            return (
            	<div className="fixed-container">
            		<div className="profile-content">
						<p>Loading...</p>
					</div>
				</div>
            )
        }else if(error){
            return (
            	<div className="fixed-container">
                	<div className="profile-content">
						<p>Sorry, something went Wrong</p>
						<p>{error}</p>
					</div>
				</div>
            )
		}else{
			if(car_id){
				for (var i = 0; i < cars.length; i++) {
					displayed_car =  (cars[i].id === car_id )? cars[i] : displayed_car
				}
			}
			return (
				<div className="new-container end">
					<div className="margin clearfix">
						<div className="car-details-content start">
							<h2>Car Details</h2>
							<Cars car_id={car_id} deleted={this.state.deleted} onChange={this.handleChange.bind(this)}/>
							<div className="car-details">
								{
									displayed_car?
								<div className="car-tags active clearfix">
									<p className="capital">Model: <span>{displayed_car.model}</span></p>
									<p className="capital">Color: <span>{displayed_car.color}</span></p>
									<p>Number: <span>{displayed_car.number}</span></p>
									<button type="button" className="car-button end" onClick={ ()=> { this.setState({deleted: true}); this.props.deleteCar(displayed_car.id) } } >Delete Car</button>
								</div>
								:
								<div className="car-tags">
									<p>Model</p>
									<p>Color</p>
									<p>Number</p>
								</div>
								}
							</div>
							<div className="add-car">
								<h2>Add Car</h2>
								<form className="car-form">
									<input type="text" className={(this.state.car.model.length === 0)? "car-error": null} name="model" placeholder="Model" onChange={this.handelChangeForm.bind(this)} />
									<input type="text" className={(this.state.car.color.length === 0)? "car-error": null} name="color" placeholder="Color" onChange={this.handelChangeForm.bind(this)} />
									<input type="text" className={(this.state.car.number.length === 0)? "car-error": null} name="number" placeholder="Number" onChange={this.handelChangeForm.bind(this)} />
									<button type="button" className="car-button create end" onClick={ ()=>{this.props.createCar(this.state.car)} }>Create Car</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)
		}
	};
};