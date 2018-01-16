import React , {Component} from 'react';
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import './style.css';
export default class UserHomePage extends Component {
    render(){
        return(
            <div className="type-container">
                <div className="home">
                    
                    <Carousel autoplay>
                        <div className="image" ><h1>Hi!</h1></div>
                        <div className="image2"></div>
                        <div className="image3"></div>
                    </Carousel>
                </div>
            </div>
        )
    }
}