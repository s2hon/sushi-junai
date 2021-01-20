import React from "react";
import LunchMenu from "../components/LunchMenu/MenuList"
import HeaderTopbar from "../components/HeaderTopbar";
import Header from "../components/DineinHeader";

function Lunch() {
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <LunchMenu />
        </>
    );
}

export default Lunch;