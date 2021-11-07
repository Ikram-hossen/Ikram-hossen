import React from 'react';
import { Link } from "react-router-dom";
import {Form, Row, Col, Button} from 'react-bootstrap';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoBgImg from '../../../dist/images/info-bg.jpg';

export default function AccountsInfo() {
    return (
        <div>
            <Header/>
            <section id="accounts-info" className="my-3 my-md-5">
                <div className="container-fluid  my-3 px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="accounts-form">
                                <h2 className="section-title">Account Info</h2>
                                <Form className="form-wrap mt-3 mt-md-5">
                                    <div className="formInput">
                                        <Row>
                                            <Form.Group as={Col} md={6} className="mb-md-4 mb-2" controlId="formGridCompanyName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text"  className="custom-form-control"/>
                                            </Form.Group>
                                            <Form.Group as={Col} md={6} className="mb-md-4 mb-2" controlId="formGridSiteUrl">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="text" className="custom-form-control"/>
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} as={Col} md={12} className="mb-md-3 mb-2" controlId="formGridCity">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control type="number" className="custom-form-control"/>
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} md={6} className="mb-md-4 mb-2" controlId="formGridCompanyName">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password"  className="custom-form-control"/>
                                            </Form.Group>
                                            <Form.Group as={Col} md={6} className="mb-md-4 mb-2" controlId="formGridSiteUrl">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" className="custom-form-control"/>
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} as={Col} xs={6} className="text-sm-end mt-3">
                                                <Link to="/company-info" className="custom-btn back-btn" type="button">Back</Link>
                                            </Form.Group>
                                            <Form.Group as={Col} as={Col} xs={6} className="text-sm-start mt-3">
                                                <Button className="custom-btn" type="button">Next</Button>
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
