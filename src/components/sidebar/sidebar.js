import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './sidebar.css';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from'react-scroll';

class Sidebar extends Component {
    constructor(props){
        super(props)

    }

    scrollToTop(){
        scroll.scrollToTop();
     }
    render() {
        const elemOpacity = this.props.isOpen ? 1 : 0;
        const marTop = this.props.isOpen ? 0 : -100;
        return (
            // <div className="sidebar-back">
                <Container fluid style={{opacity: elemOpacity, top:`${marTop}%` }} className="sidebar-container">
                    <Row className="sidebar-wrapper">
                        <div className="sidebar-close"><i onClick={this.props.click} class="fas fa-times"></i></div>
                        <Col className="sidebar-menu">
                        <li>
                            <Link onClick={this.scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to="work" smooth={true} duration={500}>Work</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} offset={-200} duration={500}>Contact Us</Link>
                        </li>
                        <li className="head-btn">
                            <a href="#">Buy Now</a>
                        </li>
                        </Col>
                    </Row>
                </Container>
                
            // </div>
        )
    }
}

export default Sidebar
