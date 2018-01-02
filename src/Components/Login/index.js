import React, {Component} from 'react';
import UserProfile from '../../Pages/UserProfile';
import { Link } from 'react-router-dom';
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			email: '',
			password: ''
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
			<form>
				<Link to="/signup">SiginUp</Link>
				<input type="text" name="email" placeholder="email" onChange={this.handelChange.bind(this)} />
				<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
				<button type="button" onClick={ () =>{this.props.login(this.state)} }>Next </button>
			</form>
			)
	}
}