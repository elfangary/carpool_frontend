import React, { Component } from 'react';
import Locations from '../../Containers/LocationsContainer';
import Days from '../Days';
//import TimeFrame from '../TimeFrame';

export default class HHForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            day: null,
            location_id: null,
            start_time: '',
            end_time: ''
        };
    };

    componentWillMount(){
        this.props.getFilteredTrips();
    }

    handleChange = (event) => {
		this.setState({
            day: this.day.value,
            location_id: this.name.location_id.value,
            start_time: this.name.start_time.value,
            end_time: this.name.end_time.value
        });
    };

    render(){
        const { locations, trips } = this.props;
        const { day, location_id, start_time, end_time } = this.state;
        return(
            <div>
                <div>
                    <Locations location_id={location_id} onChange={this.handleChange.bind(this)}/>
                    <label>
                        Time Frame
                        <input type="time" name="start_time" value={start_time} onChange={this.handleChange}/>
                        <p>To</p>
                        <input type="time" name="end_time" value={end_time} onChange={this.handleChange}/>
                    </label>
                    <Days day={day} onClick={this.handleChange}/>
                </div>
                <div>
                    {trips.map((trip) => {
                        return (
                            <div>
                                <p>{trip.day}</p>
                                <p>{trip.all_seats}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
