import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import quotes from '../img/quotes.png';
import './reviews.css';
import { reviewsData } from './reviewsData';

class Reviews extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            review: reviewsData.reviews,
            web: reviewsData.webpage,
            via: reviewsData.via
        }
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
          let currentId = this.state.index;
          this.setState({ index: currentId + 1 });
          if(this.state.index >= this.state.web.length){
            this.setState({ index: 0 });
          }
        }, 5000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timeout);
      }   

    render() {
        let change = this.state.index;
        return (
            <div className="reviews-back">
                <Container className="reviews-container">
                    <Row className="reviews-wrap">
                        <Col className="reviews">
                            <img src={quotes} alt="LOGO"/>
                            <div className="quotes">
                            <p>{this.state.review[change]}</p>
                            <div className="web-site">
                            <div className="dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                                <h5>{this.state.web[change]}</h5>
                                <p>{this.state.via[change]}</p>
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
