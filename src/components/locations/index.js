import React, { Component } from 'react';

export default class Locations extends Component {
    selectLocation() {
        console.log(this.refs.locationSelected.value);
    }

    componentWillMount(){
        this.props.getLocations();
    }

    render(){
        const {location_id, locations, onChange} = this.props;
        var options = locations.map((location) => {
            return <option key={location.id} value={location.id} location_id={location.id}>{location.name}</option>;
        })
        return (
            <select onChange={onChange} name="location_id">
                <option value="" disabled selected>Select Point</option>
                {options}
            </select>

        )
    }
}