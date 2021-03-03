import React from "react";
import StaticMenu from "../components/AyceMenu/StaticMenuList";
import Header from "../components/Header";
import HeaderTopbar from "../components/HeaderTopbar";

function StaticAYCEMenu() {
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <StaticMenu />
        </>
        );
}

export default StaticAYCEMenu;