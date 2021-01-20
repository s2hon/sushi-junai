import React from "react";
import ALaCarteMenu from "../components/ALaCarteMenu/MenuList"
import HeaderTopbar from "../components/HeaderTopbar";
import Header from "../components/DineinHeader";

function Alacarte(props) {
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <ALaCarteMenu />
        </>
    );
}

export default Alacarte;