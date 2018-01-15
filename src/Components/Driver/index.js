import React, { Component } from 'react';
import Cars from '../../Containers/CarsContainer';
import Locations from '../../Containers/LocationsContainer';
import CarsDetails from '../../Containers/CarsDetailsContainer';
import Time from '../Timeframe';
import Days from '../Days';
import './index.css';


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
			}]
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
	}

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
    }

	render() {
		const {locations, addTrip, error} = this.props;
		const {car_id, day, all_seats, specific_gender, smoking, stop_points_attributes} = this.state;
		return (
			<div className="new-container margin end">
				<h1 className="driver-title">Book Your Trip</h1>
				<form>
					<div>
						<p>Moving From</p>
						{
							stop_points_attributes.slice(0, 4).map((stopPoint, index) => {
								return (
									<div>
										<label>
											<Locations inputs={this.inputs} location_id={stopPoint.location_id} name="location_id" onChange={(e) => this.handleStopPointChange(e, index)} />
											<Time inputs={this.inputs} stop_point={stopPoint} onChange={(e) => this.handleStopPointChange(e, index)}/>
										</label>
									</div>
								)
							})
						}		
						<button type="button" onClick={() => this.addStopPoint()}>Add stop point</button>
					</div>
				
					<div>
						<label htmlFor="day">
							<input ref={(ref) => this.inputs.day = ref} type="date" id="day" name="day" onChange={this.handleChange}/>
						</label>
					</div>

				
					<div>
						<Cars inputs={this.inputs} car_id={car_id} name="car_id" onChange={this.handleChangeToI.bind(this)}/>
					</div>
					<div>
						<label>
							<p>Available seats</p>
							<input ref={(ref) => this.inputs.all = ref} type="number" name="all_seats" max={4} value={all_seats} onChange={this.handleChangeToI} placeholder="Available Seats" />
						</label>
					</div>
					
					<button type="button" onClick={() => {addTrip(car_id, day, all_seats, specific_gender, smoking, stop_points_attributes)}}>Submit</button>
				</form>
				{
					error ? this.handleErrors(error) : null
				}
			</div>
		)
	};

};