import React from "react";
import Container from "../components/Container";
import Slider from "../components/Rules/index";
import Counter from "../components/Counter";

function Rules(props) {
    return (
        <>
        <Counter/>
        <Container>
            <Slider/>
        </Container>
        </>
    );
}

export default Rules;