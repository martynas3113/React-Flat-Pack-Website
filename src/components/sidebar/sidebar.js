import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './sidebar.css';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from'react-scroll';

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop(){
    scroll.scrollToTop();
    }
    

    render() {
        const toggleSide = this.props.click;
        const elemOpacity = this.props.isOpen ? 1 : 0;
        const marTop = this.props.isOpen ? 0 : -100;
        return (
                <Container fluid style={{opacity: elemOpacity, top:`${marTop}%` }} className="sidebar-container">
                    <Row className="sidebar-wrapper">
                        <div className="sidebar-close"><i onClick={toggleSide} className="fas fa-times"></i></div>
                        <Col className="sidebar-menu">
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={toggleSide}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={toggleSide} to="work" smooth={true} duration={500}>Work</Link>
                        </li>
                        <li>
                            <Link onClick={toggleSide} to="contact" smooth={true} offset={-200} duration={500}>Contact Us</Link>
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

export default Sidebar
