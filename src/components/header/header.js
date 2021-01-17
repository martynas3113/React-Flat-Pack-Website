import  Button  from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './header.css';
import logo from '../img/logo.png'

 class Header extends Component {
    render() {
        return (
            <Container fluid className="head-container">
               <Row  classNam="head-wrap">
                   <Col className="head-left">
                     <img src={logo} alt="LOGO"/>
                   </Col>
                   <Col className="head-right">
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
        )
    }
}

export default Header
