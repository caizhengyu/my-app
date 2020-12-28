import React from 'react';
import styles from './styles.css';
import { Link, Redirect } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Banner from "../Banner";
import banner_1 from "./images/banner-1.jpg";
import banner_2 from "./images/banner-2.jpg";
import banner_3 from "./images/banner-3.jpg";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.images = [banner_1, banner_2, banner_3];
        this.messages = ["We Are Professional & Inspirational",
                        "Innovative School for Modern-day Students",
                        "Individual Education Plan for Every Student"];
    }

    getSlider = () => {
        let items = []
        for (let i = 0; i < this.images.length; i++){
            items.push(
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${this.images[i]})`}}>
                    <span>{this.messages[i]}</span>
                    </div>
                </div>
            )
        }
        return <Slide>{items}</Slide>;
    }

    render(){
        return (
            <div>
                <Banner/>
                <div className="slide-container">
                    {this.getSlider()}
                </div>
            </div>
        )
    }
}
export default Home;
