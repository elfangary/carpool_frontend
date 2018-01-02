import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
// import "./index.css";
import {Link} from 'react-router-dom';
import Driver from '../../Containers/DriverContainer';

export default class User extends Component{
	componentWillMount(){
        this.props.getUser(this.props.user_id);
    }
	render(){
		const { user, loading, error, logout } = this.props;
		if(loading){
            return (
                <p>Loading user profile..</p>
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
	    			<div className="profile-container">
						<header className="header">
						 	<img src={user.profile_pic} className="profile-picture"/>
						 	<h1 className="user-name">{user.first_name} {user.last_name}</h1>
						</header>
						<section>
							<Link to={'/edit'}>Edit my profile</Link>
							<Link to={'/driving/cars'}>My Cars</Link>
							<Link to={'/:type/trips'}>My Trips</Link>
							<p>{user.points}points</p>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<p><a href="#">Recharge</a></p>
							<Link to="/login" onClick={() => {logout()} }>logout</Link>
						</section>
						<footer>
							<Link to={'/hitch-hiking'}>Hitch-Hiking</Link>
							<Link to={'/driving'}>Driving</Link>
						</footer>
				    </div>
		        </div>
			)
		}
	}
}