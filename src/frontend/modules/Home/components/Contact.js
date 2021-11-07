import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="contact-section py-3 py-md-5">
                <div className="container my-3 my-md-5">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="section-title mb-3 mb-md-5">Get In Touch</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="body">
                                        <h5>Address</h5>
                                        <p>Golden Street, Shyamoli, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-info-item">
                                    <div className="icon">
                                        <span className="fas fa-envelope-open-text"></span>
                                    </div>
                                    <div className="body">
                                        <h5>E-Mail & Phone:</h5>
                                        <p className="m-0">ikram.codeware@gmail.com</p>
                                        <p className="m-0">+880 1813 871392</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="contact-form-wrap">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="contact-form-group">
                                                    <input type="text" className="form-control" name="contact_name" id="contactName" placeholder="Your Name *" autocomplete="off" />
                                                    <div className="form-validate-icons">
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="contact-form-group">
                                                    <input type="text" className="form-control" name="contact_email" id="contactEmail" placeholder="Your Email *" autocomplete="off" />
                                                    <div className="form-validate-icons">
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="contact-form-group">
                                                    <input type="text" className="form-control" name="contact_phone" id="contactPhone" placeholder="Your Phone*" autocomplete="off" />
                                                    <div className="form-validate-icons">
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="contact-form-group">
                                                    <input type="text" className="form-control" name="contact_name" id="contactName" placeholder="Subject Name*" autocomplete="off" />
                                                    <div className="form-validate-icons">
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="contact-form-group">
                                                    <textarea name="contact_message" id="contactMessage" className="form-control" placeholder="Your Message *" rows="6" autocomplete="off"></textarea>
                                                    <div className="form-validate-icons">
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button type="button" id="contactBtn" className="btn hireme-btn mt-2 mt-md-3 d-inline-block btn-lg px-5 ">
                                                    <span className="text">Send Message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}
export default Contact;
