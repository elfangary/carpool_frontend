import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

export default class HhTripsTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            driver_id: null,
            rate: 0
        };
    };

    handleDriverRating = (driver_id, event) => {
        // debugger;
        console.log(event)
        if (event.type === 'click') {
            this.setState({
                driver_id,
                rate: event.rating 
            }) 
            // rate = event.rating  
        }
    };

    handleRate = (trip_id, driver_id, event) => {
        if (event.type === 'click') {
            console.log(driver_id)
            this.props.rateDriver(trip_id, driver_id, event.rating)
        }
    }

    handleClick = (trip_id, value) => {
        this.props.changeHhStopPointStatus(trip_id, value);
    }

    render () {
        const {hhTrackedTrips, getHhTripsTracking, rateDriver} = this.props;
        const { driver_id, rate } = this.state;
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
                    {(trip.status === "ended")? (<Rater total={5} rating={this.state.rate} onRate={(event) => this.handleRate(trip.id, trip.driver.id, event)} />): null
                    }
                        </div> 
                    )
                })
            }
            </div>
        )
    }

}