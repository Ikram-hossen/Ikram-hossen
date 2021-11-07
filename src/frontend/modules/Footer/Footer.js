import React from 'react';
import { Link } from "react-router-dom";
import footerLogo from '../../../dist/images/footer-logo.png';


const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer-container">
                <div className="footer-top">  
                    <div className="row">
                        <div className="col-md-5">
                            <div className="footer-widget">
                                <h3 class="h3-first-child">About me </h3>
                                <Link to="/"><img className="mb-2" src={footerLogo} alt="Ikram" /></Link>
                                <p className="footer-text pe-md-5">
                                    It is a long established fact that a reader will be 
                                    distracted by the readable content..
                                </p>
                                <ul className="footer-social d-flex align-items-center">
                                    <li><a target="_blank" href="https://www.facebook.com/ikramhossen1392/"><i className="fa fa-facebook-f"></i></a></li>
                                    <li><a target="_blank" href="https://twitter.com/ikramhossen13"><i className="fa fa-twitter"></i></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/ikram-hossen-550145173/"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a target="_blank" href="https://github.com/Ikram-hossen"><i className="fab fa-github"></i></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/channel/UCuB0evRETixJxzSPZZFdleQ"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3 className="">Quick Links</h3>
                                <ul className="footer-link">
                                    <li><Link to="/">My Team</Link></li>
                                    <li><Link to="/">My Services</Link></li>
                                    <li><Link to="/">My Resume</Link></li>
                                    <li><Link to="/">Get in Touch</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h3>Contact Info</h3>
                                <div className="footer-address">
                                    <h6 className="footer-sub-title">Address</h6>
                                    <p className="mt-0 mb-2 pb-2 border-bottom">Golden Street, Shyamoli, Dhaka, Bangladesh</p>
                                    <h6 className="footer-sub-title">Phone & E-mail</h6>
                                    <p className="m-0">+880 1813 871392</p>
                                    <p className="m-0">ikram.codeware@gmail.com</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright &copy; 2021 Ikram. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
