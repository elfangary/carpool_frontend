import React, { Component } from 'react';
import Cars from '../../Containers/Cars';
import Locations from '../../Containers/LocationsContainer';


export default class Driver extends Component {

	constructor(props){
		super(props);
		this.state = {
			car_id: null,
			driver_id: null,
			day: null,
			all_seats: null,
			stop_points_attributes: [{
				location_id: null,
				trip_id: null,
				start_time: '',
				end_time: ''
			}
			]
		}
	}

	handleStopPointChange = (event) => {
		const {stop_points_attributes} = this.state;
		stop_points_attributes[0][event.target.name] = event.target.value;
		this.setState({
			stop_points_attributes
		})
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		const {locations, addTrip} = this.props;
		const {car_id, driver_id, day, all_seats, stop_points_attributes} = this.state;
		console.log(locations);
		return (
			<div className="drivercontainer">
				<h1 className="driver-title">Driver's Form</h1>
				<form action="#">
					<fieldset className="Location">
						<legend>Location Details</legend>
						<label>Moving from</label>
						<p>Almakinah</p>

						<label for="moving-timeframe">
							Time Frame
							<input type="time" name="moving-timeframe-start" id="moving-timeframe-start" />
							<p>To</p>
							<input type="time" name="moving-timeframe-end" id="moving-timeframe-end" />
						</label>

						<button type="button">Swap</button>

						 <label>
	          				Heading to
	          				<Locations location_id={stop_points_attributes[0].location_id} onChange={this.handleStopPointChange.bind(this)} />
	        			</label>

	        			<label for="heading-timeframe">
							Time Frame
							<input type="time" name="heading-timeframe-start" id="heading-timeframe-start" />
							<p>To</p>
							<input type="time" name="heading-timeframe-end" id="heading-timeframe-end" />
						</label>

						<label>
	          				Add checkpoint
	          				<select>
	           					<option value="stopPoint1">Stop Point 1</option>
	           					<option value="stopPoint2">Stop Point 2</option>
	           					<option value="stopPoint3">Stop Point 3</option>
	           					<option value="stopPoint4">Stop Point 4</option>
	          				</select>
	        			</label>

	        			<label for="checkpoint-timeframe">
							Time Frame
							<input type="time" name="checkpoint-timeframe-start" id="checkpoint-timeframe-start" />
							<p>To</p>
							<input type="time" name="checkpoint-timeframe-end" id="checkpoint-timeframe-end" />
						</label>

						<label>
	          				Add checkpoint
	          				<select>
	           					<option value="stopPoint1">Stop Point 1</option>
	           					<option value="stopPoint2">Stop Point 2</option>
	           					<option value="stopPoint3">Stop Point 3</option>
	           					<option value="stopPoint4">Stop Point 4</option>
	          				</select>
	        			</label>

	        			<label for="checkpoint-timeframe">
							Time Frame
							<input type="time" name="checkpoint-timeframe-start" id="checkpoint-timeframe-start" />
							<p>To</p>
							<input type="time" name="checkpoint-timeframe-end" id="checkpoint-timeframe-end" />
						</label>
					</fieldset>

					<fieldset className="schedule">
						<legend>Trip Schedule</legend>
						<label for="regular-basis">Regular Basis</label>
						<input type="radio" name="trip-type" id="regular-basis" value= "1"/>

						<label for="one-day">One Day Trip</label>
						<input type="radio" name="trip-type" id="one-day" value= "2"/>

						<label for="day">Sunday</label>
						<input type="radio" name="day" id="day" value= "1" onClick={this.handleChange}/>
						<label for="day">Monday</label>
						<input type="radio" name="day" id="day" value= "2"/>
						<label for="day">Tuesday</label>
						<input type="radio" name="day" id="day" value= "3"/>
						<label for="day">Wednesday</label>
						<input type="radio" name="day" id="day" value= "4"/>
						<label for="day">Thursday</label>
						<input type="radio" name="day" id="day" value= "5"/>
						<label for="day">Friday</label>
						<input type="radio" name="day" id="day" value= "6"/>
						<label for="day">Saturday</label>
						<input type="radio" name="day" id="day" value= "7"/>
					</fieldset>

					<fieldset className="car-details">
						<legend>Car Details</legend>
						<Cars car_id={car_id} onChange={this.handleChange.bind(this)}/>
					</fieldset>
				</form>

				<button type="button" onClick={() => {addTrip(car_id, driver_id, day, all_seats, stop_points_attributes)}}>Submit</button>
			</div>
		)
	};

};