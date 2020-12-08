import React from "react";
import Container from "../components/Container";
import Slider from "../components/Rules/index";
import Counter from "../components/Counter";

function Rules(props) {
    return (
        <>
        <Counter/>
        <Container>
        <div className="menu-container">
            <Slider/>
            </div>
        </Container>
        </>
    );
}

export default Rules;