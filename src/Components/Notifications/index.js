import React, { Component } from 'react';
import dateformat from 'dateformat';
import { Link } from 'react-router-dom';
import './notifications_style.css';

export default class Notifications extends Component {

    componentWillMount(){
        this.props.getAllNotifications();
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
                <div>
                    <h2>Notifications</h2>
                {
                    notifications.map((notification) =>{
                        return(
                            <div className="notifications">
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