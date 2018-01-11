import React, { Component } from 'react';
import Locations from '../../Containers/LocationsContainer';
import Days from '../Days';
import dateFormat from 'dateformat';

export default class HHForm extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            day: null,
            location_id_start: null,
            location_id_end: null,
            start_time: '',
            end_time: '',
            new_hh_stop: {
                stop_point_id: null,
                booked_seats: 0
            }
        };
    };

    handleChange = (event) => {
        console.log(event.target.value);
        const newState = {...this.state};
        newState[event.target.name] = event.target.value;
        console.log(newState);
        this.setState(newState);
    };

    handleNewHhStopPoint = (e) => {
        const {new_hh_stop} = this.state;
        new_hh_stop[e.target.name] = e.target.value;
        console.log(new_hh_stop);
        this.setState({
            ...this.state,
            new_hh_stop
        });
    };

    render(){
        const { locations, trips, onChange , getFilteredTrips, addHhStopPoint} = this.props;
        const { day, location_id_start, location_id_end, start_time, end_time, new_hh_stop } = this.state;
        return(
            <div>
                <form>
                    <fieldset className="Location">
                        <legend>Location Details</legend>
                        <label>Moving from</label>
                            <Locations name="location_id_start" onChange={this.handleChange.bind(this)}/>
                        <label>Moving To
                            <Locations name="location_id_end" onChange={this.handleChange.bind(this)}/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Time Frame</legend>
                        <label>From
                            <input type="time" name="start_time" value={start_time} onChange={this.handleChange}/>
                        </label>
                        <label>To
                            <input type="time" name="end_time" value={end_time} onChange={this.handleChange}/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Schedule</legend>
                        <label htmlFor="day">
                            <input type="date" id="day" name="day" onChange={this.handleChange}/>
                        </label>
                    </fieldset>
                </form>
                <button type="submit"  onClick={() => getFilteredTrips(day, location_id_start, location_id_end, start_time, end_time)}>Search</button>
                <p>Availble Trips</p>
                {trips.map((trip) => {
                    var seats = [];
                    for (var i = 0; i < trip.all_seats; i ++) {
                        seats.push(<input id="seats" type="checkbox" name="booked_seats"
                            value={i + 1} onClick={this.handleNewHhStopPoint} />);
                    }
                    return (
                        <div>
                            <p>{trip.driver.first_name} {trip.driver.last_name}</p>
                            <p>{trip.day}</p>
                            <form>
                                <label htmlFor="seats">{seats.length} Availble Seats</label>
                                {seats}
                            </form>
                            {trip.stop_points.map((stop_point) => {
                                return (
                                    <div>
                                        <label htmlFor="stop_point-id">{stop_point.location.name}</label>
                                        <input type="radio" name="stop_point_id" id="stop_point_id"
                                            value= {stop_point.id} onChange={this.handleNewHhStopPoint} />
                                        <p>{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                        <p>{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <button type="submit" onClick={() => addHhStopPoint(new_hh_stop.booked_seats, new_hh_stop.stop_point_id)}>Submit</button>
            </div>
        )
    }
}
