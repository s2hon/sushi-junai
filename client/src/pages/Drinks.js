import React from "react";
import DrinkMenu from "../components/DrinkMenu/MenuList"
import Counter from "../components/Counter";

function Drinks(props) {
    return (
        <>
        <Counter/>
        <DrinkMenu />
        </>
        );
}

export default Drinks;