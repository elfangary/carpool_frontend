import React, { Component } from 'react';
import Cars from '../../Containers/CarsContainer';
import Locations from '../../Containers/LocationsContainer';
import Time from '../Timeframe';
import CarDetails from '../CarDetails';
import { Modal, Button } from 'antd';
import './index.css';
import '../User/user_style.css';


export default class Driver extends Component {
	constructor(props){
		super(props);
		this.state = {
			car_id: null,
			day: null,
			all_seats: null,
			specific_gender: '',
			smoking: null,
			stop_points_attributes: [{
				location_id: null,
				trip_id: null,
				start_time: '',
				end_time: ''
			}, {
				location_id: null,
				trip_id: null,
				start_time: '',
				end_time: ''
			}],
			car: {
				model: '',
				number: '',
				color: ''
			}
		};
		this.inputs = {};
	};

	handleStopPointChange = (event, index) => {
		const {stop_points_attributes} = this.state;
		const name = event.target.name;
		const value = name === 'location_id' ? parseInt(event.target.value) : event.target.value;
		stop_points_attributes[index][name] = value;
		this.setState({
			stop_points_attributes
		});
	};

	addStopPoint = () => {
		const {stop_points_attributes} = this.state;
		const stopPoint = {
			location_id: null,
			trip_id: null,
			start_time: '',
			end_time: ''
		};
		stop_points_attributes.push(stopPoint);
		this.setState({stop_points_attributes});
	};

	handleChangeToI = (event) => {
		console.log(event.target.value);
		this.setState({
			[event.target.name]: parseInt(event.target.value)
		});
	};


	handleChange = (event) => {
		this.setState({
			[event.target.name]: (event.target.value)
		});
	};

	handleErrors(errors) {
        Object.entries(this.inputs).forEach(([key, value]) => {
            value.style.borderColor = "#e1e1e1";
        });
        errors.forEach(error => {
			let errorField;
			if (error.split(' ')[0] === 'Stop') {
				const errorArr = error.split(' ');
				errorField = errorArr[2] === 'location' ?  errorArr[2] : errorArr.slice(2,4).join('_');
			} else {
				errorField = error.split(' ')[0].toLowerCase();
			}
			if (this.inputs[errorField]) {this.inputs[errorField].style.borderColor = '#ae3130';}
		});
	};

	showModal = () => {
		this.setState({
		  visible: true,
		});
	}
	handleOk = (e) => {
		this.setState({
			visible: false,
		});
		this.props.addCar(this.state.car);
	}
	handleCancel = (e) => {
		this.setState({
			visible: false,
		});
	}

	handleNewCar = (event) => {
		const {car} = this.state;
		car[event.target.name] = event.target.value
		this.setState({
			car
		});
	}

	render() {
		const {locations, addTrip, addCar, error} = this.props;
		const {car_id, day, all_seats, specific_gender, smoking, stop_points_attributes, car} = this.state;
		const style = {
			textTransform:'capitalize',
			textAlign: 'center',
			backgroundColor: '#fafafa'
		}
		return (
			<div className="new-container end margin">
				<div className="trip-form start">
					<h2>Create Your Trip</h2>
					<form className="location">
						<legend>Location Details</legend>
						{
							stop_points_attributes.slice(0, 4).map((stopPoint, index) => {
								return (
									<div className="flex-row">
										<div>
											<Locations inputs={this.inputs} location_id={stopPoint.location_id} name="location_id" onChange={(e) => this.handleStopPointChange(e, index)} />
										</div>
										<div>
											<Time inputs={this.inputs} stop_point={stopPoint} onChange={(e) => this.handleStopPointChange(e, index)}/>
										</div>
									</div>
								)
							})
						}
						<button className="new-stop create" type="button" onClick={() => this.addStopPoint()}>Add Stop Point</button>
						<input ref={(ref) => this.inputs.day = ref} className="select-options" type="date" id="day" name="day" onChange={this.handleChange}/>
						<Cars inputs={this.inputs} car_id={car_id} name="car_id" onChange={this.handleChangeToI.bind(this)}/>
						<div>
							<Button className="new-stop create" onClick={this.showModal}>Create A Car</Button>
							<Modal
							title="Create Car"
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
							>
							<form>
								<input type="text" name="model" placeholder="model" value={car.model} onChange={this.handleNewCar} />
								<input type="text" name="number" placeholder="number" value={car.number} onChange={this.handleNewCar} />
								<input type="text" name="color" placeholder="color" value={car.color} onChange={this.handleNewCar} />
							</form>
							</Modal>
						</div>
						<input type="number" ref={(ref) => this.inputs.all = ref} className="seats" name="all_seats" max={4} value={all_seats} onChange={this.handleChangeToI} placeholder="Available Seats" />
					</form>
					<button className="submit-form end" type="button" onClick={() => {addTrip(car_id, day, all_seats, specific_gender, smoking, stop_points_attributes)}}>Create</button>
				</div>
				{
					(error)? this.handleErrors(error) : null
				}
			</div>	
		)
	
	}		
}