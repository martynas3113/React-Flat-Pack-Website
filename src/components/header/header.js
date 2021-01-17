
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './header.css';
import logo from '../img/logo.png'

 class Header extends Component {
    render() {
        return (
            <div className="header-line">
            <Container  className="head-container">
               <Row  className="head-wrap">
                   <Col lg={6} md={6} sm={12} className="head-left">
                     <img src={logo} alt="LOGO"/>
                   </Col>
                   <Col md={6} sm={12} className="hamburger-container">
                   <div  className="hamburger"><i className="fas fa-bars"></i></div>
                   </Col>
                   <Col lg={6}  className="head-right">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Work</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li className="head-btn">
                            <a href="#">Buy Now</a>
                        </li>
                        
                   </Col>
               </Row>
            </Container>
            </div>

        )
    }
}

export default Header
