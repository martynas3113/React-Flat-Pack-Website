import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './hero.css'

class Hero extends Component {
    render() {
        return (
            <Container fluid className="hero-container">
                <Row className="hero-wrap">
                    <Col className="hero-content">
                        <div className="title">
                        <h1>New Elegant design</h1>
                        </div>
                        <p className="hero-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, qui.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                        <div className="hero-btn"><a href="#">Get a free quote</a></div>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Hero
