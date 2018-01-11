import React, { Component } from 'react';
import dateFormat from 'dateformat';

export default class HhTripsTracking extends Component {

    handleClick = (trip_id, value) => {
        this.props.changeHhStopPointStatus(trip_id, value);
    }

    render () {
        const {hhTrackedTrips, getHhTripsTracking} = this.props;
        return (
            <div>
                <h2>Your Trips</h2>
                <form>
                    <label htmlFor="upcoming">Upcoming</label>
                    <input type="radio" id="upcoming" name="trips" value="upcoming" onClick={() => getHhTripsTracking("upcoming")} />
                    <label htmlFor="ongoing">Ongoing</label>
                    <input type="radio" id="ongoing" name="trips" value="ongoing" onClick={() => getHhTripsTracking("ongoing")} />
                    <label htmlFor="history">History</label>
                    <input type="radio" id="history" name="trips" value="history" onClick={() => getHhTripsTracking("history")} />
                </form>
            {
                hhTrackedTrips.map((trip) => {
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
                                        {stop_point.hh.map((hh) => {
                                            return (
                                                <div>
                                                    <p>Booked Seats: {hh.booked_seats}</p>
                                                    <p>Confirmation Status: {hh.confirm}</p>
                                                </div>
                                            )
                                        })}
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