import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rating from '../../Containers/RatingContainer';

export default class DriverTripsTracking extends Component {

    render () {
        const {trackedTrips, getTripsTracking, changeHhStopStatus} = this.props;
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
                                        <label htmlFor="stop_point-id">{stop_point.location.name}</label>
                                        <input type="radio" name="stop_point_id" id="stop_point_id" 
                                            value= {stop_point.id} />
                                        <p>{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                        <p>{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                        {
                                            stop_point.hh_stop_points.map((hh_stop) => {
                                                return (
                                                    <div>
                                                        <p>{hh_stop.hh.first_name} {hh_stop.hh.last_name}</p>
                                                        <p>Booked Seats: {hh_stop.booked_seats}</p>
                                                        <label htmlFor="accept">Accept</label>
                                                        <input type="radio" id= "accept-reject" name="accept-reject" value="accepted" onChange={() => changeHhStopStatus(hh_stop.id, "accepted")}/>
                                                        <label htmlFor="reject">Reject</label>
                                                        <input type="radio" id="accept-reject" name="accept-reject"value="rejected" onChange={() => changeHhStopStatus(hh_stop.id, "rejected")}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                            {console.log(trip.stop_points)}
                            <p>
                                {accepted && (trip.status === "pending")?  (<button type="button">Start</button>) : null}
                                {(trip.status === "start")?  (<button type="button">End</button>) : null}
                            </p>
                        </div>
                    )
                })
            }
            </div>
        )
    }

}