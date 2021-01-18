
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './header.css';
import logo from '../img/logo.png'
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-scroll';


 class Header extends Component {
     constructor(props){
         super(props)
         this.state = { isOpen: false }
         this.openSide = this.openSide.bind(this);
     }

     openSide(){
         this.setState(curState => ({
             isOpen: (curState.isOpen === false ? true : false)
         }))
     }

    render() {
        return (
            <div className="header-line">
            <Container  className="head-container">
               <Row  className="head-wrap">
                   <Col lg={6} md={6} sm={12} className="head-left">
                     <img src={logo} alt="LOGO"/>
                   </Col>
                   <Col md={6} sm={12} className="hamburger-container">
                   <div className="hamburger"><i onClick={this.openSide} className="fas fa-bars"></i></div>
                   <Sidebar click={() => this.openSide()} isOpen={this.state.isOpen} />
                   </Col>
                   <Col lg={6}  className="head-right">
                        <li>
                            <Link>Home</Link>
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
            </div>

        )
    }
}

export default Header
