import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rating from '../../Containers/RatingContainer';
import './driverTripsTracking_style.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class DriverTripsTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: '',
            marks: {
              first: 0,
              second: 33,
              third: 66,
              fourth: 100
            }
        };
    };

    componentWillMount() {
        this.props.getTripsTracking("upcoming")
    }

    handleClick = (trip_id, value) => {
        this.props.changeTripStatus(trip_id, value);
    }

    onChange(checked) {
      console.log(`switch to ${checked}`);
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
                        <div className="trip clearfix">
                            <img src={trip.driver.profile_pic} className="driver-profile-picture"/>
                            <div className="trip-container clearfix">
                              <div className="flex">
                                <p className="driver-name">{trip.driver.first_name} {trip.driver.last_name}</p>
                                <p className="day">{dateFormat(trip.day, "dd/mm/yyyy")}</p>
                              </div>
                              <p className="car-model">{trip.car.model} - {trip.car.color}</p>
                              <p className="car-number">{trip.car.number}</p>
                              <div className="line"></div>
                              <div className="flex">
                              {trip.stop_points.map((stop_point, index) => {
                                  return (
                                      <div className="stop-points">
                                          <p className="location">{stop_point.location}</p>
                                          <p className="time">{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                          <p className="time">{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
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
                                                                  <input type="radio" id= "accept" name={hh.hh_id} value="accepted" onChange={() => changeHhStopStatus(hh.id, "accepted")}/>
                                                                  <label htmlFor="reject">Reject</label>
                                                                  <input type="radio" id="reject" name={hh.hh_id} value="rejected" onChange={() => changeHhStopStatus(hh.id, "rejected")}/>
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
                              </div>
                              <Range  min={1} max={4} defaultValue={[1, 2, 3, 4]} disabled={true}/>
                            </div>
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