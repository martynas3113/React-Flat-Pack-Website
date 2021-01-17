import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './joinus.css';
import image from '../img/feature-1.png';

class JoinUs extends Component {
    render() {
        return (
            
            <Container  className="join-container">
                <Row className="join-wrap">
                    <Col lg={8} md={12}  className="join-left">
                        <div className="feature">
                            <div className="feature-img">
                                <img src={image} alt=""/>
                            </div>
                            <div className="feature-text">
                                <h3>Feature</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus!</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-img">
                                <img src={image} alt=""/>
                            </div>
                            <div className="feature-text">
                                <h3>Feature</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus!</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-img">
                                <img src={image} alt=""/>
                            </div>
                            <div className="feature-text">
                                <h3>Feature</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus!</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12}  className="join-right">
                        <div className="join-form-wrap">
                           <h3>Join Us Now</h3>
                           <br/>
                           <p>Lorem ipsum dolor sit.</p>
                           <br/>
                           <div className="join-form">
                                <input type="text" name="name" id="name" placeholder="Your Full Name"/>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                                <input type="text" name="number" id="number" placeholder="Your Phone Number"/>
                            </div>
                            <div className="join-btn">
                                <a href="#">Send Information</a>    
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default JoinUs
