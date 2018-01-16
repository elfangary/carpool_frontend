import React, { Component } from 'react';
import dateFormat from 'dateformat';
import { Slider, Modal, Tabs, Radio, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import './driverTripsTracking_style.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const TabPane = Tabs.TabPane;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class DriverTripsTracking extends Component {
    constructor(props){
      super(props);
      this.state = {
        status: '',
        visible: false,
        request:{
          name: '',
          profile_pic: null,
          seats: 0,
          confirm: '',
          id: null,
          phone: null,
          rate: 0,
          email: '',
        },
        ratingRequest: {
            trip_id: null
        },
        ratings: []
      };
    };

    componentWillMount() {
      this.props.getTripsTracking("upcoming");
    };

    handleClick = (trip_id, value) => {
      this.props.changeTripStatus(trip_id, value);
    };

    showModal = (name, profile_pic,seats, confirm, id, phone, rate, email) => {
      this.setState({
        visible: true,
        request: {
          name,
          profile_pic,
          seats,
          confirm,
          id,
          phone,
          rate,
          email
        }
      })
    }

    handleOk = (e) => {
      this.setState({visible: false});
      this.handleSubmit()
    }

    handleCancel = (e) => {
      this.setState({visible: false});
    }


    showModalRate = (trip_id) => {
        this.setState({
          visible: true,
          request: {
            trip_id
          }
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
        const {trackedTrips, getTripsTracking, changeHhStopStatus, changeTripStatus, handleChange, rateUser } = this.props;
        const {status, request, ratings, ratingRequest} = this.state;
        const style = {
            textTransform:'capitalize',
            textAlign: 'center',
            backgroundColor: '#fafafa'
        }
        return (
            <div className = 'new-container end'>
                <div className="margin clearfix">
                <h2>Your Driving Trips</h2>
                    <div className="tabs-container start">
                        <div className="tabs">
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition="left"
                                onTabClick={(e) => getTripsTracking(e)}
                            >
                                <TabPane tab="Upcoming" key="upcoming"></TabPane>
                                <TabPane tab="Ongoing" key="ongoing" ></TabPane>
                                <TabPane tab="History" key="history" ></TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className="trips-container  start">
                        {trackedTrips.map((trip) => {
                            var seats = [];
                            var availableSeats = trip.available - trip.pending;
                            var allSeats = trip.all_seats;
                            var pendingSeats = trip.pending
                            console.log(availableSeats)
                            // for (var i = 0; i < pendingSeats; i ++) {
                            //     availableSeats -=1
                            // }
                            for (var i = 0; i < availableSeats; i ++) {
                                seats.push(<button className="circle-button empty start " type="button"><i class="fa fa-car" aria-hidden="true"></i></button>)
                            }
                            var tripRequests = [];
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
                            return(
                                <div className="trip clearfix">
                                    <div className="driver-container start">
                                        <div className="driver-profile-picture"></div>
                                    </div>
                                    <div className="details-container start">
                                        <div className="flex">
                                            <p className="trip-driver-name">{trip.driver.first_name} {trip.driver.last_name}</p>
                                            <p className="date">{dateFormat(trip.day, "dd/mm/yyyy")}</p>
                                        </div>
                                        <div className="car-details">
                                            <p className="car-model">{trip.car.model} - {trip.car.color}</p>
                                            <p className="car-number">{trip.car.number}</p>
                                        </div>
                                        <div className="stop-points-details">
                                            {trip.stop_points.map((stop_point, index) => {
                                                tripRequests = tripRequests.concat(stop_point.hh)
                                                return(
                                                    <div className="stop-point">
                                                        <p className="location">{stop_point.location}</p>
                                                        <p className="trip-time">{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                                        <p className="trip-time">{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="route">
                                        <Slider range min={1} max={trip.stop_points.length} defaultValue={[1,2,3,4]} disabled={true} />
                                    </div>
                                    <div className="car-container">
                                            {seats}
                                        <div className="seats-details">
                                            <p className="trip-seats">{trip.available} seats left</p>
                                            {(trip.pending)?
                                                (<p className="pending">Check requests</p>)
                                            : (<p className="no-pending">No requests</p>)}
                                        </div>
                                    </div>
                                    {(trip.status === "pending")? (<button type="button" className="status-button" name="status" value="cancelled" onClick={() => {this.handleClick(trip.id, "cancelled")}}>Cancel Trip</button>) : null}
                                    {trip.start && (trip.status === "pending") ? (<button type="button" className="status-button" name="status" value="started" onClick={() => this.handleClick(trip.id, "started")}>Start Trip</button>) : null}
                                    {(trip.status === "started")? (<button type="button" className="status-button" name="status" value="ended" onClick={() => {this.handleClick(trip.id, "ended")}}>End Trip</button>) : null}
                                    {(trip.status === "ended" && trip.stop_points.map((stop_point) => {
                                        stop_point.hh.map((hh) => {
                                        hh.confirm === "accepted"
                                    })
                                    }))? (<div>
                                            <button type="primary" className="rate-button" onClick={() => this.showModalRate(trip.id)}>Rate Your Hitch Hikers</button>
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
                                            </Modal>
                                        </div>
                                        ) :
                                        (<div>

                                        {tripRequests.map((hh, index) => {
                                        return (
                                            <div className="hide">
                                                {(hh.confirm === "accepted")?
                                                    (<div>
                                                        {seats.push(<button className="circle-button start" type="primary" onClick={() => this.showModal(hh.name, hh.profile_pic, hh.booked_seats, hh.confirm, hh.id, hh.phone, hh.rate, hh.email)}></button>)}
                                                    </div>
                                                    ) : (hh.confirm === "pending")?
                                                            (<div>
                                                                {seats.push(<button className="circle-button request start" type="primary" onClick={() => this.showModal(hh.name, hh.profile_pic, hh.booked_seats, hh.confirm, hh.id, hh.phone, hh.rate, hh.email)}><i class="fa fa-question" aria-hidden="true"></i></button>)}
                                                            </div>)
                                                        :   null
                                                }
                                                <Modal
                                                    title={request.name}
                                                    visible={this.state.visible}
                                                    onOk={this.handleOk}
                                                    onCancel={this.handleCancel}
                                                    mask={false}
                                                    maskClosable={false}
                                                    width= {300}
                                                    bodyStyle={style}
                                                    style={style}
                                                    >
                                                {(request.confirm != "rejected") ?
                                                        <div>
                                                            <p className="hh-profile-picture"></p>
                                                            <p className="hh-details">{request.rate}</p>
                                                            <p className="hh-details hh-phone">{request.phone}</p>
                                                            <p className="hh-details hh-email">{request.email}</p>
                                                            <p className="hh-details">Booked Seats: {request.seats}</p>
                                                        </div>
                                                    : null}
                                                    {(trip.status === "pending" && request.confirm === "pending")?
                                                        <RadioGroup
                                                            onChange={(e) => changeHhStopStatus(request.id, e.target.value, trip.id)}
                                                            size={"large"} >
                                                            <RadioButton value="accepted">Accept</RadioButton>
                                                            <RadioButton value="rejected">Reject</RadioButton>
                                                        </RadioGroup>
                                                    : (<p className="accepted">{request.confirm}</p>)}
                                                    {(trip.status === "ended" && request.confirm === "accepted")?
                                                        (<div>
                                                            <Rater total={5} rating={0} onRate={(event) => this.handleUserRating(trip.id, hh.hh_id, event)} />
                                                        </div>) : null
                                                    }
                                                </Modal>
                                            </div>
                                        )
                                    })}
                                </div>)

                                }
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>

        )
    }
}


