import React, { Component } from 'react';
import dateformat from 'dateformat';

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
                            <div>
                                <p>{dateformat(notification.created_at, "d.mmm.yyyy,HH:MM")}</p>
                                <p>{notification.body}</p>
                                <p>{notification.hh_stop_point_id}</p>
                                
                            </div>

                        )
                    })
                }
                </div>
            )
        }
    }
}