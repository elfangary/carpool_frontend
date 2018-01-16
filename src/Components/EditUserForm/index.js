import React, { Component } from 'react';
import Axios from 'axios';
import '../SignUpForm/signUp_style.css';
import './editForm_style.css';

export default class EditUserForm extends Component{

	constructor(props){
		super(props);
		const { user } = this.props;
		this.state = {
			user: {
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				phone: user.phone
			}
		};
		console.log("password in state");
		console.log(this.state.user.password);
	};

	handelChange(event){
		const {user} = this.state;
		([event.target.name] == "profile_pic")?

			user[event.target.name] = event.target.files[0]
		:
			user[event.target.name] = event.target.value
		;
		this.setState({ user });
		console.log("in Edit form");
		console.log(this.state.user);
	}

	componentWillMount(){
		if(!this.props.user.first_name){
			Axios.get("http://localhost:3001/user.json").then((response)=>{
				this.setState({...this.state, user: response.data})
			})
		}
	}

	render(){

		let user = new FormData();
		user.append('first_name', this.state.user.first_name);
		user.append('last_name', this.state.user.last_name);
		user.append('email', this.state.user.email);
		user.append('phone', this.state.user.phone);
		// user.append('password', this.state.user.password);
		// user.append('password_confirmation', this.state.user.password_confirmation);
		user.append('profile_pic', this.state.user.profile_pic);

		const {first_name, last_name, email, phone} = this.state.user;
		return(
			<div className="new-container margin end">
				<form className="signup-form" >
					<input type="text" name="first_name" placeholder="firstName"  value={first_name} onChange={this.handelChange.bind(this)} />
					<input type="text" name="last_name" placeholder="lastName" value={last_name} onChange={this.handelChange.bind(this)} />
					<input type="text" name="email" placeholder="email" value={email} onChange={this.handelChange.bind(this)} />
					<input type="text" name="phone" placeholder="phone number" value={phone} onChange={this.handelChange.bind(this)} />
					<input type="file" className="upload-file" name="profile_pic" accept="image/*" onChange={this.handelChange.bind(this)} />
					<button type="button" className="edit-button" onClick={() => {this.props.updateUser(user); console.log("we"); console.log(this.state.user) } }>Edit</button>
				</form>
			</div>
		)
	};
}