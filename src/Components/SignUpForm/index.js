import React, {Component} from 'react';
import './signUp_style.css';
import {Redirect} from 'react-router-dom';
import Login from '../../Containers/loginFormContainer';
import UserProfile from '../../Pages/UserProfile';

export default class SignUpForm extends Component{
	constructor(props){
		super(props);
		this.state={
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			password_confirmation: '',
			phone: '',
			profile_pic: '',
			gender: ''
		}
	}
	handelChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render(){
		const {first_name, last_name, email, password, password_confirmation, profile_pic, gender} = this.state;
		return(
			
			<form className="signUpForm">
				<input type="text" name="first_name" placeholder="firstName"  value={first_name} onChange={this.handelChange.bind(this)} />
				<input type="text" name="last_name" placeholder="lastName" onChange={this.handelChange.bind(this)} />
				<input type="text" name="email" placeholder="email" onChange={this.handelChange.bind(this)} />
				<input type="text" name="phone" placeholder="phone number" onChange={this.handelChange.bind(this)} />
				<input type="radio" name="gender" value="male" onChange={this.handelChange.bind(this)} />Male
				<input type="radio" name="gender" value="female" onChange={this.handelChange.bind(this)} />Female
				<input type="text" name="profile_pic" placeholder="enter url to upload profile picture" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password_confirmation" placeholder="confirm password" onChange={this.handelChange.bind(this)}/>
				<button type="button" onClick={() => {this.props.signUp(this.state)} }>next</button>
				{
					(this.props.error !== null)? <p>{this.props.error}</p> : null
					
				}
			</form>
			)
		

	}
}