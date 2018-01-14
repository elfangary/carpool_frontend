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
            <div className = 'container end'>
                <div className="driverTripsTracking clearfix">
                    <div className = ' tabs-container start'>
                        <h2>Your Trips</h2>
                        <div className="tabs">
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition="left"
                                onTabClick={(e) => getTripsTracking(e)}
                                style={{ height: 600 }}
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
                            for (var i = 0; i < trip.all_seats; i ++) {
                                seats.push(<button className="circle-empty start " type="button"><i class="fa fa-car" aria-hidden="true"></i></button>)
                            }
                            var tripRequests = [];
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
                                        <div className="car-container">
                                        {seats}
                                        <div className="seats-details">
                                            <p className="trip-seats">{trip.all_seats} seats left</p>
                                                {(trip.pending)?
                                                    <p className="pending">{trip.pending} pending requests</p>
                                                : <p className="no-pending">0 pending requests</p>
                                            }
                                        </div>
                                    </div>
                                    {console.log(tripRequests)}
                                    <div className="route">
                                        <Slider range min={1} max={trip.stop_points.length} defaultValue={[1,2,3,4]} disabled={true} />
                                    </div>
                                </div>
                                

                            )

                        })}
                    </div>
                </div>
            </div>

        )
                                        // <img src={trip.driver.profile_pic} className="driver-profile-picture"/>
    }
}


