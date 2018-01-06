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
		const { amount } = this.state;

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
							<p>{points} points</p>
							<Link to={'/driving/trips'}>My Trips</Link>
							<Link to={'/hitch-hiking/trips'}>HH-trips</Link>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<form>
								<legend>Recharge your balance?</legend>
								<label forHtml="amount-input">Please enter amount</label>
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