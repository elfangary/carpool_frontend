import React, { Component } from 'react';

export default class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: null,
            rate: 0
        };
    };

    render() {
        const { addRate } = this.props;
        var stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push(<input id="stars" type="checkbox" name="stars" value={i + 1} />)
        }
        return (
            <div>{stars}</div>
        )
    }
}