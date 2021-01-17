import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './headlines.css'

class Headlines extends Component {
    render() {
        return (
            <div className="headlines-back">
            <Container  className="headlines-container">
                <Row className="headlines-wrap">
                    <Col lg={6} md={12} className="headline-left ">
                        <h3>First Headline Goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem nobis dolores repellendus itaque, vitae consequatur cupiditate ipsum dicta esse.</p>
                        <a href="#">Learn more</a>
                    </Col >
                    <Col lg={6} md={12} className="headline-right">
                        <h3>Second Headline Goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem nobis dolores repellendus itaque, vitae consequatur cupiditate ipsum dicta esse.</p>
                        <a href="#">Learn more</a>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Headlines
