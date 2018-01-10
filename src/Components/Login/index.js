import React, {Component} from 'react';
import UserProfile from '../../Pages/UserProfile';
import { Link } from 'react-router-dom';
import './login_style.css';
import { Row, Col } from 'antd';

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
			<div className="userLogin clearfix">		
				<div className="intro">
					<section>
						<h1>Welcome to <span>AlaaElDine Carpool</span></h1>
						<p>Affordable car-sharing service to ease <span> your way around the city,</span>availble for riders and drivers.</p>
						<p>Want to start collaborating?<Link to="/signup">SignUp, It's Free</Link></p>
					</section>
				</div>
				<div className="userLoginForm">
					<form>
						<input type="text" name="email" placeholder="email" onChange={this.handelChange.bind(this)} />
						<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
						<button type="button" onClick={ () =>{this.props.login(this.state)} }>Next </button>
						{
							(this.props.error)? <p>you can not login </p> : null
						}
					</form>
				</div>
			</div>
		)
	}
}