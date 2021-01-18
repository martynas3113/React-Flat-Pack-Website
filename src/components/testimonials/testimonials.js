import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from '../img/service-2.png';
import './testimonials.css'

class Testimonials extends Component {
    render() {
        return (
            <Container id="work" className="testim-container">
                <Row className="testim-wrap">
                    <Col lg={4} md={12}  className="testim-card">
                       <div className="test-img">
                           <img src={image} alt=""/>
                       </div>
                       <div className="test-text">
                            <h4>Fitness Activities</h4>
                            <p>Lorem ipsum, dolor sit amet<br/> consectetur adipisicing elit. Optio, voluptas.</p></div>
                       <div className="test-btn"><span>Join Now</span></div> 
                    </Col>
                    <Col lg={4} md={12} className="testim-card">
                       <div className="test-img">
                           <img src={image} alt=""/>
                       </div>
                       <div className="test-text">
                            <h4>Fitness Activities</h4>
                            <p>Lorem ipsum, dolor sit amet<br/> consectetur adipisicing elit. Optio, voluptas.</p>
                       </div>
                       <div className="test-btn"><span>Join Now</span></div> 
                    </Col>
                    <Col lg={4} md={12} className="testim-card">
                       <div className="test-img">
                           <img src={image} alt=""/>
                       </div>
                       <div className="test-text">
                           <h4>Fitness Activities</h4>
                            <p>Lorem ipsum, dolor sit amet<br/> consectetur adipisicing elit. Optio, voluptas.</p></div>
                       <div className="test-btn"><span>Join Now</span></div> 
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default Testimonials
