import React from 'react'
import pp3 from '../../../../dist/images/mypp.jpg';
const Portfolio = () => {
    return (
        <section className="portfolio-section py-3 py-md-5">
            <div className="container my-3 my-md-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">Portfolio</h2>	                
                    </div>
                </div>
                <div className="row mt-3 mt-md-5">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-porfolio-item">
                            <img src={pp3} alt="portfolio" className="img-fluid"/>         
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-porfolio-item">
                            <img src={pp3} alt="portfolio" className="img-fluid"/>         
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-porfolio-item">
                            <img src={pp3} alt="portfolio" className="img-fluid"/>         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;