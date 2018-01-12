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
			<form className="signUpForm">
				<input type="text" name="first_name" placeholder="firstName" onChange={this.handelChange.bind(this)} />
 				<input type="text" name="last_name" placeholder="lastName" onChange={this.handelChange.bind(this)} />
				<input type="text" name="email" placeholder="email" onChange={this.handelChange.bind(this)} />
				<input type="text" name="phone" placeholder="phone number" onChange={this.handelChange.bind(this)} />
				<input type="radio" name="gender" value="male" onChange={this.handelChange.bind(this)} />Male
				<input type="radio" name="gender" value="female" onChange={this.handelChange.bind(this)} />Female
				<input type="file" name="profile_pic" accept="image/*" onChange={this.handelChange.bind(this)} />				
				<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password_confirmation" placeholder="confirm password" onChange={this.handelChange.bind(this)}/>
				<button type="button" onClick={() => {this.props.signUp(user); console.log("in signUp form"); console.log(this.state.user)} }>next</button>
				{
					(this.props.error !== null)? <p>{this.props.error}</p> : null
				}
			</form>
		)
	}
}