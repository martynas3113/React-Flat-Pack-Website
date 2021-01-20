import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './joinus.css';
import { feature, feature2, feature3 } from './joinData';
import shortid from 'shortid';


class JoinUs extends Component {
    constructor(props){
        super(props)
        this.state ={
            correct: false,
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

    validateForm(name,email,number){
        const emailValid = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+.{0,1})+[^<>().,;:\s@"]{2,})$/;
        
        const nameString = name.split("");
    const nameLength = name.split("").length;

    //Validates name length, first uppercase letter
    if(nameLength < 2){
        this.setState({
            errorText: `Name can't be shorter than 2 symbols`,
            error: true
        })
    }

    else if( nameLength > 50){
        this.setState({
            errorText: `Name can't be longer than 50 symbols`,
            error: true
        })
    }

    else if(nameString[0]!== nameString[0].toUpperCase()){
        this.setState({
            errorText: `First name letter should be uppercase`,
            error: true
        })
    }
//Just basic Email validation, email validation should be made on server side too because You can easily turn off JavaScript off
    else if(!emailValid.test(email)){
        this.setState({
            errorText: `This email address is not valid`,
            error: true
        })
    }

    //Validate only 10 digits format. Without symbols
    else if(!number.match(/^\d{10}/)){
        this.setState({
            errorText: `Number does not match 10 digits format`,
            error: true
        })
}

    else{
        this.setState({
            error: false,
            correct: true
        })
    }
}

    submit(evt){
        evt.preventDefault();
        this.validateForm(this.state.fullname, this.state.email,this.state.number);    
    }
    render() {
        const correctShow =  this.state.correct ? 'block' : 'none';
        const errorShow = this.state.error ? 'block' : 'none';
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
                           <div style={{display: correctShow}} className="correct">Sending form...</div>
                           <div style={{display: errorShow}} className="error">{this.state.errorText}</div>
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
