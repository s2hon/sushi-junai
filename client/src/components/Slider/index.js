import React from 'react';
import { Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Button from "../Button";
import Row from "../Row";
import Container from "../Container";
import Image from "../Image";
import OnlyOnce from "./icons8-number-1-50.png";
import './style.css';
import moment from 'moment';

const Slider = (props) => {

    function setTimer(e) {
        localStorage.setItem("timer", 7199);
        localStorage.setItem("date", moment().format('MMMM Do YYYY'));
    }
    
    return(
        <>
            <Container className="rules-container">
                <Row>
                    <div className="col-12">
                        <div className="rules-title">
                            <h1>All You Can Eat Rules</h1>
                            <h4>Please Read ALL rules before agreeing, or click "À la carte" to order individual items.</h4>
                        </div>
                    </div>
                </Row>
                <div className="rules-wrapper">
                    <Row>
                        <Flip triggerOnce delay={1000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                        
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #1</h2>
                                        <p>Absolutely NO SHARING between All you can eat and À LA CARTE customers.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={2000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #2</h2>
                                        <p>If ALL items ordered are not completely consumed, you may be charged À LA CARTE pricing.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={3000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                        <Image src={OnlyOnce} width="18" alt="onlyonce" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #3</h2>
                                        <p>Items marked with red text can only be ordered once.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={4000} direction="horizontal">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                        
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #4</h2>
                                        <p>Ordering time is limited to 2 Hours (maximum).</p>
                                    </div>
                                </div>
                            </div>
                            <Row className="rules-button">
                            <Link to={"/alacarte"}>
                                <Button type={"button"} btn={"btn btn1"}>Go to A La Carte</Button>
                            </Link>
                            <Link to={"/ayce"}>
                                <Button type={"button"} btn={"btn btn1"} function ={setTimer}>I AGREE</Button>
                            </Link>
                        </Row>
                        </Flip>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Slider;