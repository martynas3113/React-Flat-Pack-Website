import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-back">
                <Container className="footer-container">
                    <Row className="footer-wrap">
                        <Col lg={6} md={12} className="footer-copy">
                            <p>All right reserved Copyright © {new Date().getFullYear()} FLATPACK by <span>PixFort</span>  </p>
                        </Col>
                        <Col lg={6} md={12} className="footer-icons">
                            <a href="#">
                            <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                            <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                            <i class="fab fa-instagram"></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer
