import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
import "./user_style.css";
import {Link, Route} from 'react-router-dom';
// import Driver from '../../Containers/DriverContainer';
import Checkout from '../../Containers/Checkout';
import StarRatingComponent from 'react-star-rating-component';

export default class User extends Component{
	constructor(props){
		super(props);
		this.state = {
			amount: null
		};
	};

	componentWillMount(){
        this.props.getUser();
    }

	handleChange = (event) => {
		this.setState({
			[event.target.name]: (event.target.value)
		});
	};

	render(){
		const { user, loading, error, handleChangeLink, logout, points } = this.props;
		const { amount, link } = this.state;
		if(loading){
            return (
            	<div className="clearfix">
	                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
					<span class="sr-only">Loading...</span>
				</div>
            )
        }else if(error){
            return (
                <div className="clearfix">
					<p>Sorry, something went Wrong</p>
					<p>{error}</p>
				</div>
            )
		}else{
		    return (
		    	// there was a clearfix div
    			<div className="profile-container">
    				<div className="profile-content clearfix">
						<div className="clearfix">
							<header className="header">
								<div className="profile-pic-edit-link">
									<p><Link to="/" onClick={() => {logout()} }>logout</Link></p>
								 	<img src={user.profile_pic} className="profile-picture"/>
								 	<p><Link to={'/profile/edit'} className="edit-link">Edit my profile</Link></p>
							 	</div>
							 	<div className="user-name-rate">
									<h1 className="user-name">{user.first_name} {user.last_name}</h1>
									<StarRatingComponent  name="rate1" starCount={5} value={user.rate / user.raters_no} editing={false} />
								</div>
							</header>
						</div>

						<section>
							<div className="profile-links">
								<Link to={'/profile/driving/cars'}>My Cars</Link>
								<Link to={'/profile/driving/trips'}>My Trips</Link>
								<Link to={'/profile/hitch-hiking/trips'}>HH-trips</Link>
							</div>
							<div className="contact-details clearfix">
								<p><span>{points}</span> points</p>
								<div className="email-phone">
									<p>{user.email}</p>
									<p>{user.phone}</p>
								</div>
							</div>
							<form>
								<legend>Recharge your balance?</legend>
								<input placeholder="Please enter amount" type="amount" id="amount-input" name="amount" value={amount} onChange={this.handleChange.bind(this)}/>
							</form>
							<Checkout
	        					name={'Recharge your balance?'}
	        					description={'Enter your details below..'}
	       						email={user.email}
	       						amount={amount}
	      					/>
						</section>
						<footer>
							<Link to={'/profile/hitch-hiking'}>Hitch-Hiking</Link>
							<Link to={'/profile/driving'}>Driving</Link>
						</footer>
					</div>
			    </div>
			)
		}
	}
}