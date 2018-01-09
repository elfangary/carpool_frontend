import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rating from '../../Containers/RatingContainer';

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
                        <div>
                            <p>{trip.driver.first_name} {trip.driver.last_name}</p>
                            <p>{trip.day}</p>
                            {trip.stop_points.map((stop_point) => {
                                return (
                                    <div>
                                        <p>{stop_point.location}</p>
                                        <p>{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                        <p>{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                        {
                                            stop_point.hh.map((hh) => {
                                                return (
                                                    <div>
                                                        <p>{hh.name}</p>
                                                        <p>Booked Seats: {hh.booked_seats}</p>

                                                        {
                                                        (hh.confirm == "pending")?
                                                            <div>
                                                                <label htmlFor="accept">Accept</label>
                                                                <input type="radio" id= "accept" name={hh.hh_id} value="accepted" onChange={() => changeHhStopStatus(hh.stop_point_id, "accepted")}/>
                                                                <label htmlFor="reject">Reject</label>
                                                                <input type="radio" id="reject" name={hh.hh_id} value="rejected" onChange={() => changeHhStopStatus(hh.stop_point_id, "rejected")}/>
                                                            </div>
                                                        : <p>{hh.confirm}</p>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                            <p>
                                {trip.start && (trip.status === "pending") ?  (<button type="button" name="status" value="started" onClick={() => this.handleClick(trip.id, "started")}>Start</button>) : null}
                                {(trip.status === "started")?  (<button type="button" name="status" value="ended" onClick={() => {this.handleClick(trip.id, "ended"); this.props.addPointsToDriver(trip.id)}}>End</button>) : null}
                            </p>
                        </div>
                    )
                })
            }
            </div>
        )
    }

}