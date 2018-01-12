import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rating from '../../Containers/RatingContainer';
import './driverTripsTracking_style.css';

export default class DriverTripsTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: ''
        };
    };

    handleClick = (trip_id, value) => {
        this.props.changeTripStatus(trip_id, value);
    }

    render () {
        const {trackedTrips, getTripsTracking, changeHhStopStatus, changeTripStatus, handleChange} = this.props;
        const { status } = this.state;
        return (
            <div>
                <h2>Your Trips</h2>
                <form>
                    <label htmlFor="upcoming">Upcoming</label>
                    <input type="radio" id="upcoming" name="trips"  value="upcoming" onClick={() => getTripsTracking("upcoming")} />
                    <label htmlFor="ongoing">Ongoing</label>
                    <input type="radio" id="ongoing" name="trips" value="ongoing" onClick={() => getTripsTracking("ongoing")} />
                    <label htmlFor="history">History</label>
                    <input type="radio" id="history" name="trips" value="history" onClick={() => getTripsTracking("history")} />
                </form>
            {
                trackedTrips.map((trip) => {
                    return (
                        <div className="eachTrip clearfix">
                            <p>{trip.driver.first_name} {trip.driver.last_name}</p>
                            <p>{trip.day}</p>
                            {trip.stop_points.map((stop_point) => {
                                return (
                                    <div>
                                        <ul>
                                            <li>
                                                <p>{stop_point.location}</p>
                                                <p>{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                                <p>{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                                <ul>
                                                {
                                                    stop_point.hh.map((hh) => {
                                                        return (
                                                            <div className="hh_stop_point">
                                                                <li>
                                                                    <p>{hh.name}</p>
                                                                    <p>Booked Seats: {hh.booked_seats}</p>

                                                                    {
                                                                    (hh.confirm == "pending")?
                                                                        <div>
                                                                            <label htmlFor="accept">Accept</label>
                                                                            <input type="radio" id= "accept" name={hh.hh_id} value="accepted" onChange={() => changeHhStopStatus(hh.id, "accepted")}/>
                                                                            <label htmlFor="reject">Reject</label>
                                                                            <input type="radio" id="reject" name={hh.hh_id} value="rejected" onChange={() => changeHhStopStatus(hh.id, "rejected")}/>
                                                                        </div>
                                                                    : <p>{hh.confirm}</p>
                                                                    }
                                                                </li>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                                {trip.start && (trip.status === "pending") ? (<button type="button" name="status" value="started" onClick={() => this.handleClick(trip.id, "started")}>Start Trip</button>) : null}
                                {(trip.status === "started")? (<button type="button" name="status" value="ended" onClick={() => {this.handleClick(trip.id, "ended")}}>End Trip</button>) : null}
                                {(trip.status === "pending")? (<button type="button" name="status" value="cancelled" onClick={() => {this.handleClick(trip.id, "cancelled")}}>Cancel Trip</button>) : null}
                        </div>
                    )
                })
            }
            </div>
        )
    }

}