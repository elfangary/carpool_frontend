import React, { Component } from 'react';
import './locations_style.css';

export default class Locations extends Component {

    componentWillMount(){
        this.props.getLocations();
    }

    render(){
        const { locations, onChange, name, inputs} = this.props;
        var options = locations.map((location) => {
            return <option className="location" key={location.id} value={location.id}>{location.name}</option>;
        })
        return (
            <form>
                <div className="location-label">
                    <label htmlFor="location"></label>
                    <select ref={(ref) => inputs.location = ref} id="location" name={name} onChange={onChange}>
                        <option value="" disabled selected>Select Point</option>
                        {options}
                    </select>
                </div>
            </form>
        )
    }
}