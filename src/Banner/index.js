import React from 'react';
import styles from './styles.css';
import { Link, Redirect } from "react-router-dom";

class Banner extends React.Component {
    
    onClickAction = () => {
        alert(123);
    }



    render(){
        return (
            <div>
                <div>
                    <span className="title">Apple Smart Academy</span>
                </div>

                <div className="header">
                    <div className="option"><span className="textButton">About Us</span></div>
                    <div className="option dropdown">
                        <span className="dropbtn">Classes</span>
                        <div className="dropdown-content">
                            <Link to={"../English"}>English</Link>
                            <Link to={"../Math"}>Math</Link>
                            <Link to={"../French"}>French</Link>
                            <Link to={"../Music"}>Music</Link>
                            <Link to={"../Debate"}>Debate</Link>
                        </div>
                    </div>
                    <div className="option"><span className="textButton" onClick={this.onClickAction}>Teacher</span></div>
                    <div className="option dropdown">Summer/Winter Camp</div>
                    <div className="option"><span className="textButton">Schedule</span></div>
                    <div className="option dropdown">Contact</div>
                </div>
            </div>
        )
    }
}
export default Banner;
