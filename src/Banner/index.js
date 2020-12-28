import React from 'react';
import styles from './styles.css';
import { Link, Redirect } from "react-router-dom";

class Banner extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <span className="title">Apple Smart Academy</span>
                </div>

                <div className="header">
                    <div className="option">About Us</div>
                    <div className="option dropdown">
                        <span className="dropbtn">Classes</span>
                        <div className="dropdown-content">
                            <Link to={"../About"}>About Us</Link>
                        </div>
                    </div>
                    <div className="option">About Us</div>
                    <div className="option dropdown">Classes</div>
                    <div className="option">About Us</div>
                    <div className="option dropdown">Classes</div>
                </div>
            </div>
        )
    }
}
export default Banner;
