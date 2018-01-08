import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
// import "./index.css";
import {Link} from 'react-router-dom';
// import Driver from '../../Containers/DriverContainer';
import Checkout from '../Checkout';

export default class User extends Component{

	componentWillMount(){
        this.props.getUser();
    }

	render(){
		const { user, loading, error, handleChangeLink, logout } = this.props;
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
						 	<img src={user.profile_pic} className="profile-pictuser.e"/>
						 	<h1 className="user-name">{user.first_name} {user.last_name}</h1>
							 <p>{user.rate / user.raters_no}</p>
						</header>
						<section>
							<Link to={'/edit'}>Edit my profile</Link>
							<Link to={'/driving/cars'}>My Cars</Link>
							<Link to={'/driving/trips'}>My Trips</Link>
							<Link to={'/hitch-hiking/trips'}>HH-trips</Link>
							<p>{user.points}points</p>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<Link to={'/checkout'}>Recharge your balance?</Link>
							<p><Link to="/" onClick={() => {logout()} }>logout</Link></p>
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