import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
// import "./index.css";
import {Link, Route} from 'react-router-dom';
// import Driver from '../../Containers/DriverContainer';
import Checkout from '../Checkout';

export default class User extends Component{
	constructor(props){
		super(props);
		this.state = {
			link : '/driving/trips'
		};
	};

	componentWillMount(){
        this.props.getUser();
    }

	handleChangeLink(){
		this.setState({
			link: '/hitch-hiking/trips'
		});
		console.log(this.state);
	}

	render(){
		const { user, loading, error, handleChangeLink, logout } = this.props;
		const { link } = this.state;
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

							<Link to={"/notifications"}> <i class="fa fa-bell" aria-hidden="true"></i> </Link>							

						 	<img src={user.profile_pic} className="profile-pictuser.e"/>
						 	<h1 className="user-name">{user.first_name} {user.last_name}</h1>
						</header>
						<section>
							<Link to={'/edit'}>Edit my profile</Link>
							<Link to={'/driving/cars'}>My Cars</Link>
							<Link to={link}>My Trips</Link>
							<p>{user.points}points</p>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<Link to={'/checkout'}>Recharge your balance?</Link>
							<p><Link to="/" onClick={() => {logout()} }>logout</Link></p>
						</section>
						<footer>
							<Link to={'/hitch-hiking'} onClick={() => {this.handleChangeLink}}>Hitch-Hiking</Link>
							<Link to={'/driving'}>Driving</Link>
						</footer>
				    </div>
		        </div>
			)
		}
	}
}