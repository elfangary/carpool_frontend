import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
// import "./index.css";
import {Link, Route} from 'react-router-dom';
// import Driver from '../../Containers/DriverContainer';
import Checkout from '../../Containers/Checkout';

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
		var hi = "hi";
		const star = (<i class="fa fa-star" aria-hidden="true"></i>);
		const empty_star = (<i class="fa fa-star-o" aria-hidden="true"></i>);
		if(loading){
            return (
            	<div>
	                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
					<span class="sr-only">Loading...</span>
				</div>
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
						<div className="clearfix">
							<header className="header">
								<Link to={"/notifications"} className="notification-link"> <i class="fa fa-bell" aria-hidden="true"></i> </Link>
								<div className="profile-pic-edit-link">
								 	<img src={user.profile_pic} className="profile-picture"/>
								 	<p><Link to={'/edit'} className="edit-link">Edit my profile</Link></p>
							 	</div>
							 	<div className="user-name-rate">
									<h1 className="user-name">{user.first_name} {user.last_name}</h1>
									<p> {star} {star} {star} {empty_star} {empty_star}</p>
								</div>
							</header>
						</div>
						<section>
							<div className="clearfix">
								<Link to={'/driving/cars'}>My Cars</Link>
								<Link to={'/driving/trips'}>My Trips</Link>
								<Link to={'/hitch-hiking/trips'}>HH-trips</Link>
							</div>
							<p>{points} points</p>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<form>
								<legend>Recharge your balance?</legend>
								<label forHtml="amount-input">Please enter amount </label>
								<input type="amount" id="amount-input" name="amount" value={amount} onChange={this.handleChange.bind(this)}/>
							</form>
							<Checkout
            					name={'Recharge your balance?'}
            					description={'Enter your details below..'}
           						email={user.email}
           						amount={amount}
          					/>
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