import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logos1 from '../img/logos-1.png';
import logos2 from '../img/logos-2.png';
import './logos.css'


class Logos extends Component {
    render() {
        return (
            <Container className="logos-container">
                <Row className="logos-wrap">
                  <Col lg={6} md={12} className="logos-left">
                    <img src={logos1} alt=""/>
                  </Col>
                  <Col lg={6} md={12} className="logos-right">
                    <img src={logos2} alt=""/>
                  </Col>  
                </Row>
            </Container>
        )
    }
}

export default Logos
