import React from 'react'
// import Particles from 'react-particles-js'
// import ParticleConfig from '../../../ParticleConfig'
import profile from '../../../../dist/images/slide1.png';

export default function Banner() {
    return (
        <div>
            <div className="banner-section">
                <div className="container" style={{position: 'relative' ,zIndex: '2'}}>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="pt-3 pt-lg-5 text-center">
                                <img className="banner-img img-fluid" src={profile} alt="Ikram Hossen"/>
                                <div className="banner-right-content text-center">
                                    <h1 className="banner-title mt-2 mt-md-3">Ikram Hossen</h1>
                                    <p className="banner-txt">I'm a Frontend Developer</p>
                                    <ul className="banner-social-icons">
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ikramhossen1392/"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ikramhossen13"><i className="fa fa-twitter"></i></a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ikram-hossen-550145173/"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ikram-hossen-550145173/"><i className="fa fa-github"></i></a></li>
                                    </ul>
                                    <a className="btn hireme-btn mt-2 mt-md-3 d-inline-block btn-lg px-5" href="/" role="button">Hire me</a>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
