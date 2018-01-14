import React, { Component } from 'react';
import dateFormat from 'dateformat';
import '../DriverTripsTracking/driverTripsTracking_style.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';


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

    handleRate = (trip_id, user_id, event) => {
        if (event.type === 'click') {
            console.log(user_id)
            this.props.rateUser([{trip_id, user_id, rate: event.rating}])
        }
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
                            {(trip.status === "ended")? (
                            <div>
                                <Button type="primary" className="open-modal" onClick={() => this.showModal(trip.driver.first_name, trip.driver.last_name, trip.driver.profile_pic)}>Rate The Driver</Button>
                                <div className="container">
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
        )
    }

}