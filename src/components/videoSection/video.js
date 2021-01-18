import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './video.css'

class Video extends Component {
    render() {
        return (
            <div className="video-back">
            <Container  className="video-container" >
                <Row className="video-wrap">
                    <Col lg={6} md={12} className="video-left">
                        <h3>Watch The Video</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quae optio atque tenetur quis consequatur culpa quos. Perferendis sint earum ratione dolore. Illum temporibus modi deserunt, corporis quae maxime quo fuga, natus, ea ullam deleniti nisi consequatur delectus quos distinctio!</p>
                    </Col>
                    <Col lg={6} md={12} className="video-right">
                    <iframe className="video" src="https://player.vimeo.com/video/102732914?title=0&amp;byline=0&amp;portrait=0&amp;color=11b1c2&amp;wmode=opaque" width={`${100}%`} height={300} frameBorder={0}  allowFullScreen="">
                        </iframe>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Video
