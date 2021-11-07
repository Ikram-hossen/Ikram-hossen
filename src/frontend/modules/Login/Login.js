import React from 'react';
import { Link } from "react-router-dom";
import {Form, Row, Col, Button} from 'react-bootstrap';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoBgImg from '../../../dist/images/info-bg.jpg';

export default function Login() {
    return (
        <div>
            <Header/>
            <section className="my-3 my-md-5">
                <div className="container-fluid  my-3 px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-form">
                                <h2 className="section-title">Log In</h2>
                                <Form className="form-wrap mt-3 mt-md-5">
                                    <div className="formInput">
                                        <Row>
                                            <Form.Group as={Col} md={12} className="mb-md-4 mb-2" controlId="formGridCompanyName">
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control type="text"  className="custom-form-control"/>
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} as={Col} md={12} className="mb-md-3 mb-2" controlId="formGridCity">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" className="custom-form-control"/>
                                            </Form.Group>
                                            <Link to="/" style={{color:'#E92236'}}>Forgot Password</Link>
                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} as={Col} xs={12} className="text-center mt-3">
                                                <Button className="custom-btn" type="button">Next</Button>
                                            </Form.Group>
                                            <div className="text-center mt-3">
                                                <span className="me-2">Don't have an account?</span> 
                                                <Link to="/sign-up" style={{color:'#E92236'}}>Sign up</Link>
                                            </div>
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
