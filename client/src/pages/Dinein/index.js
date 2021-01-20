import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { Row, Col } from "reactstrap";
import Button from "../../components/Button";
import Lunch from "./LunchButton";
import moment from "moment";
import HeaderTopbar from "../../components/HeaderTopbar";
import Header from "../../components/DineinHeader";

const Dinein = () => {
    const currentHour = moment().format("HH");
    const currentDay = moment().day();

    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <Container>
                <div className="menu-container">
                    {currentHour<15 && (currentDay % 6 !== 0) ? <Lunch /> : ""}
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{ marginTop: 50}}>
                            <Link to="/drinks">
                                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h1 style={{ color: "#E6D9D3" }}><strong>Drinks</strong></h1><h3>Why limit happy to an hour?</h3>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{ marginTop: 50, marginBottom: 50 }}>
                            
                            <Link to="/rules">
                                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h1 style={{ color: "#E6D9D3" }}><strong>All You Can Eat</strong></h1>
                                <h3>Click me to access sushi cart!</h3>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{ marginBottom: 50 }}>
                            <Link to="/alacarte">
                                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h1 style={{ color: "#E6D9D3" }}><strong>À La Carte</strong></h1><h3>Get the items you love!</h3>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>)

}

export default Dinein;