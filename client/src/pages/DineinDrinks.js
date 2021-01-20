import React from "react";
import DrinkMenu from "../components/DrinkMenu/MenuList"
import HeaderTopbar from "../components/HeaderTopbar";
import Header from "../components/DineinHeader";

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