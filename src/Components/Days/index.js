import React, { Component } from 'react';


export default class Days extends Component {

	render() {
		const {onClick} = this.props;
		return (
	        <fieldset className="schedule">
				<legend>Trip Schedule</legend>

				<label htmlFor="day">Sunday</label>
				<input type="radio" name="day" id="day" value= "1" onClick={onClick} />
				<label htmlFor="day">Monday</label>
				<input type="radio" name="day" id="day" value= "2" onClick={onClick} />
				<label htmlFor="day">Tuesday</label>
				<input type="radio" name="day" id="day" value= "3" onClick={onClick} />
				<label htmlFor="day">Wednesday</label>
				<input type="radio" name="day" id="day" value= "4" onClick={onClick} />
				<label htmlFor="day">Thursday</label>
				<input type="radio" name="day" id="day" value= "5" onClick={onClick} />
				<label htmlFor="day">Friday</label>
				<input type="radio" name="day" id="day" value= "6" onClick={onClick} />
				<label htmlFor="day">Saturday</label>
				<input type="radio" name="day" id="day" value= "7" onClick={onClick} />
			</fieldset>
		)
	};
};