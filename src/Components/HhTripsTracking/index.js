import React, { Component } from 'react';
import dateFormat from 'dateformat';

export default class HhTripsTracking extends Component {
    render () {
        const {trackedTrips, getTripsTracking} = this.props;
        return (
            <div>
                <h2>Your Trips</h2>
                <form>
                    <label htmlFor="upcoming">Upcoming</label>
                    <input type="radio" id="upcoming" name="trips" value="upcoming" onClick={() => getTripsTracking("upcoming")} />
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
                                        <p>{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                        <p>{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
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