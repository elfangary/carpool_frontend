import React, { Component } from 'react';
import Cable from 'actioncable';
import dateformat from 'dateformat';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import './notifications_style.css';
import 'antd/lib/style/index.css';


export default class Notifications extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentNotification: '',
      };
    }

    createSocket() {
      let cable = Cable.createConsumer(`ws://localhost:3001/cable?token=${localStorage.jwtToken}`);
      this.Notifications = cable.subscriptions.create({
        channel: 'NotificationChannel'
      }, {
        connected: () => {},
        received: (data) => {
          alert(`${data.body}`);
            }
      });
    }

    componentWillMount(){
        this.props.getAllNotifications();
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
                    <h2>Notifications</h2>
                    {
                        notifications.map((notification) =>{
                            return(
                                <div className="each-notification" >
                                    <Link to="#">
                                        <p>{dateformat(notification.created_at, "d.mmm.yyyy,HH:MM")}</p>
                                        <p>{notification.body}<Link to="#"> See Details</Link></p>
                                        <p>{notification.stop_point_name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
}