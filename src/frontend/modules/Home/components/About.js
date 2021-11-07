import React from 'react';
import {ProgressBar} from 'react-bootstrap'
import aboutImg from '../../../../dist/images/about-img.jpg';
import likeIcon from '../../../../dist/images/icon/like.png';
import cupIcon from '../../../../dist/images/icon/coffee-cup.png';
import menIcon from '../../../../dist/images/icon/men.png';
import medalIcon from '../../../../dist/images/icon/medal.png';
export default function About() {
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
                    <div className="col-lg-6">
                        <div className="about-img"> 
                            <img src={aboutImg} alt="About image" title="About image" className="img-fluid"/>
                            <a className="about-video-btn" target="_blank" href="https://www.youtube.com/channel/UCuB0evRETixJxzSPZZFdleQ"><i className="fa fa-play"></i></a>
                            <div className="video-border-line"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="widget-wrap">
                            <div className="widget-container mt-md-5 pt-md-3">
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

                                <div className="fact-wrapper row text-center mt-5">
                                    <div className="col-sm-6 mb-3">
                                        <div className="fact-item">
                                            <span className="icon icon-like">
                                                <img src={likeIcon} alt="Like"/>
                                            </span>
                                            <div className="details">
                                                <h3 className="number"><span className="count">145</span></h3>
                                                <p className="mb-0">Projects completed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="fact-item">
                                            <span className="icon icon-cup">
                                                    <img src={cupIcon} alt="Coffee"/>
                                            </span>
                                            <div className="details">
                                                <h3 className="number"><span className="count">2390</span></h3>
                                                <p className="mb-0">Cup of coffee</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="fact-item">
                                            <span className="icon icon-people">
                                                <img src={menIcon} alt="Clients"/>
                                            </span>
                                            <div className="details">
                                                <h3 className="number"><span className="count">289</span></h3>
                                                <p className="mb-0">Satisfied clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="fact-item">
                                            <span className="icon icon-badge">
                                                <img src={medalIcon} alt="Medal"/>
                                            </span>
                                            <div className="details">
                                                <h3 className="number"><span className="count">20</span></h3>
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
