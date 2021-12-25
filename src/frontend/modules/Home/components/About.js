import {React, Component} from 'react';
import {ProgressBar} from 'react-bootstrap'
import aboutImg from '../../../../dist/images/about-img.jpg';
import likeIcon from '../../../../dist/images/icon/like.png';
import cupIcon from '../../../../dist/images/icon/coffee-cup.png';
import menIcon from '../../../../dist/images/icon/men.png';
import medalIcon from '../../../../dist/images/icon/medal.png';
class About extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
          count2:0,
          count3:0,
          count4:0
        };
      }
        counter = (minimum, maximum) => {
            for (let count = minimum; count <= maximum; count++) {
                setTimeout(() => {
                    this.setState({count})
                }, 1000);
            }
        }
        counter2 = (minimum, maximum) => {
            for (let count2 = minimum; count2 <= maximum; count2++) {
                setTimeout(() => {
                    this.setState({count2})
                }, 1000);
            }
        }
        counter3 = (minimum, maximum) => {
            for (let count3 = minimum; count3 <= maximum; count3++) {
                setTimeout(() => {
                    this.setState({count3})
                }, 1000);
            }
        }
        counter4 = (minimum, maximum) => {
            for (let count4 = minimum; count4 <= maximum; count4++) {
                setTimeout(() => {
                    this.setState({count4})
                }, 1000);
            }
        }
        componentDidMount() {
            this.counter(0,105)
            this.counter2(0,390)
            this.counter3(0,289)
            this.counter4(0,30)
        }
    render() {
        const uiUx = 95;
        const design = 100;
        const development = 85;
        return (
            <section className="about-section py-3 py-md-5">
                <div className="container my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title mb-3 mb-md-5">About me</h2>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="about-img"> 
                                <img src={aboutImg} alt="About" title="About image" className="img-fluid"/>
                                <a className="about-video-btn" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/channel/UCuB0evRETixJxzSPZZFdleQ"><i className="fa fa-play"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 ms-lg-auto">
                            <div className="widget-wrap">
                                <div className="widget-container">
                                    <p>I am Ikram Hossen, web developer from Dhaka, Bangladesh. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
                                </div>
                                <div>
                                    <div className="mb-3 mb-md-5">
                                        <div className="progressItemWrap mt-3">
                                            <span className="progressValueTitle">Development</span>
                                            <span className="progressValue">{`${development}%`}</span>
                                        </div>
                                        <ProgressBar className="development mt-1" now={development}/>

                                        <div className="progressItemWrap mt-3">
                                            <span className="progressValueTitle">UI/UX Design</span>
                                            <span className="progressValue">{`${uiUx}%`}</span>
                                        </div>
                                        <ProgressBar className="uiUx mt-1" now={uiUx}/>

                                        <div className="progressItemWrap mt-3">
                                            <span className="progressValueTitle">Web Design</span>
                                            <span className="progressValue">{`${design}%`}</span>
                                        </div>
                                        <ProgressBar className="design mt-1" now={design}/>
                                    </div>

                                    <div className="fact-wrapper row text-center mt-4 mt-md-5">
                                        <div className="col-6 mb-2 mb-md-3">
                                            <div className="fact-item">
                                                <span className="icon icon-like">
                                                    <img src={likeIcon} alt="Like"/>
                                                </span>
                                                <div className="details">
                                                    <h3 className="number"><span className="count">{this.state.count}</span></h3>
                                                    <p className="mb-0">Projects completed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-2 mb-md-3">
                                            <div className="fact-item">
                                                <span className="icon icon-cup">
                                                        <img src={cupIcon} alt="Coffee"/>
                                                </span>
                                                <div className="details">
                                                    <h3 className="number"><span className="count">{this.state.count2}</span></h3>
                                                    <p className="mb-0">Cup of coffee</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-2 mb-md-3">
                                            <div className="fact-item">
                                                <span className="icon icon-people">
                                                    <img src={menIcon} alt="Clients"/>
                                                </span>
                                                <div className="details">
                                                    <h3 className="number"><span className="count">{this.state.count3}</span></h3>
                                                    <p className="mb-0">Satisfied clients</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-2 mb-md-3">
                                            <div className="fact-item">
                                                <span className="icon icon-badge">
                                                    <img src={medalIcon} alt="Medal"/>
                                                </span>
                                                <div className="details">
                                                    <h3 className="number"><span className="count">{this.state.count4}</span></h3>
                                                    <p className="mb-0">Nominees winner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget-container">
                                        <a href="#" className="btn hireme-btn my-2 d-inline-block btn-lg px-5 " target="_blank"> Download CV </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>		
        )
    }
}

export default About;
