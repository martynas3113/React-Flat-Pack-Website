import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './testimonials.css';
import { testimData,testimData2,testimData3 } from './data.js';

class Testimonials extends Component {
    constructor(props){
        super(props)
        this.state ={data: [testimData,testimData2,testimData3]}
    }
    render() {
        return (
            <Container id="work" className="testim-container">
                <Row className="testim-wrap">
                    {this.state.data.map(card =><Col lg={4} md={12}  className="testim-card">
                       <div className="test-img">
                           <img src={card.img} alt=""/>
                       </div>
                       <div className="test-text">
                            <h4>{card.title}</h4>
                            <p>{card.subtitle}<br/> consectetur adipisicing elit. Optio, voluptas.</p></div>
                       <div className="test-btn"><span>Join Now</span></div> 
                    </Col>  )}       
                </Row>
            </Container>
        )
    }
}

export default Testimonials
