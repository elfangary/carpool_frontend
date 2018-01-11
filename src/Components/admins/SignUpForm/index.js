import React, {Component} from 'react';
import '../../SignUpForm/signUp_style.css';

export default class SignUpForm extends Component{
	constructor(props){
		super(props);
		this.state={
			admin:{
				fullName: '',
				email: '',
				password: '',
				password_confirmation: ''
			}
		};		
	};

	handelChange(event){
		const {admin} = this.state;
		admin[event.target.name] = event.target.value
		this.setState({ admin });
	}

	render(){
		const { full_name, email, password, password_confirmation } = this.state.admin;
		return(
			<form className="signUpForm">
				<legend>Admin SignUp</legend>
				<input type="text" name="fullName" placeholder="fullName" onChange={this.handelChange.bind(this)} />
				<input type="text" name="email" placeholder="email" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password_confirmation" placeholder="confirm password" onChange={this.handelChange.bind(this)}/>
				<button type="button" onClick={() => {this.props.adminSignUp(this.state.admin); console.log("in admin signUp form"); console.log(this.state.admin)} }>next</button>
				{
					(this.props.error !== null)? <p>{this.props.error}</p> : null
					
				}
			</form>
		)
	}
}