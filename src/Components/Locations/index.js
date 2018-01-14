import React, { Component } from 'react';
import './index.css';

export default class Locations extends Component {

    componentWillMount(){
        this.props.getLocations();
    }

    render(){
        const { locations, onChange, name} = this.props;
        var options = locations.map((location) => {
            return <option className="location" key={location.id} value={location.id}>{location.name}</option>;
        })
        return (
            <form>
                <div className="location-label">
                    <label htmlFor="location"></label>
                    <select id="location" name={name} onChange={onChange}>
                        <option value="" disabled selected>Select Point</option>
                        {options}
                    </select>
                </div>
            </form>
        )
    }
}