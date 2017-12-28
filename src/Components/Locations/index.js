import React, { Component } from 'react';

export default class Locations extends Component {

    componentWillMount(){
        this.props.getLocations();
    }

    render(){
        const { locations, location_id, onChange } = this.props;
        var options = locations.map((location) => {
            return <option key={location.id} value={location.id}>{location.name}</option>;
        })
        return (
            <form>
                <label htmlFor="location">To</label>
                <select id="location" name="location_id" onChange={onChange}>
                    <option value="" disabled selected>Select Point</option>
                    {options}
                </select>
            </form>
        )
    }
}