import React from "react";
import Container from "../components/Container";
import Slider from "../components/Rules/index";
import HeaderTopbar from "../components/HeaderTopbar";
import Header from "../components/DineinHeader";

function Rules(props) {
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <Container>
            <div className="menu-container">
                <Slider/>
                </div>
            </Container>
        </>
    );
}

export default Rules;