import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/index";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Image from "../components/Image";
import Button from "../components/Button";
import data from "../db/store.json"

function Home(props) {
    return (
    <React.Fragment>
        <Container>
            <Row>
                {
                    data.map((data, idx) => {
                        return (
                            <Col size={"sm"} number={6}>
                                <Card key={idx} location={data.location} phone={data.phone} address={data.address}
                                mon={data.mon} tue={data.tue} wed={data.tue} thu={data.thu} fri={data.fri} sat={data.sat} sun={data.sun}>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                <Image src={"./assets/rest-img.JPG"} alt={"picture of sushi with drinks in background"} width="100%" />
            </Row>
            <Col size={"md"} number={6}>
                <Row><a href={"https://www.yelp.com/biz/sushi-junai-2-austin"}>
                    <Button type={"button"} btn={"btn btn-dark"}>Reservations</Button>
                </a>
                </Row>
                <Row>
                    <Link to={!state.userLoggedIn ? "/login": "/choice"}>
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
    </React.Fragment>);
}

export default Home;