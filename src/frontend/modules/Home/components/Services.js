import React from 'react';
import serviceImg from '../../../../dist/images/services-bg-img-1.jpg';

export default function Services() {
    return (
        <div>
            <div className="service-section py-3 py-md-5">
                <div className="container my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title mb-3 mb-md-5">My Services</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <img src={serviceImg} alt="Services" className="services-bg-img" />
                                <div className="body">
                                    <h4>01</h4>
                                    <h5>UI/UX Design</h5>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <img src={serviceImg} alt="Services" className="services-bg-img" />
                                <div className="body">
                                    <h4>02</h4>
                                    <h5>Web Design</h5>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <img src={serviceImg} alt="Services" className="services-bg-img" />
                                <div className="body">
                                    <h4>03</h4>
                                    <h5>Web Development</h5>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
