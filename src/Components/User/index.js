import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
// import "./index.css";
import {Link} from 'react-router-dom';
import Driver from '../../Containers/DriverContainer';

export default class User extends Component{
	constructor(props){
		super(props);
		this.state = {
			link : '/driving/trips'
		};
	};

	handleChangeLink(){
		this.setState({
			link: '/hitch-hiking/trips'
		});
		console.log(this.state);
	}

	componentWillMount(){
        this.props.getUser(2);
	}


	render(){
		const { user, loading, error, handleChangeLink } = this.props;
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
		    	{user.map(u => {
		    		return (
		    			<div className="profile-container">
							<header className="header">
							 	<img src={u.profile_pic} className="profile-picture"/>
							 	<h1 className="user-name">{u.first_name} {u.last_name}</h1>
							</header>
							<section>
								<Link to={'/edit'}>Edit my profile</Link>
								<Link to={'/driving/cars'}>My Cars</Link>
								<Link to={link}>My Trips</Link>
								<p>{u.points}points</p>
								<p>{u.email}</p>
								<p>{u.phone}</p>
								<p><a href="#">Recharge</a></p>
							</section>
							<footer>
								<Link to={'/hitch-hiking'} onClick={() => {this.handleChangeLink}}>Hitch-Hiking</Link>
								<Link to={'/driving'}>Driving</Link>
							</footer>
					    </div>
		    		)
		    	    })
		        }
		        </div>
			)
		}
	}
}