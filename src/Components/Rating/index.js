import React, { Component } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
 
export default class Rating extends Component {
    constructor(props){
        super(props);
        this.state = {
            ratings: []
        };
    };

    render() {
        const { addRate, Ratings, onRate } = this.props;
        return (                
            <div>
               <Rater total={5} rating={0} onRate={onRate} />
            </div>
        );
    }
}