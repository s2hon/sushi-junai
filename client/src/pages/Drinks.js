import React from "react";
import DrinkMenu from "../components/DrinkMenu/MenuList";
import Header from "../components/Header";
import HeaderTopbar from "../components/HeaderTopbar";

function Drinks(props) {
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <DrinkMenu />
        </>
        );
}

export default Drinks;