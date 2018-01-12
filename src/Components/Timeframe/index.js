import React, { Component } from 'react';


export default class Timeframe extends Component {

	render() {
		const {stop_point, onChange} = this.props
		return (
	        <label>
				Time Frame
				<input className="time" type="time" name="start_time" value={stop_point.start_time} onChange={onChange}/>
				<p>To</p>
				<input className="time" type="time" name="end_time" value={stop_point.end_time} onChange={onChange}/>
			</label>
		)
	};
};