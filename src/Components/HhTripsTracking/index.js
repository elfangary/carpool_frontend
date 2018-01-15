import React, { Component } from 'react';
import dateFormat from 'dateformat';
import '../DriverTripsTracking/driverTripsTracking_style.css';
import { Slider, Modal, Tabs, Radio, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import './hhTripsTracking_style.css';
import '../DriverTripsTracking/driverTripsTracking_style.css'
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const TabPane = Tabs.TabPane;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


export default class HhTripsTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            ratings: [],
            visible: false,
            request: {
                first_name: '',
                last_name: '',
                profile_pic: null,
            }
        };
    };

    showModal = (first_name, last_name, profile_pic) => {
        this.setState({
          visible: true,
          request: {
            first_name,
            last_name,
            profile_pic
          }
        });
      }
      handleOk = (e) => {
        this.setState({visible: false});
        this.handleSubmit()
      }

      handleCancel = (e) => {
        this.setState({visible: false});
      }

    handleRate = (trip_id, user_id, event) => {
        if (event.type === 'click') {
            this.state.ratings.push({trip_id, user_id, rating: event.rating});
        }
    }
     handleSubmit = () => {
        this.props.rateUser(this.state.ratings);
        this.state.ratings = [];
    }

    componentWillMount () {
        this.props.getHhTripsTracking("upcoming");
    }

    handleClick = (trip_id, value) => {
        this.props.changeHhStopPointStatus(trip_id, value);
    }

    render () {
        let closeModal = () => this.setState({ open: false })
        let saveAndClose = () => {
         this.setState({ open: false })
        }
        const {hhTrackedTrips, getHhTripsTracking } = this.props;
        const { ratings, request } = this.state;
        const style = {
            textTransform:'capitalize',
            textAlign: 'center',
            backgroundColor: '#fafafa'
        }
        return (
            <div className="new-container end">
                <div className="margin clearfix">
                    <h2>Your Hitch-Hiking Trips</h2>
                    <div className="tabs-container start">
                        <div className="tabs">
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition="left"
                                onTabClick={(e) => getHhTripsTracking(e)}
                            >
                                <TabPane tab="Upcoming" key="upcoming"></TabPane>
                                <TabPane tab="Ongoing" key="ongoing" ></TabPane>
                                <TabPane tab="History" key="history" ></TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className="trips-container  start">

                        {hhTrackedTrips.map((trip) => {
                            var tripRequests = [];
                            return (
                                <div className="trip clearfix">
                                    <div className="driver-container start">
                                        <div className="driver-profile-picture">{trip.driver.profile_pic.profile_pic.url}</div>
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
                                        <div className="route">
                                            <Slider range min={1} max={trip.stop_points.length} defaultValue={[1,2,3,4]} disabled={true} />
                                        </div>
                                    </div>
                                    <div className="car-container">
                                        {tripRequests.map((hh) => {
                                            return (
                                                <div>
                                                    <p className="trip-driver-name">{hh.request}</p>
                                                    <p className="trip-seats">Booked seats: {hh.booked_seats}</p>
                                                    {(hh.confirm === ("pending" || "accepted")) ?
                                                        (<p className="trip-seats">Confirmation status: <span className="no-pending">{hh.confirm}</span></p>)
                                                        : (<p>Confirmation status: <span className="pending">{hh.confirm}</span></p>)
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {(trip.status === "ended")? (
                                    <div>
                                        <button type="primary" className="rate-button" onClick={() => this.showModal(trip.driver.first_name, trip.driver.last_name, trip.driver.profile_pic.profile_pic.url)}>Rate The Driver</button>
                                        <div>
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
                                            <p className="driver-name">How Was Your Trip With {trip.driver.first_name} {trip.driver.last_name} ?</p>
                                            <p className="driver-profile-picture">{request.profile_pic}</p>
                                            <p><Rater total={5} rating={this.state.rate} onRate={(event) => this.handleRate(trip.id, trip.driver.id, event)} /></p>
                                            </Modal>
                                        </div>
                                    </div>)
                                    : null
                                    }
                                        </div>
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}