import React, {Component} from 'react';
import UserProfile from '../../Pages/UserProfile';
import { Link } from 'react-router-dom';
import './login_style.css';
import { Row, Col } from 'antd';
import history from '../../history';

export default class Login extends Component{
	constructor(props){
		super(props);
		if (history.location.state){
			this.state={
				email: history.location.state.email,
				password: '',
				jwtToken: localStorage.jwtToken
			}
		}else{
			this.state={
			email: '',
			password: '',
			jwtToken: localStorage.jwtToken
			}
		}
	}
	handelChange(event){
		this.setState({ [event.target.name]: event.target.value });
	}

	componentWillReciveProps(nextProps){
		nextProps = this.props.error;
	}
	render(){
		const {email, password} = this.state;
		const {loggedIn} = this.props;
		return(
			<div className="userLogin clearfix">
				<div className="intro">
					<section>
						<header>
							<h1>Welcome to <span>AlaaElDine Carpool</span></h1>
							<p>Where Trips are shared</p>
						</header>
						<p>Affordable car-sharing service to ease your way around the city, availble for riders and drivers.</p>
						<Link to="/signup" activeClassName="active" className="signup-link">Become A Member</Link>
						<p className="signup">Want to start collaborating?<span> SignUp, It's Free</span></p>
					</section>
				</div>
				<div className="userLoginForm">
					<form>
						<input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handelChange.bind(this)} />
						<input type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
						<button type="button" onClick={ () =>{this.props.login(this.state); this.setState({error: this.props.error})} }>Next</button>
						{
							(this.props.error)? <p className="error">{this.props.error} </p> : null
						}
					</form>
				</div>
			</div>
		)
	}
}