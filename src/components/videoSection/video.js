import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './video.css'

class Video extends Component {
    render() {
        return (
            <Container fluid className="video-container" >
                <Row className="video-wrap">
                    <Col md={{ span:3, offset: 3 }} className="video-left">
                        <h3>Watch The Video</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quae optio atque tenetur quis consequatur culpa quos. Perferendis sint earum ratione dolore. Illum temporibus modi deserunt, corporis quae maxime quo fuga, natus, ea ullam deleniti nisi consequatur delectus quos distinctio!</p>
                    </Col>
                    <Col md={{ span:3, offset: 0 }} className="video-right">
                    <iframe src="https://player.vimeo.com/video/102732914?title=0&amp;byline=0&amp;portrait=0&amp;color=11b1c2&amp;wmode=opaque" width={500} height={300} frameBorder={0}  allowfullscreen="">
                        </iframe>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Video
