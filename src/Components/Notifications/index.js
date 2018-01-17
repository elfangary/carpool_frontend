import React, { Component } from 'react';
import Cable from 'actioncable';
import dateformat from 'dateformat';
import { Link } from 'react-router-dom';
import './notifications_style.css';
import 'antd/lib/style/index.css';
import {actioncableUrl } from '../../apiConfig'


export default class Notifications extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // currentNotification: [],
        newNotificationsNumber: 0
      };
    }

    createSocket() {
      let cable = Cable.createConsumer(`${actioncableUrl}/cable?token=${localStorage.jwtToken}`);
      this.Notifications = cable.subscriptions.create({
        channel: 'NotificationChannel'
      }, {
        connected: () => {},
        received: (data) => {
                this.props.getAllNotifications();
                this.setState({
                    newNotificationsNumber: this.state.newNotificationsNumber + 1
                    // currentNotification: data
                })
            }
      });
    }
    componentWillReceiveProps(nextProps){
        nextProps = this.props.notifications;
    }

    componentWillMount(){
        this.props.getAllNotifications();
        this.setState({newNotificationsNumber: this.state.newNotificationsNumber})
        this.createSocket();
    }

    render(){
        const { notifications, loading, error } = this.props;
                
        if(loading){
            return (
                <p>Loading Notifications..</p>
            )
        }else if(error){
            return (
                <div>
                    <p>Sorry, something went Wrong</p>
                    <p>{error}</p>
                </div>
            )
        }else{
            return (
                <div className="notifications-component">
                    <div className="dropdown">
                        <h2>
                            <i class="fa fa-bell" aria-hidden="true"></i>
                           {
                                (this.state.newNotificationsNumber == 0)?
                                 null 
                                 :
                                <span className="notification-number">{this.state.newNotificationsNumber}</span>
                            }
                        </h2>
                        <div class="dropdown-content">
                            {  
                                notifications.map((notification) =>{
                                    return(
                                        <div className="notification-content">                                                
                                           <Link to={`/profile/${notification.type}/trips`}>
                                                <p>{dateformat(notification.created_at, "d.mmm.yyyy,HH:MM")}</p>
                                                <p>{notification.stop_point_name}</p>
                                                <p>{notification.body}<Link to="#"> <span>See Details</span></Link></p>
                                            </Link> 
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
}