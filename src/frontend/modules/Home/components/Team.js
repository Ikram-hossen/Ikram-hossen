import React from 'react';
import {Card} from 'react-bootstrap';
import testImg1 from '../../../../dist/images/team1.jpg';
import testImg2 from '../../../../dist/images/team2.jpg';
import testImg3 from '../../../../dist/images/team3.jpg';
import testImg5 from '../../../../dist/images/team5.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Team() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <section className="testimonial-section py-3 py-md-5">
            <div className="container my-3 my-md-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title mb-3 mb-md-5">My Team</h2>
                    </div>
                    <div className="col-md-12">
                        <Slider {...settings}>
                            <div>
                                <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                    <Card.Body>
                                        <div className="testimonial-img-div"> 
                                            <img className="testimonial-img" src={testImg1} alt="Testimonial 1"/>
                                            <div>
                                                <h3 className="author-name">Ikram Hossen</h3>
                                                <p className="author-designation">Frontend Developer</p>
                                            </div>
                                            <ul className="team-social-icons">
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ikramhossen1392/"><i className="fa fa-facebook-f"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ikramhossen13"><i className="fa fa-twitter"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ikram-hossen-550145173/"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                    <Card.Body>
                                        <div className="testimonial-img-div"> 
                                            <img className="testimonial-img" src={testImg2} alt="Testimonial 1"/>
                                            <div>
                                                <h3 className="author-name">MD Shorov Abedin</h3>
                                                <p className="author-designation">Wordpress Developer</p>
                                            </div>
                                            <ul className="team-social-icons">
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ovick2024/"><i className="fa fa-facebook-f"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/iamovk"><i className="fa fa-twitter"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/iamovk1997/"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                    <Card.Body>
                                        <div className="testimonial-img-div"> 
                                            <img className="testimonial-img" src={testImg3} alt="Testimonial 1"/>
                                            <div>
                                                <h3 className="author-name">Muhammad Emon</h3>
                                                <p className="author-designation">Android Developer</p>
                                            </div>
                                            <ul className="team-social-icons">
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/emon.who/"><i className="fa fa-facebook-f"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/md-emon-hosen-86b4a221b/"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                    <Card.Body>
                                        <div className="testimonial-img-div"> 
                                            <img className="testimonial-img" src={testImg5} alt="Testimonial 1"/>
                                            <div>
                                                <h3 className="author-name">Hammad Rahman</h3>
                                                <p className="author-designation">Web Designer</p>
                                            </div>
                                            <ul className="team-social-icons">
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/hammadcse99"><i className="fa fa-facebook-f"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/HammadR45132504"><i className="fa fa-twitter"></i></a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hammad-rahman-7a21281a3/"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
