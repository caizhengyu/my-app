import React from 'react';
import styles from './styles.css';
import { Link, Redirect } from "react-router-dom";
import Banner from "../Banner";

class About extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Banner/>
        )
    }
}
export default About;
