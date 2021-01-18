import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './joinus.css';
import image from '../img/feature-1.png';
import { feature, feature2, feature3 } from './joinData'

class JoinUs extends Component {
    constructor(props){
        super(props)
        this.state ={features:[feature,feature2,feature3]}
    }
    render() {
        return (
            
            <Container id="contact" className="join-container">
                <Row className="join-wrap">
                    <Col lg={8} md={12}  className="join-left">
                        {this.state.features.map(feature => <div className="feature">
                            <div className="feature-img">
                                <img src={feature.img} alt=""/>
                            </div>
                            <div className="feature-text">
                                <h3>{feature.title}</h3>
                                <p>{feature.subtitle}</p>
                            </div>
                        </div>)}
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
