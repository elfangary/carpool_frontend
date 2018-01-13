import React, {Component} from 'react';
import './signUp_style.css';
import "../User/user_style.css";
import {Redirect} from 'react-router-dom';
import Login from '../../Containers/loginFormContainer';
import UserProfile from '../../Pages/UserProfile';

export default class SignUpForm extends Component{
	constructor(props){
		super(props);
		this.state={
			user:{
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				password_confirmation: '',
				phone: '',
				profile_pic: '',
				gender: ''
			}
		};
	};

	handelChange(event){
		const {user} = this.state;
		([event.target.name] == "profile_pic")?
			user[event.target.name] = event.target.files[0]
		:
			user[event.target.name] = event.target.value
		;
		this.setState({ user });
	}

	render(){

		let user = new FormData();
		user.append('first_name', this.state.user.first_name);
		user.append('last_name', this.state.user.last_name);
		user.append('email', this.state.user.email);
		user.append('phone', this.state.user.phone);
		user.append('gender', this.state.user.gender);
		user.append('password', this.state.user.password);
		user.append('password_confirmation', this.state.user.password_confirmation);
		user.append('profile_pic', this.state.user.profile_pic);
		console.log(user.first_name);

		const {first_name, last_name, email, phone, password, password_confirmation, profile_pic, gender} = this.state.user;

		return(
			<div className="signup-component">
				<div className="profile-container">
					<div className="signup-content">
						<h1>Hi!</h1>
						<p><span>Since it is the first time we meet, </span>we would like to know more about<span> you.</span></p>
					</div>
				</div>
					<div className="clearfix">
						<form className="signup-form">
							<input type="text" name="first_name" placeholder="First Name" onChange={this.handelChange.bind(this)} />
			 				<input type="text" name="last_name" placeholder="Last Name" onChange={this.handelChange.bind(this)} />
							<input type="text" name="email" placeholder="Email" onChange={this.handelChange.bind(this)} />
							<input type="text" name="phone" placeholder="Phone Number" onChange={this.handelChange.bind(this)} />
							<label htmlFor="gender">Gender</label>
							<select name="gender" onChange={this.handelChange.bind(this)} id="gender">
							  	<option value="" disabled selected></option>
							  	<option value="male">Male</option>
							  	<option value="female">Female</option>
							</select>
							<input className="upload-file" type="file" name="profile_pic" accept="image/*" onChange={this.handelChange.bind(this)} />				
							<input type="password" name="password" placeholder="Password" onChange={this.handelChange.bind(this)} />
							<input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={this.handelChange.bind(this)}/>
							<label htmlFor="submit" className="submit-label">Ready to move on?</label>
							<button id="submit" type="button" onClick={() => {this.props.signUp(user); console.log("in signUp form"); console.log(this.state.user)} }>next</button>
							{
								(this.props.error !== null)? <p>{this.props.error}</p> : null
							}
						</form>
					</div>
			</div>
		)
	}
}