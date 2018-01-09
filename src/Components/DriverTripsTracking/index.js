import React, { Component } from 'react';
import dateFormat from 'dateformat';

export default class DriverTripsTracking extends Component {

    render () {
        const {trackedTrips, getTripsTracking, changeHhStopStatus} = this.props;
        return (
            <div>
                <h2>Your Trips</h2>
                <form>
                    <label htmlFor="upcoming">Upcoming</label>
                    <input type="radio" id="upcoming" name="trips"  value="upcoming" onClick={() => getTripsTracking ("upcoming")} />
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
                                        <label htmlFor="stop_point-id">{stop_point.location.name}</label>
                                        <input type="radio" name="stop_point_id" id="stop_point_id" 
                                            value= {stop_point.id} />
                                        <p>{dateFormat(stop_point.start_time, "HH:MM")}</p>
                                        <p>{dateFormat(stop_point.end_time, "HH:MM")}</p>
                                        {
                                            stop_point.hh_stop_points.map((hh_stop) => {
                                                return (
                                                    <div>
                                                        <p>{hh_stop.hh.first_name} {hh_stop.hh.last_name}</p>
                                                        <p>Booked Seats: {hh_stop.booked_seats}</p>
                                                        <label htmlFor="accept">Accept</label>
                                                        <input type="checkbox" id= "accept" value="accepted" onChange={() => changeHhStopStatus(hh_stop.id, "accepted")}/>
                                                        <label htmlFor="reject">Reject</label>
                                                        <input type="checkbox" id="reject" value="rejected" onChange={() => changeHhStopStatus(hh_stop.id, "rejected")}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                        </div> 
                    )
                })
            }
            </div>
        )
    }

}