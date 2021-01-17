import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import quotes from '../img/quotes.png';
import './reviews.css'

class Reviews extends Component {
    render() {
        return (
            <div className="reviews-back">
                <Container className="reviews-container">
                    <Row className="reviews-wrap">
                        <Col className="reviews">
                            <img src={quotes} alt="LOGO"/>
                            <div className="quotes">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab voluptatem vel nihil sint numquam.</p>
                            
                            <div className="web-site">
                            <div className="dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                                <h5>WebPage</h5>
                                <p>via WebPage</p>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Reviews
