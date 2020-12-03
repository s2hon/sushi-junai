import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "../components/Image";
import Container from "../components/Container";

function Alacarte(props) {
    return (
        <>
        <Nav/>
        <Container>
            <h1>Coming Soon</h1>
            <Image src={"./assets/019-salmon.png"} alt={"picture of sushi"} width="100%"/>
        </Container>
            <Footer />
        </>
        );
}

export default Alacarte;