import React, { Component } from 'react';
import Cars from '../../Containers/CarsContainer';
import Locations from '../../Containers/LocationsContainer';
import Time from '../Timeframe';
import Days from '../Days';
import FlipMove from 'react-flip-move';
import './index.css';


export default class Driver extends Component {

	constructor(props){
		super(props);
		this.state = {
			car_id: null,
			day: null,
			all_seats: 0,
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

	handleSwap = (event) => {
		const {stop_points_attributes} = this.state;
		if (stop_points_attributes[0].location_id === 1) {
			stop_points_attributes[0].location_id = stop_points_attributes[1].location_id;
			stop_points_attributes[1].location_id = 1;
		} else {
			stop_points_attributes[1].location_id = stop_points_attributes[0].location_id;
			stop_points_attributes[0].location_id =1;
		};
		this.setState({stop_points_attributes})
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

	render() {
		const {locations, addTrip} = this.props;
		const {car_id, day, all_seats, stop_points_attributes} = this.state;
		return (
			<div className="driver-container">
				<h1 className="driver-title">Book Your Trip</h1>
				<form>
					<fieldset className="location clearfix">
						<legend>Location Details</legend>
						<label>
							Moving from
							<Locations location_id={stop_points_attributes[0].location_id} name="location_id" onChange={this.handleAlmakinahChange.bind(this)} id="from" />
						</label>
						<Time stop_point={stop_points_attributes[0]} onChange={this.handleAlmakinahChange.bind(this)}/>

						<button type="button" onClick={this.handleSwap.bind(this)}>Swap</button>


						 <label>
	          				Heading to
	          				<Locations name="location_id" name="location_id" location_id={stop_points_attributes[1].location_id} onChange={this.handleStopPointChangeToI.bind(this)} id="to" />
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
						<Cars car_id={car_id} name="car_id" onChange={this.handleChangeToI.bind(this)}/>
						<input type="number" name="all_seats" value={all_seats} onChange={this.handleChangeToI} placeholder="Available Seats" />
					</fieldset>
				</form>

				<button type="button" onClick={() => {addTrip(car_id, day, all_seats, stop_points_attributes)}}>Submit</button>
			</div>
		)
	};

};