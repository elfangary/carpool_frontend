import React, { Component } from 'react';
import './index.css';

export default class Timeframe extends Component {

	render() {
		const {stop_point, onChange} = this.props
		return (
	        <label className="time-frame">
				<p className="small">Time Frame</p>
				<input className="time" type="time" name="start_time" value={stop_point.start_time} onChange={onChange}/>
				<input className="time" type="time" name="end_time" value={stop_point.end_time} onChange={onChange}/>
			</label>
		)
	};
};