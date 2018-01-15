import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './login_style.css';
import history from '../../history';

export default class Login extends Component{
	constructor(props){
		super(props);
		if (history.location.state){
			this.state={
				email: history.location.state.email,
				password: '',
				jwtToken: localStorage.jwtToken,
				error: ''
			}
		}else{
			this.state={
			email: '',
			password: '',
			jwtToken: localStorage.jwtToken,
			error: ''
			}
		}
		this.inputs = {};
	}

	handelChange(event){
		this.setState({ [event.target.name]: event.target.value });
	}

	handleErrors(error) {
		const err = error.split(' ')[0];
		switch(err) {
			case 'Invalid': {
				this.inputs.password.style.borderColor = 'red';
				this.inputs.email.style.borderColor = 'rgba(255,255,255,.3)';
				break;
			}
			case 'You': {
				this.inputs.email.style.borderColor = 'red';
				this.inputs.password.style.borderColor = 'rgba(255,255,255,.3)';
				break;
			}
			default:
				this.inputs.password.style.borderColor = 'rgba(255,255,255,.3)';
				this.inputs.email.style.borderColor = 'rgba(255,255,255,.3)';
		}
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
						<input ref={(ref) => this.inputs.email = ref} type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handelChange.bind(this)} />
						<input ref={(ref) => this.inputs.password = ref} type="password" name="password" placeholder="password" onChange={this.handelChange.bind(this)} />
						<button type="button" onClick={ () =>{this.props.login(this.state); this.setState({error: this.props.error})} }>Next</button>
						{
							(this.props.error)? (<div><p className="error">{this.props.error}</p> {this.handleErrors(this.props.error)}</div>) : null
						}
					</form>
				</div>
			</div>
		)
	}
}