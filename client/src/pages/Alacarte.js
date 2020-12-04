import React from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Container from "../components/Container";

function Alacarte(props) {
    return (
        <>
            <Container>
            <h1>Coming Soon</h1>
         <Image src={"./assets/019-salmon.png"} alt={"picture of sushi"}/>
        </Container>
            <Footer />
        </>
        );
}

export default Alacarte;