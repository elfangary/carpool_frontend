import React, { Component } from 'react';
import './index.css';

export default class Timeframe extends Component {

	render() {
		const {stop_point, onChange, inputs} = this.props
		return (
	        <label className="time-frame">
				<input ref={(ref) => inputs.start_time = ref} className="time" type="time" name="start_time" value={stop_point.start_time} onChange={onChange}/>
				<input ref={(ref) => inputs.end_time = ref} className="time" type="time" name="end_time" value={stop_point.end_time} onChange={onChange}/>
			</label>
		)
	};
};