import React from "react";
import Nav from "../components/Nav";
import Counter from "../components/Counter";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";



function Menu(props) {
    return (
        <>
    <Nav/>
    <Container>
    <Row>
     <Counter></Counter>
     </Row>
     </Container>
     <Footer/>
     </>
    );
}

export default Menu;