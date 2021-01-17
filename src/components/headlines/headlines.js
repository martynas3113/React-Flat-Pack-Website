import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './headlines.css'

class Headlines extends Component {
    render() {
        return (
            <Container fluid className="headlines-container">
                <Row className="headlines-wrap">
                    <Col md={{ span:3, offset: 3 }}  className="headline-left ">
                        <h3>First Headline Goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem nobis dolores repellendus itaque, vitae consequatur cupiditate ipsum dicta esse.</p>
                        <a href="#">Learn more</a>
                    </Col >
                    <Col md={{span:3, offset: 1}}  className="headline-right">
                        <h3>Second Headline Goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem nobis dolores repellendus itaque, vitae consequatur cupiditate ipsum dicta esse.</p>
                        <a href="#">Learn more</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Headlines
