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
                    var accepted = false
                    return (
                        <div>
                            <p>{trip.driver.first_name} {trip.driver.last_name}</p>
                            <p>{trip.day}</p>
                            {trip.stop_points.map((stop_point) => {
                                accepted = accepted || stop_point.hh_stop_points.filter((element) => element.confirm == 'accepted').length != 0
                                console.log('accepted', accepted)
                                return (
                                    <div>
                                        <p>{stop_point.location.name}</p>
                                        <p>{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                        <p>{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                        {
                                            stop_point.hh_stop_points.map((hh_stop) => {
                                                return (
                                                    <div>
                                                        <p>{hh_stop.hh.first_name} {hh_stop.hh.last_name}</p>
                                                        <p>Booked Seats: {hh_stop.booked_seats}</p>
                                                        {
                                                        (hh_stop.confirm == "pending")?
                                                            <div>
                                                                <label htmlFor="accept">Accept</label>
                                                                <input type="radio" id= "accept-reject" name="accept-reject" value="accepted" onChange={() => changeHhStopStatus(hh_stop.id, "accepted")}/>
                                                                <label htmlFor="reject">Reject</label>
                                                                <input type="radio" id="accept-reject" name="accept-reject"value="rejected" onChange={() => changeHhStopStatus(hh_stop.id, "rejected")}/>
                                                            </div>
                                                        : <p>{hh_stop.confirm}</p>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                            <p>
                                {accepted && (trip.status === "pending")?  (<button type="button">Start</button>) : null}
                                {(trip.status === "started")?  (<button type="button" name="status" value="ended" onChange={handleChange} onClick={() => this.handleClick(trip.id, "ended")}>End</button>) : null}
                            </p>
                        </div>
                    )
                })
            }
            </div>
        )
    }

}