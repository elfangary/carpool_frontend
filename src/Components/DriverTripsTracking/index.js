import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rating from '../../Containers/RatingContainer';
import { Slider, Modal, Tabs, Radio, Menu } from 'antd';
import 'antd/dist/antd.css';
import './driverTripsTracking_style.css';
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
          email: ''
        }
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

    render () {
      const {trackedTrips, getTripsTracking, changeHhStopStatus, changeTripStatus, handleChange} = this.props;
      const {status, request} = this.state;
      const style = {
        textTransform:'capitalize',
        textAlign: 'center',
        backgroundColor: '#fafafa'
      }
      return (
        <div className="driverTripsTracking">
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
        {
          trackedTrips.map((trip) => {
              var requests = [];
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
                        <div className="flex">
                          {trip.stop_points.map((stop_point, index) => {
                            requests = requests.concat(stop_point.hh)
                            return (
                              <div className="stop-points">
                                <p className="location">{stop_point.location}</p>
                                <p className="time">{dateFormat(stop_point.start_time, "UTC:HH:MM TT")}</p>
                                <p className="time">{dateFormat(stop_point.end_time, "UTC:HH:MM TT")}</p>
                              </div>
                            )
                          })
                        }
                        {console.log('argoooook', requests)}
                        
                        </div>
                        <div className="route">
                          <Slider range min={1} max={trip.stop_points.length} defaultValue={[1,2,3,4]} disabled={true} />
                        </div>
                        </div>

                        <div className="car-container">
                            <p className="seats">{trip.all_seats} seats left</p>
                          {(trip.pending)?
                            <p className="pending">{trip.pending} pending requests</p>
                            : <p className="no-pending">0 pending requests</p>}
                        </div>
                          {(trip.start) && (trip.status === "pending") ? (<button type="button" name="status" value="started" onClick={() => this.handleClick(trip.id, "started")} className="status-button">Start Trip</button>) : null}
                          {(trip.status === "pending")? (<button type="button" name="status" value="cancelled" onClick={() => {this.handleClick(trip.id, "cancelled")}} className="status-button">Cancel Trip</button>) : null}
                          {(trip.status === "started")? (<button type="button" name="status" value="ended" onClick={() => {this.handleClick(trip.id, "ended")}} className="status-button">End Trip</button>) : null}                          
                        </div>
              )
          })
        }
        </div>
        )
    }

}

                                  // stop_point.hh.map((hh, index) => {
                                  //   return (
                                  //     <div className="request clearfix">
                                  //       <button className="circle-button" type="primary" onClick={() => this.showModal(hh.name, hh.profile_pic, hh.booked_seats, hh.confirm, hh.id, hh.phone, hh.rate, hh.email)}></button>
                                  //       <Modal
                                  //         title={request.name}
                                  //         visible={this.state.visible}
                                  //         onOk={this.handleOk}
                                  //         onCancel={this.handleCancel}
                                  //         mask={false}
                                  //         maskClosable={false}
                                  //         width= {300}
                                  //         bodyStyle={style}
                                  //         style={style}
                                  //       >
                                  //         <p className="hh-profile-picture"></p>
                                  //         <p className="hh-details">{request.rate}</p>
                                  //         <p className="hh-details hh-phone">{request.phone}</p>
                                  //         <p className="hh-details hh-email">{request.email}</p>
                                  //         <p className="hh-details">Booked Seats: {request.seats}</p>

                                  //         {
                                  //           (request.confirm == "pending")?

                                  //             <RadioGroup
                                  //             onChange={(e) => changeHhStopStatus(request.id, e.target.value)}
                                  //             size={"large"} >
                                  //               <RadioButton value="accepted" className="">Accept</RadioButton>
                                  //               <RadioButton value="rejected">Reject</RadioButton>
                                  //             </RadioGroup>
                                  //           : (request.confirm === "accepted")? <p className="accepted">{request.confirm}</p> : <p className="rejected">{request.confirm}</p>
                                  //         }
                                  //       </Modal>
                                  //     </div>
                                  //   )
                                  // })
       // {(trip.all_seats === 1)?
       //                      <div className="circle-container">
       //                        <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                      </div>
       //                        : (trip.all_seats === 2)?
       //                          <div className="circle-container">
       //                            <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                            <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                          </div>
       //                          : (trip.all_seats === 3)?
       //                            <div className="circle-container">
       //                              <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                              <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                              <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                            </div>
       //                            : <div className="circle-container">
       //                                <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                                <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                                <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                                <div className="circle"><i class="fa fa-car" aria-hidden="true"></i></div>
       //                              </div>
       //                      }
// 

// <div>
//                                                 <label htmlFor="accept">Accept</label>
//                                                 <input type="radio" id= "accept" name={hh.hh_id} value="accepted" onChange={() => changeHhStopStatus(request.id, "accepted")}/>
//                                                 <label htmlFor="reject">Reject</label>
//                                                 <input type="radio" id="reject" name={hh.hh_id} value="rejected" onChange={() => changeHhStopStatus(request.id, "rejected")}/>
//                                               </div>