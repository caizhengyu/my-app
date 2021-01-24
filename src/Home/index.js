import React from 'react';
import styles from './styles.css';
import { Link, Redirect } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Banner from "../Banner";
import banner_0 from "./images/banner-0.png";
// import banner_1 from "./images/banner-1.png";
import banner_2 from "./images/banner-2.png";
import banner_3 from "./images/banner-3.png";
import intro from "./images/intro.png";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.images = [banner_0, banner_2, banner_3];
        this.messages = ["AppleSmart, 我们的孩子就是我们的小苹果🍎，我们一起分享好老师,让好老师来教我们的小苹果🍎。",
                        "Innovative School for Modern-day Students",
                        "temp", "temp"];
    }

    getSlider = () => {
        let items = []
        for (let i = 0; i < this.images.length; i++){
            items.push(
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${this.images[i]})`}}>
                    </div>
                </div>
            )
        }
        return <Slide>{items}</Slide>;
    }

    render(){
        return (
            <div className="homeContainer">
                <Banner/>
                <div className="slide-container">
                    {this.getSlider()}
                </div>

                <div className="Intro">AppleSmart, 我们的孩子就是我们的小苹果🍎，我们一起分享好老师,让好老师来教我们的小苹果🍎。”<br/>
AppleSmart是一个针对12年级以下的课外辅导学校。<br/>
Applesmart的创建人YuJin ，是个对教育事业有着浓厚兴趣和热爱生活的人。学校于2020年创建。学校的宗旨和理念是：找到优秀的老师，培养出优秀的孩子；减轻家长们的经济负担和压力。<br/>
目前正处于疫情的特殊时期，我们每一位家长不仅需要挣钱养家，还要照顾好孩子们的生活和学习。孩子们的学校由于疫情的缘故改变了以往传统的教学方式，这对孩子们的学习造成了很大的影响，使我们做家长的不得不找校外辅导班来给孩子补习。但校外的辅导课价格不便宜，在经济上给家长们带来无形了压力。<br/>
我们开办这个低盈利模式为主的AppleSmart学校，来帮助家长们减压和帮助孩子们获得更多的学习机会。我们需要家长们和我们共同努力，携手共进！<br/>
我们的老师团队大部分都是公校的在教老师，他们利用课后或休息时间来给我们的孩子上课，特别不容易。我们特别感恩这样一群优秀且以培养孩子为主的好老师！<br/>
AppleSmart学校虽然处于办学初期，但由于我们每位妈妈全力以赴地付出和家长们的支持与信任，使得Applesmart 🍎 每一天都在吸收新事物，不断更新和快速成长！<br/>
AppleSmart未来的路还很长，需要家长们更多的支持和鼓励，我们愿意携手和家长们一起把我们的孩子培养得更优秀！如果家长们有新的课程需求，请告诉我们，我们会为你们安排好的老师来教这个课程。如果家长们身边的朋友、同事、邻里的孩子有需求，也请向他们推荐我们。<br/>
AppleSmart现在由有共同理念和信心的妈妈们辛勤地耕耘着，一天一天地茁壮成长。<br/>
同舟共济，未来可期！感谢有你们的支持和理解！[Heart]</div>

                <div className="introContainer">
                <img className="introText" src={intro} />
                </div>
            </div>
        )
    }
}
export default Home;
