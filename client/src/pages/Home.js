import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function Home(props) {
    return (<>
    <Nav/>
        <Container>
            <Row>
                <Counter></Counter>
                <Card />
            </Row>
        </Container>
        <Footer />
    </>);
}

export default Home;