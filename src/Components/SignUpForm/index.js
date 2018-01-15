import React, {Component} from 'react';
import './signUp_style.css';
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

		this.inputs = {};
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

	handleErrors(errors) {
        Object.entries(this.inputs).forEach(([key, value]) => {
            value.style.borderColor = "#e1e1e1";
        })
        errors.forEach(error => {
            const errorField = error.split(' ')[0].toLowerCase();
            this.inputs[errorField].style.borderColor = 'red';
        })
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
		const errors = this.props.error;

		return(
			<div className="signup-component">
				<div className="clearfix">
					<div className="signup-content">
						<h1>Hi!</h1>
						<p><span>Since it is the first time we meet, </span>we would like to know more about<span> you.</span></p>
					</div>
						<form className="signup-form">
							<input ref={(ref) => this.inputs.first = ref} type="text" name="first_name" placeholder="First Name" onChange={this.handelChange.bind(this)} />
			 				<input ref={(ref) => this.inputs.last = ref} type="text" name="last_name" placeholder="Last Name" onChange={this.handelChange.bind(this)} />
							<input ref={(ref) => this.inputs.email = ref} type="text" name="email" placeholder="Email" onChange={this.handelChange.bind(this)} />
							<input ref={(ref) => this.inputs.phone = ref} type="text" name="phone" placeholder="Phone Number" onChange={this.handelChange.bind(this)} />
							<label htmlFor="gender">Gender</label>
							<select ref={(ref) => this.inputs.gender = ref} name="gender" onChange={this.handelChange.bind(this)} id="gender">
							  	<option value="" disabled selected></option>
							  	<option value="male">Male</option>
							  	<option value="female">Female</option>
							</select>
							<input className="upload-file" type="file" name="profile_pic" accept="image/*" onChange={this.handelChange.bind(this)} />				
							<input ref={(ref) => this.inputs.password = ref} type="password" name="password" placeholder="Password" onChange={this.handelChange.bind(this)} />
							<input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={this.handelChange.bind(this)}/>
							<label htmlFor="submit" className="submit-label">Ready to move on?</label>
							<button id="submit" type="button" onClick={() => {this.props.signUp(user); console.log("in signUp form"); console.log(this.state.user)} }>Sign up</button>
							{
								// (this.props.error !== null)? <p className="error">{this.props.error}</p> : null
								(errors) ? this.handleErrors(errors) : null
							}
						</form>
				</div>
			</div>
		)
	}
}