import React, { Component } from 'react';
import Locations from '../../Containers/LocationsContainer';
import Days from '../Days';

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

    handleChange = (event) => {
        console.log(event.target.value);
        const newState = {...this.state};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };

    render(){
        const { locations, trips, onChange , getFilteredTrips} = this.props;
        const { day, location_id, start_time, end_time } = this.state;
        return(
            <div>
                <form>
                    <Locations onChange={this.handleChange.bind(this)}/>
                    <label>
                        Time Frame
                        <input type="time" name="start_time" value={start_time} onChange={this.handleChange}/>
                        <p>To</p>
                        <input type="time" name="end_time" value={end_time} onChange={this.handleChange}/>
                    </label>
                    <Days onClick={this.handleChange.bind(this)}/>
                    <input type="submit" onClick={() => this.props.getFilteredTrips(day, location_id, start_time, end_time)} />
                </form>
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
