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
			<div className="new-container end margin">
				<div className="trip-form start">
					<h2>Create Your Trip</h2>
					<form>
						<fieldset className="location">
							<legend>Location Details</legend>
							<label className="small">Moving From</label>
								{
									stop_points_attributes.slice(0, 4).map((stopPoint, index) => {
										return (
											<div className="clearfix flex-row">
												<div className="start">
													<Locations location_id={stopPoint.location_id} name="location_id" onChange={(e) => this.handleStopPointChange(e, index)} />
												</div>
												<div className="end">
													<Time stop_point={stopPoint} onChange={(e) => this.handleStopPointChange(e, index)}/>
												</div>
											</div>
										)
									})
								}
								<button className="new-stop" type="button" onClick={() => this.addStopPoint()}>Add stop point</button>
						</fieldset>



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
			</div>
		)
	};

};