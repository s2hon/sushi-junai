import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Col from "../components/Col";
import Image from "../components/Image";

function Home(props) {
    return (<>
    <Nav/>
        <Container>
            <Row>
                <Col size={"sm"} number={6}>
                <Card><ul>
                    <li>Location 1</li>
                    <li>Phone number</li>
                    <li>Address</li>
                    </ul>
                    </Card>
                </Col>
                <Col size={"sm"} number={6}>
                <Card>
                <ul>
                    <li>Location 2</li>
                    <li>Phone number</li>
                    <li>Address</li>
                    </ul>
                </Card>
                </Col>
                </Row>
                <Row>
                    <Col size={"md"} number={12}>
                <Image src={"./assests/logo.png"} alt={"fish logo"}/>
                </Col>
            </Row>
            <Col size={"md"} number={6}>
                {/* button component */}
            </Col>
        </Container>
        <Footer />
    </>);
}

export default Home;