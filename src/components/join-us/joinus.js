import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './joinus.css';
import { feature, feature2, feature3 } from './joinData';
import shortid from 'shortid';

class JoinUs extends Component {
    constructor(props){
        super(props)
        this.state ={
            error: false,
            errorText : '',
            features:[feature,feature2,feature3],
            fullname: '',
            email: '',
            number: ''
        }
        this.change=this.change.bind(this);
        this.submit=this.submit.bind(this);
    }

    change(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    submit(evt){
        evt.preventDefault();
        if(this.state.fullname.split("").length < 3){
            this.setState({errorText: 'NoNoNo'})
        }
        else{

            this.setState({errorText: ''})
        }
    }
    render() {
        return ( 
            <Container id="contact" className="join-container">
                <Row className="join-wrap">
                    <Col lg={8} md={12}  className="join-left">
                        {this.state.features.map(feature => <div key={shortid.generate()} className="feature">
                            <div className="feature-img">
                                <img src={feature.img} alt=""/>
                            </div>
                            <div className="feature-text">
                                <h3>{feature.title}</h3>
                                <p>{feature.subtitle}</p>
                            </div>
                        </div>)}
                    </Col>
                    <Col lg={4} md={12}  className="join-right">
                        <div className="join-form-wrap">
                           <h3>Join Us Now</h3>
                           <br/>
                           <p>Lorem ipsum dolor sit.</p>
                           <br/>
                           <div className="Error">{this.state.errorText}</div>
                           <form onSubmit={this.submit} className="join-form">
                                <input type="text" onChange={this.change} value={this.state.fullname} name="fullname" id="name" placeholder="Your Full Name"/>
                                <input type="email" onChange={this.change}  value={this.state.email} name="email" id="email" placeholder="Your Email"/>
                                <input type="text" onChange={this.change} value={this.state.number } name="number" id="number" placeholder="Your Phone Number"/>
                                <div className="join-btn">
                                <button>Send Information </button>   
                            </div>
                            </form>
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default JoinUs
