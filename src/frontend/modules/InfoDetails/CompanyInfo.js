import React from 'react';
import { Link } from "react-router-dom";
import {Form, Row, Col} from 'react-bootstrap';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoBgImg from '../../../dist/images/info-bg.jpg';

export default function CompanyInfo() {
    return (
        <div>
            <Header/>
            <section id="company-info" className="my-3 my-md-5">
                <div className="container-fluid  my-3 px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="company-form">
                                <h2 className="section-title">Company Info</h2>
                                <Form className="form-wrap mt-3 mt-md-5">
                                    <div className="formInput">
                                        <Row>
                                            <Form.Group as={Col} md={6} className="mb-md-4 mb-2" controlId="formGridCompanyName">
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control type="text"  className="custom-form-control"/>
                                            </Form.Group>
                                            <Form.Group as={Col} md={6} className="mb-md-4 mb-2" controlId="formGridSiteUrl">
                                                <Form.Label>Site URL(Facebook, Web)</Form.Label>
                                                <Form.Control type="text" className="custom-form-control"/>
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} as={Col} md={6} className="mb-md-3 mb-2" controlId="formGridDivision">
                                                <Form.Label>Divisin</Form.Label>
                                                <Form.Select aria-label="Default select example" className="custom-form-control">
                                                    <option>Select Divisin</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} as={Col} md={6} className="mb-md-3 mb-2" controlId="formGridDistrict">
                                                <Form.Label>District</Form.Label>
                                                <Form.Select aria-label="Default select example" className="custom-form-control">
                                                    <option>Select District</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                        <Form.Group as={Col} as={Col} md={12} className="mb-md-3 mb-2" controlId="formGridAddress">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control className="custom-form-control" as="textarea" rows={2} />
                                        </Form.Group>
                                    </Row>
                                        <Row>
                                            <Form.Group as={Col} as={Col} md={12} className="text-center mt-3">
                                                <Link to="/accounts-info" className="custom-btn" type="button">Next</Link>
                                            </Form.Group>
                                        </Row>
                                        
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="info-right-img-div">
                                <img className="info-right-img img-fluid" src={InfoBgImg} alt="Service"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
