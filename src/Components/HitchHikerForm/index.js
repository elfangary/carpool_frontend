import React, { Component } from 'react';
import Locations from '../../Containers/LocationsContainer';
import dateFormat from 'dateformat';
import './hitchHikerForm_style.css';

export default class HHForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            day: "",
            location_id_start: null,
            location_id_end: null,
            new_hh_stop: {
                stop_point_id: null,
                booked_seats: 0
            }
        };
        this.inputs = {};
    };

    handleChange = (event) => {
        console.log(event.target.value);
        const newState = {...this.state};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };

    handleNewHhStopPoint = (e) => {
        const {new_hh_stop} = this.state;
        new_hh_stop[e.target.name] = e.target.value;
        this.setState({
            ...this.state,
            new_hh_stop
        });
    };

    render(){
        const { trips , getFilteredTrips, addHhStopPoint, message} = this.props;
        const { day, location_id_start, location_id_end, start_time, end_time, new_hh_stop } = this.state;
        return(
            <div className="new-container end">
                <div className="margin">
                    <div className="trip-form start">
                        <h2>Book Your Trip</h2>
                        <form>
                            <fieldset className="location">
                                <legend>Location Details</legend>
                                <div className="location-details">
                                <label htmlFor="location-label">Moving from
                                    <Locations inputs={this.inputs} id="location-label" name="location_id_start" onChange={this.handleChange.bind(this)}/>
                                    </label>
                                <label>Moving To
                                    <Locations inputs={this.inputs} name="location_id_end" onChange={this.handleChange.bind(this)}/>
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="day">
                                    <input ref={(ref) => this.inputs.day = ref} type="date" id="day" name="day" onChange={this.handleChange}/>
                                </label>
                            </fieldset>
                        </form>
                        <button class="submit-form start" type="submit"  onClick={() => getFilteredTrips(day, location_id_start, location_id_end, start_time, end_time)}>Search</button>
                    </div>
                    <div className="trips-container trip-form">
                    {(trips.length > 0)?
                        <div className="start">
                            {trips.map((trip) => {
                                var seats = [];
                                for (var i = 0; i < trip.all_seats; i ++) {
                                    seats.push(<input id="seats" type="checkbox" className="circle-button" name="booked_seats"
                                        value={i + 1} onClick={this.handleNewHhStopPoint} />);
                                }
                                return (
                                    <div className="trip clearfix">
                                        <div className="driver-container start">
                                            <div className="driver-profile-picture"></div>
                                        </div>
                                        <div className="details-container start">
                                            <div className="flex">
                                                <p className="trip-driver-name">{trip.driver.first_name} {trip.driver.last_name}</p>
                                                <p className="date">{dateFormat(trip.day, "dd/mm/yyyy")}</p>
                                            </div>
                                            <div className="stop-points-details">
                                                {trip.stop_points.map((stop_point, index) => {
                                                    return(
                                                        <div className="stop-point">
                                                                <p className="location">{stop_point.location.name}</p>

                                                                    {(trip.stop_points.indexOf(stop_point) == trip.stop_points.length - 1)?
                                                                        <input type="radio" name="stop_point_id" id="disabled" value= {stop_point.id} disabled />
                                                                        :
                                                                            <input type="radio" name="stop_point_id" value= {stop_point.id} onChange={this.handleNewHhStopPoint} />}
                                                                <p className="trip-time">{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                                                <p className="trip-time">{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                        <form>
                                            <label htmlFor="seats" className="trip-driver-name">{seats.length} Availble Seats</label>
                                            {seats}
                                        </form>
                                        <button type="submit" className="status-button" id="join" onClick={() => addHhStopPoint(new_hh_stop.booked_seats, new_hh_stop.stop_point_id) }>Join Trip</button>
                                    </div>
                                )
                            })}
                        </div>
                        : <p className="empty-message start">{message}</p>}
                    </div>
                </div>
            </div>
        )
    }
}
