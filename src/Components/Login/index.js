import React, {Component} from 'react';
import UserProfile from '../../Pages/UserProfile';
import { Link } from 'react-router-dom';
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			email: '',
			password: '',
			jwtToken: localStorage.jwtToken
		}
	}
	handelChange(event){
		this.setState({ [event.target.name]: event.target.value });
	}
	render(){
		const {email, password} = this.state;
		const {loggedIn} = this.props;
		return(
			(localStorage.getItem('jwtToken'))?
				<UserProfile />
			:
			<div>
				<Link to="/signup">SignUp</Link>
				<form>
					<input type="text" name="email" placeholder="email" onChange={this.handelChange.bind(this)} />
					<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
					<button type="button" onClick={ () =>{this.props.login(this.state)} }>Next </button>
					{
						(this.props.error)? <p>you can not login </p> : null
					}
				</form>
			</div>
			)
	}
}