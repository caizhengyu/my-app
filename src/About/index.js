import React from 'react';
import styles from './styles.css';
import { Link, Redirect } from "react-router-dom";
import Banner from "../Banner";

class About extends React.Component {
    constructor(props){
        super(props);
        this.images = ["http://elambacademy.com/wp-content/uploads/2018/08/banner-1-2.jpg",
                        "http://elambacademy.com/wp-content/uploads/2018/08/banner-2-2.jpg",
                        "http://elambacademy.com/wp-content/uploads/2018/08/banner-3.jpg"];
        this.messages = ["We Are Professional & Inspirational",
                        "Innovative School for Modern-day Students",
                        "Individual Education Plan for Every Student"];
    }

    render(){
        return (
            <Banner/>
        )
    }
}
export default About;
