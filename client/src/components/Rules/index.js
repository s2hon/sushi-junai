import React from 'react';
import { Flip } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Button from "../Button";
import Row from "../Row";
import Container from "../Container";
import Image from "../Image";
import moment from 'moment';
import Lunch from "./LunchRules"
import SoySauce from "./images/soy-sauce.png";
import Noodles from "./images/icons8-noodles-100.png";
import SalmonSushi from "./images/icons8-salmon-sushi-100.png";
import Maneki from "./images/icons8-maneki-144.png";
import './style.css';


const Slider = (props) => {
    const currentHour = moment().format("HH");

    function setTimer(e) {
        if (localStorage.getItem("endtime") === null) {
            if (currentHour < 15){
                let endtime = moment().add(70, "m").format("MMMM Do YYYY HH:mm:ss");
                localStorage.setItem("endtime", endtime);
                localStorage.setItem("date", moment().format('MMMM Do YYYY'));
            } else {
                let endtime = moment().add(100, 'm').format("MMMM Do YYYY HH:mm:ss");
                localStorage.setItem("endtime", endtime);
                localStorage.setItem("date", moment().format('MMMM Do YYYY'));
            }
        }
    }

    return (
        <>
            <Container className="rules-container">
                <Row>
                    <div className="col-12">
                        <div className="rules-title">
                            <h1>All You Can Eat Rules</h1>
                            {currentHour<15 ? <Lunch /> : ""}
                            <h2>Dinner (All Day): time limit 90 min for $32.95</h2>
                            <h3>for Kid's 2 to 7yrs: $15.95</h3>
                            <hr />
                            <h4>Scroll to the bottom and click "I Agree" to access your sushi tracker.</h4>
                        </div>
                    </div>
                </Row>
                <div className="rules-wrapper">
                    <Row>
                        <Flip triggerOnce delay={0} direction="horizontal">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    <Image src={SalmonSushi} width="40px" alt="SalmonSushi" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #1</h2>
                                        <p>Absolutely NO SHARING between all you can eat and a la carte customers.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={1000} direction="horizontal">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                    <Image src={Noodles} width="40px" alt="Noodles" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #2</h2>
                                        <p>If you don't eat ALL of the items you order, you may be charged À LA CARTE pricing for them.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={1750} direction="horizontal">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon">
                                        <Image src={SoySauce} width="40px" alt="SoySauce" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>Rule #3</h2>
                                        <p>Item in <span style={{color: "#FF0000"}}>RED</span> can only be ordered once per person.</p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip triggerOnce delay={2000} direction="horizontal">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 custom-grid">
                                <div className="rules-item">
                                    <div className="rule-icon" style={{background: "pink"}}>
                                        <Image src={Maneki} width="40px" alt="SoySauce" />
                                    </div>
                                    <div className="rule-content">
                                        <h2>IMPORTANT</h2>
                                        <p>This is just a interactive menu to keep track of your orders. <span style={{color: "#FF0000"}}>YOU MUST ORDER WITH A WAIT STAFF!</span></p>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                    </Row>
                    <Flip triggerOnce delay={2000} direction="horizontal">
                        <Row className="rules-button">
                            <Link to={"/alacarte"}>
                                <Button type={"button"} btn={"btn btn2"}>Go to A La Carte</Button>
                            </Link>
                            <Link className="active" to={"/ayce"}>
                                <Button type={"button"} btn={"btn btn1"} function={setTimer}>I AGREE</Button>
                            </Link>
                        </Row>
                    </Flip>
                </div>
            </Container>
        </>
    )
}

export default Slider;