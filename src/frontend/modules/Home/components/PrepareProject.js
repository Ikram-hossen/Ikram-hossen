import React from 'react';
import serviceImg from '../../../../dist/images/how-i-work-img-3.png';
import arrowImg from '../../../../dist/images/arrow-img.png';

export default function PrepareProject() {
    return (
        <div>
            <div className="projectPrepare-section py-3 py-md-5">
                <div className="container my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title mb-3 mb-md-5 projectPrepare-title">I prepare your projects in 3 steps</h2>
                        </div>
                    </div>

                    <div className="row mt-3 mt-md-5">
                        <div className="col-md-4">
                            <div className="how-i-work-item">
                                <img src={arrowImg} alt="Arrrow image" className="arrow-dashed-img"/>
                                <div className="number">
                                    <span>01</span>
                                </div>
                                <div className="number-border"></div>
                                <div className="img">
                                    <img src={serviceImg} alt="Thinking" className="img-fluid" />
                                </div>
                                <div className="text">
                                    <h5>Thinking</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-i-work-item">
                                <img src={arrowImg} alt="Arrrow image" className="arrow-dashed-img"/>
                                <div className="number">
                                    <span>02</span>
                                </div>
                                <div className="number-border"></div>
                                <div className="img">
                                    <img src={serviceImg} alt="Thinking" className="img-fluid" />
                                </div>
                                <div className="text">
                                    <h5>Research</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-i-work-item">
                                <div className="number">
                                    <span>03</span>
                                </div>
                                <div className="number-border"></div>
                                <div className="img">
                                    <img src={serviceImg} alt="Thinking" className="img-fluid" />
                                </div>
                                <div className="text">
                                    <h5>Design</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
