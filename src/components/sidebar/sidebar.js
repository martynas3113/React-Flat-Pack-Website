import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './sidebar.css';

class Sidebar extends Component {
    constructor(props){
        super(props)

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
                
            // </div>
        )
    }
}

export default Sidebar
