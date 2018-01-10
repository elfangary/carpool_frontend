import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class Rating extends Component {
    constructor() {
        super();
 
        this.state = {
            rating: 1
        };
    }
 
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
 
    render() {
        const { rating } = this.state;
        const { onChange } = this.props;
        return (                
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onChange={onChange}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}