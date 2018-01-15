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
			all_seats: 0,
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

	render() {
		const {locations, addTrip} = this.props;
		const {car_id, day, all_seats, specific_gender, smoking, stop_points_attributes} = this.state;
		return (
			<div>
				<h1>Book Your Trip</h1>
				<div>
					<p>Location Details</p>
					<p>Schedule</p>
					<p>Car Details</p>
				</div>
				<form>
					<div>
						<p>Moving From</p>
						{
							stop_points_attributes.slice(0, 4).map((stopPoint, index) => {
								return (
									<div>
										<label>
											<Locations location_id={stopPoint.location_id} name="location_id" onChange={(e) => this.handleStopPointChange(e, index)} />
											<Time stop_point={stopPoint} onChange={(e) => this.handleStopPointChange(e, index)}/>
										</label>
									</div>
								)
							})
						}		
						<button type="button" onClick={() => this.addStopPoint()}>Add stop point</button>
					</div>
				
					<div>
						<label htmlFor="day">
							<input type="date" id="day" name="day" onChange={this.handleChange}/>
						</label>
					</div>

				
					<div>
						<Cars car_id={car_id} name="car_id" onChange={this.handleChangeToI.bind(this)}/>
					</div>
					<div>
						<label>
							<p>Available seats</p>
							<input type="number" name="all_seats" max={4} value={all_seats} onChange={this.handleChangeToI} placeholder="Available Seats" />
						</label>
					</div>
					
					<button type="button" onClick={() => {addTrip(car_id, day, all_seats, specific_gender, smoking, stop_points_attributes)}}>Submit</button>
				</form>
			</div>
		)
	};

};