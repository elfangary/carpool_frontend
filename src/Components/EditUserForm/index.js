import React, { Component } from 'react';
import Axios from 'axios';
import '../SignUpForm/signUp_style.css';

export default class EditUserForm extends Component{

	constructor(props){
		super(props);
		const { user } = this.props;
		this.state = {
			user: {
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				phone: user.phone,
				password: user.password,
				password_confirmation: user.password_confirmation,
				profile_pic: ''
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
		user.append('password', this.state.user.password);
		// user.append('password_confirmation', this.state.user.password_confirmation);
		user.append('profile_pic', this.state.user.profile_pic);

		const {first_name, last_name, email, phone, password, password_confirmation, profile_pic} = this.state.user;
		return(
			<form className="editUserForm" id="user">
				<input type="text" name="first_name" placeholder="firstName"  value={first_name} onChange={this.handelChange.bind(this)} />
				<input type="text" name="last_name" placeholder="lastName" value={last_name} onChange={this.handelChange.bind(this)} />
				<input type="text" name="email" placeholder="email" value={email} onChange={this.handelChange.bind(this)} />
				<input type="text" name="phone" placeholder="phone number" value={phone} onChange={this.handelChange.bind(this)} />
				<input type="file" name="profile_pic" accept="image/*" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password" placeholder="ReEnter your old password or new one" value={password} onChange={this.handelChange.bind(this)} required />
				<input type="password" name="password_confirmation" value={password_confirmation}placeholder="confirm password" onChange={this.handelChange.bind(this)} required/>
				<button type="button" onClick={() => {this.props.updateUser(user); console.log("we"); console.log(this.state.user) } }>next</button>
			</form>
		)
	};
}