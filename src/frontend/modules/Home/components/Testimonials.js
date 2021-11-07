import React from 'react';
import {Card} from 'react-bootstrap';
import client1 from '../../../../dist/images/client1.jpg';
import client2 from '../../../../dist/images/client2.jpg';
import client3 from '../../../../dist/images/client3.jpg';
import client4 from '../../../../dist/images/client4.jpg';
import client5 from '../../../../dist/images/client5.jpg';
import client6 from '../../../../dist/images/client6.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <div className="clients-section py-3 py-md-5">
                <div className="container my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title mb-3 mb-md-5">My Clients</h2>
                        </div>
                        <div className="col-md-12">
                            <Slider {...settings}>
                            <div>
                                    <Card className="client-card" style={{width:'95%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <div className="client-flex-div"> 
                                                <img className="client-img" src={client6} alt="Client 6"/>
                                                <div style={{width:'100%'}}>
                                                   <div className="review-flex">
                                                    <h3 className="client-name">jetnovo</h3>
                                                    <p className="ratings">
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                        <span className="rating-count">5</span>
                                                    </p>
                                                   </div>
                                                    <p className="client-country">Israel</p>
                                                   
                                                    <p>this seller is from the best freelancer in fiverr, Excellent service, Professional, courteous, personal attitude highly recommend it!</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="client-card" style={{width:'95%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <div className="client-flex-div"> 
                                                <img className="client-img" src={client2} alt="Client 2"/>
                                                <div style={{width:'100%'}}>
                                                   <div className="review-flex">
                                                    <h3 className="client-name">stevelegg</h3>
                                                    <p className="ratings">
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                        <span className="rating-count">5</span>
                                                    </p>
                                                   </div>
                                                    <p className="client-country">United States</p>
                                                   
                                                    <p>followed through and delivered on time. Understood what I wanted and created what I wanted to see.</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                <Card className="client-card" style={{width:'95%', margin: '0 auto'}}>
                                    <Card.Body>
                                        <div className="client-flex-div"> 
                                            <img className="client-img" src={client1} alt="Client 1"/>
                                            <div style={{width:'100%'}}>
                                               <div className="review-flex">
                                                <h3 className="client-name">tengsern</h3>
                                                <p className="ratings">
                                                    <span>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                    <span className="rating-count">5</span>
                                                </p>
                                               </div>
                                                <p className="client-country">Singapure</p>
                                               
                                                <p>ikram listens keep trying if it doesn't work and ensure delivery ! his perseverance really amazed me! A rare talent with kind heart. skillsets are easy to acquire, but not kind hearted soul. I am happy to meet him and got my work delivered in near perfect conditions. one of the best I met.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                                <div>
                                    <Card className="client-card" style={{width:'95%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <div className="client-flex-div"> 
                                                <img className="client-img" src={client3} alt="Client 2"/>
                                                <div style={{width:'100%'}}>
                                                   <div className="review-flex">
                                                    <h3 className="client-name">mistermark61</h3>
                                                    <p className="ratings">
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                        <span className="rating-count">5</span>
                                                    </p>
                                                   </div>
                                                    <p className="client-country">Japan</p>
                                                   
                                                    <p>Fantastic service! Look forward to doing business with you again, sir!</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="client-card" style={{width:'95%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <div className="client-flex-div"> 
                                                <img className="client-img" src={client4} alt="Client 4"/>
                                                <div style={{width:'100%'}}>
                                                   <div className="review-flex">
                                                    <h3 className="client-name">jack20130</h3>
                                                    <p className="ratings">
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                        <span className="rating-count">5</span>
                                                    </p>
                                                   </div>
                                                    <p className="client-country">United States</p>
                                                   
                                                    <p>Very good seller.</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="client-card" style={{width:'95%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <div className="client-flex-div"> 
                                                <img className="client-img" src={client5} alt="Client 5"/>
                                                <div style={{width:'100%'}}>
                                                   <div className="review-flex">
                                                    <h3 className="client-name">vicweb</h3>
                                                    <p className="ratings">
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                        <span className="rating-count">5</span>
                                                    </p>
                                                   </div>
                                                    <p className="client-country">Kenya</p>
                                                   
                                                    <p>Great job done...</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
