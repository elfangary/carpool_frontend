import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './driverTripsTracking_style.css';

export default class DriverTripsTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            ratings: [],
            request: {
                trip_id: null
            }
        };
    };

    showModal = (trip_id) => {
        this.setState({
          visible: true,
          request: {
            trip_id
          }
        });
      }
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    handleClick = (trip_id, value) => { 
        this.props.changeTripStatus(trip_id, value);
    }

    handleSubmit = () => {
        this.props.rateUser(this.state.ratings);
        this.state.ratings = [];
    }

    handleUserRating = (trip_id, user_id, event) => {
        if (event.type === 'click') {
            const element = this.state.ratings.find(rating => rating.trip_id === trip_id && rating.user === user_id);
            if (element) {
                element.rating = event.rating;
            } else {
                this.state.ratings.push({trip_id, user_id, rating: event.rating});
            }
        }
    }

    render () {
        const {trackedTrips, getTripsTracking, changeHhStopStatus, changeTripStatus, rateUser } = this.props;
        const { ratings, request } = this.state;
        const style = {
            textTransform:'capitalize',
            textAlign: 'center',
            backgroundColor: '#fafafa'
        }
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
                    const hhs_rate = trip.stop_points.map((stop_point) => {
                            return stop_point.hh.map((hh) => {
                                return (
                                    <div>
                                        <p className="hh-profile-picture">{hh.profile_pic}</p>
                                        <p>{hh.name}</p>
                                        <Rater total={5} rating={0} onRate={(event) => this.handleUserRating(trip.id, hh.hh_id, event)} />
                                    </div>
                                )
                            })
                            
                    })
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
                                                    </div>
                                                    : null
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                            <p>
                                {trip.start && (trip.status === "pending") ? (<button type="button" name="status" value="started" onClick={() => this.handleClick(trip.id, "started")}>Start Trip</button>) : null}
                                {(trip.status === "started")? (<button type="button" name="status" value="ended" onClick={() => {this.handleClick(trip.id, "ended")}}>End Trip</button>) : null}
                                {(trip.status === "pending")? (<button type="button" name="status" value="cancelled" onClick={() => {this.handleClick(trip.id, "cancelled")}}>Cancel Trip</button>) : null}
                            </p>
                            {(trip.status === "ended" && trip.stop_points.map((stop_point) => {
                                stop_point.hh.map((hh) => {
                                    hh.confirm != "accepted"
                                })
                            }))? (<div>
                                <Button type="primary" className="open-modal" onClick={() => this.showModal(trip.id)}>Rate Your Hitch Hikers</Button>
                                <Modal
                                    title={request.name}
                                    className="modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    mask={false}
                                    maskClosable={false}
                                    width= {300}
                                    bodyStyle={style}
                                    style={style}
                                    >
                                    <div>{hhs_rate}</div>
                                    <button type="button" onClick={() =>  this.handleSubmit()}>Rate</button>
                                    </Modal>
                                    </div>
                            ) : null}
                        </div>
                    )
                })
            }
            </div>
        )
    }

}