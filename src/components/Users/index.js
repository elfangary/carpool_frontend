import React, { Component } from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
import "./user_style.css";
import { Switch } from 'antd';

export default class User extends Component{
	componentWillMount(){
        this.props.getUser(1);
    }
	render(){
		const { user, loading, error } = this.props;
		console.log("user Component");
		console.log(user);	
		if(loading){
            return (
                <div> loading </div>
            )
        }else if(error){
            return (
                <div>
                    Sorry, there is error
                </div>
            )
		}else{
		    return (
		    	<div>
		    	{   user.map(u => {
		    		return (
		    			<div className="profile">
							<header>
							 	<img src="{u.profile_pic}" />
							 	<h1>{u.first_name} {u.last_name}</h1>
							</header>
							<section>
								<p>
									
									
								</p>
								<p><a href="#">edit my profile</a></p>
								<p><a href="#">my cars</a></p>
								<p><a href="#">my trips</a></p>
								<p>{u.points}points</p>
								<p>{u.email}</p>
								<p>{u.phone}</p>
								<p><a href="#">Recharge</a></p>
							</section>
							<footer>
								<label>
								  <Toggle
								    icons={{
								      checked: 'Hitchhicker',
								      unchecked: 'Driver',
								    }}

								     />
                                     <Switch size="small" defaultChecked />
								  
								</label>
							</footer>
					    </div>
		    		)
		    	    })
		        }
		        </div>
			)   		
			
		}
				
	}
}