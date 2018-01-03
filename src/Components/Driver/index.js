import React, { Component } from 'react';
import Cars from '../../Containers/CarsContainer';
import Locations from '../../Containers/LocationsContainer';
import Time from '../Timeframe';
import Days from '../Days';


export default class Driver extends Component {

	constructor(props){
		super(props);
		this.state = {
			car_id: null,
			driver_id: 2,
			day: null,
			all_seats: 0,
			stop_points_attributes: [{
				location_id: 1,
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

	handleStopPointChange = (event) => {
		const {stop_points_attributes} = this.state;
		stop_points_attributes[1][event.target.name] = event.target.value;
		this.setState({
			stop_points_attributes
		});
	};

	handleAlmakinahChange = (event) => {
		const {stop_points_attributes} = this.state;
		stop_points_attributes[0][event.target.name] = event.target.value;
		this.setState({
			stop_points_attributes
		});
	};

	handleStopPointChangeToI = (event) => {
		const {stop_points_attributes} = this.state;
		stop_points_attributes[1][event.target.name] = parseInt(event.target.value);
		this.setState({
			stop_points_attributes
		});
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: (event.target.value)
		});
	};


	render() {
		const {locations, addTrip} = this.props;
		const {car_id, driver_id, day, all_seats, stop_points_attributes} = this.state;
		return (
			<div className="driver-container">
				<h1 className="driver-title">Book Your Trip</h1>
				<form>
					<fieldset className="Location">
						<legend>Location Details</legend>
						<label>Moving from</label>
						<p>Almakinah</p>

						<Time stop_point={stop_points_attributes[0]} onChange={this.handleAlmakinahChange.bind(this)}/>

						<button type="button">Swap</button>

						 <label>
	          				Heading to
	          				<Locations location_id={stop_points_attributes[1].location_id} onChange={this.handleStopPointChangeToI.bind(this)} />
	        			</label>

	        			<Time stop_point={stop_points_attributes[1]} onChange={this.handleStopPointChange.bind(this)}/>

					</fieldset>

					<fieldset>
                        <legend>Schedule</legend>
                        <label htmlFor="day">
                            <input type="date" id="day" name="day" onChange={this.handleChange}/>
                        </label>
                    </fieldset>

					<fieldset className="car-details">
						<legend>Car Details</legend>
						<Cars car_id={car_id} onChange={this.handleChange.bind(this)}/>
						<input type="number" name="all_seats" value={all_seats} onChange={this.handleChange} placeholder="Available Seats" />
					</fieldset>
				</form>

				<button type="button" onClick={() => {addTrip(car_id, driver_id, day, all_seats, stop_points_attributes)}}>Submit</button>
			</div>
		)
	};

};