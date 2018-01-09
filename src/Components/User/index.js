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
								 	<img src="https://scontent.fcai2-2.fna.fbcdn.net/v/t1.0-9/26167089_1518615938188041_6113836469478145196_n.jpg?oh=c76a0197e8bd1983f07680faca01e8b5&oe=5ABA0587" className="profile-picture"/>
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
								<Link to={link}>My Trips</Link>
							</div>
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