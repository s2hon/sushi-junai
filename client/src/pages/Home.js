import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Col from "../components/Col";
import Image from "../components/Image";
import Button from "../components/Button";


function Home(props) {
    return (<>
        <Nav />
        <Container>
            <Row>
                <Col size={"sm"} number={6}>
                    <Card>
                        <p>Sushi Junai 1</p>
                        <p>1612 Lavaca St, Austin, TX 78701</p>
                        <p>(512)322-2428</p>
                        <p>
                            <li>Monday 11AM–10PM</li>
                            <li>Tuesday 11AM–10PM</li>
                            <li>Wednesday 11AM–10PM</li>
                            <li>Thursday 11AM–10PM</li>
                            <li>Friday 11AM–10PM</li>
                            <li>Saturday 11AM–10PM</li>
                            <li>Sunday Closed</li>
                        </p>
                    </Card>
                </Col>
                <Col size={"sm"} number={6}>
                    <Card>

                        <p>Sushi Junai 2</p>
                        <p>2500 W Parmer Ln #100, Austin, TX 78727</p>
                        <p>(512)716-3922</p>
                        <p>
                            <li>Monday 11AM–10PM</li>
                            <li>Tuesday	11AM–10PM</li>
                            <li>Wednesday 11AM–10PM</li>
                            <li>Thursday 11AM–10PM</li>
                            <li>Friday 11AM–10PM</li>
                            <li>Saturday 11AM–10:30PM</li>
                            <li>Sunday 5–10PM</li>
                        </p>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Image src={"./assets/rest-img.JPG"} alt={"picture of sushi with drinks in background"} />
            </Row>
            <Col size={"md"} number={6}>
                <Row><a href={"https://www.yelp.com/biz/sushi-junai-2-austin"}>
                    <Button type={"button"} btn={"btn btn-dark"}>Reservations</Button>
                </a>
                </Row>
                <Row>
                    <Link to={"/login"}>
                        <Button type={"button"} btn={"btn btn-dark"}>Dine In</Button>
                    </Link>
                </Row>
                <Row>
                    <Link to={"/alacarte"}>
                        <Button type={"button"} btn={"btn btn-dark"}>Carry Out</Button>
                    </Link>
                </Row>
            </Col>
        </Container>
        <Footer />
    </>);
}

export default Home;