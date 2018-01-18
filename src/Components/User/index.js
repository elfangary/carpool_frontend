import React, { Component } from 'react';
import "./user_style.css";
import { Link } from 'react-router-dom';
import Checkout from '../../Containers/Checkout';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

export default class User extends Component{
	constructor(props){
		super(props);
		this.state = {
			amount: null
		};
	};

	componentWillMount(){
		this.props.getUser();
		{console.log(this.props)}
    }

	handleChange = (event) => {
		this.setState({
			[event.target.name]: (event.target.value)
		});
	};

	render(){
		const { user, loading, error, points } = this.props;
		const { amount } = this.state;
		if(loading){
            return (
            	<div className="fixed-container">
            		<div className="profile-content">
						<p>Loading...</p>
					</div>
				</div>
            )
        }else if(error){
            return (
            	<div className="fixed-container">
                	<div className="profile-content">
						<p>Sorry, something went Wrong</p>
						<p>{error}</p>
					</div>
				</div>
            )
		}else{
		    return (
    			<div className="fixed-container">
    				<div className="fix-footer">
    				<div className="fix-content">
					<header className="header">
						<div className="profile-pic-edit-link">
							<div className="profile-picture-container">
						 		<img alt="profile picture" className="profile-picture" src={user.profile_pic}/>
						 	</div>
						 	<Link to={'/profile/edit'} className="edit-link">Edit my profile</Link>
						</div>
						<div className="personal-details">
							<h1 className="user-name">{user.first_name} {user.last_name}</h1>
							<div className="rate-container">
						 		<Rater total={5} rating={user.rate / user.raters_no }  interactive={false}/>
						 		<p className="profile-rate">({user.raters_no})</p>
						 	</div>
						</div>
					</header>

					<section>
						<div className="profile-links-container">

							<Link to={'/profile/driving/trips'} className="profile-links">My Trips</Link>
							<Link to={'/profile/hitch-hiking/trips'} className="profile-links">HH Trips</Link>
							<Link to={'/profile/driving/cars'} className="profile-links">My Cars</Link>
						</div>
						<div className="contact-details">
							<p className ='points'><span>{points}</span> points</p>
							<div className="email-phone">
								<p>{user.email}</p>
								<p>{user.phone}</p>
							</div>
						</div>
						<form className="user-profile-form">
							<legend>Recharge your balance?</legend>
							<input placeholder="Please enter amount" type="amount" id="amount-input" name="amount" value={amount} onChange={this.handleChange.bind(this)}/>
						</form>
						<div className="stripe">
							<Checkout
	        					name={'Recharge your balance?'}
	        					description={'Enter your details below..'}
	       						email={user.email}
	       						amount={amount}
	      					/>
	      				</div>
					</section>
					</div>
					<footer className="type-links">
						<Link className ='type-selected' to={'/profile/hitch-hiking'}>Hitch-Hiking</Link>
						<Link className ='type-selected' to={'/profile/driving'}>Driving</Link>
					</footer>
					</div>
			    </div>
			)
		}
	}
}