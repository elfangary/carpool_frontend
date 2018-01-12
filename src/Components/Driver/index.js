import React, { Component } from 'react';
import Cars from '../../Containers/CarsContainer';
import Locations from '../../Containers/LocationsContainer';
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
						{
							stop_points_attributes.map((stopPoint, index) => {
								return (
									<label>
										stop point {index + 1}
										<Locations location_id={stopPoint.location_id} name="location_id" onChange={(e) => this.handleStopPointChange(e, index)} />
										<Time stop_point={stopPoint} onChange={(e) => this.handleStopPointChange(e, index)}/>
									</label>
								)
							})
						}
						<button type="button" onClick={() => this.addStopPoint()}>Add stop point</button>
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