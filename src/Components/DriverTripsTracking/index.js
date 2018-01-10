import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

export default class DriverTripsTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: '',
            ratings: []
        };
    };

    handleChange = (hh_id, rating) => {
        //this.onStarClick.bind(this);
        this.props.rateUser(hh_id, rating);
    }

    handleClick = (trip_id, value) => { 
        debugger;
        this.props.changeTripStatus(trip_id, value);
    }

    handleDriverRating = (trip_id, hh_id, event) => {
        if (event.type === 'click') {
            const element = this.state.ratings.find(rating => rating.trip_id === trip_id && rating.hh_id === hh_id);
            if (element) {
                element.rating = event.rating;
            } else {
                this.state.ratings.push({trip_id, hh_id, rating: event.rating});
            }
        }
    }

    render () {
        const {trackedTrips, getTripsTracking, changeHhStopStatus, changeTripStatus, rateUser, handleChange} = this.props;
        const { status, ratings } = this.state;
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
                                                    (hh.confirm != "rejected") ? 
                                                    <div>
                                                        <p>{hh.name}</p>
                                                        <p>Booked Seats: {hh.booked_seats}</p>

                                                        {
                                                        (trip.status === "pending" && hh.confirm === "pending")?
                                                            <div>
                                                                <label htmlFor="accept">Accept</label>
                                                                <input type="radio" id= "accept" name={hh.hh_id} value="accepted" onChange={() => changeHhStopStatus(hh.id, "accepted")}/>
                                                                <label htmlFor="reject">Reject</label>
                                                                <input type="radio" id="reject" name={hh.hh_id} value="rejected" onChange={() => changeHhStopStatus(hh.id, "rejected")}/>
                                                            </div>
                                                        : <p>{hh.confirm}</p>
                                                        }
                                                        {
                                                            (trip.status === "ended" && hh.confirm === "accepted")?  (<div>
                                                                <Rater total={5} rating={0} onRate={(event) => this.handleDriverRating(trip.id, hh.hh_id, event)} />
                                                                </div>) : null
                                                        }
                                                    </div>
                                                    : null
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                            <p>
                              
                                {trip.start && (trip.status === "pending") ?  (<button type="button" name="status" value="started" onClick={() => this.handleClick(trip.id, "started")}>Start</button>) : null}
                                {(trip.status === "started")?  (<button type="button" name="status" value="ended" onClick={() => this.handleClick(trip.id, "ended")}>End</button>) : null}
                            </p>
                            <button type="button" onClick={() => rateUser(ratings)}>Rate</button>
                        </div>
                    )
                })
            }
            </div>
        )
    }

}