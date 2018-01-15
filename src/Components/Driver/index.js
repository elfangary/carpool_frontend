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
			<div className="new-container margin end">

				<h1 className="driver-title">Book Your Trip</h1>
				<form>
					<div className="box">
						<div className="flex">
							<fieldset className="location clearfix">
								<legend className="left title">Location Details</legend>
								<div className="right">
								<p className="small">Moving From</p>
									{
										stop_points_attributes.slice(0, 4).map((stopPoint, index) => {
											return (
												<div className="container clearfix">
													<label className="stop_point">
													<div className="left stop-location">
														<Locations location_id={stopPoint.location_id} name="location_id" onChange={(e) => this.handleStopPointChange(e, index)} />
													</div>
													<div className="right">
														<Time stop_point={stopPoint} onChange={(e) => this.handleStopPointChange(e, index)}/>
													</div>
													</label>
												</div>
											)
										})
									}
									<button className="new-stop" type="button" onClick={() => this.addStopPoint()}>Add stop point</button>
								</div>
							</fieldset>
						</div>
					</div>

					<div className="box">
						<fieldset>
							<legend className="left title">Schedule</legend>
							<div className="right calender">
								<label htmlFor="day" className="day">
									<input className="calender-input" type="date" id="day" name="day" onChange={this.handleChange}/>
								</label>
							</div>
						</fieldset>
					</div>

					<div className="box">
						<fieldset className="car-details">
							<legend className="left title">Car Details</legend>
							<div className="right car-booking clearfix">
								<Cars className="left" car_id={car_id} name="car_id" onChange={this.handleChangeToI.bind(this)}/>
								<label className="left">
									<p className="small">Available seats</p>
									<input type="number" className="seats" name="all_seats" max={4} value={all_seats} onChange={this.handleChangeToI} placeholder="Available Seats" />
								</label>
							</div>
						</fieldset>
					</div>

					{/* <div className="box">
						<fieldset>
							<legend className="left title">Additional Information</legend>
							<div className="">
								<div className="flex-boxing">
									<div className="flex-child">
										<label className="label">Males only
											<input type="radio" name="specific_gender" value="males" onChange={this.handleChange} />
										</label>
										<label className="label">Females only
											<input type="radio" name="specific_gender" value="females" onChange={this.handleChange} />
										</label>
										<label className="label">Both
											<input type="radio" name="specific_gender" value="both" onChange={this.handleChange} />
										</label>
									</div>
									<div className="flex-child">
										<label className="label">Smoking
											<input type="radio" name="smoking" value={true} onChange={this.handleChange} />
										</label>
										<label className="label">Non-smoking
											<input type="radio" name="smoking" value={false} onChange={this.handleChange} />
										</label>
									</div>
								</div>
							</div>
						</fieldset>

					</div> */}
				</form>
				<div className="button-box">
					<button className="button" type="button" onClick={() => {addTrip(car_id, day, all_seats, specific_gender, smoking, stop_points_attributes)}}>Submit</button>
				</div>
			</div>
		)
	};

};