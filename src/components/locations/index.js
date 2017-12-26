import React, { Component } from 'react';

export default class Locations extends Component {
    selectLocation() {
        console.log(this.refs.locationSelected.value);
    }
    
    componentWillMount(){
        this.props.getLocations();
    }

    render(){
        var options = this.props.locations.map((location) => {
            return <option key={location.id} value={location.id}>{location.name}</option>;
        })
        return (
            <div>
                <select ref="locationSelected" onChange={ (e) => {this.selectLocation(); }}>
                <option value="" disabled selected>Select Point</option>
                {options}
                </select>
            </div>
        )
    }
}